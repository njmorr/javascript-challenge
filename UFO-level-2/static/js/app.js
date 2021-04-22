// from data.js
var tableData = data;

// console.log(tableData)


// select the button
var button = d3.select("#filter-btn")

// select the form
var filterForm = d3.select(".form-group")

// create the event handlers
button.on("click", runFilter);
filterForm.on("submit", runFilter);

// create reference to teh tbody section
var tbody = d3.select("tbody")


// create function to handle the filtering of results
function runFilter() {
    // d3.event.preventDefault();

    // capture the datetime class as the input element and store that 'property value' as the inputDate variable
    var userDate = d3.select("#datetime");
    var inputDate = userDate.property("value");

    var userCity = d3.select("#city");
    var inputCity = userCity.property("value");

    var userState = d3.select("#state");
    var inputState = userState.property("value");

    var userCountry = d3.select("#country");
    var inputCountry = userCountry.property("value");

    var userShape = d3.select("#shape");
    var inputshape = userShape.property("value");



    // make sure date is captured as the variable correctly
    console.log(inputDate);
   
    
    // create function to return values of filter
    function selectDate(ufoEvents) {
        return ufoEvents.datetime === inputDate;
    }
    // declare the results as a new variable
    var returnedResults = tableData.filter(selectDate);

    // if the returnedResults variable is a non-empty array, show filtered results
    // if the returnedResults variable is an empty array, show all the data
    if (returnedResults.length > 0) {
        console.log(returnedResults);

        returnedResults.forEach(function(ufoResults) {
            var row = tbody.append("tr");
            Object.entries(ufoResults).forEach(function([key,value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });

    } else {
        console.log(tableData);

        tableData.forEach(function(ufoResults) {
            var row = tbody.append("tr");
            Object.entries(ufoResults).forEach(function([key,value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    
    }
   
    // alternate way of creating the filter function and displaying the results.
    // console.log(tableData.filter(ufoEvents => ufoEvents.datetime === inputeDate));

}



