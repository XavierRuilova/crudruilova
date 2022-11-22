let inscripciones = localStorage.getItem('inscripciones')
if(inscripciones == null){
    inscripciones = []
}else{
    let addel = document.createElement('div')
    addel.classList.add('addElements')
    inscripciones = JSON.parse(localStorage.getItem('inscripciones')) 
    inscripciones.forEach((e) => {
        // let addel= document.getElementById('addElements')
        let bar = document.createElement('div')
        bar.classList.add('bars')
        let divNombre = document.createTextNode(`Nombre:  ${e.nombre} `)
        let divApellido = document.createTextNode(`Apellido:  ${e.apellido} `)
        let divEdad = document.createTextNode(`Edad:  ${e.edad} `)
        let divCurso = document.createTextNode(`Curso:  ${e.curso} `)
        let divMail = document.createTextNode(`Correo:  ${e.email} `)
        let divInfo = document.createTextNode(`Información:  ${e.info} `)
        bar.appendChild(document.createElement('h1').appendChild(divNombre))
        bar.appendChild(document.createElement('br'))
        bar.appendChild(divApellido)
        bar.appendChild(document.createElement('br'))
        bar.appendChild(divEdad)
        bar.appendChild(document.createElement('br'))
        bar.appendChild(divCurso)
        bar.appendChild(document.createElement('br'))
        bar.appendChild(divMail)
        bar.appendChild(document.createElement('br'))
        bar.appendChild(divInfo)
        bar.appendChild(document.createElement('br'))
        addel.appendChild(bar)
        document.body.appendChild(addel)
        



    });

}
console.log(inscripciones)
let btnAgregar = document.getElementById('btnAgregar')

btnAgregar.addEventListener('click', (event)=>{
   
    event.preventDefault()
    let txtNombre = document.getElementById('inputNombre')
    let txtApellido = document.getElementById('inputApellido')
    let txtEdad = document.getElementById('inputEdad')
    let txtCurso = document.getElementById('inputCurso')
    let txtEmail = document.getElementById('inputMail')
    let txtInfo = document.getElementById('inputInfoAdd')
    
    inscripciones.push({
        nombre: txtNombre.value,
        apellido: txtApellido.value,
        edad: parseInt(txtEdad.value),
        curso: txtCurso.value,
        email: txtEmail.value,
        info: txtInfo.value, 
    })

    localStorage.setItem('inscripciones', JSON.stringify(inscripciones))
    txtNombre.value=''
    txtApellido.value=''
    txtEdad.value=''
    txtCurso.value=''
    txtEmail.value=''
    txtInfo.value=''

})

// console.log(inscripciones)
