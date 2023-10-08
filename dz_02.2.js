// 1. age + 1
input.onButtonPressed(Button.A, function () {
    age = age + 1
})
// 1. on button B pressed.
// 2. age - 1
//     
input.onButtonPressed(Button.B, function () {
    age = age - 1
})
let age = 0
age = 5
basic.forever(function () {
    basic.showNumber(age)
})
