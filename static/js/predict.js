function makePredictions() {
  // Grab a reference to the dropdown select element

  var input1 = d3.select("#selDataset1").node().value;
  var input2 = d3.select("#selDataset2").node().value;
  var input3 = d3.select("#selDataset3").node().value;
  var input4 = d3.select("#selDataset4").node().value;
  var input5 = d3.select("#selDataset5").node().value;

  
  
  document.getElementById("pre-img").style.display = "none";
  // var $image = $('#result-img');
  // // var $text = $('#result-text');
  // // console.log("toggling", $image);
  // $image.toggleClass('transparent');
  // // $text.toggleClass('transparent');

  d3.json(`/mlm/(${input1}, ${input2}, ${input3}, ${input4}, ${input5})`).then(data => {
    result = data.data;

    

    try {
      switch (result) {
        case "0":
          // document.getElementById("result-img");
          img = document.getElementById("result-img");
          img.style.display = "block";
          img.src = "../static/css/surgical.png";
          document.getElementById("result-text").innerText =
            "AI predicts: Surgical Sterilization";
          break;

        case "1":
          document.getElementById("result-img");
          img.style.display = "block";
          img.src = "../static/css/iud_implant.png";
          document.getElementById("result-text").innerText = "AI predicts: IUD or Implant";
          break;

        case "2":
          img = document.getElementById("result-img");
          img.style.display = "block";
          img.src = "../static/css/ring_patch_shot_pill.png";
          document.getElementById("result-text").innerText =
            "AI predicts: Pill, Ring, Patch, Shot";
          break;

        case "3":
          document.getElementById("result-img");
          img.style.display = "block";
          img.src = "../static/css/condoms.png";
          document.getElementById("result-text").innerText = "AI predicts: Condoms";
          break;

        case "5":
          document.getElementById("result-img");
          img.style.display = "block";
          img.src = "../static/css/calender_withdrawal.png";
          document.getElementById("result-text").innerText =
            "AI predicts: Withdrawal/Family Planning Techniques";
          break;

        case "99":
          document.getElementById("result-img");
          img.style.display = "block";
          img.src = "../static/css/shrug.png";
          document.getElementById("result-text").innerText = "Shoot, I dunno";
          break;
      }
    } catch (err) {
      //   document.getElementById("result-img").src ="../static/css/shrug";
      //   document.getElementById("result-text").innerText="Shoot, I dunno";
      console.log(err);
    }
    // console.log("togglign agan")
    // setTimeout(() =>  $image.toggleClass('transparent'), 1000 )
    // // setTimeout(() =>  $text.toggleClass('transparent'), 1000 )
   
  });
}

// function init(){
//     document.getElementById("result-img").src ="../static/css/theVillain.jpg";
//     document.getElementById("result-text").innerText="What will our AI predict???";
// };
// init();


// function makePredictions() {
//   // Grab a reference to the dropdown select element

//   var input1 = d3.select("#selDataset1").node().value;
//   var input2 = d3.select("#selDataset2").node().value;
//   var input3 = d3.select("#selDataset3").node().value;
//   var input4 = d3.select("#selDataset4").node().value;

  
//   document.getElementById("pre-img").style.display = "none";
//   // var $image = $('#result-img');
//   // // var $text = $('#result-text');
//   // // console.log("toggling", $image);
//   // $image.toggleClass('transparent');
//   // // $text.toggleClass('transparent');

//   d3.json(`/mlm/(${input1}, ${input2}, ${input3}, ${input4})`).then(data => {
//     result = data.data;

    

//     try {
//       switch (result) {
//         case "0":
//           // document.getElementById("result-img");
//           img = document.getElementById("result-img");
//           img.style.display = "block";
//           img.src = "../static/css/surgical.png";
//           document.getElementById("result-text").innerText =
//             "Surgical Sterilization";
//           break;

//         case "1":
//           document.getElementById("result-img").src =
//             "../static/css/iud_implant.png";
//           document.getElementById("result-text").innerText = "IUD/Implant";
//           break;

//         case "2":
//           img = document.getElementById("result-img");
//           // img.style = "transition-duration: 2s";
//           // img.style = "display: none";
//           img.style.display = "block";
//           img.src = "../static/css/ring_patch_shot_pill.png";
//           document.getElementById("result-text").innerText =
//             "Pill/Ring/Patch/Shot";
//           break;

//         case "3":
//           document.getElementById("result-img").src =
//             "../static/css/condoms.png";
//           document.getElementById("result-text").innerText = "Condoms";
//           break;

//         case "5":
//           document.getElementById("result-img").src =
//             "../static/css/calender_withdrawal.png";
//           document.getElementById("result-text").innerText =
//             "Withdrawal/Calender";
//           break;

//         case "99":
//           document.getElementById("result-img").src = "../static/css/shrug.png";
//           document.getElementById("result-text").innerText = "Shoot, I dunno";
//           break;
//       }
//     } catch (err) {
//       //   document.getElementById("result-img").src ="../static/css/shrug";
//       //   document.getElementById("result-text").innerText="Shoot, I dunno";
//       console.log(err);
//     }
//     console.log("togglign agan")
//     // setTimeout(() =>  $image.toggleClass('transparent'), 1000 )
//     // // setTimeout(() =>  $text.toggleClass('transparent'), 1000 )
   
//   });
// }

// // function init(){
// //     document.getElementById("result-img").src ="../static/css/theVillain.jpg";
// //     document.getElementById("result-text").innerText="What will our AI predict???";
// // };
// // init();
