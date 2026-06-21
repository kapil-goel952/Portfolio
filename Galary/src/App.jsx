import { useState } from 'react'
import axios from 'axios'

function App() {
//   const [data,setdata]=useState([])
//  async function getData(){
//     const response= await axios.get('https://picsum.photos/v2/list')
//       setdata(response.data)
//       console.log([response.data.author]);
      
      // }
 
  return (
   <div className='h-100 w-100 bg-red-200'>
      <div>
        <h1>hello guyss</h1>
      </div>
      {/* <div>
        {data.map((elem,idx)=>{
          return (
            <div key={elem.id}>
                <h1> ram ram {idx} </h1>
                <p>{elem.author}</p>
            </div>
          )
        })}
      </div> */}
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ex et, velit quos illum hic voluptas delectus natus, dolor rem sit libero laudantium repellendus dolores. Laboriosam beatae accusamus impedit veritatis!</p>
        <button onClick={getData}
        className='bg-green-300'>
          get data
        </button>
      </div>
   </div>
  )
}

export default App
