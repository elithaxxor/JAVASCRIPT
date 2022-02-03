import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {TransactionList} from './components/TransactionList'
import {IncomeAndExpenses} from './components/IncomeAndExpenses'
import {AddTransaction} from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
            <Balance />
            <IncomeAndExpenses />
            <TransactionList />
            <AddTransaction />



      </div>
    </GlobalProvider>
  );
}

export default App;
