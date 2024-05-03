$(document).ready(function() {
    const produits = [
        {name: "produit01", prix: 100.00, tva: "9%"},
        {name: "produit02", prix: 150.00, tva: "11%"},
        {name: "produit03", prix: 190.00, tva: "19%"}
    ];

    // Function to calculate and update values
    function calculateInvoice() {
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
    }

    // Add onchange event handler to dropdown with id "produit"
    $('#produit').change(function() {
        var selectedProduct = $(this).val();
    
        // Find the product object from produits array by name
        var produit = produits.find(function(produit) {
            return produit.name === selectedProduct;
        });

        // Assign the produit.prix to prix produit
        $('#prixHT').val(produit.prix);

        // Select the radio button for TVA based on the product's TVA percentage
        $("input[name='tva'][value='" + produit.tva + "']").prop("checked", true);
    });

    // Add click event handler to calculate button
    $('#cal').click(function() {
        calculateInvoice();
    });

    // Function to clear form fields
    function effacer() {
        // Clear all form fields
        $('#produit')[0].selectedIndex = 0;
        $('#prixHT').val('');
        $('#quantite').val('');
        $('#montant').val('');
        $('#totalTTC').val('');
        $("input[name='tva']").prop("checked", false);
    }

    // Assign effacer function to the "Effacer" button click event
    $('#effacer').click(function() {
        effacer();
    });
});