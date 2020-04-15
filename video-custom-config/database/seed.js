// const mysql = require('mysql');
// const faker = require('faker');
// // connect to root of mysql without choosing a database
// // currently set for local host remember to reset to contain ip if needed 
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',

  
// });

// connection.connect();

// // steps to connect to connect to mysql container:
// // connect to root of mysql
// // drop database if exist 
// // create database 
// // create table
// // seed table 

// const dropDatabase = 'DROP DATABASE IF EXISTS test'
// const createDatabase= 'CREATE DATABASE test'
// const useDatabase = 'use test'
// const createTable = 'CREATE table images ( id int not null , imgUrl varchar(255) not null , imgDescription varchar(255) not null )'

// const create = () => {
  
//   console.log('drop')
//   connection.query(dropDatabase, (err,result)=> {
//     if (err) console.log(err);
//     else {
       
//     }
//   });
//   console.log('create')
//   connection.query(createDatabase , (err,result)=> {
//     if (err) console.log(err);
//     else {
       
//     }
//   });
//   console.log('use')
//   connection.query(useDatabase, (err,result)=> {
//     if (err) console.log(err);
//     else {
        
//     }
//   });
//   console.log('create')
//   connection.query(createTable, (err,result)=> {
//     if (err) console.log(err);
//     else {
//     }
//   });
// }
// create()

// const createImgData = () => {
//   console.log('seed')
//   const imgData = [['https://hrimages.s3.us-east-2.amazonaws.com/photo-1439158741799-12ded9a3ba30.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1460533893735-45cea2212645.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1484301548518-d0e0a5db0fc8.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1505992525839-8040ffa856ed.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1519397652863-aad621636ac7.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1524061662617-6a29d732e3ef.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1526308182272-d2fe5e5947d8.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1547110287-71448271b1de.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1551133989-6a6512ad3915.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1560976813-060185623241.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1484301548518-d0e0a5db0fc8.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1505992525839-8040ffa856ed.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1519397652863-aad621636ac7.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1524061662617-6a29d732e3ef.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1526308182272-d2fe5e5947d8.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1547110287-71448271b1de.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1551133989-6a6512ad3915.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1560976813-060185623241.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1484301548518-d0e0a5db0fc8.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1505992525839-8040ffa856ed.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1519397652863-aad621636ac7.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1524061662617-6a29d732e3ef.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1526308182272-d2fe5e5947d8.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1547110287-71448271b1de.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1551133989-6a6512ad3915.jpeg'],
//     ['https://hrimages.s3.us-east-2.amazonaws.com/photo-1560976813-060185623241.jpeg'],
//   ];

//   const min = 10;
//   const max = 20;
//   for (let i = 1; i < 101; i += 1) {
//     // math random function

//     const random = Math.floor(Math.random() * (+max - +min) + +min);
//     for (let j = 0; j < random; j += 1) {
//       const query = 'insert into images (id,imgUrl,imgDescription) values (?,?,?)';
//       const values = [i, imgData[j][0], faker.lorem.sentence()];
//       connection.query(query, values, (err, result) => {
//         if (err) {
//           console.log(err);
//         }
        
//       });
//     }
//   }
// };


// // this seed database with hardcoded data
// createImgData();
// //this switches to newly created and seeded database
// connection.changeUser({database : 'test'}, function(err) {
//   if (err){
//     console.log(err);
//   } else console.log('data')
// });

// module.exports = connection
