let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroMaximo = 100;
let numeroUsuario;
let count = 1;
let maximosIntentos = 3;

while (numeroSecreto != numeroUsuario) {
    numeroUsuario = parseInt(prompt(`Escribe un número entre 1 y ${numeroMaximo}`));


console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste! El numero secreto era ${numeroSecreto} Lo hiciste en ${count} ${count > 1 ? 'intentos' : 'intento'}`);
        break;
    } else {
        if(numeroUsuario > numeroSecreto){
            alert ('El numero secreto era menor');
        } else {
                alert ('El numero secreto era mayor');
        } 
        count++;
        if(count > maximosIntentos){
            alert(`LLegaste al limite de ${maximosIntentos} intentos`);
            break;
        }
        alert('Que mal, no acertaste, vuelve a intentarlo');
    }
}
