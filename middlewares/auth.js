const jwt = require("jsonwebtoken");

module.exports.verifyUser = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    let decoded = await jwt.verify(token, process.env.secret);
    if (decoded.user) {
      req.user = decoded.user;
      next();
    } else {
      res
        .status(401)
        .send({ message: "you are unauthorized to perform this action" });
    }
  } catch (err) {
    res.status(401).send({
      message: "you are unauthorized to perform this action",
      error: err
    });
  }
};

module.exports.getToken = async user =>
  jwt.sign(
    {
      user
    },
    process.env.secret
  );
