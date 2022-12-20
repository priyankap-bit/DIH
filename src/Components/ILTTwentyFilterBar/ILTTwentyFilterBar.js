import './ILTTwentyFilterBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as d3 from 'd3';
const ILTTwentyFilterBar = (props) => {

    const handleSelectionPanelChange = (event) => {
        event.preventDefault();
    }

    // const formatTwoDigits = number => number.toString().padStart(2, '0');

    // const formatDate = date => [
    //     formatTwoDigits(date.getDate()),
    //     formatTwoDigits(date.getMonth() + 1),
    //     date.getFullYear(),
    // ].join('/');

    function formatTwoDigits(number) {
        return number.toString().padStart(2, '0');
    }

    function formatDate(date) {
        return [
            formatTwoDigits(date.getDate()),
            formatTwoDigits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('/');
    }

    let date = new Date();
    // let yesterday = date.setDate(date.getDate() - 1);

    return (
        <div className='ilt20-filterbar-container'>
            <div className='ilt20-filterbar-navigation'>
                <FontAwesomeIcon icon={'face-angry'} />
                <FontAwesomeIcon icon="fa-thin fa-house" />
            </div>
            <div className='ilt20-filterbar-select'>
                <select onChange={handleSelectionPanelChange} placeholder='Date of Report'>
                    <option selected value='dateofreport'>Date of Report</option>
                    <option value='today'>{formatDate(new Date())}</option>
                    <option value='yesterday'>{d3.timeFormat('%d-%m-%Y')(date.setDate(date.getDate() - 1))}</option>
                </select>
                {/* {console.log(formatDate(new Date()))} */}
                {console.log(d3.timeFormat('%d-%m-%Y')(date))}
                {/* {console.log(d3.timeFormat('%d-%m-%Y')(date.setDate(date.getDate() - 1)))} */}
            </div>
        </div>
    )
}

export default ILTTwentyFilterBar;