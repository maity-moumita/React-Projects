import { useState } from "react"


function App() {

  let [count, setCount] = useState(0);

  const Addition = () => {
    count = count + 1;

    setCount(count);
  }

  const Subtration = () => {
    setCount((prevCount) => prevCount > 0 ? count = count - 1 : 0);
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-emerald-800 h-96 w-96 rounded text-center flex flex-col justify-center items-center space-y-4">
          <h1 className="text-white font-bold text-2xl">Counter App</h1>
          <button onClick={Addition} className="bg-pink-900 hover:bg-pink-950 text-white px-4 py-2 rounded">
            Add
          </button>
          <button onClick={Subtration} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            Sub
          </button>
          <h2 className="text-yellow-500 font-extrabold">Count: {count}</h2>
        </div>
      </div>
    </>
  )
}

export default App
