const connection = require('./database.js');
// username must b unique

const isAuthorized = (userName,password) => {
  console.log("quesrt attempted")
    connection.query(`SELECT socket_id from users where password = ${userName} && password = ${password} `, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
        //return results[0].solution
      });
}
// const authorized = (userName,password) => {
//   connection.query(`SELECT socket_id from users where password = ${userName} && password = ${password} `, function (error, results, fields) {
//       if (error) throw error;
//       console.log('The solution is: ', results[0].solution);
//       //return results[0].solution
//     });
// }

module.exports = isAuthorized;
//export.authorized = authorized ;