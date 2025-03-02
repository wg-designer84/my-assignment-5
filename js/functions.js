function changePage(id, link){
    const fbward = document.getElementById(id)
        .addEventListener('click', function(event){
            event.preventDefault();
            window.location.href= link;
        })
    return fbward;
}