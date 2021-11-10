const User = require("../models/User");
// var popup = require("popups");
const alert = require("alert");

module.exports.create = function (req, res) {
  console.log(req.body);
  if (req.body.password != req.body.confirmPassword) {
    alert("Password doennot match");
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          // popup.alert({
          //   content: err,
          // });
          alert("Error", err);
          return;
        }

        return res.redirect("/login");
      });
    } else {
      return res.redirect("back");
    }
  });
};

module.exports.register = function (req, res) {
  return res.render("register", {
    title: "Register",
  });
};
