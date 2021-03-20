var express = require("express");
var router = express.Router();

const messages = [
	{
		text:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		user: "W_Shakespeare",
		added: new Date(),
	},
	{
		text: "Hi there!",
		user: "Deckard82",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "martin",
		added: new Date(),
	},
];

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Pinboard", messages: messages });
});

/* GET new message page. */
router.get("/new", function (req, res, next) {
	res.render("form", { title: "Pinboard" });
});

/* POST new message. */
router.post("/new", (req, res) => {
	let username;
	if (req.body.username == "") {
		username = "Anonymous";
	} else {
		username = req.body.username;
	}
	if (req.body.msg != "") {
		messages.unshift({
			text: req.body.msg,
			user: username,
			added: new Date(),
		});
	}
	res.redirect("/");
});

module.exports = router;
