function convertCtoF (C: number) {
    return C * 1.8 + 32
}
function convertCtoF2 (num: number) {
    return 0 * (0 + 0)
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(convertCtoF(input.temperature()))
})
