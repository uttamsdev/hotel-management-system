import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center py-3 fixed inset-0 bg-slate-50 z-[99999]'>
      <div className='animate-spin rounded-full h-24 w-24 border-b-2 border-orange-700'/>
    </div>
  )
}

export default Loading;