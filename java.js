// const numero1 = parseInt(prompt('ingrese el primer nuero'))
// const numero2 = parseInt(prompt('ingrese el segundo numero'))
// const resultadoTotal = numero1+numero2
// alert(resultadoTotal)

const numero1 = 10
const numero2 = 5
const resultadoTotal = numero1+numero2
console.log(resultadoTotal)


// let numeroA = parseInt(prompt('ingrese un numero'))

// if(numeroA === 6){
//    alert('el numero es 6')
// }   else {
//        alert('el numero no es 6')
// }



let numeroA = parseInt(prompt('ingrese un numero'))

if(numeroA === 6){
    alert('el numero es 6')
}   else {
        alert('el numero no es 6')
}

const ingresarEdad = parseInt(prompt('ingrese su edad'))

if (edad >= 0 &&  edad <= 10){
    alert('niño');

} else if (edad  > 10 &&  edad <= 18){
    alert('adolescente');

} else if (edad  >19 &&   edad <= 80){
    alert(adulto);
    
}else if (edad   > 81 &&   edad <= 100){
    alert('anciano')
}

switch (edad) {
    case edad >=0 && edad<=10:
        alert('es un niño');
        break;
        case edad >=11 && edad<=18:
            alert('es un adolescente');
            break;
        default:
            alert('ingrese la edad correctamente')
        case edad >=19 && edad<=80:
            alert('es un adulto');
            break;
            case edad >=81 && edad<=100:
                alert('es un anciano');
                break;
        }


for(let i =1 ; i<=3; i++){
    i = i+2
    let nombreIngresado = prompt('ingrese su nombre');
    if(nombreIngresado === "Sayen"){
        alert('ha ingresado Sayen')
        continue
    }
    alert('su turno fue registrado, es el nro'+ i)

}



function nombreAIngresar (){
    let nombreIngresado = prompt('ingrese su nombre');
    alert('nombreIngresad');
}
function edadAIngresar (){
    let edadIngresada = prompt('ingrese su edad');
    alert(edadIngresada);
}
function nombreYEdad (){
    let nombreIngresado = prompt('ingrese su nombre');
    alert(nombreIngresado);
    let edadIngresada = prompt('ingrese su edad');
    alert(edadIngresada);
}

edadAIngresar()
nombreYEdad()
nombreAIngresar()


//objetos// 
const persona1 = {
    nombre: Mara , edad: 20 , calle: stateresita 2402}

    function persona(nombre, edad, calle) {
        this.nombre = literal.nombre;
        this.edad = literal.edad;
        this.calle = literal.calle;
    }

    console.log(persona1.nombre,persona1[edad])
    console.log(persona1.calle)
    const persona2 = new persona("Ailen" , 23, "mariano moreno");


    let cadena = "clase objetos";
    console.log(cadena.length);
    console.log(cadena.toLowerCase());
    console.log(cadena.toUpperCase);


//arrays//

const arrayDeNumeros = [0,1,2,3,4]
const arrayDeNombres = [Ailen,Mara,Suyai]

console.log(arrayDeNombres)


for (let index = 0;index<4;index++){

    if(arrayDeNombres[index] === "mara"){
        console.log("Encontramos a Mara"+(index+1));
        break 
    
    }
}

const listaNombres = [];
let   cantidad     = 5;

do{
    let nombreAIngresar = prompt('ingrese su nombre')
    listaNombres.push(nombreAIngresar)
    console.log(listaNombres.length)
}while(listaNombres.length != cantidad)

const nuevaLista = listaNombres.concat(["MARA", "AILEN"]);

alert(nuevaLista.join("/n"));

//funciones//

function sumarRango(desde,hasta){
}
let total = 0
for (let i = 1;i<=10;i++){
    total += i 
}
console.log(total) //55

sumarRango(1,5)

function mayorQue(n) {
    return (m) => m > n 
}

let mayorQueDiez = mayorQue(10)

console.log( mayorQueDiez(12) ) // true
console.log( mayorQueDiez(8) )  // false


const productos = [
    {nombre:'abrigos',precio:1000},
    {nombre:'remeras',precio:700},
    {nombre:'pantalones',precio:1200}]

let total = 0 

productos.forEach(  (elemento)=> {
    total+= elemento.precio
    console.log(elemento,nombre,elemento.precio)
})

console.log(total)

//DOM//

let parrafos = document.getElementsByClassName<("parrafo") 
console.log(document.getElementById("contenedor") )
console.log(document.getElementsByName("div"))

for (const parrafo of parrafos){
    console.log
}








































