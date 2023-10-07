const startButton = document.getElementById('button-start')
const wrap1 = document.getElementById('wrapper-1')
const wrap2 = document.getElementById('wrapper-2')
const wrap3 = document.getElementById('wrapper-3')
const scale = document.getElementById('scale')
const kickBut = document.getElementById('kick')
const feedBut = document.getElementById('feed')
let photo = document.getElementById('catPh')
const points = document.getElementById('points')


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
    if(result===11){
        wrap2.style.display = 'none';
        wrap3.style.display = 'flex';
        points.innerHTML = scale.value;
        if(scale.value<5){
            console.log(1)
            wrap3.insertAdjacentHTML('beforeend', `<p>Ты червячок</p>`)
        }else if(5<=scale.value && scale.value<7){
            console.log(2)
            wrap3.insertAdjacentHTML('beforeend', `<p>Ты морячок</p>`)
        }else if(7<=scale.value && scale.value<=11){
            console.log(3)
            wrap3.insertAdjacentHTML('beforeend', `<p>Ты молодчок</p>`)
        }
    }
});


kickBut.addEventListener('click', function(){
    scale.value -= 1;
    let number = document.querySelector('.number-of-cat');
    let result = Number(number.innerHTML) + 1;
    number.innerHTML = result;
    photo.innerHTML = `<img src="img/cat-${result}.jpg" alt="кот которого надо покормить или пнуть" id="img"></img>`
    scale.innerHTML = `<progress id="scale" max="10" value="${scale.value}"></progress>`
    if(result===11){
        wrap2.style.display = 'none';
        wrap3.style.display = 'flex';
        points.innerHTML = scale.value;
        if(scale.value<5){
            console.log(1)
            wrap3.insertAdjacentHTML('beforeend', `<p>Ты червячок</p>`)
        }else if(5<=scale.value && scale.value<7){
            console.log(2)
            wrap3.insertAdjacentHTML('beforeend', `<p>Ты морячок</p>`)
        }else if(7<=scale.value && scale.value<=11){
            console.log(3)
            wrap3.insertAdjacentHTML('beforeend', `<p>Ты молодчок</p>`)
        }
    }

})
