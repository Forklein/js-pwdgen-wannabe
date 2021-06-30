// Test
console.log('Ciao Peppe')

//Exercise

/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21
*/

var user = prompt('Inserisci il tuo nome:');
var surname = prompt('Inserisci il tuo Cognome:');
var color = prompt('Inserisci il tuo colore:');

document.getElementById('user').innerHTML = user;
var password = document.getElementById('password');
password.innerHTML = user + surname + color + '21';