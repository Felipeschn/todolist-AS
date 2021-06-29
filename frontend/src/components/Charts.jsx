import { Pie } from 'react-chartjs-2';
import React, { Component } from 'react';


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Tarefas Concluidas', 'Tarefas nao concluidas'],
                datasets: [{
                    label: 'Tarefas',
                    data: [2, 4],
                    backgroundColor: ['#5d0cff', 'red']
                }]

            }
        }
    }

    render() {
        return (
            <div className="chart">
                <Pie
                    data={this.state.chartData}
                    options={{ responsive: true, plugins: { legend: { labels: { font: { size: 20 } } } } }} />
            </div>
        )
    }
}

export default Chart;