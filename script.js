

var restcountries_api = fetch("https://restcountries.com/v3.1/all")
    
    .then((data) => data.json())

    .then((result) => {

        foo(result)


    });


function foo(data) {

            //environment
        
    let container = document.createElement('div');

    container.setAttribute('class','container')

    let row = document.createElement('div');
    
    row.setAttribute('class','row')

    let box = document.createElement('div', 'class', 'box');
    
    box.setAttribute('class', 'box');

    
    document.body.append(container);

    container.append(row);

    row.append(box);

    
    for (let i = 0; i < Object.keys(data).length; i++){

        
        row.innerHTML += `<div class='card card text-center'>
        <div class="Country">${data[i].continents}</div>
        <img class="Flag img-fluid  mt-4" src="${data[i].flags.svg}"></img>
        <div class="Capital mt-3">Capital: ${data[i].capital}</div>
        <div class="Region mt-1">Region: ${data[i].region}</div>
        <div class = "mt-1">Latlng: ${data[i].latlng}</div>
        <div class ="mt-1">Area: ${data[i].area}</div>
        <button type='button' class='btn btn-primary btn-sm mt-1'>Click for Weather</button>
        
        </div>`
        

        
    }
}


