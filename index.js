const express = require("express");
const app = express();

app.use(express.json());

// index
app.get("/", (req, res) => {
  res.status(404).json({
    message: "Welcome to Home Page"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on Port ${port}`));
