import '../Chart/Chart.css';
import Chartbar from './Chartbar';

const Chart = (props) => {
    const dataPointsValue = props.datapoint.map(datapoint => datapoint.value);
    const totalMax = Math.max(...dataPointsValue);
    return (
        <div>
            <div className='chart'>
                {props.datapoint.map(datapoint => (
                    <Chartbar
                        key={datapoint.label}
                        value={datapoint.value}
                        maxValue={totalMax}
                        label={datapoint.label}
                    />
                ))
            }
            </div>
        </div>
    )
}
export default Chart;