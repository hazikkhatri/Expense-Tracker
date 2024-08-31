import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './components/Navbar';
import { IoIosAddCircle } from "react-icons/io";
import { IoMdDoneAll } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";

function App() {
  const [showInput, setshowInput] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState("");
  const [expenseValue, setExpenseValue] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  const addToObj = () => {
    if (expense && expenseValue) {
      const newExpenses = {
        name: expense,
        amount: parseFloat(expenseValue),
        id: uuidv4(),
      };

      setExpenses((prevExpenses) => [...prevExpenses, newExpenses]);
      setTotalAmount((prevTotal) => prevTotal + newExpenses.amount);
      setExpense("");
      setExpenseValue("");
      setshowInput(false);
    }
  };

  const toggleInput = () => {
    setshowInput(!showInput);
  };

  const handleChange = (e) => {
    setExpense(e.target.value);
  };

  const handleValueChange = (e) => {
    setExpenseValue(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-[80vh] bg-gray-100 px-5 py-8 w-full md:w-3/4 rounded-lg shadow-lg">
        <div className="tracker flex items-center justify-between mb-6">
          <div className="bg-blue-600 px-4 py-3 rounded-lg shadow-md">
            <h1 className="text-white font-semibold font-['Poppins'] text-2xl">Total Expenses</h1>
            <div className="text-2xl font-bold font-mono text-white">${totalAmount.toFixed(2)}</div>
          </div>
          <div>
            <div onClick={toggleInput} title="Add New Transaction" className="text-blue-600 cursor-pointer text-5xl hover:rotate-180 transition-all duration-500">
              <IoIosAddCircle />
            </div>
          </div>
        </div>
        {showInput && (
          <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
            <div className="InputBox bg-white p-6 rounded-lg shadow-lg w-80">
              <div className='flex items-baseline justify-between'>
                <h2 className="text-gray-700 text-lg font-semibold mb-4">Add New Expense</h2>
                <IoMdCloseCircleOutline title='Close' onClick={toggleInput} className='text-xl cursor-pointer' />
              </div>
              <div className="mb-4">
                <label className="text-gray-600">Item Name</label>
                <input onChange={handleChange} value={expense} type="text" className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div className="mb-6">
                <label className="text-gray-600">Amount</label>
                <input value={expenseValue} onChange={handleValueChange} type="number" className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <button onClick={addToObj} className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                <IoMdDoneAll className="mr-2 text-2xl" /> Add Expense
              </button>
            </div>
          </div>
        )}
        <div className="showTransaction mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-gray-700 font-semibold text-xl mb-4">Item</h3>
              <ul className="space-y-3">
                {expenses.map(item => (
                  <li key={item.id} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg shadow-md">{item.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gray-700 font-semibold text-xl mb-4">Amount</h3>
              <ul className="space-y-3">
                {expenses.map(item => (
                  <li key={item.id} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg shadow-md">${item.amount.toFixed(2)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
