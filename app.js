const details = document.querySelectorAll('details');

details.forEach(detail => {
    detail.addEventListener("toggle", () => {
        if (detail.open) {
            setTargetDetail(detail);
        }
    });
});

function setTargetDetail(targetDetail) {
    details.forEach(detail => {
        if (detail !== targetDetail) {
            detail.open = false;
        }
    });
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
