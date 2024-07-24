/* What are resources functionality */
function changeColor(cityName) {
    var i;
    var x = document.getElementsByClassName("orange-box");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}

/*Education programs functionality*/
document.querySelectorAll('.navbar-item a').forEach(link => {
    link.addEventListener('click', even => {
        event.preventDefault();
        const page = link.getAttribute('data-page');

        document.querySelectorAll('.content').forEach(content => {
            content.style.display = 'none';
        });

        document.getElementById(page).style.display = 'flex';
    });
});
document.querySelectorAll('.program-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.program-item').forEach(program => {
            program.classList.remove('active');
        });
        item.classList.add('active');
        document.querySelectorAll('.program-details').forEach(detail => {
            detail.style.display = 'none';
        });
        const target = document.getElementById(item.getAttribute('data-target'));
        target.style.display = 'block';
    });
});