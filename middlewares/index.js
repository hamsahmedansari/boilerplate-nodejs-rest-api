const _Auth = require("./auth");
const _Validator = require("./validator");
const _Upload = require("./upload");

const middleware = {};
middleware.Auth = _Auth;
middleware.Upload = _Upload;
middleware.Validator = _Validator;

module.exports = middleware;
