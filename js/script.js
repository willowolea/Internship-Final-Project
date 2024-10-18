function openForm() {
    document.getElementById("intern-form-container").style.display = "block";
  }

  function closeForm() {
    var formContainer = document.getElementById("display-container-intern");
    formContainer.style.display = "none";
    window.location.href = "intern.html";
  }