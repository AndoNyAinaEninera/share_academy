function myFunction() {

    var input, product;
    input = document.getElementById("catego").value.toUpperCase();
    product = document.getElementsByClassName("product");

    for (var i = 0; i < product.length; i++) {
        description = `${product[i].getElementsByTagName("h1")[0].innerText} ${product[i].getElementsByTagName("p")[1].innerText}`.toUpperCase();

        if (description.indexOf(input) > -1) {
            product[i].style.display = "";
            }
        else {
            product[i].style.display = "none";
        }
    }
}