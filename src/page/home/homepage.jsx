import React from 'react';
import {Component} from 'react';
import './homepage.less'
import HomeTable from '../../components/home/HomeTable'

const echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/line');

export default class HomePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            item: [{
                leftItem: "今日",
                rightItem: 119934
            }, {
                leftItem: "今日",
                rightItem: 119934
            }, {
                leftItem: "今日",
                rightItem: 119934
            }]
        };
    }

    componentWillReceiveProps(newProps) {


    }

    componentDidMount() {
        this.onChangeTabs();
    }


    onChangeTabs = () => {
        window.setTimeout(() => {
            let sampleChart = echarts.init(document.getElementById('ECharts-dom'));
            sampleChart.setOption(this.setEchartOptions());
        }, 100);

    };

    setEchartOptions = () => {
        return {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
    };

    render() {

        return (
            <div>
                <div className="home-page">
                    首页
                </div>
                <div className="page-item">
                    <HomeTable data={this.state.item} title={"展示量"} titleClass={"num1"}/>
                    <HomeTable data={this.state.item} title={"点击量"} titleClass={"num2"}/>
                    <HomeTable data={this.state.item} title={"预估收益"} titleClass={"num3"}/>

                    <div className="item-sub">
                        <div id="ECharts-dom" className="charts"/>
                    </div>
                </div>
            </div>
        );
    }
}
