const { validationResult, check, body } = require("express-validator");
module.exports = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({ status: 3, errors: errors.array() });
  } else {
    next();
  }
};

module.exports.check = check;
module.exports.body = body;
