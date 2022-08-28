import React from 'react'
import Loader from 'react-loaders'

const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Loader type="Rings" color="#00BFFF" height={550} width={80} />
    </div>
  )
}

export default Loading