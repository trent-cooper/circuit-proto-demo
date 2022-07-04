const express = require('express');
const app = express();;
const PORT = 3001
const cors = require('cors')
const unleash = require('unleash-client')

app.use(cors());

unleash.initialize({
  url: 'http://localhost:4242/api/',
  appName: 'circuit-proto-demo',
  customHeaders: { Authorization: '*:development.587e78ade7aba1b8101cf31b34b211504c91c99d018856d534054f3a' },
});

// unleash.on('ready', console.log);
// unleash.on('synchronized', console.log);
// unleash.on('error', console.error);
// unleash.on('warn', console.warn);

// unleash.once('registered', () => {
//   console.log('registered')
// })

app.get('/', (req, res) => {
  if (unleash.isEnabled('proto-flag')) {
    res.send({ message: 'flag is ON' })
  } else {
    res.send({ message: 'flag is OFF' })
  }
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))