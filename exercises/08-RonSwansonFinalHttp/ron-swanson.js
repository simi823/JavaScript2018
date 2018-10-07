/**
 * use this to url to make your api calls: https://ron-swanson-quotes.herokuapp.com/v2/quotes'
 *  As a user, I should be able to click on XHR and get a quote
 *  As a user, I should be able to click on axios and get a quote
 *  As a user, I should be able to click on FETCH and get a quote
 *
 */

function XHR() {
    var XHR = new XMLHttpRequest();
    XHR.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes");
    XHR.send();
    return new Promise(function(resolve, reject) {
        XHR.onreadystatechange = function () {
            if (XHR.readyState === 4 && XHR.status === 200) {
                document.getElementById("quote").innerHTML=JSON.parse(XHR.responseText)[0];
            }
        };
    });
}

function AXIOS(){
    axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then((response)=>{
            document.getElementById('quote').innerHTML = response.data;
        })
        .catch(function (error) {
            console.log(error)
        });
}

function FETCH() {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes").then(response => {
        if (!response.ok) {
            throw new Error(`Request not OK with code ${response.status}`);
        }
        return response.json();
    }).then(text => document.getElementById("quote").innerHTML =text[0]).catch(error => {
        console.error(error);
    })
}
