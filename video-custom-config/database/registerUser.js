
import connection from 'database.js';

const registerUser = (userName,password,socketID) => {
    connection.query(`insert into users (user_name, socket_id) value(${userName } , ${socketID}, ${password})`, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
      });
}
export default registerUser
