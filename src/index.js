const Table = require('cli-table2');
const fetchRequests = require('./fetchRequests');

const getResults = fetchRequests();

const table = new Table({
  head: ['ID', 'Title'],
  colWidths: [100, 100]
});

getResults.then(results => {
  results.data.forEach(element => {
    table.push([element.id, element.title]);
  });

  console.log(table.toString());
});
