
let simplebtn = document.getElementById('simplebtn')
let color = document.getElementById('color')
let hexbtn = document.getElementById('hexbtn')

    //code for "SIMPLE" colors (nav-bar)

let simple = ['green', 'red', 'orange', 'blue', 'lightblue', 'indigo', 'pink', 'grey', 'yellow', 'goldenrod', 'violet', 'olive', 'navy', 'teal', 'aqua']

simplebtn.addEventListener('click', function(){
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = simple[randomNumber]
    color.textContent = simple[randomNumber]
})

    // make it more interesting by getting a random number from simple (array)
    // we can do this by setting up a function that wi generate a random number

function getRandomNumber(){
    return Math.floor(Math.random() * simple.length )
}


    // code for "HEX" colors (nav-bar)

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

hexbtn.addEventListener('click', function(){
        // #f15025
        // loop is set to 6 because we have 6 values in hex color
    let hexColor = '#'
    for (let i = 0; i < 6; i++ ){
        hexColor += hex[getHexRandomNumber()]
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

function getHexRandomNumber(){
    return Math.floor(Math.random() * hex.length)
}