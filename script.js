"use strict";

const output = document.querySelector('.output')
const clearBtns = document.querySelectorAll('.clearBtn')

function calculate(number){
  output.value += number
}

function result(){
  try {
    output.value = eval(output.value).toFixed(2)
  } catch (error) {
  console.log('err');    
  }
}

clearBtns.forEach(clearBtn =>{
  clearBtn.addEventListener('click',()=>{
    output.value = ''
  })
})

function del(){
  output.value = output.value.slice(0,-1)
}