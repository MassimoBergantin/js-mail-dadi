


// var userMail = prompt("dammi la tua email ") 
// var allMails = ['dyron@libero.it', 'adina@gmail.com', 'ottavio@gmail.com', 'bardy@hotmail.com', 'maxbergax@gmail.com']


// var check = false; 

// for (var i = 0; i < allMails.length; i++) {
//     if (allMails[i] === userMail) {
//         check = true;
//     }
// }

// if (check) {
//     document.getElementById('mail').innerHTML += 'Sembra che tu sia già iscritto,Accedi ora!';
// } else {
//     document.getElementById('mail').innerHTML += 'Non ho trovato la tua mail! vuoi iscriverti?';
// }




// TIRA UN DADO E SFIDA IL PC




var userNum = Math.floor((Math.random() * 6) + 1);
var pcNum = Math.floor((Math.random() * 6) + 1);

if (userNum > pcNum) {
    document.getElementById('dice').innerHTML += 'complimenti hai vinto...per questa volta!';
} else if (userNum = pcNum) {
    document.getElementById('dice').innerHTML +=  '... siete pari!';
}
else{
    document.getElementById('dice').innerHTML += 'La macchina ha vinto!';
}






