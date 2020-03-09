const http = require("http");

exports.getFaq = function () {
    return new Promise((resolve, reject) => {
        // HTTP request options
        const url = "http://localhost:8080/faq";
        // Create the HTTP request
        const req = http.get(url, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                body = JSON.parse(body);
                resolve(body);
            });
        });
        // HTTP request error handler
        req.on("error", error => {
            console.debug(`error: ${error}`);
            reject(error);
        });
    });
}