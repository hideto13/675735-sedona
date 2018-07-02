var link = document.querySelector(".search-button");
var modal = document.querySelector(".modal-search");
var arrival = modal.querySelector("[name=arrival]");
var form = modal.querySelector("form");
var departure = modal.querySelector("[name=departure]");
var adult = modal.querySelector("[name=adult]");
var child = modal.querySelector("[name=child]");

var isStorageSupport = true;
var adultStorage = "";
var childStorage = "";


document.documentElement .classList.replace('no-js', 'js');
  
try {
    adultStorage = localStorage.getItem("adult");
    childStorage = localStorage.getItem("child");
  } catch (err) {
    isStorageSupport = false;
  }


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.toggle("modal-show");
    arrival.focus();
    if (adultStorage && childStorage) {
        adult.value = adultStorage;
        child.value = childStorage;
    }
    modal.classList.remove("modal-error");
  });

form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !adult.value || !child.value) {
      evt.preventDefault();
      modal.classList.remove("modal-error");
      modal.offsetWidth = modal.offsetWidth;
      modal.classList.add("modal-error");
      console.log("Нужно заполнить все поля");
    } else { if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("child", child.value); }
    }
  });