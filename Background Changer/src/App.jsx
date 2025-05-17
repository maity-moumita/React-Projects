import { useState } from "react";

function App() {

  let [color, setColor] = useState("black");

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <div className="fixed bottom-0 w-full flex justify-center">
        <div className="bg-emerald-700 rounded m-10 h-20 text-center">
          <h1 className="font-semibold mb-2">Background Color Changing Options</h1>
          <button onClick={() => setColor("#DC143C")} className="bg-[#DC143C] rounded-lg p-1 mx-2 w-20">Crimson</button>
          <button onClick={() => setColor("rgb(23 37 84)")} className="bg-blue-950 rounded-lg p-1 mx-2 w-20">Blue</button>
          <button onClick={() => setColor("#22543d")} className="bg-green-900 rounded-lg p-1 mx-2 w-20">Green</button>
          <button onClick={() => setColor("#964B00")} className="bg-yellow-950 rounded-lg p-1 mx-2 w-20">Brown</button>
          <button onClick={() => setColor("#880E4F")} className="bg-pink-900 rounded-lg p-1 mx-2 w-20">Pink</button>
          <button onClick={() => setColor("#742a2a")} className="bg-red-900 rounded-lg p-1 mx-2 w-20">Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
