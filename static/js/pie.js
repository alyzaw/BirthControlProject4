function buildPie(pie_data) {
  // d3v4.csv("static/js/vader_counts.csv", function(d, i, columns) {
    d3v4.json(`/vader/${pie_data}`, function(error, data) {
      if (error) throw error;
  
      console.log(data);
  
      var categories = [];
      var sentiments = [];
      data.forEach(function(d) {
      // d.Vader_Scale = +d.Vader_Scale;
      // d.sentiment +d.sentiment;
      categories.push(d.Category);
      // sentiments.push(+d.Vader_Scale)
      sentiments.push(+d.sentiment);

      console.log(categories);
      console.log(sentiments);
    });
  
      // var pieColors = ["#FFD87D", "#85C441", "#F05179","#2FBCB3", "#1E8783", "#98abc5"];
  
      // var pieData = [
      //   {
      //     values: sentiments,
      //     labels: categories,
      //     hoverinfo: "hovertext",
      //     marker: {
      //       colors: pieColors
      //     },
      //     type: "pie"
      //   }
      // ];
  
    var pieCanvas = document.getElementById("myChart").getContext('2d');
    
  //   if(window.pieChart != undefined)
  //  window.pieChart.destroy();

  // selDataset.addEventListener("click", function(){
    selDataset.addEventListener("change", function(){ 
    pieChart.destroy();});

    var pieData = {
        labels: categories,
        datasets: [{
                    label: "Sentiment",
                    backgroundColor: ["#FFD87D", "#85C441", "#F05179","#2FBCB3", "#1E8783", "#98abc5"],
                    data: sentiments
                  }],
                  };

    var pieOptions = {
      plugins: {
        // Change options for ALL labels of THIS CHART
        datalabels: {
          
            formatter: (value, ctx) => {
                let sum = 0;
                let dataArr = ctx.chart.data.datasets[0].data;
                dataArr.map(data => {
                    sum += data;
                });
                let percentage = (value*100 / sum).toFixed()+"%";
                return percentage;
            },
            color: '#000',
            fontFamily: "Varela Round",
            font: {
              weight: 'bold',
              size: 16,
            }
        }
    },
      title: {
        display: true,
        text: 'Distribution of User Reviews by Sentiment Rating',
        position: 'top',
        fontFamily: "Varela Round",
        fontSize: 16,
        fontColor: '#000'
    },
      // showDatasetLabels : true,
      // width: 20,
      // height:20,
      responsive: true,
      // layout: {
      //   padding: {
      //       left: 50,
      //       right: 0,
      //       top: 0,
      //       bottom: 0
      //   }},
      legend: {
               display: true, 
               position:'bottom',
               labels: {
                 fontFamily: "Varela Round",
                 fontSize: 14,
                 fontColor: '#000'
                //  boxWidth: 15,
                //  boxHeight: 2,
               },
           } 
         };

    var pieChart = new Chart(pieCanvas, {
      type: 'pie',
      data: pieData,
      options: pieOptions
    }
        )});
  
    };
      // var pieLayout = {
      //   height: 640,
      //   width: 640,
      //   // margin: { t: 0, l: 0 },
      //   title: "Sentiment Breakdown",
      // };
  
      // Plotly.plot("plot", pieData, pieLayout);

  
  function init(){
		buildPie("All")
  };

  init();
  
  
  
    