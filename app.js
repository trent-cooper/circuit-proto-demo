const express = require('express');
const app = express();;
const PORT = 3001
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
  res.send({message: 'here we are'})
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))