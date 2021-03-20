$('.card').hide();
$('.first-nav').on('click',  function (){
 $('.card').slideDown(3000);
 $('.card').toggle(1000);
});






$('.alert').hide();
$('.content-header').on('click', function (){
 $('.alert').slideDown(3000);
 $('.alert').toggle();
});