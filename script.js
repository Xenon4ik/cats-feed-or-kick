const startButton = document.getElementById('button-start')
const wrap1 = document.getElementById('wrapper-1')
const wrap2 = document.getElementById('wrapper-2')
const scale = document.getElementById('scale')
const kickBut = document.getElementById('kick')
const feedBut = document.getElementById('feed')
let number = document.getElementById('number-of-cat')


startButton.onclick = function(){
    wrap1.style.display = 'none'
    wrap2.style.display = 'flex'
}

feedBut.addEventListener('click', function(){
    scale.value += 1;
    let result = Number(number.innerHTML) + 1;
    wrap2.innerHTML = `<p class="cat-number">Котик номер <span class="number-of-cat">${result}</span></p>
    <img src="img/cat-${result}.jpg" alt="кот которого надо покормить или пнуть" id="img">
    <div class="wrapper-but">
        <button id="kick" class="but kick">Пнуть</button>
        <button id="feed" class="but feed">Покормить</button>
    </div>
    <progress id="scale" max="10" value="${scale.value}"></progress>`
    
})


kickBut.addEventListener('click',function(){
    scale.value -= 1;
    let result = Number(number.innerHTML) + 1;
    wrap2.innerHTML = `<p class="cat-number">Котик номер <span class="number-of-cat">${result}</span></p>
    <img src="img/cat-${result}.jpg" alt="кот которого надо покормить или пнуть" id="img">
    <div class="wrapper-but">
        <button id="kick" class="but kick">Пнуть</button>
        <button id="feed" class="but feed">Покормить</button>
    </div>
    <progress id="scale" max="10" value="${scale.value}"></progress>`

})

// function change_cat(num){
//     let result = Number(num.innerHTML) + 1;
//     num.innerHTML = result;
//     wrap2.innerHTML = `<p class="cat-number">Котик номер <span class="number-of-cat">${result}</span></p>
//     <img src="img/cat-${result}.jpg" alt="кот которого надо покормить или пнуть" id="img">
//     <div class="wrapper-but">
//         <button id="kick" class="but kick">Пнуть</button>
//         <button id="feed" class="but feed">Покормить</button>
//     </div>
//     <progress id="scale" max="10" value="${scale.value}"></progress>`

// }
// if(counters){
//     counters.forEach(counter =>{
//         counter.addEventListener('click', e =>{
//             const target = e.target

//             if(target.closest('.but')){
//                 let value = parseInt(target.closest('.counter').querySelector('#scale'))

//                 if(target.classList.contains('plus1')
//             }
//         })
//     })
// }

// function count() {
//        let k=1  
//        return function(){
//             return k++
// }

//     }
    
//     const co = count();
//     kickBut.addEventListener('click', function(){
//      wrap2.innerHTML = `<p>Котик номер <span class="number-of-cat">${co()}</span></p>
//     <img src="cat-${co()}.jpg" alt="кот которого надо покормить или пнуть" id="img">
//     <button id="kick">Пнуть</button>
//     <button id="feed">Покормить</button>
//     <meter id="scale" min="0" max="100" value="0"></meter>`})



// function makeCount() {
//     let k=0;
//     continueButton.onclick = function(){
//         k++
//         wrap2.innerHTML =  `<p>Котик номер <span class="number-of-cat">${k}</span></p>
//                             <img src="cat-${k}.jpg" alt="кот которого надо покормить или пнуть" id="img">
//                             <button id="kick">Пнуть</button>
//                             <button id="feed">Покормить</button>
//                             <button id="continue">Следующий кот</button>`
//     }

// }
