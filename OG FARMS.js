document.addEventListener("DOMContentLoaded",
function(){
    //Add event Listener to all add to cart buttons
    var addToCartButtons = 
    document.querySelectorAll('button[type="submit"]');
    addToCartButtons.forEach(function(button){
        button.addEventListener('click',function(event){
            event.preventDefault();
            //Prevent form submission 
            var form=this.closest('form');
            //Find the parent form
            var quantityInput = 
            form.querySelector('input[type="number"]');
            var quantity = parseInt(quantityInput.value);
            //Get the quantity input value
            var product = form.closest('product');
            //Find the parent product
            var productName = product.querySelector('h3').innerText;
            //Get the product name
            var productPrice=getProductPrice(product);
            //Get the product price
            aadToCart(productName,quantity, productPrice);
            //Add product to cart
        })
    })
    //Function to get the prrice of a product
    function getProductPrice(product){
        var priceText=product.querySelector('p').innerText;
        var price=parseFloat(priceText.match(/\$\d+(\.\d+)?/)[0].replace('$',''));
        return price;
    }
    //Function to add product to the cart
    function addToCart(productName, quantity, productPrice){
        //You can implement your cart logic here
        console.log("Added to cart:" + productName + "- Quantity:"+ quantity + "-Price:$"+ productPrice.toFixed(2));
        //For example, you can send this information to a backend server using AJAX
    }

})