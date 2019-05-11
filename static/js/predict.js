function input1Change(val){
    input1= val
  }

  function input2Change(val){
    input2= val
  }

  function input3Change(val){
    input3= val
  }

  function input4Change(val){
    input4= val
  }


function makePredictions() {
    var guess = d3.json(`/mlm/(${input1}, ${input2}, ${input3}, ${input4})`)
    var output = guess.getElementsByClassName("body")
    console.log(output)
  }



