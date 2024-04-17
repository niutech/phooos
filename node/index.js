const fs = require("fs");
const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res, next) => {
    const indexFile = "../static/index.html";
    const partsFiles = ["../static/part-1.html", "../static/part-2.html", "../static/part-3.html"];
    const indexParts = fs.readFileSync(indexFile, "utf-8").split("<!-- parts -->");
    res.set("X-Accel-Buffering", "no"); // disable output buffering
    res.type("html").write(indexParts[0]); // first part of index.html
    partsFiles.forEach(part => {
        fs.readFile(part, "utf-8", (err, data) => {
            if (err) next(err);
            setTimeout(() => { // random delay 1-4 sec.
                res.write(data);
                partsFiles.splice(partsFiles.indexOf(part), 1);
                if (!partsFiles.length) res.end(indexParts[1]); // last part of index.html
            }, Math.random() * 3000 + 1000);
        });
    });
});
app.use(express.static("../static"));
app.listen(port, () => console.log("Node server running at http://localhost:" + port));
