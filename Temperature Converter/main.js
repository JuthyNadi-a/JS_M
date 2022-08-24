/* const temperatureConverter = () => {
    let celsiusTemp ;
    celsiusTemp = parseFloat(celsiusTemp);
    console.log(celsiusTemp);
     let celsiusTemp = +(document.querySelector("celsius").value);
    Number(document.querySelector("#fahrenheit").value) = (celsiusTemp * 1.8) + 32;
    
    Number(document.querySelector("#kelvin").value) = (celsiusTemp + 273.15);
    
} */

/* const temperatureConverter = () => {
    CELSIUS TO F, K
    
    let celsiusTemp = +document.querySelector("#celsius").value;
    console.log(celsiusTemp);
    let fahrenheitTemp = +document.querySelector("#fahrenheit").value;
    fahrenheitTemp = (celsiusTemp * 1.8) + 32 ;
    document.querySelector("#fahrenheit").value = fahrenheitTemp;
    console.log(fahrenheitTemp);
    
    let kelvinTemp = +document.querySelector("#kelvin").value;
    kelvinTemp = (celsiusTemp + 273.15);
    document.querySelector("#kelvin").value = kelvinTemp;
    console.log(kelvinTemp);
    celsiusTemp = (fahrenheitTemp-32)/1.8;
    document.querySelector("#celsius").value = celsiusTemp;
    
    Fahrenheit to C, K
    celsiusTemp = (fahrenheitTemp-32)/1.8;
    document.querySelector("#celsius").value = celsiusTemp;
} */



const temperatureConverter = (id, val) => {
    console.log(id, val);
    val = parseFloat(val);
    const celsiusTemp = document.querySelector("#celsius");
    const fahrenheitTemp = document.querySelector("#fahrenheit");
    const kelvinTemp = document.querySelector("#kelvin");

    if (id == "celsius") {
        fahrenheitTemp.value = ((val * 1.8) + 32).toFixed(2);
        kelvinTemp.value = (val +273.15).toFixed(2);
    }
    if (id == "fahrenheit") {
        celsiusTemp.value = ((val-32)/1.8).toFixed(2);
        kelvinTemp.value = (((val-32)/1.8)+273.15).toFixed(2);
    }
    if (id = "kelvin") {
        celsiusTemp.value = (val-273.15).toFixed(2);
        fahrenheitTemp.value = (((val-273.15)*1.8)+32).toFixed(2);
    }
}