const btnAd = document.querySelector('.btn-ad')
const btnHomePage2 = document.querySelector('.btn-home-page2')
const btnHomePage3 = document.querySelector('.btn-home-page3')
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page3 = document.querySelector('.page3')
const selectMusic = document.querySelector('.music-select')
let musics = document.querySelectorAll('.song')


btnAd.addEventListener('click', ()=>{
    page1.style.display = 'none'
    page2.style.display = 'block'
})

selectMusic.addEventListener('click', ()=>{
     page2.style.display = 'none'
     page3.style.display = 'block'
})

btnHomePage2.addEventListener('click', ()=>{
     page2.style.display = 'none'
     page3.style.display = 'none'
     page1.style.display = 'block'
    
})

btnHomePage3.addEventListener('click', ()=>{
     page2.style.display = 'none'
     page3.style.display = 'none'
     page1.style.display = 'block'
    
})



/*=============================================================== */
let alarmes = []
const inputTime = document.querySelector('#time')
const btnAdTime = document.querySelector('.btn-time')

btnAdTime.addEventListener('click', adicionarAlarme)

function adicionarAlarme(){
    alarmes.push({
        time: inputTime.value,
        icon: `<i class="fa-solid fa-toggle-off active-alarme"></i>`
    })

    page2.style.display = 'none'
    page1.style.display = 'block'
    showTime()

}

function showTime(){
    let newTime = ''

    alarmes.map((item, index)=>{
        newTime += `
              <li class="info-hours">
                   <p><span>AM </span>${item.time}H</p>
                   ${item.icon}
              </li>
        `
    })

    document.querySelector('.hours').innerHTML= newTime
    localStorage.setItem('alarmes', JSON.stringify(alarmes))
}

function getInfos(){
    let hours = localStorage.getItem('alarmes')

    if(hours){
        alarmes = JSON.parse(hours)
    }

    showTime()
}


/*====================================================================*/
function ativarAlarme(index){
    console.log(index)

    const btn = document.querySelectorAll('.active-alarme')

let arr = Array.from(btn)

console.log(arr)

}

getInfos()