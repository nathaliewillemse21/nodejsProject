import { config } from 'dotenv';
config();
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

function createToken(user) {
  return sign(
    {
      emailAdd: user.emailAdd,
      userPwd: user.Pass,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: '1h',
    }
  );
}
function verifyAToken(req, res, next) {
  // Retrieve a token from the browser
  const token = req?.headers['Authorization'];
  if (token) {
    if (verify(token, process.env.SECRET_KEY)) {
      next();
    } else {
      res?.json({
        status: res.statusCode,
        msg: 'Please provide your correct details',
      });
    }
  } else {
    res?.json({
      status: res.statusCode,
      msg: 'Please login',
    });
  }
}

export { createToken, verifyAToken };

// import { config } from 'dotenv';
// config();
// import jwt from 'jsonwebtoken';
// const { sign, verify } = jwt;

// function createToken(user) {
//   return sign(
//     {
//       emailAdd: user.emailAdd,
//       userPwd: user.Pass,
//     },
//     process.env.SECRET_KEY,
//     {
//       expiresIn: '30min',
//     }
//   );
// }
// function verifyToken(req, res, next) {
//   const token = req.headers['Authorization'];
//   if (token) {
//     if (verify(token, process.env.SECRET_KEY)) {
//       next();
//     } else {
//         res.json({
//             status: res.statusCode,
//             msg: 'Please provide your correct details'
//       });
//     }
//   } else {
//       res.json({
//           status: res.statusCode,
//           msg: 'Please login',
//       })
//   }
// }
// export{ createToken, verifyToken}
