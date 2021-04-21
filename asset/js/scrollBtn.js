window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 100)
})

function scrollToTop(){
    window.scrollTo({
        top : 0,
        behavior: 'smooth'
    })
}