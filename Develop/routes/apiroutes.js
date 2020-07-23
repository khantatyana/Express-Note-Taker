var fs = require('fs');
var path = require('path');
var uuid = require("uuid");
var dbPath = path.join(__dirname, "../db/db.json");

module.exports = function(app){
    app.get("/api/notes", function(req, res) {
        fs.readFile(dbPath, "utf8", function (err, data) {
            if (err) {
                throw err;
            }
            return res.json(data);
        })
    })

    app.post("/api/notes", function(req, res) {
        fs.readFile(dbPath, "utf8", function (err1, data1) {
            if (err1) {
                throw err1;
            }
            console.log(typeof(data1));
            let dataArr = JSON.parse(data1);
            let entry = req.body;
            entry.id = uuid.v4();
            dataArr.push(entry);
            fs.writeFile(dbPath, JSON.stringify(dataArr, null, 2), function (err2) {
                console.log("done writing");
                if (err2) {
                    throw err2;
                }
                return res.json(dataArr);
            });
        })

    })
    // delete the note by uuid
    app.delete("api/notes/:id", function(req, res) {
        fs.readFile(dbPath, "utf8", function (err, data) {
            if (err) throw err;
            let noteObj = JSON.parse(data)
            let noteObjRemain = noteObj.filter(obj => (obj.id !== req.params.id));

            notesArray = noteObjRemain;
    
            // save it back to db.json
            let notesArrayText = JSON.stringify(noteObjRemain);
    
            fs.writeFile(dbPath, notesArrayText, function (err, data) {
                if (err) throw err;
                console.log("file saved with obj removed");
                return res.json(true);
            })
        })
    })
}