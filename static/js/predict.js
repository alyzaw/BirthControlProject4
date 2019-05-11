// function input1Change(val){
//     input1= val
//   }
//   function input2Change(val){
//     input2= val
//   }
//   function input3Change(val){
//     input3= val
//   }
//   function input4Change(val){
//     input4= val
//   }
// function makePredictions() {

//     var guess = d3.json(`/mlm/(${input1}, ${input2}, ${input3}, ${input4})`)
//     var output = guess.getElementsByClassName("body")
//     console.log(output)
//   }

function makePredictions() {
  // Grab a reference to the dropdown select element
  //   var input1 = None;
  //   // var input1 = d3.select("#selDataset1").node().value;
  //   // var input1 = d3.select("#selDataset1").value;
  //   var input2 = None;
  //   var input3 = None;
  //   var input4 = None;

  var input1 = d3.select("#selDataset1").node().value;
  // var input1 = d3.select("#selDataset1").node().value;
  // var input1 = d3.select("#selDataset1").value;
  var input2 = d3.select("#selDataset2").node().value;
  var input3 = d3.select("#selDataset3").node().value;
  var input4 = d3.select("#selDataset4").node().value;

  console.log(input3);
  console.log(input4);

  // Use the list of sample names to populate the select options
  //   d3.json(`/mlm/(${input1}, ${input2}, ${input3}, ${input4})`).then(() => {
  // var output = document.getElementsByClassName("body");
  d3.json(`/mlm/(${input1}, ${input2}, ${input3}, ${input4})`).then(data => {
    console.log(data.data)
    //   });

    //   // Use the first sample from the list to build the initial plots
    //   const firstMethod = Method[1];
  });
}
