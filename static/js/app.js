// from data.js
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
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufoData);

  var filteredData = ufoData.filter(ufoSighting => ufoSighting.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach(function(ufoSighting) {
	console.log(ufoSighting);
	var row = tbody.append("tr");
	Object.entries(ufoSighting).forEach(function ([key, value]) {
		console.log(key, value);
		
		var cell = tbody.append("td");
		cell.text(value);
	});
  });
  
  // data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = tbody.append("td");
//     cell.text(value);
//   });
// });

  
  // Finally, add the summary stats to the `ul` tag
  //d3.select(".summary")
   // .append("li").text(`Mean: ${mean}`)
   // .append("li").text(`Median: ${median}`)
   // .append("li").text(`Mode: ${mode}`)
   // .append("li").text(`Variance: ${variance}`)
   // .append("li").text(`Standard Deviation: ${standardDeviation}`);
});
