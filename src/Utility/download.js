export const  downloadPDF = (url, filename) =>{
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
}

