import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToImage = (elementId) => {
    const element = document.getElementById(elementId);
    html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'mindmap.png';
        link.click();
    });
};

export const exportToPDF = (elementId) => {
    const element = document.getElementById(elementId);
    html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('mindmap.pdf');
    });
};