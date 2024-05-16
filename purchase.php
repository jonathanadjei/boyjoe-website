<?php
//Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"]=="POST")
{
    $productName= $_POST['$productName'];
    $quantity=$_POST['quantity'];
    $price=$_POST['price'];
//Calculate the total price
    $totalPrice=$quantity*$price;
//You can implement futher logic database or displaying a confimation message
// For demonstration purposes, lets just display a confirmation message




    echo "<h2> Thank You for your purchase!</h2>"
    echo "<p> Product: $productName</p>";
    echo "<p> Quantity: $quantity</p>";
    echo "<p> Total price: $".
    number_format($totalPrice, 2)."</p>";
}
?>