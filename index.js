//SECCION LLAMAR CONTENIDO
let arrayInscripciones = localStorage.getItem('inscripciones')
if(arrayInscripciones == null){
    arrayInscripciones = []
}else{
    let sectionFichas = document.createElement('section')
    sectionFichas.classList.add('sectionFichas')
    arrayInscripciones = JSON.parse(localStorage.getItem('inscripciones')) 
    arrayInscripciones.forEach((e) => {
        let sectRow = document.createElement('section')
        sectRow.classList.add('rows')
        let artFicha = document.createElement('article')
        artFicha.classList.add('sectDatos')
        let navBtns = document.createElement('nav')
        navBtns.classList.add('sectBtns')
        let btnEdit = document.createElement('div')
        btnEdit.classList.add('btnlistDimension')
        btnEdit.classList.add('btnlistEdit')
        btnEdit.setAttribute('id','btnEdit')
        let btnDel = document.createElement('div')
        btnDel.classList.add('btnlistDimension')
        btnDel.setAttribute('id','btnDel')
        btnDel.classList.add('btnlistDel')
        let btnEditTxt = document.createTextNode(`Editar`) 
        let btnDelTxt = document.createTextNode(`Eliminar`) 
        //atributos del objeto
        let fichaNombre = document.createTextNode(`Nombre:  ${e.nombre} `)
        let fichaApellido = document.createTextNode(`Apellido:  ${e.apellido} `)
        let fichaEdad = document.createTextNode(`Edad:  ${e.edad} `)
        let fichaCurso = document.createTextNode(`Curso:  ${e.curso} `)
        let fichaMail = document.createTextNode(`Correo:  ${e.email} `)
        let fichaInfo = document.createTextNode(`Información:  ${e.info} `)
        let Hnombre = document.createElement('h3')
        let Hapellido = document.createElement('h3')
        let Hedad = document.createElement('h3')
        let Hcurso = document.createElement('h3')
        let Hmail = document.createElement('h3')
        let Hinfo = document.createElement('h3')

        //fin de atributos
        //ensamblaje de elementos
        document.body.appendChild(sectionFichas)
        sectionFichas.appendChild(sectRow)
        Hnombre.appendChild(fichaNombre)
        Hapellido.appendChild(fichaApellido)
        Hedad.appendChild(fichaEdad)
        Hcurso.appendChild(fichaCurso)
        Hmail.appendChild(fichaMail)
        Hinfo.appendChild(fichaInfo)
        sectRow.appendChild(artFicha)
        artFicha.appendChild(Hnombre)
        artFicha.appendChild(Hapellido)
        artFicha.appendChild(Hedad)
        artFicha.appendChild(Hcurso)
        artFicha.appendChild(Hmail)
        artFicha.appendChild(Hinfo)
        sectRow.appendChild(navBtns)
        navBtns.appendChild(btnEdit)
        navBtns.appendChild(btnDel)
        btnDel.appendChild(btnDelTxt)
        btnEdit.appendChild(btnEditTxt)
    });

}
//PARA EDITAR CONTENIDO
// let btnEditClick = document.getElementById('btnEdit')
// btnAgregar.addEventListener('click', (event)=>{

// })

// let btnDelClick = document.getElementById('btnDel')
// btnAgregar.addEventListener('click', (event)=>{

// })

//SECCION AGREGAR CONTENIDO
let btnAgregar = document.getElementById('btnAgregar')

btnAgregar.addEventListener('click', (event)=>{
    let txtNombre = document.getElementById('inputNombre')
    let txtApellido = document.getElementById('inputApellido')
    let txtEdad = document.getElementById('inputEdad')
    let txtCurso = document.getElementById('inputCurso')
    let txtEmail = document.getElementById('inputMail')
    let txtInfo = document.getElementById('inputInfoAdd')
    
    arrayInscripciones.push(
        {
        nombre: txtNombre.value,
        apellido: txtApellido.value,
        edad: parseInt(txtEdad.value),
        curso: txtCurso.value,
        email: txtEmail.value,
        info: txtInfo.value, 
    }
    )

    localStorage.setItem('inscripciones', JSON.stringify(arrayInscripciones))

})

