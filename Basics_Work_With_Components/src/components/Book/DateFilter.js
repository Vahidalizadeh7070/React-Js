const DateFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onChangeDateFilter(event.target.value);
    }
    return (
        <div>
            <select className="form-select" aria-label="Select Date" value={props.selected} onChange={dropDownChangeHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </select>
        </div>
    )
}
export default DateFilter;