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

    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");
    
    console.log(inputDate);
    
    function selectDate(ufoEvents) {
        return ufoEvents.datetime === inputDate;
    }

    console.log(tableData.filter(selectDate));
    // console.log(tableData.filter(ufoEvents => ufoEvents.datetime === inputeDate));

}



