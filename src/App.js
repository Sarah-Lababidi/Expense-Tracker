import './App.css';
import Info from './components/Info';
import TransactionForm from './components/TransactionForm';
import TransactionsList from './components/TransactionsList';

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <header className="text-center my-3">
          <h1>Expense Tracker</h1>
        </header>
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            <Info />
            <TransactionsList />
          </div>
          <div className="col-12 col-md-6 my-4 mt-my-0 border-left">
            <TransactionForm />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;