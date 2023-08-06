localStorage.removeItem("color");
// const date = new Date();
// let opt = {
//   day: "numeric",
//   month: "numeric",
//   year: "numeric",
// };
// // let topt = {
// //   hour: "numeric",
// //   minute: "numeric",
// //   second: "numeric",
// // };
// let dateSA = date.toLocaleDateString("ar-SA", opt);
// let dateUS = date.toLocaleDateString("ar-US", opt);
// // time = date.toLocaleTimeString("ar-SA", topt);

// let dateText = document.getElementById("date");

// dateText.innerText = dateSA + " - " + dateUS + "م";

function count() {
  let n = 0;
  chkbs.forEach((c) => {
    if (c.type === "checkbox") {
      if (c.checked) {
        n++;
      }
    }
  });
  console.log(n);
}
const chkbs = document.querySelectorAll("input");

chkbs.forEach((c) => {
  if (c.type === "checkbox") {
    c.onclick = () => {
      // console.log("saddas");
    };
  }
});
let btn = document.getElementById("download");
async function saveImg() {
  const content = document.querySelector(".container");
  const parent = document.querySelector(".parent");
  const print = document.querySelector(".print");
  const textarea = document.getElementsByTagName("input");
  // print.innerHTML = content.innerHTML;
  // const doc = new jsPDF("1", "pt");

  // const inputs1 = content.querySelectorAll("input");
  // const inputs2 = print.querySelectorAll("input");

  // for (let i = 0; i < inputs1.length; i++) {
  //   if (inputs1[i].type == "text") {
  //     inputs2[i].value = inputs1[i].value;
  //   } else {
  //     if (inputs1[i].checked) {
  //       inputs2[i].checked = true;
  //     }
  //   }
  // }

  // // doc.setFont("DIN Next LT");
  // //   doc.setR2L(false);
  // let pageWidth = doc.internal.pageSize.width;
  // let txtWidth = print.clientWidth / 2.2 / doc.internal.scaleFactor;
  // let x = (pageWidth - txtWidth) / 2;

  // btn.style.display = "none";
  // // if (window.innerWidth > 1750) {
  // //   content.style.width = "100%";
  // //   content.style.height = "100%";
  // //   content.style.overflow = "visible";
  // // }
  // await html2canvas(print, {
  //   allowTain: true,
  //   useCORS: true,
  //   scale: 2,
  // }).then((c) => {
  //   if (window.innerWidth > 766) {
  //     doc.addImage(
  //       c.toDataURL("image/png"),
  //       "PNG",
  //       x,
  //       20,
  //       print.clientWidth / 2.2,
  //       print.clientHeight / 2
  //     );
  //   } else if (window.innerWidth >= 420 && window.innerWidth <= 766) {
  //     x = (pageWidth - txtWidth) / 2.2;
  //     doc.addImage(
  //       c.toDataURL("image/png"),
  //       "PNG",
  //       x,
  //       20,
  //       parent.clientWidth / 1.15,
  //       parent.clientHeight / 2.4
  //     );
  //   } else {
  //     x = (pageWidth - txtWidth) / 1.8;
  //     doc.addImage(
  //       c.toDataURL("image/png"),
  //       "PNG",
  //       x,
  //       20,
  //       parent.clientWidth,
  //       parent.clientHeight / 2.6
  //     );
  //   }
  // });
  // let nameInput = document.getElementById("name");
  // let pdfName = "";

  // nameInput.value ? (pdfName = nameInput.value) : (pdfName = "بدون اسم");
  // // Or use javascript directly:
  // doc.save(pdfName);
  // btn.style.display = "block";

  // let opt = {
  //   margin: 0.3,
  //   filename: "myfile.pdf",
  //   image: { type: "jpeg", quality: 0.98 },
  //   html2canvas: { scale: 2 },
  //   jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
  // };
  // html2pdf().set(opt).from(content).save();

  window.print(content);
}

btn.addEventListener("touchend", () => {
  saveImg();
});
btn.addEventListener("click", () => {
  saveImg();
});
const table = document.querySelector(".tbody1");
let classL = "";

