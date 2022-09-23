import "./ExpenseItem.css"
function ExpenseItems (props) {
    const month = props.date.toLocaleString('ko-KR', { month: 'long'});
    return (
        <>
            <h3 className="header">header</h3>
            <p className="text">{props.title}</p>
            <p className="text">{props.amount}</p>
            <p className="text">{month}</p>
        </>
    );
};

export default ExpenseItems;