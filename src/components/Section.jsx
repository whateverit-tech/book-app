import React from 'react'
import { Link } from 'react-router-dom'

function Section({ title, icon, count, isPage, url, children }) {
  return (
        <div className="my-4">
            <div className="flex justify-between mb-6 items-center">
                <h5 className="flex gap-2 items-center">
                    <span className="text-gray-400 inline-flex gap-1 items-center">{ icon }{ title }</span>
                    <span className="font-semibold text-blue-500">{ count }</span>
                </h5>
                {isPage &&  url && (
                    <Link to={url} className="px-4 py-1 rounded-md bg-purple-400 text-sm text-white">
                        More
                    </Link>
                )}
            </div>

            <div>{ children }</div>
        </div>
    )
}

export default Section