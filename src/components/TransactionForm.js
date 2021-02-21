import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Form, FormGroup, FormFeedback, Button, Label, Input } from 'reactstrap';

function TransactionForm() {
    const { addTransaction, transactions } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (err) return false;
        let transAmount = 0;
        transAmount = Number(parseFloat(amount.replaceAll(",", "")).toFixed(2));
        const newTrans = {
            id: transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 0,
            text,
            amount: transAmount
        }
        addTransaction(newTrans);
        setText('');
        setAmount('');
    }
    const validate = () => {
        if (amount) {
            const isNum = !isNaN(Number(amount.replaceAll(",", "")))? "" : "Please enter a number";
            return isNum;
        } else {
            return "";
        }
    }
    let err = validate()
    return (
        <Form onSubmit={handleSubmit} className="font-weight-bold w-75 mx-auto">
            <h5 className="text-center mb-0 font-weight-bold">Add A New Transaction</h5>
            <hr className="mt-1 mb-3" />
            <FormGroup row>
                <Label htmlFor="text">Text</Label>
                <Input type="text" value={text}  onChange={(e) => setText(e.target.value)} className="form-control" required />
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="amount">Amount <br /> (negative-expense, positive-income)</Label>
                <Input type="text" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} 
                    invalid={err !== "" && amount !== ""} valid={err === "" && amount !== ""} required />
                <FormFeedback invalid>{err}</FormFeedback>
            </FormGroup>
            <FormGroup row>
                <Button type="submit" className="btn btn-dark w-100" disabled={err!==""}>Add Transaction</Button>
            </FormGroup>
        </Form>
    );
}
export default TransactionForm;