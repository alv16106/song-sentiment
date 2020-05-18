import React from 'react';
import { Chart } from 'react-charts'
import './container.css'

class VAChart extends React.Component {
    render() {
        const {
          valence = 0,
          arousal = 0,
        } = this.props;

        const data = [
                {
                    label: '¡Esta cancion!',
                    data: [{ x: valence, y: arousal }]
                },
                {
                    label: 'Valence',
                    data: [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }]
                },
                {
                    label: 'Arousal',
                    data: [{ x: 0, y: -1 }, { x: 0, y: 0 }, { x: 0, y: 1 }]
                }
            ]
         
        const axes = [
                { primary: true, type: 'linear', position: 'bottom' },
                { type: 'linear', position: 'left' }
            ]

        const series = (s, i) => ({
            type:
                i === 0
                    ? 'bubble'
                    : 'line'
            })
    
        return (
            <div
              className="Graph"
            >
                <Chart data={data}
                    series={series}
                    axes={axes}
                    grouping="single"
                    tooltip
                    primaryCursor
                    secondaryCursor
                />
            </div>
        )
    }

}


export default VAChart;
