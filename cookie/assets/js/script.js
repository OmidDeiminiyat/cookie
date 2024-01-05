
function savePreferences() {
    var necessaryCheckbox = document.getElementById("necessaryCheckbox");
    var functionalCheckbox = document.getElementById("functionalCheckbox");
    var analyticsCheckbox = document.getElementById("analyticsCheckbox");
    var allCheckbox = document.getElementById("alleCheckbox");
    var valgteCheckbox = document.getElementById("valgteCheckbox");
    

    if (necessaryCheckbox.checked || functionalCheckbox.checked || analyticsCheckbox.checked || allCheckbox || valgteCheckbox ) {
      // Set cookies or save preferences on the server (simulated in this example)
      // You can replace this with actual code to handle cookie preferences

      // For demonstration purposes, display a message
      var cookieMessage = document.getElementById("cookieMessage");
      cookieMessage.style.display = "block";
      var checkboxgroup = document.getElementById("checkbox-group");
      checkboxgroup.style.display = "none";

    } else {
      alert("Please select at least one checkbox.");
    }
  }