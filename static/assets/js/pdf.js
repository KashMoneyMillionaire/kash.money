(async function () {
    
    // Grab and set basics
    const embedPdf = document.getElementById("embed-pdf");
    const main = document.querySelector('main')
    embedPdf.width = main.clientWidth;
    embedPdf.height = main.clientHeight - REM_SIZE * 4;
    embedPdf.style.display = 'unset'


    // function mobileCheck() {
    //     return screen.orientation.type === 'portrait-primary';
    // }

    // const pdfjsLib = await pdfjsLibPromise;
    // const isMobile = mobileCheck();
    
    // const canvasPdf = document.getElementById("canvas-holder");
    // let pageNum = 1;

    // if (isMobile) {
    //     const pdfDoc = await pdfjsLib.getDocument(resumeUrl).promise
    //     renderMobile(pdfDoc, 1);
    // } else {
    //     renderDesktop();
    // }

    // // document.getElementById("page_count").textContent = pdfDoc.numPages;
    // // document.getElementById("prev").addEventListener("click", onPrevPage);
    // // document.getElementById("next").addEventListener("click", onNextPage);

    // async function renderPage(num) {
    //     this.disabled = true;

    //     const page = await pdfDoc.getPage(num);
    //     const viewport = page.getViewport({ scale: 3 });
    //     const canvas = document.getElementById("doc-canvas");
    //     canvas.height = viewport.height;
    //     canvas.width = viewport.width;

    //     // Render PDF page into canvas context
    //     page.render({
    //         canvasContext: canvas.getContext("2d"),
    //         viewport: viewport,
    //     });


    //     // Update page counters
    //     document.getElementById("page_num").textContent = num;
        
    //     this.disabled = false;
    // }

    // async function onPrevPage() {
    //     if (pageNum <= 1) {
    //         return;
    //     }

    //     await renderPage(--pageNum, document.getElementById("doc-canvas"));
    // }

    // async function onNextPage() {
    //     if (pageNum >= pdfDoc.numPages) {
    //         return;
    //     }

    //     await renderPage(++pageNum, document.getElementById("doc-canvas"));
    // }

    // async function renderMobile() {
    //     throw 'Not rendering mobile'
    //     embedPdf.style.display = "none";
    //     // canvasPdf.style = undefined;

    //     await renderPage(pageNum);
    // }

    // async function renderDesktop() {
    //     // embedPdf.style.display = 'unset';
    //     // embedPdf.style.maxHeight = '0px'
    //     embedPdf.src = resumeUrl;

    //     let isLoaded = false;

    //     embedPdf.onload = function () {
    //         console.log('load successful')
    //         isLoaded = true;
    //     };

    //     // Give it a sec to try loading
    //     // setTimeout(async function checkLoad() {
    //     //     if (!isLoaded) {
    //     //         await renderMobile();
    //     //     } else {
    //     //         embedPdf.style.maxHeight = ''
    //     //     }
    //     // }, 400);
    // }
})();