/*****************************/
/******** Javascript *********/
/* Written by: Bereket Lemma */
/*****************************/

const API_URL = "data.json"; // static JSON file 
const exchange = document.getElementById("exchange"); //where the data is displayed

// fetch the Data
const fetchData = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => { 
        data.forEach(e => {
            exchange.innerHTML += `
                <div class="exchange" id="exchange">
                    <div class="currency">
                        <h4>${e.base}</h4>
                    </div>
                    <div class="in-etb">
                        <h4>${e.rates.ETB} ETB</h4>
                    </div> 
                </div>`; 
            }
        );
})
    .catch(error => console.log('error', error));
}
