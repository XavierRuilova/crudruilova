//CAPTURA DE ELEMENTOS DE USO FRECUENTE
let txtNombre = document.getElementById('inputNombre')
let txtApellido = document.getElementById('inputApellido')
let txtEdad = document.getElementById('inputEdad')
let txtCurso = document.getElementById('inputCurso')
let txtEmail = document.getElementById('inputMail')
let txtInfo = document.getElementById('inputInfoAdd')
let arrayInscripciones = localStorage.getItem('inscripciones')
let btnAgregar = document.getElementById('btnAgregar')

//SECCION LLAMAR CONTENIDO
if(arrayInscripciones == null){
    arrayInscripciones = []
}else{
    //cargar lo que tengo en la memoria y alamcenarlo en arreglo
    let sectionFichas = document.createElement('section')
    sectionFichas.classList.add('sectionFichas')
    arrayInscripciones = JSON.parse(localStorage.getItem('inscripciones')) 
    //iteracion de los elementos en el arreglo
    for (let i = 0; i < arrayInscripciones.length; i++){
        //creacion de elementos con id y clases
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
        let btnDel = document.createElement('div')
        btnDel.classList.add('btnlistDimension')
        btnDel.classList.add('btnlistDel')
        btnDel.setAttribute('id','btnDel'+i)
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
        //ensamblaje de elementos
        document.body.appendChild(sectionFichas)//agrego al body la sectionFichas contiene todas las filas de la seccion 
        sectionFichas.appendChild(sectRow)//agrego la sectionFichas las filas creadas que tienen fondo blanco
        Hnombre.appendChild(fichaNombre)//agrego al h3 creado la variable que contiene el texto para ese h3
        Hapellido.appendChild(fichaApellido)//agrego al h3 creado la variable que contiene el texto para ese h3
        Hedad.appendChild(fichaEdad)//agrego al h3 creado la variable que contiene el texto para ese h3
        Hcurso.appendChild(fichaCurso)//agrego al h3 creado la variable que contiene el texto para ese h3
        Hmail.appendChild(fichaMail)//agrego al h3 creado la variable que contiene el texto para ese h3
        Hinfo.appendChild(fichaInfo)//agrego al h3 creado la variable que contiene el texto para ese h3
        sectRow.appendChild(artFicha)//Agrego a la franja blanca la seccion que contiene todos los h3
        artFicha.appendChild(Hnombre)//en la seccion q debe contener todos h3 agrego los h3 que ya tienen su texto
        artFicha.appendChild(Hapellido)//en la seccion q debe contener todos h3 agrego los h3 que ya tienen su texto
        artFicha.appendChild(Hedad)//en la seccion q debe contener todos h3 agrego los h3 que ya tienen su texto
        artFicha.appendChild(Hcurso)//en la seccion q debe contener todos h3 agrego los h3 que ya tienen su texto
        artFicha.appendChild(Hmail)//en la seccion q debe contener todos h3 agrego los h3 que ya tienen su texto
        artFicha.appendChild(Hinfo)//en la seccion q debe contener todos h3 agrego los h3 que ya tienen su texto
        sectRow.appendChild(navBtns)//en la franja blanca arrwgo la secion del nvegador donde van lso botones
        navBtns.appendChild(btnEdit)//en el navegador donde van los botones agrego los botones que se crearon con div. Caso editar
        navBtns.appendChild(btnDel)//En el navegador donde van los botones agrego los botones que se crearon con div. caso de eliminar
        btnDel.appendChild(btnDelTxt)//Agrego el texto al boton eliminar
        btnEdit.appendChild(btnEditTxt)//Agrego el texto al boton Editar
        //creacion de accion de boton ELIMINAR
        let btnDelClick = document.getElementById('btnDel'+i) //btnDel0,btnDel1, btnDel2, btnDel3... 
        btnDelClick.addEventListener('click', (e)=>{
            let idDel = btnDelClick.id.replace('btnDel','')//i
            // console.log(btnDelClick.id)//i
            // console.log(let )
            arrayInscripciones.splice(idDel ,1)
            // console.log(arrayInscripciones)
            // console.log(btnDelClick.id)
            // console.log(let )
            localStorage.setItem('inscripciones', JSON.stringify(arrayInscripciones))
            location.reload()
            
        })
        //creacion de accion de boton EDITAR

        let btnEditClick = document.getElementById('btnEdit'+i)
        btnEditClick.addEventListener('click', (e)=>{
            let idEdit= btnEditClick.id.replace('btnEdit','')//i
            // console.log(btnEditClick.id)
            // console.log(idEdit)
            // arrayInscripciones.splice(idEdit,1)
            // console.log(arrayInscripciones)
            txtNombre.value = arrayInscripciones[idEdit].nombre
            txtApellido.value = arrayInscripciones[idEdit].apellido
            txtEdad.value = arrayInscripciones[idEdit].edad
            txtCurso.value = arrayInscripciones[idEdit].curso
            txtEmail.value = arrayInscripciones[idEdit].email
            txtInfo.value= arrayInscripciones[idEdit].info
            btnAgregar.setAttribute('style', 'background-color: orange')
            btnAgregar.innerText='Modificar'
        })

    }

}


// console.log(arrayInscripciones)



//SECCION AGREGAR CONTENIDO

btnAgregar.addEventListener('click', (event)=>{ 
    c = 0
    for (let srch = 0; srch < arrayInscripciones.length; srch++){
        if(arrayInscripciones[srch] === {nombre: txtNombre.value, apellido: txtApellido.value, edad: txtEdad.value, curso: txtCurso.value, email: txtEmail.value, info: txtInfo.value,}){
            c+=1
        }
    }
    if(c>0){
        artAlerta = document.createElement('article')
        artAlerta.classList.add('alerta')
        artAlertaP = document.createElement('p')
        artAlertaP.classList.add('alertaP')
        artAlertaTxt = document.createTextNode(`* Registro existente o sin modificaciones`)
        document.body.appendChild(artAlerta)
        artAlerta.appendChild(artAlertaP)
        artAlertaP.appendChild(artAlertaTxt)
    }
    else{
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

    }


        



})
