const input = document.getElementById('input')
const p = document.querySelector('p')
const select = document.getElementById('zorluk')
const btn = document.querySelector('button')

btn.disabled = true
input.disabled = true
btn.textContent = 'Bir Zorluk Seç'

let random
let select_value
select.addEventListener('change' , function(event){
    select_value = Number(event.target.value)
    random = Math.floor(Math.random() * select_value) + 1
    if(random != undefined){
        btn.disabled = false
        input.disabled = false
        btn.textContent = 'Tahmin Et'
    }
    console.log(random)
})


input.addEventListener('keyup' , e=>{
    if(e.key == "Enter"){
        tahminEt(e)
    }
})


let kacKere = 1
function tahminEt(e){
    let value = Number(input.value)
    if(kacKere < 4 && value != ''){
        input.value = ""
        if(value === random){
            p.textContent = `Doğru Bildin. ${kacKere} kere denedin... ${(e.timeStamp / 1000).toFixed(2)} saniye içerisinde bildin`
            p.style.color = 'green'
        }else if(value > random){
            p.textContent = `Daha Küçük Bir Sayı Giriniz ${3 - kacKere} hakkın kaldı`
            p.style.color = 'red'
            kacKere++
            clearMessage()
        }else if( value < random){
            p.textContent = `Daha Büyük Bir Sayı Giriniz ${3-kacKere} hakkın kaldı`
            p.style.color = 'red'
            kacKere++
            clearMessage()
        }else{
            p.textContent = `Geçersiz Bir Değer Girdiniz. 0 ile ${select_value} arasında bir Sayı Giriniz`
            clearMessage()
        }
    }
    if(kacKere === 4){
        p.textContent = "Oyunu Kaybettin!!!"
        btn.disabled = true
        input.disabled = true
    }
}
btn.addEventListener('click' , tahminEt)

function clearMessage(){
    setTimeout(() => {
        p.textContent = ''
    }, 3000);
}


// setInterval(() =>{
//     console.log("asd")
// },3000) //3 saniyede bir çalış


// setTimeout(() =>{
//     console.log("ali")
// },3000) //3 saniye sonra çalış