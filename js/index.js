$(document).ready(function() {
	var bubbleChart = new d3.svg.BubbleChart({
		supportResponsive: true,
		//container: => use @default
		size: 600,
		//viewBoxSize: => use @default
		innerRadius: 600 / 3.5,
		//outerRadius: => use @default
		radiusMin: 50,
		//radiusMax: use @default
		//intersectDelta: use @default
		//intersectInc: use @default
		//circleColor: use @default
		data: {
			items: [{
				text: "教师",
				count: "236"
			}, {
				text: "找工作",
				count: "382"
			}, {
				text: "前端开发",
				count: "170"
			}, {
				text: "我想看日出",
				count: "123"
			}, {
				text: "带我出去玩",
				count: "12"
			}, {
				text: "正能量",
				count: "170"
			}, {
				text: "帮谁都能学到点什么",
				count: "382"
			}, {
				text: "水宝宝",
				count: "10"
			}, {
				text: "加油",
				count: "170"
			}, ],
			eval: function(item) {
				return item.count;
			},
			classed: function(item) {
				return item.text.split(" ").join("");
			}
		},
		plugins: [{
			name: "central-click",
			options: {
				text: "(查看详情)",
				style: {
					"font-size": "12px",
					"font-style": "italic",
					"font-family": "Source Sans Pro, sans-serif",
					//"font-weight": "700",
					"text-anchor": "middle",
					"fill": "white"
				},
				attr: {
					dy: "65px"
				},
				centralClick: function() {
					alert("详情结果!");
				}
			}
		}, {
			name: "lines",
			options: {
				format: [{ // Line #0
					textField: "count",
					classed: {
						count: true
					},
					style: {
						"font-size": "28px",
						"font-family": "Source Sans Pro, sans-serif",
						"text-anchor": "middle",
						fill: "white"
					},
					attr: {
						dy: "0px",
						x: function(d) {
							return d.cx;
						},
						y: function(d) {
							return d.cy;
						}
					}
				}, { // Line #1
					textField: "text",
					classed: {
						text: true
					},
					style: {
						"font-size": "14px",
						"font-family": "Source Sans Pro, sans-serif",
						"text-anchor": "middle",
						fill: "white"
					},
					attr: {
						dy: "20px",
						x: function(d) {
							return d.cx;
						},
						y: function(d) {
							return d.cy;
						}
					}
				}],
				centralFormat: [{ // Line #0
					style: {
						"font-size": "50px"
					},
					attr: {}
				}, { // Line #1
					style: {
						"font-size": "30px"
					},
					attr: {
						dy: "40px"
					}
				}]
			}
		}]
	});
});