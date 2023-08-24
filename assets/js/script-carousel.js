
let rightContentContainer = document.querySelector('.right-all-content')

let rightContentArray = [
  {id:1 , title:'Accessories' , explanation:'Best Trend Accessories' , img:'assets/imges/baner-right-image-04.jpg'},
  {id:2 , title:'Kids' , explanation:'Best Clothes For Kids' , img:'assets/imges/baner-right-image-03.jpg'},
  {id:3 , title:'Men' , explanation:'Best Clothes For Men' , img:'assets/imges/baner-right-image-02.jpg'},
  {id:4 , title:'Women' , explanation:'Best Clothes For Women' , img:'assets/imges/baner-right-image-01.jpg'},
]

rightContentArray.forEach(function (content){
  rightContentContainer.insertAdjacentHTML( "afterbegin" , 
  '<div class="in-m-size col-lg-6"><div class="right-first-image"><div class="thumb"><div class="inner-content"><h4>'+content.title+'</h4><span>'+content.explanation+'</span></div><div class="hover-content"><div class="inner"><h4>'+content.title+'</h4><p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p><div class="main-border-button"><a href="#">Discover More</a></div></div></div><img src="'+content.img+'"></div></div></div>'
      )
})

// *************************OWL Carousel*******************************

let menLastest = document.querySelector('.men-lastest')

let menLastestArray = [
  {id:1 , title:'Model 6' , price:'110.00' , picSrc:'product-03.jpg.webp'},
  {id:2 , title:'Model 5' , price:'290.00' , picSrc:'product-6.jpg.webp'},
  {id:3 , title:'Model 4' , price:'300.00' , picSrc:'product-11.jpg.webp'},
  {id:4 , title:'Model 3' , price:'660.00' , picSrc:'men-01.jpg'},
  {id:5 , title:'Model 2' , price:'150.00' , picSrc:'men-02.jpg'},
  {id:6 , title:'Model 1' , price:'220.00' , picSrc:'men-03.jpg'},

]

menLastestArray.forEach(function (content){
  menLastest.insertAdjacentHTML( "afterbegin" , 
 ' <div class="item"><div class="thumb lastest-pic"><div class="hover-content"><ul><li><a href="single-product.html"><i class="fa fa-eye"></i></a></li><li><a href="single-product.html"><i class="fa fa-star"></i></a></li><li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li></ul></div><img  src="assets/imges/'+content.picSrc+'" alt=""> </div><div class="down-content"><h4>'+content.title+'</h4><span>$'+content.price+'</span><ul class="stars"><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li> <i class="fa-regular fa-star"></i></li></ul></div></div>'
      )
})

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav:true,
    navText:["<i class='fa-solid fa-chevron-left'></i>" , "<i class='fas fa-chevron-right'></i>"],
    loop:true,
    dots:false,
    margin:10,
    autoplayTimeout:6000,
    responsive:{
      0:{
          items:1,
          margin:0,
      },
      768:{
          items:2
      },
      1200:{
          items:3
      }
  }

  });
});

let womenLastest = document.querySelector('.women-lastest')

let womenLastestArray = [
  {id:1 , title:'Model 6' , price:'110.00' , picSrc:'product-1.jpg.webp'},
  {id:2 , title:'Model 5' , price:'290.00' , picSrc:'product-2.jpg.webp'},
  {id:3 , title:'Model 4' , price:'300.00' , picSrc:'product-4.jpg.webp'},
  {id:4 , title:'Model 3' , price:'660.00' , picSrc:'women-01.jpg'},
  {id:5 , title:'Model 2' , price:'150.00' , picSrc:'women-02.jpg'},
  {id:6 , title:'Model 1' , price:'220.00' , picSrc:'women-03.jpg'},

]

womenLastestArray.forEach(function (content){
  womenLastest.insertAdjacentHTML( "afterbegin" , 
 ' <div class="item"><div class="thumb lastest-pic"><div class="hover-content"><ul><li><a href="single-product.html"><i class="fa fa-eye"></i></a></li><li><a href="single-product.html"><i class="fa fa-star"></i></a></li><li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li></ul></div><img  src="assets/imges/'+content.picSrc+'" alt=""> </div><div class="down-content"><h4>'+content.title+'</h4><span>$'+content.price+'</span><ul class="stars"><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li> <i class="fa-regular fa-star"></i></li></ul></div></div>'
      )
})

let kidsLastest = document.querySelector('.kids-lastest')

let kidsLastestArray = [
  {id:1 , title:'Model 6' , price:'110.00' , picSrc:'download.jfif'},
  {id:2 , title:'Model 5' , price:'290.00' , picSrc:'kid-5.jpg'},
  {id:3 , title:'Model 4' , price:'300.00' , picSrc:'kids-4.jpg'},
  {id:4 , title:'Model 3' , price:'660.00' , picSrc:'kid-01.jpg'},
  {id:5 , title:'Model 2' , price:'150.00' , picSrc:'kid-02.jpg'},
  {id:6 , title:'Model 1' , price:'220.00' , picSrc:'kid-03.jpg'},

]

kidsLastestArray.forEach(function (content){
  kidsLastest.insertAdjacentHTML( "afterbegin" , 
 ' <div class="item"><div class="thumb lastest-pic"><div class="hover-content"><ul><li><a href="single-product.html"><i class="fa fa-eye"></i></a></li><li><a href="single-product.html"><i class="fa fa-star"></i></a></li><li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li></ul></div><img  src="assets/imges/'+content.picSrc+'" alt=""> </div><div class="down-content"><h4>'+content.title+'</h4><span>$'+content.price+'</span><ul class="stars"><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li> <i class="fa-regular fa-star"></i></li></ul></div></div>'
      )
})