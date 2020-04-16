const amqp = require('amqplib/callback_api');

const crawlShopee = url => {
  return new Promise((resolve, reject) => {
    amqp.connect('amqp://localhost', function(err, connection) {
    connection.createChannel(function(err, channel) {
      const q = 'shopeeUrl';

      channel.assertQueue(q, {durable: false});
      channel.assertQueue("result", {durable: false});
      channel.sendToQueue(q, new Buffer(url));
      console.log("Sent "+urlString);
      channel.consume('result', message => {
        console.log("[x] send", message.content.toString());
        resolve(message.content.toString());
      })
    });
  });
  });
}

module.exports = {
  crawlShopee: crawlShopee
}
