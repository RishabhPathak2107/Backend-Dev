const fs = require("fs");

let totalWords;
let totalLines;
let result = "";

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        const output = data;
        data.trim();
        totalLines = output.split("\n").length;
        totalWords = output.split(" ").length;
        result = "Total Lines: " + totalLines + "\nTotal Words: " + totalWords;
        fs.writeFile("./output.txt", result, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
});
