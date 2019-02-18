function PercentPie(option) {
    this.backgroundColor = option.backgroundColor || ' transparent';
    this.color = option.color || ['#38a8da', '#d4effa'];
    this.fontSize = option.fontSize || 10;
    this.domEle = option.domEle;
    this.value = option.value;
    this.name = option.name;
    this.title = option.title;
}
PercentPie.prototype.init = function (){
    var _that = this;
    var option = {
        backgroundColor: _that.backgroundColor,
        color: _that.color,
        title: {
            text: _that.title,
            top: '75%',
            left: '18%',
            textStyle: {
                color: '#fbfeff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 12,
            }
        },
        series: [{
            name: '来源',
            type: 'pie',
            radius: ['60%', '75%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    textStyle: {
                        fontSize: _that.fontSize,
                        color:"#fcff20",
                        fontWeight: 'bold'
                    },
                    formatter: '{b}\n{c}'
                }
            },
            data: [{
                    value: _that.value,
                    name: _that.name,
                    label: {
                        normal: {
                            show: true
                        }
                    }
                },
                {
                    value: 100 - _that.value,
                    name: ''
                }
            ]
        }]
    };

    echarts.init(_that.domEle).setOption(option);
};