import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("1234");
  console.log("hehe");
  return res.json({ message: "Hello World!" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
