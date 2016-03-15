$(window).load(function () {
    $(window).on("scroll resize", function () {
        var pos = $('#date').offset();
        $('.post').each(function () {
            if (pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top) {
                $('#date').html($(this).find('.description').text()); //or any other way you want to get the date
                return; //break the loop
            }
        });
    });

    $(document).ready(function () {
        $(window).trigger('scroll'); // init the value
    });

})