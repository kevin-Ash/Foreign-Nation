/* window.addEventListener('scroll', ()=>{
    const scrollable = document.documentElement.scrollHeight = window.innerHeight;
    const scrolled = window.scrollY;
    if(Math.ceil(scrolled) === scrollable) {
        alert("Bottom!")
    }
}) */

/* JQuery on scroll animation for content inside video background */
$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop(); // Value of scroll from top
        $(".hero-wrapper").css({
            transition : 'opacity 550ms ease-out',
            opacity : function() {
                var elementHeight = $(this).height();
                var opacity = (elementHeight - scrollTop) / elementHeight;
                return opacity;
            }    
        })
    })
})
