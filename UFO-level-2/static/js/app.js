// from data.js
var tableData = data;

// console.log(tableData)


// select the button
var button = d3.select("#filter-btn")

// select the form
var filterForm = d3.select("form")

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
    var inputShape = userShape.property("value");



    // make sure user inputs are captured as theire respective variable correctly
    console.log(inputDate);
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);
   
    
    // create function to return filtered values
    if (inputDate != "" ) {
        var dateFiltered = tableData.filter(ufoEvents => ufoEvents.datetime === inputDate);
        // console.log(dateFiltered)
    } else {
        dateFiltered = tableData
    }
    
    
    if (inputCity != "") {
        var cityFiltered = dateFiltered.filter(ufoEvents => ufoEvents.city === inputCity);
        // console.log(cityFiltered)
    } else {
        cityFiltered = dateFiltered
        // console.log(cityFiltered)
    }


    if (inputState != "") {
        var stateFiltered = cityFiltered.filter(ufoEvents => ufoEvents.state === inputState);
        // console.log(stateFiltered)
    } else {
        stateFiltered = cityFiltered
        // console.log(stateFiltered)
    }


    if (inputCountry != "") {
        var countryFiltered = stateFiltered.filter(ufoEvents => ufoEvents.country === inputCountry);
        // console.log(countryFiltered)
    } else {
        countryFiltered = stateFiltered
        // console.log(countryFiltered)
    }


    if (inputShape != "") {
        var shapeFiltered = countryFiltered.filter(ufoEvents => ufoEvents.shape === inputShape);
        // console.log(shapeFiltered)
    } else {
        shapeFiltered = countryFiltered
        // console.log(shapeFiltered)
    }


    // clear out table of pre-exsisting data
    tbody.html(""); // Thanks to Sharon Templin for helping me to find a way to clear out my table before loading the new results

    // put filtered results into the html table
    // if the shapeFiltered variable is a non-empty array, show filtered results
    // if the shapeFiltered variable is an empty array, show all the data
    if (shapeFiltered.length > 0) {
        console.log(shapeFiltered);

        shapeFiltered.forEach(function(ufoResults) {
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
   

}
