import React, { useState, useRef } from 'react'
import Scrapbook from './Scrapbook'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const DigitalScrapbook = () => {
    const [pages, setPages] = useState([])
    const [history, setHistory] = useState([])
    const [future, setFuture] = useState([])
    const scrapbookRef = useRef(null)

    const addPage = () => {
        const newPage = { id: Date.now(), images: [], text: '', backgroundColor: '#ffffff', font: 'sans-serif' }
        setHistory([...history, pages])
        setPages([...pages, newPage])
        setFuture([])
    };

    const undo = () => {
        if (history.length === 0) return
        const previous = history[history.length - 1]
        const newHistory = history.slice(0, history.length - 1)
        setFuture([pages, ...future])
        setPages(previous)
        setHistory(newHistory)
    };

    const redo = () => {
        if (future.length === 0) return
        const next = future[0]
        const newFuture = future.slice(1)
        setHistory([...history, pages])
        setPages(next)
        setFuture(newFuture)
    };

    const exportScrapbook = () => {

        if (pages.length === 0) {
            alert("Please add at least one page before exporting.")
            return
        }

        html2canvas(scrapbookRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF()
            pdf.addImage(imgData, 'PNG', 0, 0)
            pdf.save('scrapbook.pdf')
        })
    }

    const saveProgress = () => {
        localStorage.setItem('scrapbook', JSON.stringify(pages))
    }

    const loadProgress = () => {
        const savedPages = localStorage.getItem('scrapbook')
        if (savedPages) {
            setPages(JSON.parse(savedPages))
        }
    }

    return (
        <div className="w-screen mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Digital Scrapbook</h1>
            <div className="w-full flex justify-center mb-4">
                <button onClick={addPage} className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition">
                    Add Page
                </button>
                <button onClick={exportScrapbook} className="bg-green-600 text-white px-4 py-2 rounded shadow-md hover:bg-green-700 transition ml-2">
                    Export as PDF
                </button>
                <button onClick={undo} className="bg-yellow-600 text-white px-4 py-2 rounded shadow-md hover:bg-yellow-700 transition ml-2">
                    Undo
                </button>
                <button onClick={redo} className="bg-orange-600 text-white px-4 py-2 rounded shadow-md hover:bg-orange-700 transition ml-2">
                    Redo
                </button>
                <button onClick={saveProgress} className="bg-gray-600 text-white px-4 py-2 rounded shadow-md hover:bg-gray-700 transition ml-2">
                    Save Progress
                </button>
                <button onClick={loadProgress} className="bg-purple-600 text-white px-4 py-2 rounded shadow-md hover:bg-purple-700 transition ml-2">
                    Load Progress
                </button>
            </div>
            <div ref={scrapbookRef} className="flex flex-wrap justify-center">
                <Scrapbook pages={pages} setPages={setPages} />
            </div>
        </div>
    )
}

export default DigitalScrapbook