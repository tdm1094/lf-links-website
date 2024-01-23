const shareButtons = document.querySelectorAll(".tile-share-button");

async function copyText(e) {
    e.preventDefault();
    const link = this.parentElement.getAttribute("href");
    try {
        await navigator.clipboard.writeText(link);
        e.classList.add("clicked");
        setTimeout(() => e.classList.remove("clicked"), 300);
    } catch (err) {
        console.error(err);
    }
}

shareButtons.forEach((shareButton) =>
    shareButton.addEventListener("click", copyText),
);
