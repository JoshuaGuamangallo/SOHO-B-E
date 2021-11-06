const express = require('express')
const cors = require('cors')
 const router = require('./src/routes/router.js')
const path = require('path');
 const { json, urlencoded } = express
const app = express()
const port = process.env.PORT || 8080

app.use(json()) 
app.use(urlencoded({ 
  extended: false 
}))

const corsOptions = { 
  origin: '*', optionsSuccessStatus: 200 
} 

app.use(cors(corsOptions))

app.use(router)

app.use(
  '/projects',(req,res) => 
  { res.sendFile(path.join(__dirname+'../sohofe/public'));
  }) 

app.use('/', (req, res) => {
   res.send("this is the API v1.0.0"); 
  })

app.listen(port, () => { 
  console.log(`Server listening on port ${port}`); 
})