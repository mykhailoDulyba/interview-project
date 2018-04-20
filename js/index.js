(function(){
   document.getElementById('burger-menu')
    .addEventListener('click', activeNav);
    
    function activeNav(el){
        const navBar = document.getElementById('nav');
        navBar.classList.toggle('menu-active');
    }
    
    
})();