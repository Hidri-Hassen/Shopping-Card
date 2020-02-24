
let plusQuantity=document.getElementsByClassName('plus') // return object 
let minusQuantity=document.getElementsByClassName('minus') // return object 
let quantity=document.getElementsByClassName('cart-quantity-input') // return object 
let trash=document.getElementsByClassName('remove') // return object 
let favoritShow=document.getElementsByClassName('favorit-show') // return object 
let favoritHide=document.getElementsByClassName('favorit-hide') // return object 
let itemPrice=document.getElementsByClassName('unit-price') // return object 
let totalPrice=document.querySelector('.cart-total-price') // return the Element 

/*Plus Item*/
for (let i=0;i<plusQuantity.length;i++)
{
var add=plusQuantity[i]
    add.addEventListener('click', quantityChangedplus)
}
/*Minus Item*/
for (let i=0;i<minusQuantity.length;i++)
{
var minus=minusQuantity[i]
    minus.addEventListener('click', quantityChangedminus)
}


for (var i = 0; i < quantity.length; i++) {
    var input = quantity[i]
    input.addEventListener('change', quantityChangedplus || quantityChangedminus )
}

/*Function Quantity plus item*/
function quantityChangedplus(event) {
   var purchaseClicked = event.target
   purchaseClicked.previousElementSibling.value = Number(purchaseClicked.previousElementSibling.value) + 1
    updateCartTotal()
}

/*Function Quantity minus item*/
function quantityChangedminus(event) {
    var purchaseClicked = event.target
    if(purchaseClicked.nextElementSibling.value >1)
    purchaseClicked.nextElementSibling.value = Number(purchaseClicked.nextElementSibling.value) - 1
    else
    purchaseClicked.nextElementSibling.value = 1
    updateCartTotal()
 }




/*trash button*/
for (let i=0;i<trash.length;i++)
{
var del = trash[i]
    del.addEventListener('click', removeCartItem)
}
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}
 
/*update Total Price*/
function updateCartTotal( ){
    let cardPrice=[]
for (let i = 0; i < itemPrice.length; i++) {
    
   cardPrice.push(itemPrice[i].innerText * quantity[i].value)
       
}
totalPrice.value=cardPrice.reduce((a,b)=>a+b )

}



/*function changeFavorit*/
for (let i=0;i<favoritShow.length;i++)
{
var addToFav = favoritShow[i]
addToFav.addEventListener('click', changeFavorit)
}
function changeFavorit(event){
    let hide = event.target
   
    hide.style.display="none"
    hide.nextElementSibling.style.display="block"
}

