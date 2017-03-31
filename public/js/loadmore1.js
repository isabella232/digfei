
        /* ============ Load More Functionality ================*/
        var check = 1;
        var loaded = $("#loaded").load( "load-post.php > div[data-id=" + check + "]");
        $(".loadmore .btn").on("click",function(){
            check++;
            var loaded = $("#loaded").load( "load-post.php > div[data-id=" + check + "]");
            var loaddiv = $("#loaded > div:first");
            var a = $("#loaded > div").length;
            if(a > 0){
                $('.masonary').append( loaddiv).isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
            }
            else{
                $(this).html("No More Posts").addClass("no-post");
            }
        });
