//CAPTURA DE ELEMENTOS DE USO FRECUENTE
let txtNombre = document.getElementById('inputNombre')
let txtApellido = document.getElementById('inputApellido')
let txtEdad = document.getElementById('inputEdad')
let txtCurso = document.getElementById('inputCurso')
let txtEmail = document.getElementById('inputMail')
let btnAgregar = document.getElementById('btnAgregar')
let artAlerta = document.createElement('article')
artAlerta.classList.add('alerta')
let artAlertaP = document.createElement('H3')
artAlertaP.classList.add('alertaP')
let artAlerta2 = document.createElement('article')
artAlerta2.classList.add('alerta')
let artAlerta2P = document.createElement('H3')
artAlerta2P.classList.add('alertaP')
let artAlertaTxt = document.createTextNode(`* Llenar los campos vacíos con información válida.`)
let artAlerta2Txt = document.createTextNode(`* Ya existe un registro con esta información. Puede editarlo con el botón Editar.`)
let arrayInscripciones = JSON.parse(localStorage.getItem('inscripciones'))//trae los registros
if (arrayInscripciones ==null){
    arrayInscripciones =[]
}
//FUNCIONES
//validar correo
function validateEmail(campo){      
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(campo)) {
      return true
    } else {
      return false
    }
    }
//validar edad    
function validateAge(anios){      
    if (anios>=6 && anios<=200) {
      return true
    } else {
      return false        
    }
    }
//Comparar objetos
function compareObj(a, b) {
    let aKeys = Object.keys(a).sort();
    let bKeys = Object.keys(b).sort();
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    if (aKeys.join('') !== bKeys.join('')) {
        return false;
    }
    for (let i = 0; i < aKeys.length; i++) {
        if ( a[aKeys[i]]  !== b[bKeys[i]]) {
            return false;
        }
    }
    return true;
}
    
//SECCION LLENAR CONTENIDO

    //cargar lo que tengo en la memoria y alamcenarlo en arreglo
    let sectionFichas = document.createElement('section')
    sectionFichas.classList.add('sectionFichas')
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
        let Hnombre = document.createElement('h3')
        let Hapellido = document.createElement('h3')
        let Hedad = document.createElement('h3')
        let Hcurso = document.createElement('h3')
        let Hmail = document.createElement('h3')
        //ensamblaje de elementos
        document.body.appendChild(sectionFichas)//agrego al body la sectionFichas contiene todas las filas de la seccion 
        sectionFichas.appendChild(sectRow)//agrego la sectionFichas las filas creadas que tienen fondo blanco
        Hnombre.appendChild(fichaNombre)//agrego al h3 creado la variable que contiene el texto para ese h3
        Hapellido.appendChild(fichaApellido)//agrego al h3 creado la variable que contiene el texto para ese h3
        Hedad.appendChild(fichaEdad)//agrego al h3 creado la variable que contiene el texto para ese h3
        Hcurso.appendChild(fichaCurso)//agrego al h3 creado la variable que contiene el texto para ese h3
        Hmail.appendChild(fichaMail)//agrego al h3 creado la variable que contiene el texto para ese h3
        sectRow.appendChild(artFicha)//Agrego a la franja blanca la seccion que contiene todos los h3
        artFicha.appendChild(Hnombre)//en la seccion q debe contener todos h3 agrego los h3 que ya tienen su texto
        artFicha.appendChild(Hapellido)//en la seccion q debe contener todos h3 agrego los h3 que ya tienen su texto
        artFicha.appendChild(Hedad)//en la seccion q debe contener todos h3 agrego los h3 que ya tienen su texto
        artFicha.appendChild(Hcurso)//en la seccion q debe contener todos h3 agrego los h3 que ya tienen su texto
        artFicha.appendChild(Hmail)//en la seccion q debe contener todos h3 agrego los h3 que ya tienen su texto
        sectRow.appendChild(navBtns)//en la franja blanca arrwgo la secion del nvegador donde van lso botones
        navBtns.appendChild(btnEdit)//en el navegador donde van los botones agrego los botones que se crearon con div. Caso editar
        navBtns.appendChild(btnDel)//En el navegador donde van los botones agrego los botones que se crearon con div. caso de eliminar
        btnDel.appendChild(btnDelTxt)//Agrego el texto al boton eliminar
        btnEdit.appendChild(btnEditTxt)//Agrego el texto al boton Editar
        //creacion de accion de boton ELIMINAR
        let btnDelClick = document.getElementById('btnDel'+i) //btnDel0,btnDel1, btnDel2, btnDel3... 
        btnDelClick.addEventListener('click', (e)=>{
            let idDel = btnDelClick.id.replace('btnDel','')//i
            arrayInscripciones.splice(idDel ,1)
            localStorage.setItem('inscripciones', JSON.stringify(arrayInscripciones))
            location.reload()
            
        })
        //creacion de accion de boton EDITAR
        let btnEditClick = document.getElementById('btnEdit'+i)
        btnEditClick.addEventListener('click', (e)=>{
            btnAgregar.setAttribute('style', 'background-color: orange')
            btnAgregar.innerText='Modificar'
            btnAgregar.setAttribute('value', i)
            let idEdit= btnEditClick.id.replace('btnEdit','')//i
            txtNombre.value = arrayInscripciones[idEdit].nombre
            txtApellido.value = arrayInscripciones[idEdit].apellido
            txtEdad.value = arrayInscripciones[idEdit].edad
            txtCurso.value = arrayInscripciones[idEdit].curso
            txtEmail.value = arrayInscripciones[idEdit].email
        })

    }


//SECCION AGREGAR/MODIFICAR CONTENIDO

btnAgregar.addEventListener('click', (event)=>{
    if (btnAgregar.innerText == 'Modificar'){
        if (txtNombre.value != false && txtApellido.value != false && validateAge(txtEdad.value) != false && txtCurso.value != false && validateEmail(txtEmail.value) != false){

            let mod = btnAgregar.getAttribute('value')
            arrayInscripciones[mod].nombre = txtNombre.value
            arrayInscripciones[mod].apellido = txtApellido.value
            arrayInscripciones[mod].edad = parseInt(txtEdad.value)
            arrayInscripciones[mod].curso = txtCurso.value
            arrayInscripciones[mod].email = txtEmail.value
            localStorage.setItem('inscripciones', JSON.stringify(arrayInscripciones))
    }
}
else if (txtNombre.value != false && txtApellido.value != false && validateAge(txtEdad.value) != false && txtCurso.value != false && validateEmail(txtEmail.value) != false){
   let exist = {
        nombre: String(txtNombre.value), 
        apellido: String(txtApellido.value), 
        edad: Number(txtEdad.value), 
        curso: String(txtCurso.value), 
        email: String(txtEmail.value),
    }
    
    let cont =0
    for (let i1=0; i1 < arrayInscripciones.length; i1++){
        if (compareObj(exist, arrayInscripciones[i1])==true){
            cont +=1
        }
    }
    if(cont>0){
        document.body.appendChild(artAlerta2)
        artAlerta2.appendChild(artAlerta2P)
        artAlerta2P.appendChild(artAlerta2Txt)
        event.preventDefault()
    }
    else{
        arrayInscripciones.push(exist)
        localStorage.setItem('inscripciones', JSON.stringify(arrayInscripciones))
    }

} 
else{
    document.body.appendChild(artAlerta)
    artAlerta.appendChild(artAlertaP)
    artAlertaP.appendChild(artAlertaTxt)
    event.preventDefault()
}

})


