const express = require("express");
const port = 8000;
const app = express();
const userRouters = require('./router/users');
const profileRouters = require('./router/profile');

app.use('/api',userRouters);
app.use('/api',profileRouters);

app.listen(port, function (err) {
  if (err) {
    console.log("Error is running on server");
  }
  console.log(`server is running on port: ${port}`);
});
