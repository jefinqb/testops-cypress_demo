const path = require("path");
const mysql = require("mysql");
const pathToAxeReportFile = path.resolve(".", "axeReport");
const pdf = require('pdf-parse');
const fs = require('fs');

function getDataFromXlsxIntoJson(inputFile, sheetName) {
   const XLSX = require("xlsx");
   //const filePath = path.resolve(__dirname, "../testData/users.xlsx");
   const filePath = path.resolve(__dirname, inputFile);
   const workbook = XLSX.readFile(filePath);
   //const sheetName1 = workbook.SheetNames[1];
   const worksheet = workbook.Sheets[sheetName];
   const jsonData = XLSX.utils.sheet_to_json(worksheet);
   return jsonData;
}

function getDataFromCSVIntoJson(data) {
   var lines = data.split(/\r?\n/);
   var result = [];
   var headers = lines[0].split(",");
   for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
         obj[headers[j]] = currentline[j];
      }
      result.push(obj);
   }
   //console.log(result);
   return result;
}

function queryTestDb(dbconfig, query) {
   const connection = mysql.createConnection({
      host: dbconfig.dbHost,
      user: dbconfig.dbusername,
      password: dbconfig.dbPassword,
      database: dbconfig.database,
   });
   console.log("connecting database")
   connection.connect();
   console.log("connected")
   return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {

         if (error) reject(error);
         else {
            connection.end();
            console.log("connection ended")
            return resolve(results);
         }
      });
   });
}

function readPdf(pdfpath){
    return new Promise((resolve) =>
    {
      const filePath=path.resolve(pdfpath);
      const dataBuffer=fs.readFileSync(filePath)
      pdf(dataBuffer).then(function(data){
        resolve(data);
      })
    })
  }

module.exports = (on, config) => {
   on("task", {
      xlsToJson({ file, sheet }) {
         return getDataFromXlsxIntoJson(file, sheet);
      },
      csvToJson(data) {
         return getDataFromCSVIntoJson(data);
      },
      queryDb: ({ dbconfig, query }) => {
         return queryTestDb(dbconfig, query);
      },
      pdfDownload: ({ pdfpath }) => {
         return readPdf(pdfpath);
      },
   });
};
