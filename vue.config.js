const fs = require("fs");

module.exports = {
  devServer: {
    
    https: {
        key: fs.readFileSync("./certs/example.com+4-key.pem"),
        cert: fs.readFileSync("./certs/example.com+4.pem")
    }
  }
};