// SolidJS

import Header from "./components/Header"
import { calculateBill } from "./Logic.cjs"

export default function App() {
  return (
    <div>
      {/* header */ }
      <header
      class="p-2 bg-white items-center flex flex-col fixed z-10 w-full hover:bg-[rgb(225,225,225)] duration-500">
          <h1 class="text-xl text-black">
            bille
          </h1>
      </header>

      {/* content */ }
      <div class="pt-16 p-4 md:p-1 md:pt-16 lg:w-7/12 items-center mx-auto space-y-3 text-sm lg:text-base">
        <Header />

        {/* country and currency selection */ }
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="flex flex-col gap-2">
              <h2 class="text-xl text-white">
                Country
              </h2>

              <select class="w-full p-2 rounded-md text-black bg-white hover:bg-[rgb(225,225,225)] duration-300">
                <option value="malaysia">Malaysia (MYR)</option>
              </select>
            </div>
            
            <div class="flex flex-col gap-2">
              <h2 class="text-xl text-white">
                Provider
              </h2>

              <select class="w-full p-2 rounded-md text-black bg-white hover:bg-[rgb(225,225,225)] duration-300">
                <option value="tnb">Tenaga Nasional Berhad</option>
                <option value="sesb">Sabah Electricity Sdn Bhd</option>
                <option value="seb">Sarawak Electricity Berhad</option>
              </select>
            </div>
          </div>
        </div>

        <hr className="border-t-2 my-4 border-[rgb(50,50,50)]" />

        {/* usage */ }
        <div class="p-2 flex flex-col gap-4 bg-[rgb(255,255,255)] rounded-md">
          <div class="flex flex-row gap-2">
            <button class="p-2 bg-black rounded-md text-white">
              Calculator
            </button>

            <button class="p-2 bg-black rounded-md text-white">
              Details
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div class="p-2 flex flex-col gap-2">
              <h2 class="text-lg md:text-xl text-black">
                Usage (kWh)
              </h2>

              <input type="number" class="rounded-md text-black text-2xl bg-[rgb(255,255,255)] duration-300" placeholder="0" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-2">
            <div class="p-4 md:p-2 flex flex-col md:col-span-3 gap-2 rounded-md bg-[rgb(22,191,236)]">
              <h2 class="text-lg md:text-xl text-black">
                Total Due
              </h2>

              <p class="text-xl md:text-2xl text-black">
                MYR 1,580.65
              </p>
            </div>

            <div class="p-4 md:p-2 flex flex-col gap-2 rounded-md bg-[rgb(225,225,225)]">
              <h2 class="text-lg md:text-xl text-black">
                Service Charge
              </h2>

              <p class="text-xl md:text-2xl text-black">
                MYR 125.86 (8%)
              </p>
            </div>

            <div class="p-4 md:p-2 flex flex-col gap-2 rounded-md bg-[rgb(225,225,225)]">
              <h2 class="text-lg md:text-xl text-black">
                  Current Bill
              </h2>

              <p class="text-xl md:text-2xl text-black">
                MYR 1243.00
              </p>
            </div>
          </div>

          <div class="flex flex-row gap-2 items-center justify-between">
            <button onClick={() => {}} class="p-2 bg-[rgb(22,236,106)] rounded-md text-black">
              Calculate
            </button>
            <div class="flex flex-row items-center gap-2">

              <h2 class="text-base md:text-xl text-black">
                Enable 1% late payment fee
              </h2>

              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" />
                <div class="w-11 h-6 bg-[rgb(50,50,50)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[rgb(22,236,106)]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* calculation */}
        <div class="p-2 flex flex-col gap-4 bg-[rgb(225,225,225)] rounded-md">
          <h1 class="p-2 text-xl md:text-2xl text-black">
            Calculation
          </h1>
        </div>
      </div>

      {/* footer */ }
    </div>
  )
}