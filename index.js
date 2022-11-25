//CAPTURA DE ELEMENTOS DE USO FRECUENTE
let txtNombre = document.getElementById('inputNombre')
let txtApellido = document.getElementById('inputApellido')
let txtEdad = document.getElementById('inputEdad')
let txtCurso = document.getElementById('inputCurso')
let txtEmail = document.getElementById('inputMail')
let btnAgregar = document.getElementById('btnAgregar')
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

//funcion ensamblar 2 tags
function ensamble2tags(tag1, tag2){
    tag1.appendChild(tag2)
}
//funcion alertas
function alerta(tipo){
    let artAlerta = document.createElement('article')
    artAlerta.classList.add('alerta')
    let artAlertaP = document.createElement('H3')
    artAlertaP.classList.add('alertaP')
    let artAlertaTxt =''
if(tipo==1){
    artAlertaTxt = document.createTextNode(`* Llenar los campos vacíos con información válida.`)
    document.body.appendChild(artAlerta)
    ensamble2tags(artAlerta, artAlertaP)
    ensamble2tags(artAlertaP, artAlertaTxt)
    btnAgregar.setAttribute('type', 'button')
    btnAgregar.addEventListener('click', (e)=>{
        btnAgregar.setAttribute('type', 'submit')
        location.reload()
    })
}
else if(tipo==2){
    artAlertaTxt = document.createTextNode(`* Ya existe un registro con esta información. Puede editarlo con el botón Editar.`)
    document.body.appendChild(artAlerta)
    ensamble2tags(artAlerta, artAlertaP)
    ensamble2tags(artAlertaP, artAlertaTxt)
    btnAgregar.setAttribute('type', 'button')
    btnAgregar.addEventListener('click', (e)=>{
        btnAgregar.setAttribute('type', 'submit')
        location.reload()
    })
}
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
        document.body.appendChild(sectionFichas)
        ensamble2tags(sectionFichas, sectRow)
        ensamble2tags(sectRow, artFicha)
        let arrayH =[Hnombre, Hapellido, Hedad, Hcurso, Hmail]
        let arrayT =[fichaNombre, fichaApellido, fichaEdad, fichaCurso, fichaMail]
        for (let d=0; d<arrayH.length;d++){
            ensamble2tags(artFicha, arrayH[d])
        }
        for (let h=0; h<arrayH.length;h++){
            ensamble2tags(arrayH[h], arrayT[h])
        }
       let arraybtn =[btnEdit, btnDel]
       let arraybtnT = [btnEditTxt, btnDelTxt]
        ensamble2tags(sectRow, navBtns)
        for (let n=0; n<arraybtn.length;n++){
            ensamble2tags(navBtns, arraybtn[n])
        }
        for (let bt=0; bt<arraybtn.length;bt++){
            ensamble2tags(arraybtn[bt], arraybtnT[bt])
        }
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
            // btnAgregar.setAttribute('style', 'background-color: orange')
            btnAgregar.innerText='Modificar'
            btnAgregar.classList.add('btnModificar')
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

    if (txtNombre.value != false && txtApellido.value != false && validateAge(txtEdad.value) != false && txtCurso.value != false && validateEmail(txtEmail.value) != false){
        if (btnAgregar.innerText == 'Modificar'){
            let mod = btnAgregar.getAttribute('value')
                arrayInscripciones[mod].nombre = txtNombre.value
                arrayInscripciones[mod].apellido = txtApellido.value
                arrayInscripciones[mod].edad = parseInt(txtEdad.value)
                arrayInscripciones[mod].curso = txtCurso.value
                arrayInscripciones[mod].email = txtEmail.value
                localStorage.setItem('inscripciones', JSON.stringify(arrayInscripciones))
        }
        else{
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
                alerta(2)
            }
            else{
                arrayInscripciones.push(exist)
                localStorage.setItem('inscripciones', JSON.stringify(arrayInscripciones))
            }
        }
    }
    else{
        alerta(1)
    }
})


