
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Cart from "../UI/cart";
import "./ExpenseItem.css";

function ExpenseItems (props) {
    // const [title, setTitle] = useState(props.title);

    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setAmount] = useState('');
    const [enterDate, setDate] = useState('');
    
    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // });
    const titleClickHandler = (event) => {
        setEnterTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enterTitle: event.target.value};
        // });

    };
    const amountClickHandler = (event) => {
        setAmount('event.target.value2');
    };
    const dateClickHandler = (event) => {
        setDate('event.target.value3');
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        };

        console.log(expenseDate);
    };

   return (
        <>
            <Cart>
                <form onSubmit={submitHandler}>
                <input type="text" onChange={titleClickHandler}></input>
                <h3 className="header">#{enterTitle}</h3>
                <p className="text">{enterDate}</p>
                <p className="text">{enterAmount}</p>
                <ExpenseDate date={props.date}/>
                <button onClick={titleClickHandler}>button_BTN1</button>
                <button onClick={amountClickHandler}>button_BTN2</button>
                <button onClick={dateClickHandler}>button_BTN3</button>
                </form>
            </Cart>
        </>
    );
};

export default ExpenseItems;