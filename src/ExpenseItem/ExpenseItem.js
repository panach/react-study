import "./ExpenseItem.css"
function ExpenseItems () {
    const ExpenseDate = new Date(2021, 2, 28);
    const ExpenseTitle = 'anjflkjdsalsadflkadfs';
    const ExpenseAmount = 3000000;

    return (
        <>
            <h3 className="header">header</h3>
            <p className="text">{ExpenseTitle}</p>
            <p className="text">{ExpenseDate.toISOString()}</p>
            <p className="text">{ExpenseAmount + 1 }</p>
        </>
    );
};

export default ExpenseItems;