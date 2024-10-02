import React from 'react'
import { GlobeDemo } from "./ui/GridGlobe";

const Travel = () => {
  return (
    <div className='py-20' id="travel">
        <h1 className='heading'>
            Ticking off my {' '}
            <span className='text-purple'>Bucket List</span>
       </h1>
        <div className="border border-grey-200 h-[85vh] flex flex-col pt-0 justify-center rounded-3xl relative my-20 z-10">
            <div className="h-[85vh] w-full flex flex-col items-center justify-center">
                <GlobeDemo />
            </div>
        </div>
    </div>

  )
}

export default Travel