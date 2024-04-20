function mostrarProyectos(datos) {

  datos.sort((a, b) => a.id - b.id);

  const CONTENEDOR = document.querySelector(".contenedor-proyectos");

  datos.forEach(proyecto => {
    let contenedorTarjeta = document.createElement("div")
    contenedorTarjeta.classList.add("card-custom", "h-100")

    let contImagen = document.createElement("div")
    contImagen.className = "card-imagen";
    let imagen = document.createElement("img")
    imagen.src = `./img/proyectos/${proyecto.imagen}`;
    imagen.alt = `Foto de presentación de ${proyecto.titulo}`;

    let contTexto = document.createElement("div")
    contTexto.classList.add("card-detalles", "h-100")
    let contContenido = document.createElement("div")
    contContenido.className = "card-contenido";
    let contArriba = document.createElement("div")
    let titulo = document.createElement("h3")
    titulo.textContent = proyecto.titulo;
    let listaTecnologias = document.createElement("ul")

    proyecto.tecnologias.forEach(tecnologia => {
      let tecnologiaLi = document.createElement("li")
      tecnologiaLi.textContent = tecnologia;

      listaTecnologias.appendChild(tecnologiaLi)
    })

    let descripcion = document.createElement("p")
    descripcion.textContent = proyecto.descripcion;

    let contBajo = document.createElement("div")
    contBajo.className = "card-comprar";
    let tipo = document.createElement("h4")
    tipo.textContent = proyecto.tipo;
    let enlace = document.createElement("a")
    enlace.classList.add("waves-effect", "waves-light", "btn", "btn-moscuro")
    enlace.textContent = proyecto.enlace.nombre;
    enlace.href = proyecto.enlace.url;
    enlace.target = "_blank";
    enlace.relList.add("noreferrer", "noopener", "nofollow")

    contImagen.appendChild(imagen)

    contArriba.append(titulo, listaTecnologias)

    contBajo.append(tipo, enlace)

    contContenido.append(contArriba, descripcion, contBajo)

    contTexto.appendChild(contContenido)

    contenedorTarjeta.append(contImagen, contTexto)

    CONTENEDOR.appendChild(contenedorTarjeta)

  });
}

/* { # Platilla HTML

        <div class="card-custom h-100">
          <div class="card-imagen">
            <img src="/img/proyectos/05LANDFORES.jpg" alt="">
          </div>
          <div class="card-detalles h-100">
            <div class="card-contenido">
              <div>
                <h3>LANDFORES</h3>
                <ul>
                  <li>html</li>
                  <li>css</li>
                  <li>php</li>
                </ul>
              </div>
             
              <p>Un set de seis muñecos de liteltoy con la heroína Ahsoka Tano y sus fieles soldados clones. Ideal
                para los fans de la serie Star Wars: The Clone Wars y sus aventuras galácticas.</p>
              <div class="card-comprar">
                <h4>prototipo</h4>
                <a class="waves-effect waves-light btn btn-moscuro">Codigo</a>
              </div>
            </div>
          </div>
        </div>

} */

async function addProyectos() {
  let datos;
  try {
    let respuesta = await fetch('./json/fake.json');
    if (!respuesta.ok) {
      throw new Error(`${respuesta.status}`);
    } else {
      datos = await respuesta.json();
    }
  } catch (error) {
    console.log(error);
    datos = "Error"
  }
  if (datos != "Error") {
    mostrarProyectos(datos);
  }

}

window.addEventListener("DOMContentLoaded", addProyectos);