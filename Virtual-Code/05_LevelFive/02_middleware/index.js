import express from "express";

const port = 3000;
const app = express();

// built-in middleware
app.use(express.json());

// middleware -logging, auth, validation
// creation of custom middleware
const loggingMiddleware = (req, res, next) => {
  console.log("Logging Kra hu");
  next();
};
// loading middlware integate application
app.use(loggingMiddleware);

const authMiddleware = (req, res, next) => {
  console.log("auth Kra hu");
  // res.send("chalo seeda ghar");
  next();
};
app.use(authMiddleware);

const validationMiddleware = (req, res, next) => {
  console.log("validation Kra hu");
  next();
};
app.use(validationMiddleware);

app.get("/", (req, res) => {
  console.log("Main route handler hu");
  console.log(req.body);
  res.send("hello World");
});

app.listen(port, () => {
  console.log(`server running at ${port} ..`);
});
