document.getElementById("download-button").addEventListener("click", async () => {
    const element = document.querySelector('.resume');
    element.classList.add("resume--download");

    const options = {
        margin: 0,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "letter", orientation: "portrait" },
        pagebreak: { mode: ['css', "legacy"] }
    };

    try {
        await html2pdf().from(element).set(options).save();
    } catch (error) {
        console.error("Error generating PDF:", error);
    } finally {
        element.classList.remove("resume--download");
    }
});
