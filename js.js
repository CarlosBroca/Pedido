let msg = document.getElementById('alerta')
let btn = document.getElementById('maried')
let box = document.getElementById('signature')

function teste(){

    msg.style.marginTop = '0'

}

let cbtn = document.getElementById('close-screen')

    cbtn.addEventListener('click', ()=>{

        msg.style.marginTop ='-250%'

    })

function aceitar(){

    let contrato = document.getElementById('contrato')

    contrato.style.right = '15%'

    box.style.opacity = '1'

}

      

let son = document.getElementById('acept')

son.addEventListener('click', ()=>{
    
    if(son.checked == true){    

        btn.style.opacity = '1'
        box.style.height = '100%'

    }else{
        btn.style.opacity = '0'
        box.style.height = '40%'


    }
    
})

let txt = document.getElementById('texto-maria')

btn.addEventListener('click', ()=>{

    let audio = document.getElementById('myaudio')

    txt.style.left = '0'

    audio.play()

})
