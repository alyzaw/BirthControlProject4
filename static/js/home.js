// from data.js
var url = '/table_db';
 d3.json(url).then(function(data) {
  console.log(data)

  // get table references

  buildPanel(data);

});


function buildPanel(panel_view) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
  var url  = "/table_db?method=" + panel_view;

  console.log(url);

  d3.json(url).then(function (panel_view) {
    // Use d3 to select the panel with id of `#sample-metadata`
    var panel_data = d3.select("#method-data");
    panel_data.html("");  
    console.log(panel_data)
    // Use `.html("") to clear any existing metadata

    /*
    Object.entries(panel_view).forEach(function ([key, value]) {
      var row = panel_data.append("p");
      msg = "";
      msg += `Method: ${value.Method}` ;
      msg += `<br> Birth Control: ${value.Birth_Control}`;
      msg += `<br> Star Rating: ${value.Star_Rating}`;
      row.html(msg);
    })
*/

    for(var i = 0; i < 5; i++) {
      var row = panel_data.append("p");

      msg = "";
      msg += `Method: ${panel_view[i].Method}`;
      msg += `<br> Birth Control: ${panel_view[i].Birth_Control}`;
      msg += `<br> Star Rating: ${panel_view[i].Star_Rating}`;
      msg+= `<br> Vader_Scale: ${panel_view[i].Vader_Scale}`;
      msg+= `<br> Use : ${panel_view[i].Use}`;
      msg+= `<br> Reviews : ${panel_view [i].Review}`;
     
      row.html(msg);
    }

  }
  )
};


    function optionChanged(panel_view) {
      // Fetch new data each time a new sample is selected
      buildPanel(panel_view);

    
    }


  
function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("/table_db").then((Method) => {
      Method.forEach((data) => {
        selector
          .append("option")
          .text(data)
          .property("value", data);
      });
  
      // Use the first sample from the list to build the initial plots
      const firstMethod = Method[1];

    })



    

  }
// Initialize the page
init();