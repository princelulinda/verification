// ******************************************************************************************

// appel aux element  du dom
let submit = document.getElementById("submit");
let form = document.querySelector("form");
let fistName = document.getElementById("fistName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmePass = document.getElementById("confirmePass");
let PasswordType = document.querySelector(".PasswordType");
let TextType = document.querySelector(".TextType");
let passwordType = document.querySelector(".passwordType");
let textType = document.querySelector(".textType");

// message d'erreur
function message(erreur, id) {
  let paragraph = document.querySelector(`#${id}`);
  paragraph.innerText = erreur;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  fistname();
});
//verification du champ fist name
function fistname() {
  let nombrevalue = fistName.value.length;
  if (!fistName.value == "") {
    if (nombrevalue >= 3) {
      if (/^[a-zA-Z]/.test(fistName.value)) {
        lastname();
        message("", "erreurfast");
      } else {
        let erreur = "entrez votre vrais nom";
        message(erreur, "erreurfast");
      }
    } else {
      let erreur = "votre nom est inferieur a 3";
      message(erreur, "erreurfast");
    }
  } else {
    let erreur = "completer le champ";
    message(erreur, "erreurfast");
  }
}
function lastname() {
  let nombrevalue = lastName.value.length;
  if (!lastName.value == "") {
    if (nombrevalue >= 3) {
      if (/^[a-zA-Z]/.test(lastName.value)) {
        Email();
        message("", "erreurlast");
      } else {
        let erreur = "entrez votre vrais prenom";
        message(erreur, "erreurlast");
      }
    } else {
      let erreur = "votre last name est inferieur a 3 lettre";
      message(erreur, "erreurlast");
    }
  } else {
    let erreur = "completer le champ";
    message(erreur, "erreurlast");
  }
}

function Email() {
  let caractaires = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{3}/;
  if (!email.value == "") {
    if (caractaires.test(email.value)) {
      Password();
      message("", "erreuremail");
    } else {
      let erreur =
        "votre email doit respecter le format ( princelulinda@gmail.com )";
      message(erreur, "erreuremail");
    }
  } else {
    let erreur = "completer  votre email";
    message(erreur, "erreuremail");
  }
}
function Password() {
  let nombrepass = password.value.length;
  if (!password.value == "") {
    if (nombrepass >= 6) {
      if (/[0-9a-zA-Z]+[!@#$%^&*()_+}{"?><+=-}]/.test(password.value)) {
        Passwordconfirm();
        message("", "erreurpass");
      } else {
        let erreur = "votre mot de passe doit avoir le caractere specil";
        message(erreur, "erreurpass");
      }
    } else {
      let results = 6 - nombrepass;
      let erreur = `il vous reste ${results}  caractaires ou plus`;
      message(erreur, "erreurpass");
    }
  } else {
    let erreur = "entre votre mot de pass";
    message(erreur, "erreurpass");
  }
}
function Passwordconfirm() {
  if (!confirmePass.value == "") {
    if (confirmePass.value === password.value) {
    } else {
      let erreur = " votre mot de pass est incorect";
      message(erreur, "erreurconfirm");
    }
  } else {
    let erreur = " confirmer votre mot de pass";
    message(erreur, "erreurconfirm");
  }
}

//affichage de password sous forme texte
PasswordType.addEventListener("click", () => {
  password.type = "text";
  PasswordType.style.display = "none";
  TextType.style.display = "block";
});
TextType.addEventListener("click", () => {
  password.type = "password";
  PasswordType.style.display = "block";
  TextType.style.display = "none";
});

passwordType.addEventListener("click", () => {
  confirmePass.type = "text";
  passwordType.style.display = "none";
  textType.style.display = "block";
});
textType.addEventListener("click", () => {
  confirmePass.type = "password";
  passwordType.style.display = "block";
  textType.style.display = "none";
});
