
const Entrada1 ={
    titulo: "Ensalada de Atún",
    imagen: "../assets/ensalada-atun-close-pq.jpg",
    parraf1: "Esta ensalada de atún a la mexicana es una clásica, fácil y sencilla receta para los días que no quieres cocinar. Yo la hice uno de esos días de tengo hambre, no quiero ensuciar y mucho menos quiero pasarme mucho tiempo en la cocina. Con esta cuarentena me di cuenta que no tenía muchas recetas con atún de lata en el blog. Este fue uno de los ingredientes que más compraron todos o seguro tienen en su casa así que me di la tarea de hacer más recetas con este práctico ingrediente.",
    parraf2:"Te deja adaptarla mucho a lo que tengas en tu casa y lo que se te antoje, yo te la compartí así como la hice que aparte es una opción muy sana y ligera, en las notas te doy más tips de que puedes agregar para darle otros sabores. La idea es muy sencilla, solo se pica tomate rojo, cebolla (yo usé morada que a mi gusto es la que le queda mejor), chile, cilantro y aderezamos con jugo de limón y si lo deseas un poco de aceite de oliva. Sazonas con sal, pimienta y ajo en polvo si se te antoja."
}
const Entrada2 ={
    titulo: "Pozole Rojo",
    imagen: "../assets/pozole.jpg",
    parraf1: "Preparar pozole no es una misión imposible. Consiente a tu familia y amigos con esta deliciosa receta de pozole rojo y conviértete en una experta en la cocina mexicana. Blanco, rojo y verde, el pozole es una de las recetas más populares de la cocina mexicana. Un clásico de las fiestas patrias y uno de los más buscados por la familia en cualquiera de sus versiones, el pozole es, sin duda, uno de los favoritos de México.",
    parraf2:"Generalmente es preparado con maíz y carne de puerco, sin embargo, se puede preparar con pollo o incluso servirse sin carne. Las posibilidades son infinitas parar un platillo tan delicioso y versátil como lo es el pozole."
}
const Entrada3 ={
    titulo: "Tacos Dorados",
    imagen: "../assets/TacosDorados.jpg",
    parraf1: "Uno de los aperitivos más populares en México son los deliciosos tacos dorados y lo increíble de estos es que los hay de muchísimos estilos y combinaciones, todas ellas igual de deliciosas. Son de los pocos platillos que se pueden preparar prácticamente con lo que tengamos en el refrigerador ya que podemos transformar a cualquier ingrediente en el ingrediente protagonista de este platillo, haciendo de él un platillo muy práctico, versátil y fácil en su preparación.",
    parraf2:"Es por todo esto que en esta ocasión en RecetasGratis traemos para ti unos súper sencillos pero exquisitos tacos dorados de papa con pollo, los cuales encantarán a chicos y grandes por igual, y además harán que la carne de pollo rinda para muchísimos tacos mexicanos. Te invitamos a que te quedes con nosotros para preparar esta deliciosa receta de tacos de papa que te prometemos que te encantará."
}
let URL = window.location.href;
let partes = URL.split("=");//separo la url en el signo ? para obtener los valores enviados
let nombreEntrada = partes[1];

function CargarDatos(){
    let Titulo = document.getElementById('TituloReceta');
    let Imagen = document.getElementById('imagenReceta');
    let parraf1 = document.getElementById('Parraf1');
    let parraf2 = document.getElementById('Parraf2');
    if(nombreEntrada == "atun"){
        Titulo.innerText = Entrada1.titulo;
        Imagen.src = Entrada1.imagen;
        parraf1.innerText = Entrada1.parraf1;
        parraf2.innerText = Entrada1.parraf2;
        document.title = Entrada1.titulo
    }else if(nombreEntrada == "pozole"){
        Titulo.innerText = Entrada2.titulo;
        Imagen.src = Entrada2.imagen;
        parraf1.innerText = Entrada2.parraf1;
        parraf2.innerText = Entrada2.parraf2;
        document.title = Entrada2.titulo
    }else if(nombreEntrada == "tacosdorados"){
        Titulo.innerText = Entrada3.titulo;
        Imagen.src = Entrada3.imagen;
        parraf1.innerText = Entrada3.parraf1;
        parraf2.innerText = Entrada3.parraf2;
        document.title = Entrada3.titulo
    }

}

CargarDatos();