//Theme Name: Ruralis
//Authors: Marielle Lautrou and Aurore David


$('.datepicker').pickadate({
//            selectMonths: true, // Creates a dropdown to control month
//            selectYears: 15 // Creates a dropdown of 15 years to control year
    format: 'dd mmmm yyyy',
    formatSubmit: 'mm/dd/yyyy'
});
$(document).ready(function() {
    $('select').material_select();
});