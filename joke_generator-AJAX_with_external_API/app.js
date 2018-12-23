//MODERN JAVASCRIPT FROM THE BEGINNING - UDEMY
//060 DATA FROM EXTERNAL API - CHUCK NORRIS JOKE GENERATOR
//Using AJAX to work with external API

document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;
    console.log(number);

    const xhr = new XMLHttpRequest(); //create new instance of XHR object

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if (this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response);
            let output = '';
            if (response.type === 'success'){
                //depends how API is formatted, we need to make sure we loop through array it provides
                response.value.forEach(function(joke){
                    //accessing joke text can also be different in different API's
                    output += `<li>${joke.joke}</li>`
                });
            } else {
                output += '<li>Something went wrong</li>';
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}