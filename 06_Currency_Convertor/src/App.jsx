import { useState } from 'react';
import './App.css'
import InputBox from './components/InputBox';
import UseCurrencyInfo from './hooks/useCurrencyInfo';
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);


  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);


  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert =() => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const BackgroundImage = "https://img.freepik.com/free-vector/mobile-phone-with-money-cashback-online-shopping_88138-833.jpg?w=1800&t=st=1694090936~exp=1694091536~hmac=51aa55fbc79ef69cbb8a18026a1076ef022f682aac1e454a92b2bd79be8c8879";

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                CurrencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                CurrencyOptions={options}
                onCurrencyChange={(currency)=>setTo(currency)}
                selectCurrency={from}
                amountDisable

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default App
