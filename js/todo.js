$(document).ready(function() {
    /* scroll to a div with the ID "scrollToThis" by clicking a link with the class "scrollLink" */
    $('#scrollTo').click( function() {
        $('html, body').animate({
            scrollTop: $('#todo-delete-div').offset().top
        }, 1000);
    });

    /* scroll to the top of the page */
    if ($('#scrollTop')){
        $('#scrollTop').click(function(){
            $('html,body').animate({ scrollTop: 0 }, 1000);
        });
    }
});