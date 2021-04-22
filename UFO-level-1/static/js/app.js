// from data.js
var tableData = data;

// console.log(tableData)


// select the button
var button = d3.select("#filter-btn")

// select the form
var filterForm = d3.select("#form-control")

// create the event handlers
button.on("click", runFilter);
filterForm.on("submit", runFilter);







function runFilter() {
    // d3.event.preventDefault();

    // capture the datetime class as the input element and store that 'property value' as the inputDate variable
    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");
    
    // make sure date is captured as the variable correctly
    console.log(inputDate);
   
    
    // create function to return values of filter
    function selectDate(ufoEvents) {
        return ufoEvents.datetime === inputDate;
    }
    // declare the results as a new variable
    var returnedResults = tableData.filter(selectDate);

    // if the returnedResults variable is a non-empty array, show filtered results
    // if teh returnedResults variable is an empty array, show all the data
    if (returnedResults.length > 0) {
        console.log(returnedResults);
    } else {
        console.log(tableData)
    }
   
    // console.log(tableData.filter(ufoEvents => ufoEvents.datetime === inputeDate));

}



