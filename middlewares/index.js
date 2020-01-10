const _Auth = require("./auth");
const _Validator = require("./validator");

const middleware = {};
middleware.Auth = _Auth;
middleware.Validator = _Validator;

module.exports = middleware;
