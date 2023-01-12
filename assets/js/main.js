const date = new Date();
let opt = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
};
// let topt = {
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric",
// };
let dateSA = date.toLocaleDateString("ar-SA", opt);
let dateUS = date.toLocaleDateString("ar-US", opt);
// time = date.toLocaleTimeString("ar-SA", topt);

let dateText = document.getElementById("date");

dateText.innerText = dateSA + " - " + dateUS + "م";

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
  print.innerHTML = content.innerHTML;
  const doc = new jsPDF("1", "pt");

  const inputs1 = content.querySelectorAll("input");
  const inputs2 = print.querySelectorAll("input");

  for (let i = 0; i < inputs1.length; i++) {
    if (inputs1[i].type == "text") {
      inputs2[i].value = inputs1[i].value;
    } else {
      if (inputs1[i].checked) {
        inputs2[i].checked = true;
      }
    }
  }

  // doc.setFont("DIN Next LT");
  //   doc.setR2L(false);
  let pageWidth = doc.internal.pageSize.width;
  let txtWidth = print.clientWidth / 2.2 / doc.internal.scaleFactor;
  let x = (pageWidth - txtWidth) / 2;

  btn.style.display = "none";
  // if (window.innerWidth > 1750) {
  //   content.style.width = "100%";
  //   content.style.height = "100%";
  //   content.style.overflow = "visible";
  // }
  await html2canvas(print, {
    allowTain: true,
    useCORS: true,
    scale: 2,
  }).then((c) => {
    if (window.innerWidth > 766) {
      doc.addImage(
        c.toDataURL("image/png"),
        "PNG",
        x,
        20,
        print.clientWidth / 2.2,
        print.clientHeight / 2
      );
    } else if (window.innerWidth >= 420 && window.innerWidth <= 766) {
      x = (pageWidth - txtWidth) / 2.2;
      doc.addImage(
        c.toDataURL("image/png"),
        "PNG",
        x,
        20,
        parent.clientWidth / 1.15,
        parent.clientHeight / 2.4
      );
    } else {
      x = (pageWidth - txtWidth) / 1.8;
      doc.addImage(
        c.toDataURL("image/png"),
        "PNG",
        x,
        20,
        parent.clientWidth,
        parent.clientHeight / 2.6
      );
    }
  });
  let nameInput = document.getElementById("name");
  let pdfName = "";

  nameInput.value ? (pdfName = nameInput.value) : (pdfName = "بدون اسم");
  // Or use javascript directly:
  doc.save(pdfName);
  btn.style.display = "block";
}

btn.addEventListener("touchend", () => {
  saveImg();
});
btn.addEventListener("click", () => {
  saveImg();
});
const tr = document.querySelectorAll("tr");

function removeTdsClass() {
  for (let i = 1; i <= 5; i++) {
    const tds = tr[i].querySelectorAll("td");
    for (let j = 1; j < tds.length; j++) {
      tds[j].removeAttribute("class");
    }
  }
}
function addTdsClass(className, start, end) {
  for (let i = 1; i <= 5; i++) {
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
const td1 = document.getElementById("td1");
const td2 = document.getElementById("td2");
const td3 = document.getElementById("td3");
const td4 = document.getElementById("td4");
const td5 = document.getElementById("td5");
const td6 = document.getElementById("td6");
const td7 = document.getElementById("td7");
const td8 = document.getElementById("td8");
const td9 = document.getElementById("td9");
const td10 = document.getElementById("td10");
const td11 = document.getElementById("td11");
const td12 = document.getElementById("td12");

redBtn.onclick = () => {
  removeTdsClass();
  addTdsClass("red-style", 1, 3);
};
orangeBtn.onclick = () => {
  removeTdsClass();
  addTdsClass("orange-style", 2, 5);
};
yellowBtn.onclick = () => {
  removeTdsClass();
  addTdsClass("yellow-style", 4, 7);
};
greenBtn.onclick = () => {
  removeTdsClass();
  addTdsClass("green-style", 6, 8);
};
blueBtn.onclick = () => {
  removeTdsClass();
  addTdsClass("blue-style", 8, 11);
};
pinkBtn.onclick = () => {
  removeTdsClass();
  addTdsClass("pink-style", 10, 11);
};
purpleBtn.onclick = () => {
  removeTdsClass();
  addTdsClass("purple-style", 10, 12);
};
