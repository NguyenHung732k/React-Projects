import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const ExportButtons = ({ familyTreeRef }) => {

    const exportToPDF = () => {
        html2canvas(familyTreeRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const doc = new jsPDF()
            doc.addImage(imgData, 'PNG', 10, 10, 180, 160)
            doc.save('family-tree.pdf')
        })
    }

    const exportToImage = () => {
        html2canvas(familyTreeRef.current).then((canvas) => {
            const link = document.createElement('a')
            link.href = canvas.toDataURL('image/png')
            link.download = 'family-tree.png'
            link.click()
        })
    }

    return (
        <div className="flex justify-center space-x-6 mt-6">
            <button
                onClick={exportToPDF}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all"
            >
                Export as PDF
            </button>

            <button
                onClick={exportToImage}
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all"
            >
                Export as Image
            </button>
        </div>
    )
}

export default ExportButtons