function removeTdsClass(attr) {
  const tr = table.querySelectorAll("tr");
  for (let i = 1; i <= tr.length - 1; i++) {
    const tds = tr[i].querySelectorAll("td");
    for (let j = 1; j < tds.length; j++) {
      tds[j].removeAttribute(attr);
      classL = tds[j].classList.value !== "" && tds[j].classList.value;
    }
  }
  return tr.length - 1;
}
function addTdsClass(className, start, end) {
  const tr = table.querySelectorAll("tr");
  for (let i = 1; i <= tr.length - 1; i++) {
    const tds = tr[i].querySelectorAll("td");
    for (let j = start; j <= end; j++) {
      tds[j].classList.add(className);
    }
  }
}
const redBtn = document.getElementById("red-btn");
const orangeBtn = document.getElementById("orange-btn");
const yellowBtn = document.getElementById("yellow-btn");
const greenBtn = document.getElementById("green-btn");
const blueBtn = document.getElementById("blue-btn");
const pinkBtn = document.getElementById("pink-btn");
const purpleBtn = document.getElementById("purple-btn");

redBtn.onclick = () => {
  removeTdsClass("class");
  addTdsClass("red-style", 3, 5);
  localStorage.setItem("color", ["red-style", 3, 5]);
};
orangeBtn.onclick = () => {
  removeTdsClass("class");
  addTdsClass("orange-style", 4, 7);
  localStorage.setItem("color", ["orange-style", 4, 7]);
};
yellowBtn.onclick = () => {
  removeTdsClass("class");
  addTdsClass("yellow-style", 6, 9);
  localStorage.setItem("color", ["yellow-style", 6, 9]);
};
greenBtn.onclick = () => {
  removeTdsClass("class");
  addTdsClass("green-style", 8, 10);
  localStorage.setItem("color", ["green-style", 8, 10]);
};
blueBtn.onclick = () => {
  removeTdsClass("class");
  addTdsClass("blue-style", 10, 13);
  localStorage.setItem("color", ["blue-style", 10, 13]);
};
pinkBtn.onclick = () => {
  removeTdsClass("class");
  addTdsClass("pink-style", 13, 13);
  localStorage.setItem("color", ["pink-style", 13, 13]);
};
purpleBtn.onclick = () => {
  removeTdsClass("class");
  addTdsClass("purple-style", 13, 14);
  localStorage.setItem("color", ["purple-style", 13, 14]);
};

function addRow() {
  const l = removeTdsClass("style");
  let c = 3;
  const tr = document.createElement("tr");
  const td = `<td style='border-bottom: 0.5px solid #bbbdc0;' class='td1'>${l}</td><td style='border-bottom: 0.5px solid #bbbdc0;'><input style='width: 210px;' type='text' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'>        <div style='display: flex;'>        <input type='checkbox' />        <input type='checkbox' />        <input type='checkbox' />        <input type='checkbox' />    </div></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td><td style='border-bottom: 0.5px solid #bbbdc0;'><input type='checkbox' /></td></tr>`;
  tr.innerHTML = td;
  table.append(tr);
  const color = localStorage.getItem("color");
  if (color) {
    const colorArr = color.split(",");
    addTdsClass(colorArr[0], colorArr[1], colorArr[2]);
  }
  check_uncheck_manager();
}

/*********************/

let records = {
  names: [],
  periods: [],
  chkboxes: [],
  rowsNum: 0,
  inputs: [],
}; // initalize the records array
let clicker = document.getElementById("clicker");
const inputs = document.querySelectorAll("input");

let box_inputs = "";
let tableName = "dt1-47";

getCheckBoxes();

// console.log(box_inputs);

let del = document.getElementById("del");
let v1, v2, v3, v4, v5, period1, period2, period3, period4; // elements
period1 = -1;
period2 = -1;
period3 = -1;
period4 = -1;
fperiod1 = -1;
fperiod2 = -1;
fperiod3 = -1;

//  let group2 = getGroup(16, 31);

//////////// Al period values will be between 0-11

// initalize empty upon first time

