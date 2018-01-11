// TO ALLOW DROPDOWN RESULTS USING BOOTSTRAP DROPDOWNS
function checkSearchValAndDropdown() {
  if($('#search-input').val()){
    $("#search-container").addClass('open');
  }
  else {
    $("#search-container").removeClass('open');
  }
}

// FOR LANGUAGE DROPDOWN CHANGE DETECTION
$(document).ready(function(){
  $('.bfh-selectbox').on('change.bfhselectbox', function () {
    var lang = $(this).val();
    if (lang == "en_US") document.location.href = "/category/EN";
    else if (lang == "de_DE") document.location.href = "/category/DE";
    else if (lang == "hi_IN") document.location.href = "/category/HI";
    else if (lang == "ne_NP") document.location.href = "/category/NE";
    else if (lang == "nl_NL") document.location.href = "/category/NL";
    else if (lang == "pt_BR") document.location.href = "/category/pt_BR";
    else if (lang == "sv_SE") document.location.href = "/category/SV";
  });
});
