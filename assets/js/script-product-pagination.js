let listContainer = document.querySelector('#items')
let paginationContainer = document.querySelector('#pagination')
let currentPage = 1
let eachPageItem = 3
let allProducts = document.querySelector('.list-container')

let allProductsArray = [
  {id:1 , title:'Model 3' , price:'660.00' , picSrc:'men-01.jpg'},
  {id:2 , title:'Model 2' , price:'150.00' , picSrc:'men-02.jpg'},
  {id:3 , title:'Model 1' , price:'220.00' , picSrc:'men-03.jpg'},

  {id:4 , title:'Model 6' , price:'110.00' , picSrc:'product-03.jpg.webp'},
  {id:5 , title:'Model 5' , price:'290.00' , picSrc:'product-6.jpg.webp'},
  {id:6 , title:'Model 4' , price:'300.00' , picSrc:'product-11.jpg.webp'},

  {id:7 , title:'Model 9' , price:'660.00' , picSrc:'women-03.jpg'},
  {id:8 , title:'Model 8' , price:'150.00' , picSrc:'women-02.jpg'},
  {id:9 , title:'Model 7' , price:'220.00' , picSrc:'women-01.jpg'},

  {id:10 , title:'Model 12' , price:'110.00' , picSrc:'product_2.jpg.webp'},
  {id:11 , title:'Model 11' , price:'290.00' , picSrc:'product_4.jpg.webp'},
  {id:12 , title:'Model 10' , price:'300.00' , picSrc:'product_6.jpg.webp'},
  
  {id:13 , title:'Model 15' , price:'660.00' , picSrc:'kid-03.jpg'},
  {id:14 , title:'Model 14' , price:'150.00' , picSrc:'kid-02.jpg'},
  {id:15 , title:'Model 13' , price:'220.00' , picSrc:'kid-01.jpg'},

  {id:16 , title:'Model 18' , price:'110.00' , picSrc:'acc-01.webp'},
  {id:17 , title:'Model 17' , price:'290.00' , picSrc:'acc-03.webp'},
  {id:18 , title:'Model 16' , price:'300.00' , picSrc:'acc-02.webp'},

]

function setupPagination(allProductsArray , paginationContainer , eachPageItem){
    paginationContainer.innerHtml=''
    let pagesCount = Math.ceil(allProductsArray.length / eachPageItem)
    for( let i=1 ; i < pagesCount+1 ; i++){
      let btn = paginationButtonGenerator(i,allProductsArray)
      paginationContainer.appendChild(btn)
      btn.classList.add('btnPagination')
    }
    }

function paginationButtonGenerator ( page , allProductsArray ) {
    let button = document.createElement('button')
    button.innerHTML = page
    if(page===currentPage){
       button.classList.add('active-page')
    }

    button.addEventListener('click' , function(){
        allProducts.innerHTML=''
        currentPage = page
        displayProductsList ( allProductsArray ,allProducts , currentPage , eachPageItem )
         let prevPage = document.querySelector('button.active-page')
         prevPage.classList.remove('active-page')
         button.classList.add('active-page')
    })
   return button 
}

setupPagination(allProductsArray , paginationContainer , eachPageItem)

function displayProductsList ( allProductsArray ,allProducts , currentPage , eachPageItem ){
    allProducts.innerHtml = ''
    let endIndex = eachPageItem * currentPage
    let startIndex = endIndex - eachPageItem
    let paginatedItems = allProductsArray.slice(startIndex,endIndex)

    paginatedItems.forEach(function (content){
        allProducts.insertAdjacentHTML( "afterbegin" , 
     '<div class="col-lg-4"><div class="each-product"><div class="thumb "><div class="hover-content"><ul><li><a href="single-product.html"><i class="fa fa-eye"></i></a></li><li><a href="single-product.html"><i class="fa fa-star"></i></a></li><li><a href="single-product.html"><i class="fa fa-shopping-cart"></i></a></li></ul></div><img  src="../assets/imges/'+content.picSrc+'" alt=""></div><div class="down-content"><h4>'+content.title+'</h4><span>$'+content.price+'</span><ul class="stars"><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li></ul></div></div></div>'
          )
    })
}

displayProductsList ( allProductsArray , allProducts , currentPage , eachPageItem )