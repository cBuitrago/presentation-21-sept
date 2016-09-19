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
            
            $('#temps').on("change", resultats);
            $('#participants').on("change", resultats);
            $('#geographic').on("change", resultats);
            $('#roulement').on("change", resultats);
        }
        
        var _onDataSlide = function(event)
        {
            _progressTracker.completeItem(event.currentTarget.attributes["data-slide-to"].value);
        }
        
        var _completeMe = function()
        {
            Facade.model.get("appData").content[_contentId].complete = true;
            
            Facade.controller.dispatchEvent(ControllerConstants.BLOCK_COMPLETE);
        }
        
        
        
        var resultats = function(event)
        {
            event.currentTarget.attributes["data-slide-to"].value
            var participants = $('#participants').val();
            var temp = $('#temps').val();
            var geo = $('#geographic').val();
            var roulement = $('#roulement').val();
            var width_eLearning = (participants * .00008333) + (temp * .04794521) + (roulement * .03);
            var width_virtual = (participants * .00025) + (temp * .04794521) + (roulement * .3);
            var width_classe = (participants * .00041667) + (temp * .03424658) + (geo * .0125) + (roulement * .25);
            $('#eLearning').css('width', width_eLearning + '%');
            $('#virtual').css('width', width_virtual + '%');
            $('#classe').css('width', width_classe + '%');
        }
        
        resultats();
        
        
        
        
        
        var public = 
        {
            init: _init
        }
        
        return public;
    }
);