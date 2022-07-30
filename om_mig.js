// $(document).ready(function() {
//     $(window).scroll(function(){
//         if(this.scrollY > 100) {
//             $('.scroll-up').addClass("show");
//         } else {
//             $('.scroll-up').removeClass("show");
//         }
//     })
// });

// // slide up
// $('.scroll-up').click(function() {
//     $('html').animate({scrollTop: 0});
// });

const scrollBtn = document.querySelector(".scroll-up");

const refreshBtnVisibility = () => {
    if (document.documentElement.scrollTop > 250) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener("click" , () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
});

document.addEventListener("scroll", (e) => {
    refreshBtnVisibility();
});