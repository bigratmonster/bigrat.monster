#!/usr/bin/env node

// caveats: This API does not read files recursively, therefore cannot display `media/deepfakes/bigtimerush`
const fs = require('fs');
const express = require('express')
const app = express()
const port = 8080;

let monkeys = [];
let deepfakes = [];
let other = [];

fs.readdir('./bigrat.monster/media/monkeys/', (err, files) => {
  files.forEach(file => {
    monkeys.push(file)
  });
})

fs.readdir('./bigrat.monster/media/deepfakes/', (err, files) => {
  files.forEach(file => {
    deepfakes.push(file)
  });
})

fs.readdir('./bigrat.monster/media/', (err, files) => {
  files.forEach(file => {
    other.push(file)
  });
})

app.get('/random', (req, res) => {
  switch (req.query.category) {
    case 'monkey':
      res.sendFile(monkeys[Math.floor(Math.random() * monkeys.length)], { root: './bigrat.monster/media/monkeys/' });
      break;
    case 'deepfake':
      res.sendFile(deepfakes[Math.floor(Math.random() * deepfakes.length)], { root: './bigrat.monster/media/deepfakes/' });
      break;
    case 'other':
      res.sendFile(other[Math.floor(Math.random() * deepfakes.length)], { root: './bigrat.monster/media/' });
      break;
    default:
      res.send('<script>window.location.href = \'https://www.youtube.com/watch?v=dQw4w9WgXcQ\'</script><noscript><a href=\'https://www.youtube.com/watch?v=dQw4w9WgXcQ\' style=\'font-family: monospace\'>What\'s this?</a></noscript>')
      break;
  }
})

app.get('/freekr', (req, res) => {
  res.sendFile('index.html', {root: './bigrat.monster/freekr/'})
})

app.get('/facts', (req, res) => {
  res.sendFile('index.html', {root: './bigrat.monster/facts/'})
})

app.get('/facts', (req, res) => {
  res.sendFile('index.html', {root: './bigrat.monster/facts/'})
})

app.get('/printer', (req, res) => {
  res.sendFile('index.html', {root: './bigrat.monster/printer/'})
})

app.get('/quiz', (req, res) => {
  res.sendFile('index.html', {root: './bigrat.monster/quiz/'})
})

app.get('/', (req, res) => {
  res.send('<pre>GET /random?category=[monkey | deepfake | other]</pre><pre>GET /freekr</pre><pre>GET /facts</pre><pre>GET /printer</pre><pre>GET /quiz</pre>')
})

app.use(function(req, res) {
  res.status(404);
  res.sendFile('404.html', {root: './bigrat.monster'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
