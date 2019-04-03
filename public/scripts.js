var timetableExists = localStorage.getItem("timetableExists");
if (timetableExists === "true") {
  document.getElementById("creator").style.display = "none";
  var periodOneNodes = document.getElementById("periodOne").children;
  var periodTwoNodes = document.getElementById("periodTwo").children;
  var periodThreeNodes = document.getElementById("periodThree").children;
  var periodFourNodes = document.getElementById("periodFour").children;

  var periodOneCodes = localStorage.getItem("period1codesSaved").split(",");
  var periodTwoCodes = (localStorage.getItem("period2codesSaved")).split(",");
  var periodThreeCodes = (localStorage.getItem("period3codesSaved")).split(",");
  var periodFourCodes = (localStorage.getItem("period4codesSaved")).split(",");

  var subjectOneDetails = (localStorage.getItem("subject1detailsSaved")).split(",");
  var subjectTwoDetails = (localStorage.getItem("subject2detailsSaved")).split(",");
  var subjectThreeDetails = (localStorage.getItem("subject3detailsSaved")).split(",");
  var subjectFourDetails = (localStorage.getItem("subject4detailsSaved")).split(",");
  var subjectFiveDetails = (localStorage.getItem("subject5detailsSaved")).split(",");
  var subjectSixDetails = (localStorage.getItem("subject6detailsSaved")).split(",");

  for (var i = 0; i < 5; i++) {
    periodOneNodes[i + 1].className = periodOneCodes[i];
    periodTwoNodes[i + 1].className = periodTwoCodes[i];
    periodThreeNodes[i + 1].className = periodThreeCodes[i];
    periodFourNodes[i + 1].className = periodFourCodes[i];
  };

  var subjectOne = document.getElementsByClassName(subjectOneDetails[0]);
  for (var i = 0; i < subjectOne.length; i++) {
    subjectOne[i].title = subjectOneDetails[1];
    subjectOne[i].children[0].children[0].innerHTML += "<br>" + subjectOneDetails[1];
    subjectOne[i].children[0].href = subjectOneDetails[2];
  };

  var subjectTwo = document.getElementsByClassName(subjectTwoDetails[0]);
  for (var i = 0; i < subjectTwo.length; i++) {
    subjectTwo[i].title = subjectTwoDetails[1];
    subjectTwo[i].children[0].children[0].innerHTML += "<br>" + subjectTwoDetails[1];
    subjectTwo[i].children[0].href = subjectTwoDetails[2];
  };

  var subjectThree = document.getElementsByClassName(subjectThreeDetails[0]);
  for (var i = 0; i < subjectThree.length; i++) {
    subjectThree[i].title = subjectThreeDetails[1];
    subjectThree[i].children[0].children[0].innerHTML += "<br>" + subjectThreeDetails[1];
    subjectThree[i].children[0].href = subjectThreeDetails[2];
  };

  var subjectFour = document.getElementsByClassName(subjectFourDetails[0]);
  for (var i = 0; i < subjectFour.length; i++) {
    subjectFour[i].title = subjectFourDetails[1];
    subjectFour[i].children[0].children[0].innerHTML += "<br>" + subjectFourDetails[1];
    subjectFour[i].children[0].href = subjectFourDetails[2];
  };

  var subjectFive = document.getElementsByClassName(subjectFiveDetails[0]);
  for (var i = 0; i < subjectFive.length; i++) {
    subjectFive[i].title = subjectFiveDetails[1];
    subjectFive[i].children[0].children[0].innerHTML += "<br>" + subjectFiveDetails[1];
    subjectFive[i].children[0].href = subjectFiveDetails[2];
  };

  var subjectSix = document.getElementsByClassName(subjectSixDetails[0]);
  for (var i = 0; i < subjectSix.length; i++) {
    subjectSix[i].title = subjectSixDetails[1];
    subjectSix[i].children[0].children[0].innerHTML += "<br>" + subjectSixDetails[1];
    subjectSix[i].children[0].href = subjectSixDetails[2];
  };

  var calDay = new Date().getDay();
  //var calDay = 2;
  var calHour = new Date().getHours();
  //var calHour = 9;
  var calTime;

  if (calHour == 7 || calHour == 8) {
    calTime = "periodOne"
  } else if (calHour == 9) {
    calTime = "periodTwo"
  } else if (calHour == 10 || calHour == 11) {
    calTime = "periodThree"
  } else if (calHour == 12 || calHour == 13) {
    calTime = "periodFour"
  };

  if (calDay == 0 || calDay == 6) {
    document.getElementById("weekend").style.visibility = "visible";
  } else {
    document.getElementById("weekend").style.display = "none";
    document.getElementById(calTime).children[calDay].children[0].children[0].id = "currentLesson";
  }
} else if (timetableExists === "false") {
  localStorage.setItem("timetableExists", "false");
  document.getElementById("timetable").style.display = "none";
  function saveEntire() {
    localStorage.setItem("period1codesSaved", saveData("period1codes"));
    localStorage.setItem("period2codesSaved", saveData("period2codes"));
    localStorage.setItem("period3codesSaved", saveData("period3codes"));
    localStorage.setItem("period4codesSaved", saveData("period4codes"));
    localStorage.setItem("subject1detailsSaved", saveData("subject1details"));
    localStorage.setItem("subject2detailsSaved", saveData("subject2details"));
    localStorage.setItem("subject3detailsSaved", saveData("subject3details"));
    localStorage.setItem("subject4detailsSaved", saveData("subject4details"));
    localStorage.setItem("subject5detailsSaved", saveData("subject5details"));
    localStorage.setItem("subject6detailsSaved", saveData("subject6details"));
    localStorage.setItem("timetableExists", "true");
    location.reload();
  };

  function saveData(dataClass) {
    var dataArray = document.getElementsByClassName(dataClass)
    var dataTemp = [""]
    for (var i = 0; i < dataArray.length; i++) {
       if (dataArray[i].value) {
         dataTemp[i] = dataArray[i].value
       } else {
         dataTemp[i] = "-"
       }
    }
    return dataTemp
  };

  for (var i = 0; i < 5; i++) {
    document.getElementsByClassName("period1codes")[i].value = localStorage.getItem("period1codesSaved").split(",")[i];
    document.getElementsByClassName("period2codes")[i].value = localStorage.getItem("period2codesSaved").split(",")[i];
    document.getElementsByClassName("period3codes")[i].value = localStorage.getItem("period3codesSaved").split(",")[i];
    document.getElementsByClassName("period4codes")[i].value = localStorage.getItem("period4codesSaved").split(",")[i];
  };
  for (var i = 0; i < 3; i++) {
    document.getElementsByClassName("subject1details")[i].value = localStorage.getItem("subject1detailsSaved").split(",")[i];
    document.getElementsByClassName("subject2details")[i].value = localStorage.getItem("subject2detailsSaved").split(",")[i];
    document.getElementsByClassName("subject3details")[i].value = localStorage.getItem("subject3detailsSaved").split(",")[i];
    document.getElementsByClassName("subject4details")[i].value = localStorage.getItem("subject4detailsSaved").split(",")[i];
    document.getElementsByClassName("subject5details")[i].value = localStorage.getItem("subject5detailsSaved").split(",")[i];
    document.getElementsByClassName("subject6details")[i].value = localStorage.getItem("subject6detailsSaved").split(",")[i];
  };
} else {
  localStorage.setItem("timetableExists", "false");
  location.reload()
}
function editTable() {
  localStorage.setItem("timetableExists", "false");
  location.reload();
}

