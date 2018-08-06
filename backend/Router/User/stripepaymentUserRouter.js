//STRIPE:
const app = require("express")();
const { SECRET_KEY } = require("./config");
const stripe = require("stripe")(SECRET_KEY);

app.use(require("body-parser").text());

app.route("/").post( async (req, res) => {
    try {
      let { status } = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({ status });
    } catch (err) {
      res.status(500).end();
    }
})

module.exports = app;
