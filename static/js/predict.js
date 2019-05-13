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

  var input1 = d3.select("#selDataset1").node().value;

  var input2 = d3.select("#selDataset2").node().value;
  var input3 = d3.select("#selDataset3").node().value;
  var input4 = d3.select("#selDataset4").node().value;

  d3.json(`/mlm/(${input1}, ${input2}, ${input3}, ${input4})`).then(data => {
    
    result = data.data;

    switch(result)
    {
        case '0':
        document.getElementById("result-img").src="https://previews.123rf.com/images/vadimdesign/vadimdesign1503/vadimdesign150300021/38032099-contraception-method-surgical-sterilization-icon-family-and-parenthood-pregnancy.jpg";
        document.getElementById("result-text").innerText="Snip it";
        break;

        case '1':
        document.getElementById("result-img").src="../static/css/pill_glyph.PNG";
        document.getElementById("result-text").innerText="pill";
        break;

        case '2':
        document.getElementById("result-img").src="../static/css/iud_glyph.PNG";
        document.getElementById("result-text").innerText="IUD";
        break;
    }

  });
}


function init(){
    document.getElementById("result-img").src="../static/css/theVillain.jpg";
    document.getElementById("result-text").innerText="What will our AI predict???";
};
init();