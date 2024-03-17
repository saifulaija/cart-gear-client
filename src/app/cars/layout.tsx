import React from 'react'

const carLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <p className='bg-green-400'>this is car layout</p>
        {children}
    </div>
  )
}

export default carLayout