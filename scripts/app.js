
/** 

  Sticky Header 

**/



$(window).scroll(function() {
if ($(this).scrollTop() > 550){  
    $('nav').addClass("sticky");
  }
  else{
    $('nav').removeClass("sticky");
  }
});




/**

  Modal.JS


Developer Notes;

This is custom Javascript, to add a new modal
you will need to copy the JS Function in full
and replace the modal name.

**/


(function ($) {
    $.fn.extend({
        leanmartin: function (options) {
            var defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null
            };
            var overlay = $("<div id='lean_overlay'></div>");
            $("body").append(overlay);
            options = $.extend(defaults, options);
            return this.each(function () {
                var o = options;
                var martin_id = $(this).attr("href");

                function showmartin() {
                    $("#lean_overlay").click(function () {
                        close_martin(martin_id)
                    });
                    $(o.closeButton).click(function () {
                        close_martin(martin_id)
                    });

                    var martin_height = $(martin_id).outerHeight();
                    var martin_width = $(martin_id).outerWidth();

                    $("#lean_overlay").css({
                        "display": "block",
                        opacity: 0
                    });

                    $("#lean_overlay").fadeTo(200, o.overlay);

                    $(martin_id).css({
                        "display": "block",
                        "position": "fixed",
                        "opacity": 0,
                        "z-index": 11000,
                        "left": 50 + "%",
                        "margin-left": -(martin_width / 2) + "px",
                        "top": 35 + "%"
                    });

                    $(martin_id).fadeTo(200, 1);
                };

                

                $(this).click(function (e) {
                    showmartin();
                    e.preventDefault()
                })
            });

            function close_martin(martin_id) {
                $("#lean_overlay").fadeOut(200);
                $(martin_id).css({
                    "display": "none"
                })
            }
        }
    })
})(jQuery);



(function ($) {
    $.fn.extend({
        leanpaige: function (options) {
            var defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null
            };
            var overlay = $("<div id='lean_overlay'></div>");
            $("body").append(overlay);
            options = $.extend(defaults, options);
            return this.each(function () {
                var o = options;
                var paige_id = $(this).attr("href");

                function showpaige() {
                    $("#lean_overlay").click(function () {
                        close_paige(paige_id)
                    });
                    $(o.closeButton).click(function () {
                        close_paige(paige_id)
                    });

                    var paige_height = $(paige_id).outerHeight();
                    var paige_width = $(paige_id).outerWidth();

                    $("#lean_overlay").css({
                        "display": "block",
                        opacity: 0
                    });

                    $("#lean_overlay").fadeTo(200, o.overlay);

                    $(paige_id).css({
                        "display": "block",
                        "position": "fixed",
                        "opacity": 0,
                        "z-index": 11000,
                        "left": 50 + "%",
                        "margin-left": -(paige_width / 2) + "px",
                        "top": 35 + "%"
                    });

                    $(paige_id).fadeTo(200, 1);
                };

                

               $(this).click(function (e) {
                    showpaige();
                    e.preventDefault()
                })
            });

            function close_paige(paige_id) {
                $("#lean_overlay").fadeOut(200);
                $(paige_id).css({
                    "display": "none"
                })
            }
        }
    })
})(jQuery);




(function ($) {
    $.fn.extend({
        leanaldo: function (options) {
            var defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null
            };
            var overlay = $("<div id='lean_overlay'></div>");
            $("body").append(overlay);
            options = $.extend(defaults, options);
            return this.each(function () {
                var o = options;
                var aldo_id = $(this).attr("href");

                function showaldo() {
                    $("#lean_overlay").click(function () {
                        close_aldo(aldo_id)
                    });
                    $(o.closeButton).click(function () {
                        close_aldo(aldo_id)
                    });

                    var aldo_height = $(aldo_id).outerHeight();
                    var aldo_width = $(aldo_id).outerWidth();

                    $("#lean_overlay").css({
                        "display": "block",
                        opacity: 0
                    });

                    $("#lean_overlay").fadeTo(200, o.overlay);

                    $(aldo_id).css({
                        "display": "block",
                        "position": "fixed",
                        "opacity": 0,
                        "z-index": 11000,
                        "left": 50 + "%",
                        "margin-left": -(aldo_width / 2) + "px",
                        "top": 35 + "%"
                    });

                    $(aldo_id).fadeTo(200, 1);
                };

                

               $(this).click(function (e) {
                    showaldo();
                    e.preventDefault()
                })
            });

            function close_aldo(aldo_id) {
                $("#lean_overlay").fadeOut(200);
                $(aldo_id).css({
                    "display": "none"
                })
            }
        }
    })
})(jQuery);



$("#modal_triggerMartin").leanmartin({top : 200, overlay : 0.6 });
  
  $('div#modal_triggerMartin').click(function() { 
      $(".popupContainer-martin").show(); 
});


$("#modal_triggerPaige").leanpaige({top : 200, overlay : 0.6 });
 
  $('div#modal_triggerPaige').click(function() { 
     $(".popupContainer-paige").show();  
});

$("#modal_triggerAldo").leanaldo({top : 200, overlay : 0.6 });
 
  $('div#modal_triggerAldo').click(function() { 
     $(".popupContainer-aldo").show();  
});
 

