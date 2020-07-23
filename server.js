var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));

require("./Develop/routes/apiroutes")(app);
require("./Develop/routes/HTMLroutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  