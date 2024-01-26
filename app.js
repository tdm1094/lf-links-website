//Copiar enlace
const shareButtons = document.querySelectorAll(".tile-share-button");

async function copyText(e) {
    e.preventDefault();
    const link = this.parentElement.getAttribute("href");
    try {
        await navigator.clipboard.writeText(link);
    } catch (err) {
        console.error(err);
    }
}

shareButtons.forEach((shareButton) =>
    shareButton.addEventListener("click", copyText),
);

//Dropdown Whatsapp

const dropdownWhatsapp = Array.from(
    document.getElementsByClassName("dropdown-whatsapp-content"),
);
function toggleDropdown() {
    dropdownWhatsapp.forEach((e) => {
        e.classList.toggle("show");
    });
}

document.addEventListener("click", (e) => {
    if (
        !e.target.classList.contains("dropdown-whatsapp-content") &&
        !e.target.classList.contains("dropbtn") &&
        !e.target.classList.contains("dropdown-whatsapp")
    ) {
        dropdownWhatsapp.forEach((e) => {
            e.classList.remove("show");
        });
    }
});

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
