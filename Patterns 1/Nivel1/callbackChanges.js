const { readdir, readFile, writeFile } = require("fs");
const { join } = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str) => str.split("").reverse().join("");

function readDir() {
  return new Promise((resolve, reject) => {
    readdir(inbox, (err, arrayFicheros) => {
      if (err) {
        reject("Error: Folder inaccessible");
      } else {
        resolve(arrayFicheros);
      }
    });
  });
}

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(`Error: File ${filePath} could not be read`);
      } else {
        resolve(data);
      }
    });
  });
}

function writeFilePromise(filePath, data) {
  return new Promise((resolve, reject) => {
    writeFile(filePath, data, (err) => {
      if (err) {
        reject(`Error: File ${filePath} could not be saved`);
      } else {
        resolve(`${filePath} was successfully saved in the outbox!`);
      }
    });
  });
}

readDir()
  .then((arrayFicheros) => {
    arrayFicheros.forEach((fichero) => {
      const filePath = join(inbox, fichero);
      readFilePromise(filePath)
        .then((data) => {
          const reversedData = reverseText(data);
          const outFilePath = join(outbox, fichero);
          return writeFilePromise(outFilePath, reversedData);
        })
        .then((msg) => {
          console.log(msg);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  })
  .catch((err) => {
    console.log(err);
  });
