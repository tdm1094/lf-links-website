//Copiar enlace
const shareButtons = document.querySelectorAll(".tile-share-button");

shareButtons.forEach((shareButton) => 
    shareButton.addEventListener("click", copyText));

async function copyText(e) {
    e.preventDefault();
    const link = this.parentElement.getAttribute("href");
    try {
        await navigator.clipboard.writeText(link);
    } catch (err) {
        console.error(err);
    }
}


//Dropdown 
//Event Listeners
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
        toggleDropdown(dropdown);
        toggleColor(dropdown);
        encontrarContenidoDelDropdown(dropdown).scrollIntoView({behavior: "smooth"});
    });

    //Evito que el evento se propague si clickeo un elemento hijo
    const children = Array.from(dropdown.children);
    const contenido = children.find((e) =>
        e.classList.contains("dropdown-contenido"),
    );
    contenido.addEventListener("click", (event) => {
        event.stopPropagation();
  });
});

document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
        const esDropdown = e.target.closest(".dropdown");
        const estaDentroDeDropdown = dropdown.contains(e.target);

        if ((!esDropdown || !estaDentroDeDropdown) && isDropdownOpen(dropdown)) {
            hideDropdown(dropdown);
            toggleColor(dropdown);
        }
    });
});

//Funciones
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

function isDropdownOpen(dropdown) {
    const contenido = encontrarContenidoDelDropdown(dropdown);
    if (contenido) {
        return contenido.classList.contains("show");
    } else {
        console.error("No se encontró el contenido del dropdown");
    }
}

function toggleColor(element) {
    const defaultColor = "rgb(37, 37, 37)";
    const computedStyle = window.getComputedStyle(element);
    const currentColor = computedStyle.backgroundColor;

    if (currentColor === defaultColor) {
        if (element.id === "dropdown-whatsapp") {
            element.style.backgroundColor = "rgb(7, 94, 84)";
        } else if (element.id === "dropdown-facultad") {
            element.style.backgroundColor = "rgb(135, 0, 17)";
        }
    } else {
        element.style.backgroundColor = defaultColor;
    }
}


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
