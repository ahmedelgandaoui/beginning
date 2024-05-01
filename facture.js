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
    
        //then get the product object from produits array by name
        var produit = produits.find(function(produit) {
            return produit.name === selectedproduct;
        });

        //then assign the produit.prix to prix produi
        $('#prixHT').val(produit.prix);

        //then assign the produit.tva to tva produit
        console.log("===> ",     $("input[name='tva']").filter("[value='" + produit.tva + "']"))
        $("input[name='tva']").filter("[value='" + produit.tva + "%']").prop("checked", true);
    });
    $("form").on( "submit", function (event) {
        event.preventDefault(); 
        console .log("===> ",   $("input[name='tva']:checked").val());
    } );
});
