//Adapted from library by Mike Bostock
//https://bl.ocks.org/Andrew-Reid/0aedd5f3fb8b099e3e10690bd3v48bd458

function buildGraph(sentiment_method) {
	// var svg = d3v4.select('svg');
	var svg = d3v4.select('#barsvg');
	
	svg.selectAll("*").remove();
	margin = { top: 20, right: 20, bottom: 30, left: 150 },
	width = +svg.attr('width') - margin.left - margin.right,
	height = +svg.attr('height') - margin.top - margin.bottom,
	g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

var y = d3v4
	.scaleBand() // x = d3v4.scaleBand()
	.rangeRound([0, height]) // .rangeRound([0, width])
	.paddingInner(0.05)
	.align(0.1);

var x = d3v4
	.scaleLinear() // y = d3v4.scaleLinear()
	.rangeRound([0, width]); // .rangeRound([height, 0]);

var z = d3v4.scaleOrdinal().range(['#FFD87D', '#F05179', '#1E8783', '#2FBCB3', '#85C441', '#98abc5']);

d3v4.json(`/sentiment/${sentiment_method}`, function(error, data) {
	if (error) throw error;
	data.forEach((record, i) => {
		data[i].total = 0;
		for (var key in record) {
            if(key !== "Effect") data[i].total = data[i].total + (record[key])
		}
		return record;
	});
    var keys = ["Very Negative", "Negative", "Neutral", "Positive", "Very Positive"]

	data.sort(function(a, b) {
		return b.total - a.total;
	});
	y.domain(
		data.map(function(d) {
			return d.Effect;
		})
	); // x.domain...
	x.domain([
		0,
		d3v4.max(data, function(d) {
			return d.total*.6;
		}),
	]).nice(); // y.domain...
	z.domain(keys);

	g.append('g')
		.selectAll('g')
		.data(d3v4.stack().keys(keys)(data))
		.enter()
		.append('g')
		.attr('fill', function(d) {
			return z(d.key);
		})
		.selectAll('rect')
		.data(function(d) {
			return d;
		})
		.enter()
		.append('rect')
		.transition()
    .duration(1000)
		.attr('y', function(d) {
			return y(d.data.Effect);
		}) //.attr("x", function(d) { return x(d.data.State); })
		.attr('x', function(d) {
			return x(d[0]);
		}) //.attr("y", function(d) { return y(d[1]); })
		.attr('width', function(d) {
			return x(d[1]) - x(d[0]);
		}) //.attr("height", function(d) { return y(d[0]) - y(d[1]); })
		.attr('height', y.bandwidth()); //.attr("width", x.bandwidth());

	g.append('g')
		.attr('class', 'axis')
		.attr('transform', 'translate(0,0)') //  .attr("transform", "translate(0," + height + ")")
		.call(d3v4.axisLeft(y))
		.attr('font-size', 14)
		.attr('font-weight', 'bold'); //   .call(d3v4.axisBottom(x));

	g.append('g')
		.attr('class', 'axis')
		.attr('transform', 'translate(0,' + height + ')') // New line
		.call(d3v4.axisBottom(x).ticks(null, 's')) //  .call(d3v4.axisLeft(y).ticks(null, "s"))
		.append('text')
		.attr('y', 1) //     .attr("y", 2)
		.attr('x', x(x.ticks().pop())) //     .attr("y", y(y.ticks().pop()) + 0.5)
		.attr('dy', '0.32em') //     .attr("dy", "0.32em")
		.attr('fill', '#000')
		.attr('font-weight', 'bold')
		.attr('text-anchor', 'start')
		.attr('transform', 'translate(' + -width + ',-10)'); // Newline

	g.append('text')
		// Position the text for x axis label
		.attr('transform', `translate(${width / 2}, -8)`)
		.attr('text-anchor', 'middle')
		.attr('font-size', '16px')
		.attr('font-weight', 'bold')
		.attr('fill', 'black')
		.text('Number of Mentions in User Reviews');

	var legend = g
		.append('g')
		.attr('font-family', 'sans-serif')
		.attr('font-size', 12)
		.attr('font-weight', 'bold')
		.attr('text-anchor', 'end')
		.selectAll('g')
		.data(keys.slice().reverse())
		.enter()
		.append('g')
		//.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
		.attr('transform', function(d, i) {
			return 'translate(-50,' + (300 + i * 20) + ')';
		});

	legend
		.append('rect')
		.attr('x', width - 19)
		.attr('width', 19)
		.attr('height', 19)
		.attr('fill', z);

	legend
		.append('text')
		.attr('x', width - 24)
		.attr('y', 9.5)
		.attr('dy', '0.32em')
		.text(function(d) {
			return d;
		});

	// Prep the tooltips

	//add tooltip------------------------------------------------
	var toolTip = d3v4.select('#tooltip');

	//show/hide tooltip-------------------------------------------
	g.selectAll('rect')
		.on('mouseover', function(d) {
			var pos = d3v4.mouse(this);
			// console.log(pos);
			// console.log(d);
			toolTip
				.transition()
				// .duration(500)
				.style('opacity', 1)
				.style('left', d3v4.event.pageX + 'px')
				.style('top', d3v4.event.pageY + 'px')
				.style('display', 'block')
				.text(d[1]);
			// .text(d.data["Very Negative"])
		})
		.on('mouseout', function() {
			toolTip.style('display', 'none');
		});
});
};
  function init(){
		// onChange("All Methods")
		buildGraph("sentiment_all")
  };
  init();
  