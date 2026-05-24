import express from "express";

const app = express();
const port = 3000;
let password = "ankit@12345";

//  Built-in Middleware
app.use(express.json());

//  Custom Middleware
app.use((req, res, next) => {
  if (req.body.pass != password) {
    res.send("password does not match");
  }
  next();
});

// post-method
app.post("/about", (req, res) => {
  console.log(req.body);
  // res.status(400).send({ success: true }); // See thunderClient Status
  // res.status(400).send({ success: true });
  // res.status(200).send({ success: true });
  res.status(201).send({ success: true });
});

app.listen(port, () => {
  console.log(`server running at ${port}...`);
});
