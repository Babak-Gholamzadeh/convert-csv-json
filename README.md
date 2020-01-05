# convert-csv-json
Convert the content of a CSV file to a json and vice versa

[npm package](https://www.npmjs.com/package/convert-csv-json)

### Installation
```
npm i convert-csv-json
```

### Example
```javascript
const { csv2json, json2csv } = require('convert-csv-json');

// Read a CSV file
const fs = require('fs');
fs.readFile('myFile.CSV', (err, data) => {
    // Convert the content of CSV file to a json object
    const myJson = csv2json(data.toString());
    
    // Do some stuff with the json...

    // Convert the json to CSV again
    const myCSV = json2csv(myJson);
})

```
