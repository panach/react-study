
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Cart from "../UI/cart";
import "./ExpenseItem.css";

function ExpenseItems (props) {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('up!!!!');
        console.log('run');
    };

   return (
        <>
            <Cart>
                <h3 className="header">#{title}</h3>
                <p className="text">{props.title}</p>
                <p className="text">{props.amount}</p>
                <ExpenseDate date={props.date}/>
                <button onClick={clickHandler}>button_BTN</button>
            </Cart>
        </>
    );
};

export default ExpenseItems;