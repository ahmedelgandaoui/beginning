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

    var prixHT = parseFloat($('#prixHT').val());
        var tvaPercentage = parseFloat($("input[name='tva']:checked").val());
        var quantite = parseInt($('#quantite').val());

        // Calculate total amount without tax (HT)
        var montantHT = prixHT * quantite;

        // Calculate total amount of tax
        var montantTVA = (montantHT * tvaPercentage) / 100;

        // Calculate total amount including tax (TTC)
        var totalTTC = montantHT + montantTVA;

        // Update the montant and totalTTC fields
        $('#montant').val(montantHT.toFixed(2));
        $('#totalTTC').val(totalTTC.toFixed(2));
});
