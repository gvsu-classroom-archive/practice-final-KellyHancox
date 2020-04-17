document.getElementById('decorate').addEventListener('click', decorateMe);
function decorateMe() {
    console.log('inside decorate me')
    var capitalElements = document.querySelectorAll(".allcaps")
    console.log('capital elements', capitalElements)
    for (var i = 0, element; element = capitalElements[i++];) {
        element.style.textTransform = 'uppercase';
    }
    var uppercaseElements = document.querySelectorAll(".upcase");
    for (var i = 0, element; element = uppercaseElements[i++];) {
        // element.value = (element.value).toUpperCase();
        element.style.textTransform = 'capitalize';
    }
}