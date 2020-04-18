const services = require("../services/service");

const sendHomePage = (req, res) => {
  return res.send(`<h1>Hello!</h1>`);
};

const getProDuctInfo = async (req, res) => {
  const urls = req.body.urls.match(/https:\/\/tiki.vn\S+/gi);
  const result = [];
  for (let i = 0; i < urls.length; i++) {
    const item = await services.crawlProduct(urls[i]);
    result.push(item);
  }
  return res.json(result);
};

module.exports = {
  sendHomePage: sendHomePage,
  getProDuctInfo: getProDuctInfo,
};
