import React from 'react'
// rendering on client side. okay for a few thousand records,
// but for more then server side would probably be better
export const GlobalFilter = ({filter, setFilter}) => {
  return(
    <div className="bg-gray-200 border border-solid border-gray-300 px-4 py-4 max-w-xs rounded">
      <span className="text-green-600 font-bold text-left block">
        SEARCH
        <input value={filter || ''} onChange={e => setFilter(e.target.value)} className="px-2 rounded ml-4 bold text-green-500 h-8 w-48"/>
      </span>
    </div>
  )
}