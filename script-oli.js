var containerEl = document.getElementById("container");

var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var currentHour = moment().format("HH");
// var currentHour = 15;

for (let i = 0; i < hours.length; i++) {
  var newRow = document.createElement("div");
  newRow.classList.add("row");

  var colOne = document.createElement("div");
  colOne.classList.add("col-2", "time-label");
  colOne.textContent = `${hours[i]}:00`;

  var colTwo = document.createElement("textarea");
  colTwo.classList.add("col-8");

  if (currentHour == hours[i]) {
    colTwo.classList.add("present");
  } else if (currentHour > hours[i]) {
    colTwo.classList.add("past");
  } else {
    colTwo.classList.add("future");
  }

  colTwo.dataset.hour = hours[i];
  if (localStorage.getItem(hours[i])) {
    colTwo.value = localStorage.getItem(hours[i]);
  }

  var colThree = document.createElement("i");
  colThree.classList.add("col-2", "fas", "fa-save");

  newRow.append(colOne);
  newRow.append(colTwo);
  newRow.append(colThree);


  containerEl.append(newRow);
}

var icons = document.querySelectorAll(".fas");

icons.forEach((icon) =>
  icon.addEventListener("click", function (e) {
    var thisHour = e.target.parentNode.children[1].dataset.hour;
    var thisValue = e.target.parentNode.children[1].value;
    console.log(thisHour);
    console.log(thisValue);
    localStorage.setItem(thisHour, thisValue);
  })
);
