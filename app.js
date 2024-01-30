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
    shareButton.addEventListener("click", copyText));

//Dropdown Whatsapp
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => toggleDropdown(dropdown));

    const children = Array.from(dropdown.children);
    const contenido = children.find((e) =>
        e.classList.contains("dropdown-contenido"),
    );
    contenido.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

function toggleDropdown(dropdown) {
    const contenido = encontrarContenidoDelDropdown(dropdown);
    if (contenido) {
        contenido.classList.toggle("show");
    } else {
        console.error("No se encontró el contenido del dropdown");
    }
}

function hideDropdown(dropdown) {
    const contenido = encontrarContenidoDelDropdown(dropdown);
    if (contenido) {
        contenido.classList.remove("show");
    } else {
        console.error("No se encontró el contenido del dropdown");
    }
}

function encontrarContenidoDelDropdown(dropdown) {
    const children = Array.from(dropdown.children);
    return children.find((e) => e.classList.contains("dropdown-contenido"));
}

document.addEventListener("click", (e) => {
    const isDropdown = e.target.closest(".dropdown");

    dropdowns.forEach((dropdown) => {
        const isClickedInsideDropdown = dropdown.contains(e.target);

        if (!isDropdown || !isClickedInsideDropdown) {
            hideDropdown(dropdown);
        }
    });
});

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("dropdown-whatsapp-buscador");
    filter = input.value.toUpperCase();
    div = document.getElementById("dropdown-whatsapp-enlaces");
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
