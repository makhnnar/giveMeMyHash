(function(){

    function changeToII(predicate){
        return predicate.replace(
            new RegExp('[a|A|e|E|o|O|u|U]', 'g'),
            'i'
        );
        //dame un sha1 y te retorno un hashKey
        //return btoa(predicate.toLowerCase().split(':').map(hc => String.fromCharCode(parseInt(hc, 16))).join(''));
    }

    var input = document.getElementById('textToChange');

    // Add an event listener to monitor changes
    
    input.addEventListener(
        'keyup', 
        function (e) {
            //console.log('Value:', changeToII(input.value));
            document.getElementById('result').innerText = changeToII(input.value);
        }
    );

})();

function copyConvertedText(){
    /* Get the text field */
    var copyText = document.getElementById("result");
    const el = document.createElement('textarea');
    el.value = copyText.innerText;
    document.body.appendChild(el);
    el.select();
    el.setSelectionRange(0, 99999);
    document.execCommand('copy');
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + el.value;
    document.body.removeChild(el);
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

