import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import '../App.css'

function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? '+' : '-';
    return (
        <div>
            <span><button onClick={()=>deleteTransaction(transaction.id)} id="delete-btn" className="btn btn-danger py-2 px-3">X</button></span>
            <span className="py-2 px-3 d-inline-block text-capitalize">{transaction.text}</span>
            <span className="float-right py-2 px-3"> {sign}${Math.abs(transaction.amount)}</span>
        </div>
    );
}

function TransactionsList() {
    const { transactions } = useContext(GlobalContext);
    const renderAllTrans = transactions.map(trans => {
        const classes = "list-group-item my-1 p-0 " + (trans.amount > 0 ? 'plus' : 'minus');
        return (
            <li key={trans.id} className={classes}>
                <Transaction transaction={trans} />
            </li>
        );
    })
    return (
        <div id="transList" className="w-75 mx-auto">
            <h5 className="text-center font-weight-bold">History</h5>
            <hr className="mt-1 mb-4" />
            <ul className="list-group">
                {renderAllTrans}
            </ul>
        </div>

    );
}
export default TransactionsList;