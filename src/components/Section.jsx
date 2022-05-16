import React from 'react'

function Section({ title, icon, count, children }) {
  return (
        <>
            <div className="flex gap-2 items-center">
                <span className="text-gray-400 inline-flex gap-1 items-center">{ icon }{ title }</span>
                <span className="font-semibold text-blue-500">{ count }</span>
            </div>
            <div>{ children }</div>
        </>
    )
}

export default Section