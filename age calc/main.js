const dayValue = document.querySelector("#day");
const monthvalue = document.querySelector("#Month");
const yearValue = document.querySelector("#YEAR");
const submitValue = document.querySelector("#submit");
const resultyear = document.querySelector("#result__years");
const resultmonth = document.querySelector("#result__months");
const resultday = document.querySelector("#result__days");
const inputs = document.querySelectorAll(".inputs input");
const labels = document.querySelectorAll(".inputs label");
//
//  functions
const gernralerror = function () {
  inputs.forEach((input) => {
    input.style.borderColor = "hsl(0, 100%, 67%)";
    input.style.color = "hsl(0, 100%, 67%)";
  });
  // Apply styles to labels
  labels.forEach((label) => {
    label.style.borderColor = "hsl(0, 100%, 67%)";
    label.style.color = "hsl(0, 100%, 67%)";
  });
  // Apply focus styles to inputs
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "hsl(0, 100%, 67%)";
      input.style.color = "hsl(0, 100%, 67%)";
    });
    resultday.textContent = "--";
    resultmonth.textContent = "--";
    resultyear.textContent = "--";
  });
};
const resetdate = function () {
  dayValue.value = " ";
  monthvalue.value = " ";
  yearValue.value = " ";
};
//
submitValue.addEventListener("click", function () {
  //  creating vars
  let birthday = new Date(
    `${monthvalue.value} ${dayValue.value} , ${yearValue.value}`
  );
  let cuurentdate = new Date();
  let DifferentDate = cuurentdate - birthday;
  let NewDays = Math.floor(DifferentDate / 1000 / 60 / 60 / 24);
  let NewMonth = Math.floor((NewDays % 365) / 30);
  let NewYears = Math.floor(NewDays / 365);
  const labelsALLLerrors = document.querySelectorAll(".error");
  const labelsErrorDay = document.querySelector(".inputs #error-day ");
  const labelsErrorMonth = document.querySelector(".inputs #error-month");
  const labelsErrorYEAR = document.querySelector(".inputs #error-year");
  const foallempty = document.querySelector(".all-empty");
  //
  // check if theres emty
  if (dayValue.value == 0 && monthvalue.value == 0 && yearValue.value == 0) {
    resetdate();
    gernralerror();

    foallempty.style.opacity = 1;

    //    check datezz
  } else if (dayValue.value == 0 || dayValue.value > 31) {
    resetdate();
    gernralerror();
    labelsErrorDay.style.opacity = 1;
    labelsErrorDay.textContent = "enter vaild day";

    // check month
  } else if (monthvalue.value == 0 || monthvalue.value >= 13) {
    gernralerror();
    labelsErrorMonth.style.opacity = 1;
    labelsErrorMonth.textContent = "enter vaild month";
  } else if (
    yearValue.value == 0 ||
    yearValue.value > cuurentdate.getFullYear()
  ) {
    gernralerror();
    labelsErrorYEAR.style.opacity = 1;
    labelsErrorYEAR.textContent = "enter vaild year";
  } else if (DifferentDate < 0) {
    gernralerror();
    foallempty.textContent = "enter present date only";
    foallempty.style.opacity = 1;
  } else {
    resultday.textContent = NewDays;
    resultmonth.textContent = NewMonth;
    resultyear.textContent = NewYears;
  }

  resetdate();
});