if (localStorage.getItem(tableName) == null) {
  localStorage.setItem(tableName, JSON.stringify(records));
}
// initalize current values next time
else {
  let retriver = JSON.parse(localStorage.getItem(tableName));
  // console.log(retriver);
  if (retriver) {
    if (retriver.inputs) {
      for (let i = 0; i < inputs.length; i++) {
        if (i < 5 && retriver.inputs[i]) {
          inputs[i].value = retriver.inputs[i];
        }
      }
    }
    if (retriver.rowsNum > 0) {
      for (let j = 0; j < retriver.rowsNum; j++) {
        addRow();
      }
    }
    const trs = document.querySelectorAll("tr");

    trs.forEach((tr, id) => {
      let input = tr.querySelectorAll("input");
      let tds = tr.querySelectorAll("td");
      for (let i = 0; i < input.length; i++) {
        if (input[i].type == "text") {
          for (let j = 0; j < retriver.names.length; j++) {
            if (id - 2 == j) {
              retriver.names[j] != ""
                ? (input[i].value = retriver.names[j])
                : "";
            }
          }
        }
        if (i > 0 && i <= 4) {
          if (retriver.periods.length) {
            for (let j = 0; j < retriver.periods.length; j++) {
              if (id == retriver.periods[j][0] && i == retriver.periods[j][1]) {
                input[i].checked = true;
              }
            }
          }
        }
        if (i > 4 && i <= 16) {
          if (retriver.chkboxes.length) {
            for (let j = 0; j < retriver.chkboxes.length; j++) {
              if (
                id == retriver.chkboxes[j][0] &&
                i == retriver.chkboxes[j][1]
              ) {
                input[i].checked = true;
              }
            }
          }
        }
      }
    });
  }
}

/// delete the localstorage item

del.addEventListener("click", function () {
  if (confirm("حذف بيانات الوثيقة !"))
    if (localStorage.getItem(tableName) != null) {
      localStorage.removeItem(tableName);
      window.location.reload();
    }
});

//////////Saving to local
clicker.addEventListener("click", function () {
  const trs = document.querySelectorAll("tr");
  let inputsArr = {
    names: [],
    periods: [],
    chkboxes: [],
    rowsNum: trs.length - 13,
    inputs: [],
  };
  for (let i = 0; i < inputs.length; i++) {
    if (i < 5) {
      inputsArr.inputs.push(inputs[i].value);
    }
  }
  trs.forEach((tr, id) => {
    const inpts = tr.querySelectorAll("input");
    if (inpts.length > 0) {
      inpts.forEach((i, indx) => {
        if (i.type === "text") {
          inputsArr.names.push(i.value);
        } else if (i.type === "checkbox") {
          if (indx <= 4) {
            i.checked
              ? inputsArr.periods.push([id, indx])
              : inputsArr.periods.push("");
          } else if (indx > 4 && i.checked) {
            i.checked
              ? inputsArr.chkboxes.push([id, indx])
              : inputsArr.chkboxes.push("");
          }
        }
      });
    }
  });

  localStorage.setItem(tableName, JSON.stringify(inputsArr));
  alert("تم حفظ الوثيقة بنجاح.");
});

function getGroup(minRangeIndex, maxRangeIndex, bigGroup) {
  const group = [];
  for (let index = minRangeIndex; index <= maxRangeIndex; index++) {
    group.push(bigGroup[index]);
  }
  return group;
}

function chkManager(group) {
  let sub_group1 = getGroup(0, 0, group);
  let sub_group2 = getGroup(1, 4, group);
  let sub_group3 = getGroup(5, 16, group);

  check_uncheck_squares(sub_group1);
  check_uncheck_squares(sub_group2);
  check_uncheck_squares(sub_group3);
}

function check_uncheck_squares(group) {
  group.forEach((element, i) => {
    element.addEventListener("click", function () {
      uncheckOther(i, group);
      element.checked = "true";
    });
  });
}

function uncheckOther(i, group) {
  for (let index = 0; index < group.length; index++) {
    group[index].checked = "";
  }
}

// initalize the managment at starting the document

check_uncheck_manager();
plus_click();

// initalize the managment at clicking + button

function plus_click() {
  const plus = document.getElementById("plus");
  plus.addEventListener("click", function () {
    addRow();
    // console.log("plusee");
  });
}

// Calculate th number of rows (subtruct the first 2 tr)
function Calculate_number_of_rows() {
  let check_trS =
    document.querySelector(".tbody1").querySelectorAll("tr").length - 2;
  return check_trS;
}

function check_uncheck_manager() {
  getCheckBoxes();

  let number_of_rows = Calculate_number_of_rows();

  let counter = 1;

  for (let index = 0; index < number_of_rows; index++) {
    let dynamic_group = getGroup(
      index * 16 + index,
      16 * counter + index,
      box_inputs
    );

    chkManager(dynamic_group);

    counter++;
  }
}

function getCheckBoxes() {
  box_inputs = document.querySelector(".tbody1").querySelectorAll("input");
}
