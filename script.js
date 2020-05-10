let inputs = document.querySelectorAll(".valor");
  


let url = 'https://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY';

fetch(url)
.then(response => response.json())

.then(data => {
    document.querySelector('#USD').dataset.cambio = data.rates.USD;
    document.querySelector('#GBP').dataset.cambio = data.rates.GBP;
    document.querySelector('#JPY').dataset.cambio = data.rates.JPY;

    inputs.forEach(input=>{
   input.value = input.dataset.cambio;
  });
})

.catch(error => console.log(error))


function valormodificado(input){
    let factor = (input.value / input.dataset.cambio);

    inputs.forEach(input=>{
        input.value = (input.dataset.cambio*factor).toFixed(2);
        });
}