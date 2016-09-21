define
(
    [
        "jquery",
        "core_facade",
        "constants_core_controller",
        "utilities_progress_tracker"
    ],
    function($, Facade, ControllerConstants, ProgressTracker)
    {
        var _contentId;
        var _progressTracker;
        
        var _init = function(contentId)
        {
            _contentId = contentId;
            _progressTracker = new ProgressTracker(4);
            _progressTracker.addEventListener(ProgressTracker.PROGRESS_COMPLETE, _completeMe);
            _progressTracker.completeItem(0);
            $(".p1_b2_progress").click(_onDataSlide);
            $(".scroll-down").click(_onScrollDown);
            $('#temps').on("change", resultats);
            $('#participants').on("change", resultats);
            $('#geographic').on("change", resultats);
            $('#roulement').on("change", resultats);
            resultats();
        }
        
        var _onDataSlide = function(event)
        {
            _progressTracker.completeItem(event.currentTarget.attributes["data-slide-to"].value);
        }
        
        var _completeMe = function()
        {
            Facade.model.get("appData").content[_contentId].complete = true;
            
            Facade.controller.dispatchEvent(ControllerConstants.BLOCK_COMPLETE);
            $( "#block-p1_b2" ).css('display', 'none');
            $( "#block-p1_b2" ).css('visibility', 'hidden');
        }
        
        var resultats = function(event)
        {
            var participants = $('#participants').val() / 60000;
            var temp = $('#temps').val() / 730;
            var geo = $('#geographic').val() / 2000;
            var roulement = $('#roulement').val() / 100;
            
            //e-learning
            var pL = participants < .1 ? .1 : participants;
            var gL = geo < .1 ? .1 : geo;
            var rL = roulement < .1 ? .1 : roulement;
            var tL = temp > .9 ? .9 : temp;
            var width_eLearning = ((( pL* .7) + (gL * .1) + ( 1 - (tL * .4)) + (rL * .5)) / 4) * 100;
            
            //virtual
            var pV = participants < .25 ? .25 : participants;
            var gV = geo < .25 ? .25 : geo;
            var rV = roulement < .25 ? .25 : roulement;
            var tV = temp > .75 ? .75 : temp;
            var width_virtual = (((pV * .7) + (gV * .5) + (1 - (tV * .7)) + (rV * .7)) / 4) * 100;
            
            //classe
            var pC = participants < .4 ? .4 : participants;
            var gC = geo < .4 ? .4 : geo;
            var rC = roulement < .4 ? .4 : roulement;
            var tC = temp > .6 ? .6 : temp;
            var width_classe = (((pC) + ( 1 - tC) + (gC) + (rC)) / 4) * 100;
            
            $('#eLearning').css('width', width_eLearning + '%');
            $('#virtual').css('width', width_virtual + '%');
            $('#classe').css('width', width_classe + '%');
        }
        
        var _onScrollDown = function()
        {
            $("html, body").animate({ scrollTop: $('#content_p1_b2').position().top }, 500);
        }
        
        var public = 
        {
            init: _init
        }
        
        return public;
    }
);