const imgpa = document.getElementsByClassName("pt");
const imgpts = document.getElementsByClassName("pts");
const inputs = document.getElementById("inputs");
const lowerf = document.getElementById("lowerf");
const lowerfbtni = document.getElementById("lowerfbtni");
const lowerfbtnii = document.getElementById("lowerfbtnii");
const alrnew = document.getElementById("alrnew");
const forml = document.getElementById("forml");
const vercontainer = document.getElementById("verifInputsContainer");
const upform = document.getElementById("upform");
const image = document.getElementById("logo");
const logocont = document.getElementById("logocont");
const container = document.getElementById("container");
const lowercont = document.getElementById("lowercont");
const btnsin = document.getElementById("btn-sin");
const suemail = document.getElementById("suemail");
var logoAnimation;
const test = document.createElement("SVG");
var animationcanceled;
animationcanceled = true;

var bbox = image.getBBox();

image.setAttribute(
  "viewBox",
  `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`
);

function testing() {
  patharrayl = Array.from(imgpts);

  for (var i = 0; i < patharrayl.length; i++) {
    var element = patharrayl[i];

    element.style.display = "block";
    element.style.animation = "test 3s 1 forwards";
  }
  var bbox = image.getBBox();

  image.setAttribute(
    "viewBox",
    `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`
  );
}

function revtesting() {
  patharrayl = Array.from(imgpts);

  for (var i = 0; i < patharrayl.length; i++) {
    var element = patharrayl[i];

    element.style.display = "none";
  }
  var bbox = image.getBBox();

  image.setAttribute(
    "viewBox",
    `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`
  );
}

function myEndFunction() {
  logocont.style.animation = "back 2s 1 forwards";
  lowercont.style.display = "flex";
  container.style.gap = "15%";
  image.data = "Images/logsssso 1.svg ";
  btnsin.style.display = "block";
  btnsin.style.color = "transparent";
  btnsin.style.padding = "0";

  setTimeout(function () {
    paddinganstart(btnsin);
  }, 250);
  lowercont.style.display = "flex";
  image.style.width = "300px";
  testing();
}

function btnmo() {
  btnsin.style.backgroundColor = "rgb(181, 19, 19)";
}

function btnmou() {
  btnsin.style.backgroundColor = "rgb(142, 5, 5)";
}

setTimeout(myEndFunction, 4000);
patharray = Array.from(imgpa);
setInterval(() => {}, 1);
function secondfunction() {
  container.style.animation = "testy  forwards";
  lowercont.style.backgroundColor = "white";
  setInterval(() => {
    if (window.innerWidth <= 480) {
      cancelanimatelogo(image);
    } else if (animationcanceled) {
      animatelogo(image);
      animationcanceled = false;
    }
  }, 1);

  setInterval(() => {
    if (window.innerWidth <= 480) {
      image.style.width = "75px";
      lowercont.style.width = "80%";
      lowercont.style.backgroundColor = "transparent";
      container.style.justifyContent = "start";
    } else {
      image.style.width = "100px";
      lowercont.style.backgroundColor = "white";
      lowercont.style.width = "35%";

      container.style.justifyContent = "center";
    }
  }, 1);
  inputs.style.display = "flex";
  upform.style.display = "block";
  lowerf.style.display = "block";
  btnsin.style.backgroundColor = "rgb(142, 5, 5)";
  btnsin.style.color = "white";
  btnsin.addEventListener("mouseover", btnmo);
  btnsin.addEventListener("mouseout", btnmou);
  revtesting();
  container.style.gap = "5%";
  lowerf.style.width = "100%";
}
function beforethird() {}
function thirdfunction() {
  lowerf.style.width = "0";
  setTimeout(function () {
    rtlanimation(lowerf);
  }, 1000);
  btnsin.style.color = "transparent";
  setTimeout(function () {
    paddinganim(btnsin);
  }, 250);
  setTimeout(function () {
    paddinganimrev(btnsin);
  }, 1000);

  suemail.style.height = "57.2px";
  setTimeout(function () {
    rtlanimation(suemail);
  }, 800);

  setTimeout(afterthird, 1000);
}
function afterthird() {
  lowerfbtnii.style.display = "none";
  lowerfbtni.textContent = "Sign in";
  btnsin.value = "Sign up";
  alrnew.textContent = "Already a member?";
  lowerfbtni.setAttribute("onclick", "fourthfunction()");
  addsuemailElements();
}
function fourthfunction() {
  lowerf.style.width = "0";
  setTimeout(function () {
    rtlanimation(lowerf);
  }, 1000);
  btnsin.style.color = "transparent";
  setTimeout(function () {
    paddinganim(btnsin);
  }, 250);
  setTimeout(function () {
    paddinganimrev(btnsin);
  }, 1000);
  suemail.style.width = "0";
  setTimeout(function () {
    dtuanimation(suemail);
  }, 800);

  setTimeout(afterfourth, 1000);
}
function afterfourth() {
  btnsin.value = "Sign in";
  lowerfbtni.textContent = "Sign up";
  alrnew.textContent = "New member?";
  lowerfbtnii.style.display = "block";
  lowerfbtni.setAttribute("onclick", "thirdfunction()");
  removesuemailElements();
}

