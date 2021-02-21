import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Info() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map( trans => trans.amount);
    const incomeAmount = amounts.filter( item => item >0);
    const expenseAmount = amounts.filter( item => item <=0);
    const income = incomeAmount.length>0 ? incomeAmount.reduce((acc, item) => acc + item, 0).toFixed(2) : 0;
    const expense = expenseAmount.length>0 ? expenseAmount.reduce((acc, item) => acc + item, 0).toFixed(2) : 0; 
    const balance = amounts.length>0 ? amounts.reduce((acc, item) => acc + item, 0).toFixed(2): 0;
    let sign = "";
    if(balance>0)
        sign = "+";
    else if(balance<0)
        sign = "-";  
    return (
        <div className="text-center font-weight-bold text-uppercase mb-3">
            <div className="balance">
                <p className="mb-1">Your Balance</p>
                <p>{sign}$<span>{Math.abs(balance)}</span></p>
            </div>
            <div className="w-50 mx-auto d-flex p-2 bg-white rounded justify-content-center text-capitalize">
                <div className="income border-right px-3 mx-0 border-right">
                    <p className="mb-1">Income</p>
                    <p className="text-success">{income>0?"+":""}$<span>{income}</span></p>
                </div>
                <div className="expense px-3 mx-0">
                    <p className="mb-1">Expenses</p>
                    <p className="text-danger">{expense<0?"-":""}$<span>{Math.abs(expense)}</span></p>
                </div>
            </div>
        </div>
    );
}

export default Info;