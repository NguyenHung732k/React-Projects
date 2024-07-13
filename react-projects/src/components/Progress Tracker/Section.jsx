import React, { useState } from 'react'

import SubSection from './SubSection'

const Section = ({ section, index, updateList }) => {

    const [open, setOpen] = useState(false)

    return (
        <div className="bg-gray-200 px-10 py-6 w-full border border-solid rounded-lg bg-white/45 backdrop-blur-xl">
            <div className="flex w-full justify-between items-center cursor-pointer">
                <h3 className="font-bold text-xl flex-1"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {section.title}
                </h3>
                <div className="flex gap-4 items-center">
                    <p className="font-bold text-slate-800 m-0">
                        {section.progress}%
                    </p>
                    <button onClick={() => setOpen((prev) => !prev)}>
                        {open ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                        }
                    </button>
                </div>
            </div>

            {open && (
                <div className="flex flex-col w-full my-10 gap-4">
                    {section.subsections.map((sub, i) => {
                        return (
                            <SubSection
                                key={i}
                                index={i}
                                sectionIndex={index}
                                updateList={updateList}
                                subtitle={sub.subtitle}
                                completed={sub.completed}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default Section