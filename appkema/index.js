const express = require('express')
const app = express();
const port = 3000

const mariadb = require('mariadb');
let conn;

async function createConnection() {
  if(!conn) {
    try {
      conn = await mariadb.createPool({
        host: 'localhost',
        user: 'root',
        password: 'Martina+4',
        database: 'sample',
        port: 3306,
        connectionLimit: 5
    }).getConnection();
    } catch(err) {
      console.log('connection not created', err)
    } finally {
      if(conn) {
        conn.end();
      }
    }

  }
}

app.get('/student',async (req, res) => {
  await createConnection();
  const val = await conn.query("select * from student;");
  console.log("val is: ", val);
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(val))
})

app.get('/customer',async (req, res) => {
  await createConnection();
  const val = await conn.query("select * from customer;");
  console.log("val is: ", val);
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(val))
})

app.get('/company',async (req, res) => {
  await createConnection();
  const val = await conn.query("select * from company;");
  console.log("val is: ", val);
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(val))
})


app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
});
