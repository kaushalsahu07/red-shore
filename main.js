console.log('Hello World!');
// Products
var gallery = document.getElementById('gallery');
var smallimg = document.getElementsByClassName('smallimg');

smallimg[0].onclick = function()
{
    gallery.src = smallimg[0].src;
}
smallimg[1].onclick = function()
{
    gallery.src = smallimg[1].src;
}
smallimg[2].onclick = function()
{
    gallery.src = smallimg[2].src;
}
smallimg[3].onclick = function()
{
    gallery.src = smallimg[3].src;
}