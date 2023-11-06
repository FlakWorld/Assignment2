document.getElementById('search-button').addEventListener('click', function () {
    var button = this;
    button.classList.add('shattered');
    setTimeout(function () {
        button.style.display = 'none';
    }, 300);
});