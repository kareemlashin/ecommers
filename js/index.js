$(document).ready(function () {
    
    $(".bar ,.bar2").peity("bar",{width:'100%',height:'60'});

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
    
      var options = {
        chart: {
          height: 300,
          type: "pie"
        },
        series: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        legend: {
          position: "bottom"
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      };
    
      var chart = new ApexCharts(
        document.querySelector("#chart-home-one"),
        options
      );
    
      chart.render();
    
      window.Apex = {
        stroke: {
          width: 3
        },
        markers: {
          size: 0
        },
        tooltip: {
          fixed: {
            enabled: true
          }
        }
      };
    
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
    
      // data for the sparklines that appear below header area
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
        colors: ["#DCE6EC"],
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
    
      var spark3 = {
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
        xaxis: {
          crosshairs: {
            width: 1
          }
        },
        yaxis: {
          min: 0
        },
        title: {
          text: "$135,965",
          offsetX: 0,
          style: {
            fontSize: "24px",
            cssClass: "apexcharts-yaxis-title"
          }
        },
        subtitle: {
          text: "Profits",
          offsetX: 0,
          style: {
            fontSize: "14px",
            cssClass: "apexcharts-yaxis-title"
          }
        }
      };
      var spark2 = {
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
      var spark2 = new ApexCharts(document.querySelector("#spark2"), spark2);
      spark2.render();
      var spark3 = new ApexCharts(document.querySelector("#spark3"), spark3);
      spark3.render();
      var options = {
        series: [80],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
                
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#e3e9ef'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 0.8,
                gradientToColors: ['#61DBC3'],
                inverseColors: false,
                opacityFrom: [1, 0.2],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    };
    
    var options2 = {
        series: [70],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
                 
    
    
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#000'
                    },
                    value: {
                        show: true,
                        color: '#000',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#3870AA'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'red',
                type: 'diagonal1',
                shadeIntensity: 1,
                gradientToColors: ['#3870AA'],
                inverseColors: false,
                opacityFrom: [1, 0.2],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    };
    
    var options3 = {
        series: [75],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
            
    
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#FEB6A4'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 0.8,
                gradientToColors: ['#FEB6A4'],
                inverseColors: false,
                opacityFrom: [1, 0.2],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    };
    
    var options4 = {
        series: [85],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
                 
    
    
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#000'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#fcecec'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 0.8,
                gradientToColors: ['#e64141'],
                inverseColors: false,
                opacityFrom: [1, 0.5],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    };
    
    var options5 = {
        series: [{
            name: 'series1',
            data: [30, 50, 70, 65, 80, 90]
        }],
        chart: {
            height: 110,
            type: 'area',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            }
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'numeric',
            lines: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0
            },
        }],
        tooltip: {
            x: {
                show: false,
                format: 'dd/MM/yy HH:mm'
            },
        },
    };
    
    var options6 = {
        series: [{
            name: 'series1',
            data: [150, 650, 450, 650, 350, 480, 900]
        }],
        chart: {
            height: 110,
            type: 'line',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            }
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: 'numeric',
            lines: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0
            },
        }],
        tooltip: {
            x: {
                show: false,
                format: 'dd/MM/yy HH:mm'
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                colorStops: [{
                        offset: 0,
                        color: "#EB656F",
                        opacity: 1
                    },
                    {
                        offset: 20,
                        color: "#FAD375",
                        opacity: 1
                    },
                    {
                        offset: 60,
                        color: "#61DBC3",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "#95DA74",
                        opacity: 1
                    }
                ]
            }
        },
    };
    
    var options7 = {
        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
        chart: {
            height: 110,
            type: 'bar',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            },
            events: {
                click: function(chart, w, e) {}
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '20px',
                distributed: true,
                endingShape: 'rounded',
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            type: 'numeric',
            lines: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0
            },
        }],
    };
    
    var options8 = {
        series: [{
            name: 'series1',
            data: [41, 50, 38, 61, 42, 70, 100]
        }, {
            name: 'series2',
            data: [21, 42, 55, 32, 34, 92, 41]
        }],
        chart: {
            height: 110,
            type: 'area',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            }
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
            curve: 'smooth'
        },
        xaxis: {
            type: 'numeric',
            lines: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        yaxis: [{
            y: 0,
            offsetX: 0,
            offsetY: 0,
            labels: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0
            },
        }],
        tooltip: {
            x: {
                show: false,
                format: 'dd/MM/yy HH:mm'
            },
        },
    };
    
    var options9 = {
        chart: {
            height: 400,
            type: 'bar',
            parentHeightOffset: 0,
            fontFamily: 'Poppins, sans-serif',
            toolbar: {
                show: false,
            },
        },
        colors: ['#EB4738', '#F7AE1D'],
        grid: {
            borderColor: '#c7d2dd',
            strokeDashArray: 5,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '15px',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'In Progress',
            data: [40, 28, 47, 22, 34, 25]
        }, {
            name: 'Complete',
            data: [30, 20, 37, 10, 28, 11]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            labels: {
                style: {
                    colors: ['#353535'],
                    fontSize: '16px',
                },
            },
            axisBorder: {
                color: '#8fa6bc',
            }
        },
        yaxis: {
            title: {
                text: ''
            },
            labels: {
                style: {
                    colors: '#353535',
                    fontSize: '16px',
                },
            },
            axisBorder: {
                color: '#f00',
            }
        },
        legend: {
            horizontalAlign: 'right',
            position: 'top',
            fontSize: '16px',
            offsetY: 0,
            labels: {
                colors: '#353535',
            },
            markers: {
                width: 10,
                height: 10,
                radius: 15,
            },
            itemMargin: {
                vertical: 0
            },
        },
        fill: {
            opacity: 1
    
        },
        tooltip: {
            style: {
                fontSize: '15px',
                fontFamily: 'Poppins, sans-serif',
            },
            y: {
                formatter: function(val) {
                    return val
                }
            }
        }
    };
    
    var options10 = {
        series: [73],
        chart: {
            height: 350,
            type: 'radialBar',
            offsetY: 0
        },
        colors: ['red', 'red'],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                        formatter: function(val) {
                            return val + "%";
                        }
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
        },
        stroke: {
            dashArray: 4
        },
        labels: ['Achieve Goals'],
    };
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    
    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
    chart2.render();
    
    var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
    chart3.render();
    
    var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
    chart4.render();
    

    
    var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
    chart5.render();
    
    var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
    chart6.render();
    
    var chart7 = new ApexCharts(document.querySelector("#chart7"), options7);
    chart7.render();
    
    var chart8 = new ApexCharts(document.querySelector("#chart8"), options8);
    chart8.render();
    
    var chart9 = new ApexCharts(document.querySelector("#chart9"), options9);
    chart9.render();
    
    var chart10 = new ApexCharts(document.querySelector("#chart10"), options10);
    chart10.render();
    
    var options11 = {
        chart: {
          type: "donut"
        },
        dataLabels: {
          enabled: false
        },
        series: [44, 55, 13, 33]
      };
      
      var chart11 = new ApexCharts(document.querySelector("#chart11"), options11);
      
      chart11.render();
});