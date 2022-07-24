const { Pool } = require('pg'); // import node-postgres
require('dotenv').config(); 

if(process.env.DATABASE_URL)
{var pool = new Pool({ // create connection to database
  connectionString: process.env.DATABASE_URL,	// use DATABASE_URL environment variable from Heroku app 
  ssl: {
    rejectUnauthorized: false // don't check for SSL cert
  }
})
}
else {
var pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});
} 

const findExhibition = async (req, res) => {
  const region = req.query.region;   
  const period = req.query.period; 
  const type = req.query.type; 
  const exhibitiontype = req.query.exhibitiontype; 

  const query1 = 'SELECT * FROM ' + exhibitiontype + ' WHERE region = $1 AND period = $2'; 
  const query2 = 'SELECT * FROM ' + exhibitiontype + ' WHERE type = $1'; 

  try{
    if(region && period){
      const exhibitions = await pool.query(query1, [region, period]);  
      res.status(201).send({
        status: 'Success',
        data: exhibitions.rows[0],
        
      })
    }
    else if(type){
      const exhibitions = await pool.query(query2, [type]);  
      res.status(201).send({
        status: 'Success',
        data: exhibitions.rows[0],
        })
    }

} catch(err) {
  return res.status(500).send({
    error: err.message
  });
}
}

let donationIdCounter = 1; 

const makeDonation = async (req, res) => {
    const {firstname, surname, amount} = req.body; 
    const query = 'INSERT INTO donations (id, firstname, surname, amount, time) VALUES ($1, $2, $3, $4, $5)'; 

  try{
    let id = donationIdCounter++;  

  // Gets today's date
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var datetime = date+' '+time;
    
    const newDonation = await pool.query(query, [id, firstname, surname, amount, datetime]);  
    res.status(201).send({
			status: 'Success',
			message: 'New donation made',
			data: newDonation.rows[0],
			})
  } catch(err) {
    return res.status(500).send({
			error: err.message
		});
  }
} 

module.exports = { findExhibition, makeDonation }