const request = require('request');
const cheerio = require('cheerio');
const amqp = require('amqplib/callback_api');
const fs = require('fs');

amqp.connect('amqp://localhost', function(err, connect) {
  connect.createChannel(function(err, channel) {
		channel.assertQueue('shopeeUrl', {durable: false});
		channel.assertQueue('result',{durable: false});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C");
    channel.consume('shopeeUrl', function(msg) {
      console.log(" [x] worker Received %s", msg.content.toString());
      var url = msg.content.toString()
      request(url, (error, response, html) => {
        if(!error){
          // fs.writeFile('shopee.html', html, 'utf-8', () => {});
          const $ = cheerio.load(html);
          let product = {
            name: $("meta[property='og:title']").attr("content"),
            price: $("meta[itemprop='price']").attr("content"),
            rating: $("meta[itemprop='ratingValue']").attr("content"),
            image: $("#product-magiczoom").attr("data-zoom-image"),
            seller: $(".current-seller span").text(),
          };
          let description = "";
          $("div[class='top-feature-item bullet-wrap']").children('p').each(function(i, e){description += `${$(e).text()}\n`});
          product.description = description;
          // console.log(product);
          channel.sendToQueue('result',new Buffer.from(JSON.stringify(product)));
        }
      });
		}, {noAck: true});
  });
});
