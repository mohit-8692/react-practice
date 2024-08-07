import { useState } from 'react';
import InputBox from './InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {
  const [amount, setAmount] = useState(0)
  const [To, SetTo] = useState("usd")
  const [from, SetFrom] = useState("inr")
  const [convertAmt, SetConvertAmt] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = ()=>{
    SetFrom(To);
    SetTo(from);
    SetConvertAmt(amount);
    setAmount(convertAmt);
  }

  const convert = ()=>{
    SetConvertAmt(amount*currencyInfo[To]);
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url("https://imgs.search.brave.com/dZfq3Euqnu8vvCyJGBDP-GCS4WAsHDcEqJzszWAYWGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/NDA1MTMzL3Bob3Rv/L2N1cnJlbmNpZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWZZcXh0NzF0YlNH/R0s4cFpfcFJ3Z0ty/ZjJnYzBZd0NnRW41/SnVEZ2RZdU09")`,
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
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>{setAmount(amount)}}
                            selectCurrency={from}
                            onAmountChange={(amount)=>{setAmount(amount)}}
                            
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
                            amount={convertAmt}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>{SetTo(currency)}}
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
