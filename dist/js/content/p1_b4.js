define
(
    [
        "jquery",
        "core_facade",
        "constants_core_controller"
    ],
    function($, Facade, ControllerConstants)
    {
        var _contentId;
        var budget = {
            complexite : 0,
            interactivite : 0,
            medias : 0,
            echeancier : 0
        };
        
        var _init = function(contentId)
        {
            _contentId = contentId;
            $("#p1_b4_unlock").click(_completeMe);
            $("li.quiz").click(_quizResults);
        }
        
        var _completeMe = function()
        {
            $("#p1_b4_unlock").remove();
            Facade.model.get("appData").content[_contentId].complete = true;
            
            Facade.controller.dispatchEvent(ControllerConstants.BLOCK_COMPLETE);

            $("html, body").animate({ scrollTop: $("#content_p1_b5").position().top + "px" });
        }
        
        var _quizResults = function(event)
        {
            var name = event.currentTarget.attributes["data-name"].value;
            $( "a."+ name ).attr("data-slide", "next");
            $( "li[data-name='"+ name +"']" ).each(function() {
                $( this ).removeClass( "active" );
            });
            $( event.currentTarget ).addClass( "active" );

            var texte = '<h5>';
            for ( var i = 0; i < 3; i++ )
            {
                if( event.currentTarget.attributes["data-value"].value >= i)
                {
                    texte += "<span class='text-color-1'>$</span>";
                }
                else
                {   
                    texte += "<span class='dol-gris'>$</span>";
                }
            }
            texte += "</h5>";
            $('#'+ event.currentTarget.attributes["data-name"].value ).html(texte);
            
            budget[name] = event.currentTarget.attributes["data-value"].value;
            var total = 4 + parseInt(budget.medias) + parseInt(budget.echeancier) + parseInt(budget.complexite) + parseInt(budget.interactivite);
            
            var texteBudget = '<h4>';
            for ( var j = 1; j < 13; j++ )
            {
                if( total >= j )
                {
                    texteBudget += "<span class='text-color-1'>$</span>";
                }
                else
                {   
                    texteBudget += "<span class='dol-gris'>$</span>";
                }
            }
            texteBudget += "</h4>";
            $( '#budget' ).html(texteBudget);
        }
        
        var public = 
        {
            init: _init
        }
        
        return public;
    }
);