 let imagenes = [
    {
        "url": "img/Loki.png",
        "nombre": "Proyecto 1"
    },

    {
        "url": "img/cafe.png",
        "nombre": "Proyecto 2"
        },

    {
        "url": "img/Finny2.png",
        "nombre": "Proyecto 3"
        },
    
        {
        "url": "img/collie.png",
        "nombre": "Proyecto 3"
        },
    
        {
        "url": "img/galletas1.png",
        "nombre": "Proyecto 3"
        },
    
        {
        "url": "img/Kora.jpg",
        "nombre": "Proyecto 3"
        },


        {
        "url": "img/pupcake.png",
        "nombre": "Proyecto 3"
        },


        {
        "url": "img/Mailon.jpg",
        "nombre": "Proyecto 3"
        },
    
        {
        "url": "img/Loki2.png",
        "nombre": "Proyecto 3"
        },
 ]


 let atras = document.getElementById('atras');
 let adelante = document.getElementById('adelante');
 let imagen = document.getElementById('img');
 let puntos = document.getElementById('puntos');
 let texto = document.getElementById('texto');
 let actual = 0

 atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${images[actual].nombre}</h3>
    `
    posicionCarrusel()
    
 })


 adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy">`
    texto.innerHTML = `
    <h3>${images[actual].nombre}</h3>
    <p>${images[actual].descripcion}</p>
    `
    posicionCarrusel() 
 })

 function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML = '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    }
 }