// SolidJS
export default function App() {
  return (
    <div>
      {/* Header */ }
      <header
      class="p-2 bg-white items-center flex flex-col fixed z-10 w-full">
          <h1 class="text-xl text-black">
            bille
          </h1>
      </header>

      {/* Content */ }
      <div class="pt-16 p-4 md:p-1 md:pt-16 lg:w-8/12 items-center mx-auto space-y-3 text-sm lg:text-base">
        <div class="pb-16">
          <h1 class="text-white text-2xl">
            Electric bill calculator
          </h1>

          <p class="text-[rgb(220,220,220)]">
            Helps calculate your electricity bill based on your usage - for free
          </p>
        </div>

        <div class="p-4 bg-[rgb(25,25,25)]">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-4">
              <h2 class="text-xl text-white">
                Country
              </h2>

              <select class="w-full p-2 bg-[rgb(50,50,50)] text-white">
                <option value="malaysia">Malaysia</option>
              </select>
            </div>
            
            <div class="flex flex-col gap-4">
              <h2 class="text-xl text-white">
                Currency
              </h2>

              <select class="w-full p-2 bg-[rgb(50,50,50)] text-white">
                <option value="myr">MYR</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */ }
    </div>
  )
}