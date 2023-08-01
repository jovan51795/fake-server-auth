const jsonServer = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.get('/about', (req, res) => {
  res.json({ info: 'This is a fake server for authentication.' });
});
server.use(router);

server.listen(port);