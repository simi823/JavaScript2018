/**
 * Using addEventListener, attach an event to each jewel <img> so that, when clicked, it will:
 * 1.) Update the count in the counter box
 * 2.) Remove the jewel from the page
 */

var counter = document.getElementById('counter')
//console.log(counter);
var jewels = document.getElementsByTagName('img');
//console.log(jewels);
var count = 0;

for (var i = 0; i < jewels.length; i++) {
    var jewel = jewels[i];
    jewel.addEventListener("click", function(e) {
        //console.log(e.target);
        e.target.parentNode.removeChild(e.target);
        count += 1;
        counter.textContent = count;
    });
}


