(async function () {

    const main = document.querySelector('main');
    const maxWidth = main.clientWidth;
    const maxHeight = main.clientHeight - REM_SIZE * 4;

    // Set display size
    const pdfWrapper = document.getElementById("mobile-pdf-wrapper");
    pdfWrapper.style.width = maxWidth;
    pdfWrapper.style.height = maxHeight;
    pdfWrapper.style.display = null;

    // Kick off render
    await renderPage(await pdfjsLib.getDocument(window.pdfUrl).promise, 1);

    async function renderPage(doc, num) {
        if (num < 1 || num > doc.numPages)
            return;

        // https://mozilla.github.io/pdf.js/examples/#Rendering%20The%20Page
        // scale is wack, so we adjust to what we want it to be

        // Calculate
        const page = await doc.getPage(num);
        const ogViewport = page.getViewport({ scale: 1 });
        const scale = maxWidth / ogViewport.width;
        const desiredViewport = page.getViewport({ scale: scale });

        // Set
        const canvas = document.getElementById("canvas-pdf");
        canvas.height = desiredViewport.height;
        canvas.width = desiredViewport.width;

        // Render PDF page into canvas context
        page.render({
            canvasContext: canvas.getContext("2d"),
            viewport: desiredViewport,
        });

        // Update page counters
        document.getElementById("page_num").textContent = num;
        document.getElementById("page_count").textContent = doc.numPages;

        // Set download
        const pdfDownload = document.getElementById("pdf-download");
        const right = (document.body.clientWidth - canvas.width) / 2 + 5;
        const bottom = document.body.clientHeight - canvas.getBoundingClientRect().bottom + 5;
        pdfDownload.style.right = `${right}px`;
        pdfDownload.style.bottom = `${bottom}px`;

        // Set handlers
        document.getElementById("prev").onclick = async () => await renderPage(doc, num - 1);
        document.getElementById("next").onclick = async () => await renderPage(doc, num + 1);
    }
})();