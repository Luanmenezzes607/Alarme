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
        input: inputTime.value,
        active: true
    })

    page2.style.display = 'none'
    page1.style.display = 'block'
    showTime()
}

function showTime(){
    let newTime = ''
        alarmes.forEach((item)=>{
            newTime += `
                  <div class="info-hours">
                     <p><span>AM </span>${item.input}H</p>
                    <div class="container-active">
                        <div class="box">
                        <div class="circle"></div>
                        </div>
                    </div>
                  </div>
            `
        })

    document.querySelector('.hours').innerHTML= newTime
    localStorage.setItem('alarmes', JSON.stringify(alarmes))
}

function getInfos(){
    let hours = localStorage.getItem('alarmes')

    if(hours){
        alarmes = JSON.parse(hours)
        showTime()
    }

}


/*====================================================================*/

const container = document.querySelector('.hours')

container.addEventListener('click', function(event) {

    const circleBtn = event.target
    const boxCircleBtn = event.target.parentElement

    if (event.target && event.target.classList.contains('circle')) {
        circleBtn.classList.toggle('ativar')
        boxCircleBtn.classList.toggle('ativar-background')
    }
  
})














getInfos()