function fifthfunction() {
  lowerf.style.width = "0";
  setTimeout(function () {
    rtlanimation(lowerf);
  }, 1000);
  btnsin.style.color = "transparent";
  setTimeout(function () {
    paddinganim(btnsin);
  }, 250);
  setTimeout(function () {
    paddinganimrev(btnsin);
  }, 1000);
  vercontainer.style.height = "0";

  setTimeout(afterfifth, 1000);
}
function afterfifth() {
  lowerfbtnii.style.display = "none";
  lowerfbtni.textContent = "Back";
  btnsin.value = "Recover password";
  alrnew.textContent = "Return back?";
  lowerfbtni.setAttribute("onclick", "sixthfunction()");
  createNewpassfield();
  createConfirmpassfield();
  setTimeout(fixheightprobver, 100);
}

function sixthfunction() {
  lowerf.style.width = "0";
  setTimeout(function () {
    rtlanimation(lowerf);
  }, 1000);
  btnsin.style.color = "transparent";
  setTimeout(function () {
    paddinganim(btnsin);
  }, 250);
  setTimeout(function () {
    paddinganimrev(btnsin);
  }, 1000);
  setTimeout(function () {
    dtuanimation(vercontainer);
  }, 800);

  setTimeout(aftersixth, 1000);
}
function aftersixth() {
  btnsin.value = "Sign in";
  lowerfbtni.textContent = "Sign up";
  alrnew.textContent = "New member?";
  lowerfbtnii.style.display = "block";
  lowerfbtni.setAttribute("onclick", "thirdfunction()");
  revfixheightprobver();
  setTimeout(destroyVerificationInputs, 1500);
}

function rtlanimation(element) {
  element.style.width = "100%";
}
function dtuanimation(element) {
  element.style.height = "0";
}

function paddinganim(element) {
  element.style.padding = "0";
}

function paddinganimrev(element) {
  if (window.innerWidth <= 480) {
    element.style.padding = "8px 100px";
    element.style.color = "white";
  } else {
    element.style.padding = "8px 70px";
    element.style.color = "white";
  }
}
function paddinganstart(element) {
  if (window.innerWidth <= 480) {
    element.style.padding = "8px 100px";
    element.style.color = "white";
  } else {
    element.style.padding = "8px 70px";
    element.style.color = "rgb(142, 5, 5)";
  }
}

function removesuemailElements() {
  var suemaillabel = suemail.querySelector("label");
  var suemaillineBreak = suemail.querySelector("br");
  var suemailinput = suemail.querySelector("input");

  suemail.removeChild(suemaillabel);
  suemail.removeChild(suemaillineBreak);
  suemail.removeChild(suemailinput);
}

function addsuemailElements() {
  var suemaillabel = document.createElement("label");
  suemaillabel.textContent = "Email";
  var suemaillineBreak = document.createElement("br");
  var suemailinput = document.createElement("input");
  suemailinput.name = "Email";
  suemailinput.type = "email";
  suemailinput.placeholder = "Enter your E-mail";
  suemailinput.required = true;

  var suemail = document.getElementById("suemail");

  suemail.appendChild(suemaillabel);
  suemail.appendChild(suemaillineBreak);
  suemail.appendChild(suemailinput);
}
if (window.innerWidth <= 480) {
  element.style.color = "white";
} else {
  element.style.color = "rgb(142, 5, 5)";
}

function animatelogo(element) {
  var keyframes = new KeyframeEffect(
    element,
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-25px)" },
      { transform: "translateY(0px)" },
    ],
    { duration: 3000, iterations: Infinity }
  );

  logoAnimation = new Animation(keyframes);

  logoAnimation.play();
}

function cancelanimatelogo(element) {
  if (logoAnimation) {
    logoAnimation.cancel();
    animationcanceled = true;
  }
}

function createNewpassfield() {
  var input = document.createElement("div");
  input.setAttribute("class", "new-pass-div");
  input.setAttribute("id", "new-pass-div");
  input.setAttribute("name", "new-pass-div");
  vercontainer.appendChild(input);

  var input2 = document.createElement("label");
  input2.innerHTML = "New Password";
  input2.setAttribute("class", "new-pass-label");
  input2.setAttribute("id", "new-pass-label");
  input2.setAttribute("for", "new-pass");
  input.appendChild(input2);

  var input3 = document.createElement("input");
  input3.setAttribute("class", "new-pass");
  input3.setAttribute("id", "new-pass");
  input3.setAttribute("type", "password");
  input3.setAttribute("name", "new-pass");
  input3.setAttribute("maxlength", "1");
  input.appendChild(input3);
}

function createConfirmpassfield() {
  var input = document.createElement("div");
  input.setAttribute("class", "Confirm-pass-div");
  input.setAttribute("id", "Confirm-pass-div");
  input.setAttribute("name", "Confirm-pass-div");
  vercontainer.appendChild(input);

  var input2 = document.createElement("label");
  input2.innerHTML = "Confirm Password";
  input2.setAttribute("class", "Confirm-pass-label");
  input2.setAttribute("id", "Confirm-pass-label");
  input2.setAttribute("for", "Confirm-pass");
  input.appendChild(input2);

  var input3 = document.createElement("input");
  input3.setAttribute("class", "Confirm-pass");
  input3.setAttribute("id", "Confirm-pass");
  input3.setAttribute("type", "password");
  input3.setAttribute("name", "Confirm-pass");
  input3.setAttribute("maxlength", "1");
  input.appendChild(input3);
}

function fixheightprobver() {
  vercontainer.style.height = "114.4px";
}
function revfixheightprobver() {}
vercontainer.style.height = "0";

// Function to destroy verification code input fields
function destroyVerificationInputs() {
  // Remove all child elements (inputs)
  vercontainer.innerHTML = " ";
}

// the names for id:idnumber   password:passcode   email:Email
//for back-end team edit the text inside this 2 functions to the php files