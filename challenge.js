// Get all the elements
let counter = document.getElementById('counter')
let minus = document.getElementById('-')
let plus = document.getElementById('+')
let like = document.getElementById('<3')
let pause = document.getElementById('pause')
let likesObj = {}
let likesList = document.querySelector('.likes')
let commentForm = document.getElementById('comment-form')
let commentsList = document.getElementById('list')
let commentSubmit = document.getElementById('submit')
let commentInput = document.querySelector('#comment-form input')

let buttonsArray = [minus, plus, like, commentSubmit, commentInput]
console.log('buttonsArray', buttonsArray)
// let pauseState = false

// if (pause === true) { // triggered by pause button
// }

pause.addEventListener('click', function(){
  // console.log
  if (pause.innerText === 'pause') {
    pause.innerText = 'resume'

    buttonsArray.forEach(function(button){
      button.setAttribute('disabled', true)
    })

  } else {
    pause.innerText = 'pause'

    buttonsArray.forEach(function(button){
      button.removeAttribute('disabled')
    })

  }
})



// log out all the values
console.log("counter", counter)
console.log("minus", minus)
console.log("plus", plus)
console.log("like", like)
console.log("pause", pause)
console.log("likesList", likesList)
console.log("commentsList", commentsList)
console.log("commentSubmit", commentSubmit)
console.log("commentForm", commentForm)

// add logic/rules/events

//create timer

window.addEventListener('load', function() {
  setInterval(function(){
    incrementCounter('+')
    // let value = parseInt(counter.innerHTML)
    // value++
    // counter.innerHTML = `${value}`
  }, 1000)
})

plus.addEventListener('click', function(){
  incrementCounter('+')
  // let value = parseInt(counter.innerHTML)
  // value++
  // counter.innerHTML = `${value}`
})


minus.addEventListener('click', function(){
  incrementCounter('-')
  // let value = parseInt(counter.innerHTML)
  // value++
  // counter.innerHTML = `${value}`
})

like.addEventListener('click', function() {
    let value = getValue()
    if (likesObj[value]) {
      let likesLi = document.getElementById(`${value}likes`)
      likesObj[value]++
      likesLi.innerHTML = `${value} has been liked ${likesObj[value]} times`
    }
    else {
      let likesLi = document.createElement('li')
      likesLi.setAttribute("id", `${value}likes`);
      likesObj[value] = 1
      likesLi.innerHTML = `${value} has been liked ${likesObj[value]} times`
      likesList.appendChild(likesLi)
    }
    // console.log('likesObj', likesObj)
})


function getValue(){
  return parseInt(counter.innerHTML)
}

function incrementCounter(arg){
  let value = getValue()
  if(arg==='+' && pause.innerText==='pause'){
    value++
  }else if(arg==='-' && pause.innerText==='pause'){
    value--
  }
  return counter.innerHTML=`${value}`
}

commentForm.addEventListener('submit',function(e){
  e.preventDefault()
  let commentInputText = commentInput.value
  if (commentInputText) {
    let commentP = document.createElement('p')
    console.log(`comment`, commentInputText)
    commentP.innerHTML = commentInputText
    commentsList.appendChild(commentP)
    commentInput.value = ""
  }
  else {
    alert("No comment to submit");
  }
})
