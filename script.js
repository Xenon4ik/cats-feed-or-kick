const startButton = document.getElementById('button-start')
const wrap1 = document.getElementById('wrapper-1')
const wrap2 = document.getElementById('wrapper-2')
const scale = document.getElementById('scale')
const kickBut = document.getElementById('kick')
const feedBut = document.getElementById('feed')
let photo = document.getElementById('catPh')

console.log()
startButton.onclick = function(){
    wrap1.style.display = 'none'
    wrap2.style.display = 'flex'
}

feedBut.addEventListener('click', function(){
    scale.value += 1;
    let number = document.querySelector('.number-of-cat');
    let result = Number(number.innerHTML) + 1;
    number.innerHTML = result;
    photo.innerHTML = `<img src="img/cat-${result}.jpg" alt="кот которого надо покормить или пнуть" id="img"></img>`
    scale.innerHTML = `<progress id="scale" max="10" value="${scale.value}"></progress>`
});


kickBut.addEventListener('click', function(){
    scale.value -= 1;
    let number = document.querySelector('.number-of-cat');
    let result = Number(number.innerHTML) + 1;
    number.innerHTML = result;
    photo.innerHTML = `<img src="img/cat-${result}.jpg" alt="кот которого надо покормить или пнуть" id="img"></img>`
    scale.innerHTML = `<progress id="scale" max="10" value="${scale.value}"></progress>`
})
