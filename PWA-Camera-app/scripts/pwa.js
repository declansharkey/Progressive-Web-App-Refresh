$(document).ready(function() {
    geoFindMe();

    $(".cont-cart").click(function() {
        var imageQty = $('#image-upload-panel #result .image-container').length;
        $("#cart-details div").replaceWith("<div id='cart-details-qty'>You have ordered " + imageQty + " images</div>");
        var selectedStore = $(".store-choice .selected").clone();
        $(".your-store a").replaceWith(selectedStore);
    });

    $(".store-choice a").on('click', function() {
        $(".store-choice a").removeClass("selected");
        $(this).addClass("selected");
    })

    $("#image-upload-panel .upload a").click(function() {
        var myImageList = $("#result").clone();
        $("#options-container output").replaceWith(myImageList);
        var optionsContent = $("<label>4x7<input class=fourseven type=tel></label><label>5x5<input class=fivefive type=tel></label><label>5x7<input class=fiveseven type=tel></label>");
        $("#options-panel .image-container").append(optionsContent);
        console.log("Here is Options Content:" + optionsContent);
    });

    $("#fourxseven, #fivexfive, #fivexseven").keyup(function(e) {
        $(".fourseven").val($("#fourxseven").val());
        $(".fivefive").val($("#fivexfive").val());
        $(".fiveseven").val($("#fivexseven").val());
    });

});