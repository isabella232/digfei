$(window).on("load", function(){
    "use strict";
        var windowLoaded = false;
        $(window).on("load", function(){
            windowLoaded = true;
        });


        /*=================== Sticky Header ===================*/
        function StickyHeader(){
            var header_stick;
            if ($("header").hasClass('stick')) {
                var header_stick = $("header").offset().top;
            }
            if ($("header").hasClass('stick')) {
                $(window).on("scroll",function() {
                    var scroll = $(window).scrollTop();
                    var stickyheader = $("header.stick");
                    if (scroll > header_stick) {
                        stickyheader.addClass("sticky");
                        var header_height = stickyheader.innerHeight();
                        $(".menu-height").css({
                            "height": header_height
                        });
                    } else {
                        stickyheader.removeClass("sticky");
                        $(".menu-height").css({
                            "height": 0
                        });
                    }
                });
            }

        }
        StickyHeader();


        /* =========== Revive Search ========== */
        var revive_search = $(".revive-search");
        $(".search-btn").on("click",function(){
            revive_search.fadeIn();
            return false;
        });
        $(".close-search").on("click",function(){
            revive_search.fadeOut();
            return false;
        });


        /*================== Revive Sidemenu  =====================*/
        var sidemenu = $(".sidemenu");
        $(".menu-btn").on("click",function(){
            sidemenu.addClass("slidein");
            $("body").addClass("stop");
            return false;
        });
        $("html, .close-menu").on("click",function(){
            sidemenu.removeClass("slidein");
            $("body").removeClass("stop");
        });
        $(".close-menu").on("click",function(){return false})
        sidemenu.on("click",function(e){
            e.stopPropagation();
        });


        /*================== Revive Sidemenu Dropdown =====================*/
        $(".sidemenu ul ul").parent().addClass("menu-item-has-children");
        $(".sidemenu ul li.menu-item-has-children > a").on("click", function() {
            $(this).parent().toggleClass("active").siblings().removeClass("active");
            $(this).next("ul").slideToggle();
            $(this).parent().siblings().find("ul").slideUp();
            return false;
        });



        /* ============ Bg Carousel ================*/
        $('.bg-carousel').owlCarousel({
            autoplay:true,
            loop:true,
            smartSpeed:1000,
            dots:false,
            nav:false,
            margin:0,
            mouseDrag:true,
            autoHeight:true,
            URLhashListener:true,
            items:1,
            singleItem:true,
            animateIn:"fadeIn",
            animateOut:"fadeOut"
        });

        /* ============ Reviews Carousel ================*/
        $('.reviews-carousel').owlCarousel({
            autoplay:true,
            loop:true,
            smartSpeed:1000,
            dots:true,
            nav:false,
            margin:0,
            mouseDrag:true,
            autoHeight:true,
            items:1,
            singleItem:true,
            animateIn:"fadeIn",
            animateOut:"fadeOut"
        });



        /* ============ Featured Area Background Image For Responsive ================*/
        if ($(window).width() <= 980){
            /* === Check Opacity Class ===*/

            var featured_text = $(".featured-text");
            if($(".featured-area > img").hasClass('opacity')){
                featured_text.addClass('opacity');    
            }

            /* === Copy The Image Path and Set To Background ===*/
            var img_path = $(".featured-area > img").attr('src');
            featured_text.css({
                "background-image":'url(' + img_path + ')'
            });
        }



        $('.sidemenu > ul').enscroll({
            showOnHover: true,
            scrollIncrement:30,
            easingDuration:100,
            addPaddingToPane:false,
            verticalTrackClass: 'track4',
            verticalHandleClass: 'handle4'
        });



    /* =============== Ajax Contact Form ===================== */
    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#message").slideUp(750,function() {
        $('#message').hide();
            $('#submit')
            .after('<img src="images/ajax-loader.gif" class="loader" />')
            .attr('disabled','disabled');
        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            comments: $('#comments').val(),
            verify: $('#verify').val()
        },
            function(data){
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                $('#submit').removeAttr('disabled');
                if(data.match('success') != null) $('#contactform').slideUp('slow');

            }
        );
        });
        return false;
    });


});/*=== Window.Load Ends Here ===*/