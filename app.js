
// Definicion de variables///

let nombre = prompt("ingrese su nombre");
let dirección = prompt("ingrese su direccion de despacho");
let telefono = parseInt(prompt("ingrese su numero de contacto"));


//////Creacion de if para validar datos de inicio/////


if(nombre === " "){
    alert("ingrese un nombre valido");

}else if(dirección === " "){
    alert("ingrese una direccion valida");
    
}else if(telefono === " "){
    alert("ingrese un telefono valido");
}else{
    alert(`Hola ${nombre} Bienvenido a Candy Shop `);
}

///// Creacion de Funcion que almacene los productos ////

function Producto(nombre,precio){
    this.nombre_producto = nombre;
    this.precio_producto = precio

    this.info = function(){
        alert("El producto tiene un costo de: " + this.precio_producto)
    }
    this.calculo = function(){
       
    }

}
    const producto1 = new Producto("collar perro pequeño", 5000);
    const producto2 = new Producto("collar corbatin", 15000);
    const producto3 = new Producto("collar iluminado", 20000);
    const producto4 = new Producto("collar antimordida", 15000);

    
    //producto1.calculo();
    // producto1.info();


/// Creacion de Switch para la seleccion de preoductos a cotizar ///

let cant = 0;
let total = 0;
let accion = prompt (`Por favor selecciona los productos que estas interesado
1: Collar perro pequeño
2: collar corbatin
3: collar iluminado
4: collar antimordidas`);

switch (accion) {
    case "1":
        producto1.info();
        cant=parseInt(prompt("¿que cantidad desea?"));
        total = cant * 5000;
        alert(`Tu producto tendria un costo de ${total}`);
        if(confirm("¿ Desea realizar la compra ?")){
            alert("Su pedido sera despachado");
        }else{
            alert("Gracias por visitarnos")
        }
    break
    case "2":
        producto2.info();
        cant=parseInt(prompt("¿que cantidad desea?"));
        total= cant * 15000;
        alert(`Tu producto tendria un costo de ${total}`);
        if(confirm("¿ Desea realizar la compra ?")){
            alert("Su pedido sera despachado");
        }else{
            alert("Gracias por visitarnos")
        }
    break
    case "3":
        producto3.info();
        cant=parseInt(prompt("¿que cantidad desea?"));
        total= cant * 20000;
        alert(`Tu producto tendria un costo de ${total}`);
        if(confirm("¿ Desea realizar la compra ?")){
            alert("Su pedido sera despachado");
        }else{
            alert("Gracias por visitarnos")
        }
    break
    case "4":
        producto4.info();
        cant=parseInt(prompt("¿que cantidad desea?"));
        total= cant * 15000;
        alert(`Tu producto tendria un costo de ${total}`);
        if(confirm("¿ Desea realizar la compra ?")){
            alert("Su pedido sera despachado");
        }else{
            alert("Gracias por visitarnos")
        }
    break
    default:
        alert("por favor seleccione una opcion de la lista");
        
    break;
        
}

