let plusBtn = document.querySelector('.plus')
let inputTextNumber = document.querySelector('.input-text')
let minusBtn = document.querySelector('.minus')
let sum = 1 

plusBtn.addEventListener('click',function(){

   
    inputTextNumber.value = Number(inputTextNumber.value)+1
}
)

minusBtn.addEventListener('click' ,function(){
    if(inputTextNumber.value==0){
        inputTextNumber.value=0
    }else{
        inputTextNumber.value = Number(inputTextNumber.value)-1
    }

}
)