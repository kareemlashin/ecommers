$(document).ready(function () {
    $(".bar ,.bar2").peity("bar",{width:'100%',height:'60'});
    var randomizeArray = function(arg) {
        var array = arg.slice();
        var currentIndex = array.length,
          temporaryValue,
          randomIndex;
    
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
    
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        };
    
        return array;
      };
    var sparklineData = [
        47,
        45,
        54,
        38,
        56,
        24,
        65,
        31,
        37,
        39,
        62,
        51,
        35,
        41,
        35,
        27,
        93,
        53,
        61,
        27,
        54,
        43,
        19,
        46
      ];
    var spark1 = {
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: "straight"
        },
        fill: {
          opacity: 0.3
        },
        series: [
          {
            data: randomizeArray(sparklineData)
          }
        ],
        yaxis: {
          min: 0
        },
        colors: ["#376FA9"],
        title: {
          text: "$424,652",
          offsetX: 0,
          style: {
            fontSize: "24px",
            cssClass: "apexcharts-yaxis-title"
          }
        },
        subtitle: {
          text: "Sales",
          offsetX: 0,
          style: {
            fontSize: "14px",
            cssClass: "apexcharts-yaxis-title"
          }
        }
      };
       
      var spark1 = new ApexCharts(document.querySelector("#spark1"), spark1);
      spark1.render();
    function inc1() {
        let num1 = $("#oneCount").text();
        if (num1 < 200) {
          num1++;
          clearInterval(inc1);
        }
        $("#oneCount").text(num1);
      };
      setInterval(inc1, 40);
      function inc2() {
        let num2 = $("#twoCount").text();
        if (num2 < 300) {
          num2++;
          clearInterval(inc2);
        }
        $("#twoCount").text(num2);
      };
      setInterval(inc2, 40);
      function inc3() {
        let num3 = $("#threeCount").text();
        if (num3 < 200) {
          num3++;
          clearInterval(inc3);
        }
        $("#threeCount").text(num3);
      };
      setInterval(inc3, 40);
    
      function inc4() {
        let num4 = $("#fourCount").text();
        if (num4 < 200) {
          num4++;
          clearInterval(inc4);
        }
        $("#fourCount").text(num4);
      };
      setInterval(inc4, 40);
});