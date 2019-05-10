//Use the documenation from datatables to pull in table data
function showhide() {
    var img = document.getElementById("load-image");
    img.style.display = "none";
    var text = document.getElementById("load-text");
    text.style.display = "none";
  }


$(document).ready(function() {
  // get table references
  // var tbody = d3.select("tbody");

  // function buildTable() {
  //show the loading text
//   function tend() {
//     document.getElementById("load-image").style.visibility = "visible";
//   }

 

//   setTimeout(showhide, 5000 )

  d3.json("/birthcontrol_db", function(error, data) {
    if (error) throw error;
    //hide the loading text
    showhide();

    var Method = data.map(d => d["Method"]);
    var BirthControl = data.map(d => d["Birth_Control"]);
    var StarRating = data.map(d => +d["Star_Rating"]);
    var VaderScale = data.map(d => d["Vader_Scale"]);
    var UserReview = data.map(d => d["Review"]);

    var Use = data.map(d => d["Use"]);
    var DatePublished = data.map(d => d["Publish_Date"]);
    var Source = data.map(d => d["Source"]);

    var table = d3.select("tbody");

    console.log(BirthControl);
    for (i = 0; i < BirthControl.length; i++) {
      var tr = table.append("tr");

      tr.append("td").text(Method[i]);
      tr.append("td").text(BirthControl[i]);
      tr.append("td").text(StarRating[i]);
      tr.append("td").text(VaderScale[i]);
      tr.append("td").text(UserReview[i]);

      tr.append("td").text(Use[i]);
      tr.append("td").text(DatePublished[i]);
      tr.append("td").text(Source[i]);
    }

    $("#myTable").DataTable();
  });
});

// };

// Build the table when the page loads
// buildTable();
