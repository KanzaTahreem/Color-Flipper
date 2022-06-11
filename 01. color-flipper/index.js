let simple = ['green', 'red', 'orange', 'blue', 'pruple']
let btn = document.getElementById('btn')
let color = document.getElementById('color')

btn.addEventListener('click', function(){
    // get random number between 0 - 3
    let randomNumber = 2;
    document.body.style.backgroundColor = simple[randomNumber]
    color.textContent = simple[randomNumber]
})