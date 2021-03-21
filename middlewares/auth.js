const jwt = require("jsonwebtoken");
const modal = require("../models");

// module.exports.verifyToken = async (req, res, next) => {
//   try {
//     let token = req.headers.authorization;
//     let decoded = await jwt.verify(
//       String(token).split("Bearer ")[1],
//       process.env.secret
//     );
//     const ID = decoded.UserID;

//     if (ID) {
//       let response = await modal.Users.findOne({
//         where: { UserID: ID },
//         raw: true,
//       });
//       if (response) {
//         req.user = response;
//         next();
//       } else {
//         res
//           .status(401)
//           .send({ message: "you are unauthorized to perform this action" });
//       }
//     } else {
//       res
//         .status(401)
//         .send({ message: "you are unauthorized to perform this action" });
//     }
//   } catch (err) {
//     res.status(401).send({
//       message: "you are unauthorized to perform this action",
//       error: err,
//     });
//   }
// };

// module.exports.verifyAdmin = async (req, res, next) => {
//   try {
//     let token = req.headers.authorization;
//     let decoded = await jwt.verify(
//       String(token).split("Bearer ")[1],
//       process.env.secret
//     );
//     const ID = decoded.UserID

//     if (ID) {
//       const response = await modal.Users.findOne({
//         where: { UserID: ID, Status: "approved" },
//         raw: true,
//       });
//       req.user = response;
//       if (response) next();
//       else
//         res
//           .status(401)
//           .send({ message: "you are unauthorized to perform this action" });
//     } else {
//       res
//         .status(401)
//         .send({ message: "you are unauthorized to perform this action" });
//     }
//   } catch (err) {
//     console.log(
//       "🚀 ~ file: auth.js ~ line 48 ~ module.exports.verifyAdmin= ~ err",
//       err
//     );
//     res.status(401).send({
//       message: "you are unauthorized to perform this action",
//       error: err,
//     });
//   }
// };

module.exports.getToken = async (userID) =>
  jwt.sign(
    {
      userID,
    },
    process.env.secret
  );
