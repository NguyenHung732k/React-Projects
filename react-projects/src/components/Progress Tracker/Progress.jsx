import React, { useEffect, useState } from 'react'

import Section from './Section'
import progressDataList from './progressDataList'

const Progress = () => {

    const [progressList, setProgressList] = useState([])
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const localList = JSON.parse(localStorage.getItem('progresslist')) || []
        setProgressList(localList.length ? localList : progressDataList)
    }, [])

    const sectionProgress = (subsections) => {
        let completed = 0
        for (let i = 0; i < subsections.length; i++) {
            if (subsections[i].completed) {
                completed++
            }
        }
        return Math.round((completed / subsections.length) * 100)
    }

    const overallProgress = (list) => {
        let totalProgress = 0
        for (let i = 0; i < list.length; i++) {
            totalProgress += list[i].progress
        }
        return Math.round((totalProgress / (list.length * 100)) * 100)
    }

    useEffect(() => {
        setProgress(overallProgress(progressList))
    }, [progressList])

    const updateList = (index, indexOfSubSection) => {
        const newList = [...progressList]
        newList[index].subsections[indexOfSubSection].completed = !newList[index].subsections[indexOfSubSection].completed
        newList[index].progress = sectionProgress(newList[index].subsections)
        setProgressList(newList)

        localStorage.setItem("progresslist", JSON.stringify(newList))
    }

    return (
        <div className="flex flex-col gap-4 w-[60%] mb-40 relative">
            {progress === 100 && (
                <h1 className="text-center text-4xl text-gray-900">
                    Progress Completed
                </h1>
            )}
            <p className="m-0 text-2xl font-bold">Progress: {progress}%</p>
            <div
                className={`rounded sticky top-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all h-2 w-[${progress}%]`}>
            </div>
            {progressList.map((section, index) => {
                return (
                    <Section
                        index={index}
                        updateList={updateList}
                        key={index}
                        section={section}
                    />
                );
            })}
        </div>
    )
}

export default Progress