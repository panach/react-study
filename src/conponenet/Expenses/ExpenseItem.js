import ExpenseDate from "./ExpenseDate";
import Cart from "../UI/cart";

import "./ExpenseItem.css";

function ExpenseItems (props) {
   return (
        <>
            <Cart>
                <h3 className="header">header</h3>
                <p className="text">{props.title}</p>
                <p className="text">{props.amount}</p>
                <ExpenseDate date={props.date}/>
            </Cart>
        </>
    );
};

export default ExpenseItems;