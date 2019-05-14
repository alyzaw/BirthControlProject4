var table_data = $.getJSON('http://localhost:5000/table_db', function( data) {

  console.log(table_data);
});




  $(document).ready( function () {

     $.getJSON('http://localhost:5000/table_db', function(jsondata) {

     var data = jsondata.map(
         cols=>Object.values(cols)
        
         );

  

    // Reference your table
      $('#mytable').DataTable( {
          data: data,


          // Indicate which class to associate with your search pane
          searchPane: {
                  container: '.searchPanes',
                  threshold: 0
              },
      } );

  });
});
    




