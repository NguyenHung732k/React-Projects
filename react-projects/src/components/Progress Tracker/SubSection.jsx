import React from 'react'

const SubSection = ({ subtitle, completed, index, sectionIndex, updateList }) => {
    return (
        <div className="flex w-full justify-between items-center">
            <div className="flex items-center p-2 rounded">
                <input
                    id={index}
                    onChange={() => { updateList(sectionIndex, index) }}
                    checked={completed || false}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />

                <label
                    for={index}
                    class="w-full ms-2 text-sm font-medium text-gray-900 rounded">
                    <h4 className="font-bold text-lg m-0">
                        <span className="inline-block mr-4">{index}.</span> {subtitle}
                    </h4>
                </label>
            </div>
        </div>
    )
}

export default SubSection