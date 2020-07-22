var db = require("../db/db.json");
// The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

module.exports = function(app){
    app.get("/api/notes", function(req, res) {
        res.json(db)
    })

    app.post("/api/notes", function(req, res) {
        // if (datatable.length < 5) {
        //     datatable.push(req.body);
        //     return res.json(true);
        // } else {
        //     waitlist.push(req.body);
        //     return res.json(false);
        // }
    })
    // clear post
    app.post("api'clear", function(req, res) {
        // datatable.length = 0;
        // waitlist.length = 0;

        // res.json({ ok: true });
    })
};