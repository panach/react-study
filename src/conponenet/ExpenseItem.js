import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItems (props) {
   return (
        <>
            <h3 className="header">header</h3>
            <p className="text">{props.title}</p>
            <p className="text">{props.amount}</p>
            <ExpenseDate date={props.date}/>
        </>
    );
};

export default ExpenseItems;