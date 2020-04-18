const amqp = require("amqplib/callback_api");

const crawlProduct = (url) => {
  return new Promise((resolve, reject) => {
    amqp.connect("amqp://localhost", function (err, connection) {
      connection.createChannel(function (err, channel) {
        const q = "urlQueue";

        channel.assertQueue(q, { durable: false });
        channel.assertQueue("result", { durable: false });
        channel.sendToQueue(q, new Buffer(url));
        console.log("Sent " + url);
        channel.consume(
          "result",
          (message) => {
            const product = JSON.parse(message.content.toString());
            connection.close();
            resolve(product);
          },
          { noAck: true }
        );
      });
    });
  });
};

module.exports = {
  crawlProduct,
};
