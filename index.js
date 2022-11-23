//SECCION LLAMAR CONTENIDO
let arrayInscripciones = localStorage.getItem('inscripciones')
if(arrayInscripciones == null){
    arrayInscripciones = []
}else{
    let sectionFichas = document.createElement('section')
    sectionFichas.classList.add('sectionFichas')
    arrayInscripciones = JSON.parse(localStorage.getItem('inscripciones')) 
    for (let i = 0; i < arrayInscripciones.length; i++){
        let sectRow = document.createElement('section')
        sectRow.classList.add('rows')
        let artFicha = document.createElement('article')
        artFicha.classList.add('sectDatos')
        let navBtns = document.createElement('nav')
        navBtns.classList.add('sectBtns')
        let btnEdit = document.createElement('div')
        btnEdit.classList.add('btnlistDimension')
        btnEdit.classList.add('btnlistEdit')
        btnEdit.setAttribute('id','btnEdit'+i)
        // btnEdit.setAttribute('value',i)
        let btnDel = document.createElement('div')
        btnDel.classList.add('btnlistDimension')
        btnDel.setAttribute('id','btnDel'+i)
        btnDel.classList.add('btnlistDel')
        let btnEditTxt = document.createTextNode(`Editar`) 
        let btnDelTxt = document.createTextNode(`Eliminar`) 
        //atributos del objeto
        let fichaNombre = document.createTextNode(`Nombre:  ${arrayInscripciones[i].nombre} `)
        let fichaApellido = document.createTextNode(`Apellido:  ${arrayInscripciones[i].apellido} `)
        let fichaEdad = document.createTextNode(`Edad:  ${arrayInscripciones[i].edad} `)
        let fichaCurso = document.createTextNode(`Curso:  ${arrayInscripciones[i].curso} `)
        let fichaMail = document.createTextNode(`Correo:  ${arrayInscripciones[i].email} `)
        let fichaInfo = document.createTextNode(`Información:  ${arrayInscripciones[i].info} `)
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
        //PARA ELIMINAR CONTENIDO
        let btnDelClick = document.getElementById('btnDel'+i)
        btnDelClick.addEventListener('click', (e)=>{
            idd = btnDelClick.id.replace('btnDel','')
            // console.log(btnDelClick.id)
            // console.log(idd)
            arrayInscripciones.splice(idd,1)
            // console.log(arrayInscripciones)
            localStorage.setItem('inscripciones', JSON.stringify(arrayInscripciones))
            location.reload()
        })

    }

}


// console.log(arrayInscripciones)



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
