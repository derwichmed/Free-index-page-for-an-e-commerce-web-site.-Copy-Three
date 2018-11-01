$(function (){
    isSearchHeaderHidden = true;
    $('.navbar-light .navbar-toggler-icon').click(function (){
        if(isSearchHeaderHidden){
            $('.search_header').hide();
            isSearchHeaderHidden = false;
        }
        else{
            $('.search_header').show();
            isSearchHeaderHidden = true;
        }
         
    });
});