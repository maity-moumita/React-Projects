import axios from "axios"
import { useState } from "react";

function App() {
  const [data,setData] = useState([]);
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data);
  }

  return (
   <div>
   
   <button onClick={getData}>Read Data</button>
   <div>
    {data.map(function(elem,idx){
      return <div>
        <img  key={idx} src={elem.download_url} alt="photo" />
        <h1>{elem.id}</h1>
        <p>{elem.url}</p>
      </div>
    })}
   </div>
   </div>
  )
}

export default App
