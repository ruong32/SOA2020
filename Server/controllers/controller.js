const sendHomePage = (req, res) => {
  return res.send(`<h1>Hello!</h1>`);
}

module.exports = {
  sendHomePage: sendHomePage
}
