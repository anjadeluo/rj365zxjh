$(function(){
    var data = [
        {name: '宰荡', value: 50},
        {name: '丰登', value: 50},
        {name: '栽麻', value: 50},
        {name: '榕江县政府', value: 50},
        {name: '车江', value: 50},
        {name: '平永', value: 50},
        {name: '塔石', value: 50},
        {name: '仁里', value: 50},
        {name: '寨蒿', value: 50},
        {name: '忠诚', value: 50},
        {name: '乐里', value: 50},
        {name: '朗洞镇', value: 50},
        {name: '崇义', value: 50},
        {name: '平江', value: 50},
        {name: '平阳', value: 50},
        {name: '两汪', value: 50},
        {name: '八开', value: 50},
        {name: '计划', value: 50},
        {name: '三江', value: 50},
        {name: '定威', value: 50},
        {name: '兴华', value: 50},
        {name: '水尾', value: 50}
    ];

    var geoCoordMap = {
        '宰荡':[108.653692,26.006756],
        '丰登':[108.667418,26.030588],
        '栽麻':[108.698488,26.052315],
        '榕江县政府':[108.528876,25.937849],
        '车江':[108.546182,25.976618],
        '平永':[108.364796,26.089723],
        '塔石':[108.242196,26.171854],
        '仁里':[108.425306,26.1463],
        '寨蒿':[108.615603,26.186379],
        '忠诚':[108.56025,26.012139],
        '乐里':[108.419129,26.228839],
        '朗洞镇':[108.564042,26.362852],
        '崇义':[108.541883,26.120031],
        '平江':[108.405284,25.97641],
        '平阳':[108.355547,26.301697],
        '两汪':[108.445002,26.349063],
        '八开':[108.380449,25.859962],
        '计划':[108.338304,25.772107],
        '三江':[108.263321,26.0163],
        '定威':[108.278964,25.8567],
        '兴华':[108.177272,25.844101],
        '水尾':[108.212211,25.720212]
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    var option = {
        // backgroundColor: '#404a59',
        title: {
            text: '"榕江365助学计划"理事会人员分布图',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        bmap: {
            center: [108.528876,25.937849],
            zoom: 8,
            roam: true,
            mapStyle: {
                styleJson: [
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "#044161"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#005b96",
                            "lightness": 1
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#029fd4"
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }
                ]
            }
        },
        series : [
            {
                name: '我们的足迹',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                }
            },
            {
                name: '我们的足迹',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                showEffectOn: 'emphasis',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    };

    var chart = echarts.init(document.getElementById("map-wrap"));
    chart.setOption(option);
})
