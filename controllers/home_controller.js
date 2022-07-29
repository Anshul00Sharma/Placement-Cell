module.exports.home = function (req, res) {
  // home page renderings
  return res.render("home", {
    title: "Home",
  });
};
