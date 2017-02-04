        $(document).ready(function() {
            geoFindMe();

            $(".cont-cart, .store-choice a").click(function() {
                var imageQty = $('#result .image-container').length;
                $("#cart-details div").replaceWith("<div id='cart-details-qty'>You have ordered " + imageQty + " images</div>");
                console.log("Quantity has been registered");
            });

            $(".store-choice a").on('click', function() {
                $(".store-choice a").removeClass("selected");
                $(this).addClass("selected");
            })

            $(".cont-cart").click(function() {
                var selectedStore = $(".store-choice .selected").clone();
                $(".your-store a").replaceWith(selectedStore);
            });

            $("#image-upload-panel .upload a").click(function() {
                var myImageList = $("#result").clone();
                $("#options-container output").replaceWith(myImageList);
                var optionsContent = $("<div class='options-content'><input type=tel></div>");
                $("#options-panel .image-container").append(optionsContent);
                console.log("Here is Options Content:" + optionsContent);
            });

        });