function importTable() {
  var dataImport = prompt("Enter Data:").split(";");
  var arrayP1 = document.getElementsByClassName("period1codes");
  for (var i = 0; i < arrayP1.length; i++) {
    arrayP1[i].value = dataImport[0].split(",")[i]
  }
  var arrayP2 = document.getElementsByClassName("period2codes");
  for (var i = 0; i < arrayP2.length; i++) {
    arrayP2[i].value = dataImport[1].split(",")[i]
  }
  var arrayP3 = document.getElementsByClassName("period3codes");
  for (var i = 0; i < arrayP3.length; i++) {
    arrayP3[i].value = dataImport[2].split(",")[i]
  }
  var arrayP4 = document.getElementsByClassName("period4codes");
  for (var i = 0; i < arrayP4.length; i++) {
    arrayP4[i].value = dataImport[3].split(",")[i]
  }
  var arrayS1 = document.getElementsByClassName("subject1details");
  for (var i = 0; i < arrayS1.length; i++) {
    arrayS1[i].value = dataImport[4].split(",")[i]
  }
  var arrayS2 = document.getElementsByClassName("subject2details");
  for (var i = 0; i < arrayS2.length; i++) {
    arrayS2[i].value = dataImport[5].split(",")[i]
  }
  var arrayS3 = document.getElementsByClassName("subject3details");
  for (var i = 0; i < arrayS3.length; i++) {
    arrayS3[i].value = dataImport[6].split(",")[i]
  }
  var arrayS4 = document.getElementsByClassName("subject4details");
  for (var i = 0; i < arrayS4.length; i++) {
    arrayS4[i].value = dataImport[7].split(",")[i]
  }
  var arrayS5 = document.getElementsByClassName("subject5details");
  for (var i = 0; i < arrayS5.length; i++) {
    arrayS5[i].value = dataImport[8].split(",")[i]
  }
  var arrayS6 = document.getElementsByClassName("subject6details");
  for (var i = 0; i < arrayS6.length; i++) {
    arrayS6[i].value = dataImport[9].split(",")[i]
  }
};

function exportTable() {
  var completeCodes = "";
  for (var i = 1; i < 5; i++) {
    completeCodes += localStorage.getItem("period" + [i] + "codesSaved") + ";"
  };
  for (var i = 1; i < 7; i++) {
    completeCodes += localStorage.getItem("subject" + [i] + "detailsSaved") + ";"
  };
  prompt("Export Data:", completeCodes);
}