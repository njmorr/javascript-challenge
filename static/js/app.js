// from data.js
var tableData = data;

// console.log(tableData)


// select the button
var button = d3.select("#btn")

// select the form
var filterForm = d3.select("#filters")

// create the event handlers
button.on("click", runFilter)
filterForm.on("submit", runFilter)

function runFilter() {
    d3.event.preventDefault();
}