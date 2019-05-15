//Use the documenation from datatables to pull in table data
function showhide() {
    var img = document.getElementById("load-image");
    img.style.display = "none";
    var text = document.getElementById("load-text");
    text.style.display = "none";
  }


// $(document).ready(function () {

  // $.getJSON('/table_db', function (jsondata) {
    $.getJSON('/bc_table', function (jsondata) {
        //hide the loading text
    showhide();

    // const cleanedData = _.map(jsondata, object => _.omit(object, ['Compound', 'Positive', 'Negative', 'Neutral']));
    // var data = cleanedData.map(
    //   cols => Object.values(cols)

    // );

    var data = jsondata.map(
      cols => Object.values(cols)
  
    );


    // Reference your table
    $('#mytable').DataTable({
      data: data,
    //   colReorder: {
    //             // order: [ 1, 0, 5, 3, 7, 6,2,4 ]
    //     order: [0, 1, 5, 7, 3, 6, 2, 4]
    // },



      // Indicate which class to associate with your search pane
      searchPane: {
        container: '.searchPanes',
        threshold: 0
      },
    });


    var panes = document.getElementsByClassName("pane");
    var searchText = "User Review";
    
    for (var i = 0; i < panes.length; i++)
    {
      if(panes[i].innerHTML.indexOf(searchText) !== -1) 
        panes[i].style = "display: none";
    }

    var panes = document.getElementsByClassName("pane");
    var searchText = "Date Published";
    
    for (var i = 0; i < panes.length; i++)
    {
      if(panes[i].innerHTML.indexOf(searchText) !== -1) 
        panes[i].style = "display: none";
    }

    var panes = document.getElementsByClassName("pane");
    var searchText = "Source";
    
    for (var i = 0; i < panes.length; i++)
    {
      if(panes[i].innerHTML.indexOf(searchText) !== -1) 
        panes[i].style = "display: none";
    }


    var panes = document.getElementsByClassName("pane");
    var searchText = "Brand";
    
    for (var i = 0; i < panes.length; i++)
    {
      if(panes[i].innerHTML.indexOf(searchText) !== -1) 
        panes[i].style = "display: none";
    }



  });
// });






// //Use the documenation from datatables to pull in table data
// function showhide() {
//     var img = document.getElementById("load-image");
//     img.style.display = "none";
//     var text = document.getElementById("load-text");
//     text.style.display = "none";
//   }


// $(document).ready(function() {


//   d3.json("/birthcontrol_db", function(error, data) {
//     if (error) throw error;
//     //hide the loading text
//     showhide();

//     var Method = data.map(d => d["Method"]);
//     var BirthControl = data.map(d => d["Birth_Control"]);
//     var StarRating = data.map(d => +d["Star_Rating"]);
//     var VaderScale = data.map(d => d["Vader_Scale"]);
//     var UserReview = data.map(d => d["Review"]);

//     var Use = data.map(d => d["Use"]);
//     var DatePublished = data.map(d => d["Publish_Date"]);
//     var Source = data.map(d => d["Source"]);

//     var table = d3.select("tbody");

  
//     for (i = 0; i < BirthControl.length; i++) {
//       var tr = table.append("tr");

//       tr.append("td").text(Method[i]);
//       tr.append("td").text(BirthControl[i]);
//       tr.append("td").text(StarRating[i]);
//       tr.append("td").text(VaderScale[i]);
//       tr.append("td").text(UserReview[i]);

//       tr.append("td").text(Use[i]);
//       tr.append("td").text(DatePublished[i]);
//       tr.append("td").text(Source[i]);
//     }

//     $("#myTable").DataTable();
//   });
// });

