const services = require('../services/service');

const sendHomePage = (req, res) => {
  return res.send(`<h1>Hello!</h1>`);
}

const getProDuctInfo = async (req, res) => {
  const urls = req.body.urls.match(/https:\/\/shopee.vn\S+/gi);
  const result = urls.map(url => await services.crawlShopee(url));
  console.log(result);
  return res.send(`Wait`)
}

module.exports = {
  sendHomePage: sendHomePage,
  getProDuctInfo: getProDuctInfo
}
