let simple = ['green', 'red', 'orange', 'blue', 'lightblue', 'indigo', 'pink', 'grey', 'yellow', 'goldenrod', 'violet', 'olive', 'navy', 'teal', 'aqua']
let btn = document.getElementById('btn')
let color = document.getElementById('color')

btn.addEventListener('click', function(){
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = simple[randomNumber]
    color.textContent = simple[randomNumber]
})

    // make it more interesting by getting a random number from simple (array)
    // we can do this by setting up a function that wi generate a random number

function getRandomNumber(){
    return Math.floor(Math.random() * simple.length )
}