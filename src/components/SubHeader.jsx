import React from 'react'

export default function SubHeader({data}) {
  return (
    <>{
      data &&
      data.slice(0, 1).map((location) => (
        
    <div className='flex justify-between w-full mt-9 items-center'>
      <h1 className=' text-3xl font-bold'> Stays in {location.city} </h1>
      <h2>{data.length}+ stays</h2>
    </div>
      ))
    }
    </>
  )
}
