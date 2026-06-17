import React from 'react'
import Herosection from '../Components/work/WorkHerosection'
import WorkProject from '../Components/work/WorkProject'




const Work = () => {
   return(
    <div className='flex flex-col gap-2'>
        <Herosection/>
        <WorkProject/>
    </div>
   )

}

export default Work
