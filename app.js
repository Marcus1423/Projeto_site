document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll('.navegacao__item');
    
    const paginaSelecionada = window.location.pathname;
    
    links.forEach(link =>{
        if(
            link.href.includes(paginaSelecionada)){
            link.classList.add('active');
        }
    });
}
);