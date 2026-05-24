import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  //  # Get Request Headers
  // (1) for getting all headers
  // console.log(req.headers);

  // (2) for getting specific header
  //  console.log(req.get("user-agent"));
  // console.log(req.get("host"));

  // (3) Set Response Headers
  // console.log(res.set("x-username", "msdhoni"));
  // console.log(res.header("x-address", "new-delhi"));

  // (4) Remove Headers
  console.log(res.removeHeader("x-powered-by"));

  res.json({ name: "ankit", age: 26 });
});

app.listen(port, () => {
  console.log(`server running at ${port}...`);
});
