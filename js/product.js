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
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();

var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
chart4.render();