// creating constant for kelvin.
const kelvin = 273;
// converting to celsius.
let celsius = kelvin - 273;
// converting from celsius to fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
// rounds the conversion to fahrenheit from decimal to a whole number.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)