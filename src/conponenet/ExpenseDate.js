import './ExpenseDate.css';

function ExpenseDate(props) {
    const month = props.date.toLocaleString('ko-KR', { month: 'long'});
    const day = props.date.toLocaleString('ko-KR', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div>
        <p className="Etext">{month}</p>
        <p className="Etext">{day}</p>
        <p className="Etext">{year}</p>
        </div>
    );
}

export default ExpenseDate;
