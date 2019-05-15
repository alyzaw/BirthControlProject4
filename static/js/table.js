// var table_data = $.getJSON('/birthcontrol_db', function (data) {

//   console.log(table_data);
// });




// $(document).ready(function () {

  $.getJSON('/table_db', function (jsondata) {
    const cleanedData = _.map(jsondata, object => _.omit(object, ['Compound', 'Positive', 'Negative', 'Neutral']));
    var data = cleanedData.map(
      cols => Object.values(cols)

    );
    //console.log({ data })



    // Reference your table
    $('#mytable').DataTable({
      data: data,
      colReorder: {
        order: [ 1, 0, 5, 3, 7, 6,2,4 ]
    },



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


  });
// });



