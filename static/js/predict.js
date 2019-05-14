
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
      document.getElementById("result-text").innerText="Surgical Sterilization";
      break;

      case '1':
      document.getElementById("result-img").src="../static/css/pill_glyph.PNG";
      document.getElementById("result-text").innerText="IUD/Implant";
      break;

      case '2':
      document.getElementById("result-img").src="../static/css/iud_glyph.PNG";
      document.getElementById("result-text").innerText="Pill/Ring/Patch/Shot";
      break;

      case '3':
      document.getElementById("result-img").src="../static/css/iud_glyph.PNG";
      document.getElementById("result-text").innerText="Condoms";
      break;

      case '5':
      document.getElementById("result-img").src="../static/css/iud_glyph.PNG";
      document.getElementById("result-text").innerText="Withdrawal/Calender";
      break;

      default:
      document.getElementById("result-img").src="../static/css/david.jpg";
      document.getElementById("result-text").innerText="Shoot, I dunno";
      break;
    }

  });
}


// function init(){
//     document.getElementById("result-img").src="../static/css/theVillain.jpg";
//     document.getElementById("result-text").innerText="What will our AI predict???";
// };
// init();