// from data.js - give the dataset a more meaningful name
var ufoData = data;

// Select the "Filter Table" button
var filterBtn = d3.select("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");

// handle "Filter Table" button click 
filterBtn.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element ("Enter Date")
  var inputElement = d3.select("#datetime");

  // Get the value property of the input box "Enter Date" 
  // need this input date to search and return sightings on this date
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufoData);

  // filter to include only sightings matching the input date
  var filteredData = ufoData.filter(ufoSighting => ufoSighting.datetime === inputValue);

  console.log(filteredData);

  // now for each sighting, need to add the data  to the table on page
  filteredData.forEach(function(ufoSighting) {
	console.log(ufoSighting);
	
	// add a row in the table for each object
	var row = tbody.append("tr");
	
	// now loop through all key/value pairs in the object to add cells and values to cells
	Object.entries(ufoSighting).forEach(function ([key, value]) {
		console.log(key, value);
		
		// append a cell for each key/valu pair
		// what's displayed on the page is in the same order as data
		// so the correct value will fall under the right column heading
		var cell = tbody.append("td");
		cell.text(value);
	});
  });
  
});
