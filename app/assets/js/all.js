$(document).ready(function(){
    //下拉選單 
    $(".menu").click(function(event){
        event.preventDefault();
        // $(".menu-drop").toggleClass("d-sm-flex");
        $(".menu-drop").slideToggle(function() {
            if ($(this).is(":visible"))
                $(this).css("display","flex");
        });
    });
});