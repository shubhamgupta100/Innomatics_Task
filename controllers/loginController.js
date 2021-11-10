const User = require("../models/User");
const alert = require("alert");

module.exports.createSession = function (req, res) {
  // find the user
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      alert("Eroor in sign in");
      console.log("Eroor in sign in");
      return;
    }
    if (user) {
      if (user.password != req.body.password) {
        return res.redirect("back");
      }

      console.log("Loggin successfully");
      return res.redirect("/");
    } else {
      return res.redirect("back");
    }
  });
};

// get

module.exports.login = function (req, res) {
  return res.render("login", {
    title: "Login",
  });
};
