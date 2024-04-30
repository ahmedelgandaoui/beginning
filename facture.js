const produits = [
    {name: "produit01", prix: 100.00, tva: 9 },
    {name: "produit02", prix: 150.00, tva: 11 },
    {name: "produit03", prix: 190.00, tva: 19 }
]

$(document).ready(function() {
    // Add onchange event handler to dropdown with id "produit"
    $('#produit').change(function() {
        // Log the selected option
        var selectedproduct = $(this).val();
        alert("Selected option: " + selectedOption);
        //then get the product object from produits array by name
        //then assign the produit.prix to prix produi
        //then select tva radio button that has the same produic.tva
    });
});
