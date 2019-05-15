
function showhide() {
  var img = document.getElementById("load-image");
  img.style.display = "none";
  var text = document.getElementById("load-text");
  text.style.display = "none";
}



//load in the data 

  $.getJSON("/bc_table", function (jsondata) {
      //hide the loading text
showhide();

  var data = jsondata.map(
    cols => Object.values(cols)

  );
 



  // Reference your table
  $('#mytable').DataTable({
    data: data,
    



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


