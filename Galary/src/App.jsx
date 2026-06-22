import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data,setdata]=useState([])
 async  function getdata(){
    const response =await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    console.log(response.data);
    setdata(response.data)
  }

  let userdata=<h1 className='text-white text-2xl'>no user avaliable</h1>
   if (data.length>0) {
    userdata=data.map((elem,idx)=>{
            return(
              <div key={idx} className=''>
                <img src={elem.download_url} alt="img" className='h-50 w-50 border-2'/>
              </div>
            )
        })
   }

   useEffect(
()=>{
  getdata()
}
   ,[])
  return (
   <div className='h-full w-screen min-h-screen flex flex-col  bg-gray-900'>
    {/* <div className='bg-gray-700 text-black'>
    <button  onClick={getdata}>get data </button>

    </div> */}
    <div className='flex flex-wrap'>
      {userdata}

    </div>
   </div>
  )
}

export default App

 
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
    //   const [data,setdata]=useState([])
    //  async function getData(){
    //     const response= await axios.get('https://picsum.photos/v2/list')
    //       setdata(response.data)
    //       console.log([response.data.author]);
          
          // }