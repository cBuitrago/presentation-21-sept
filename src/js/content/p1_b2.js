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
        
        var _init = function(contentId)
        {
            _contentId = contentId;
            $("#p1_b2_unlock").click(_completeMe);
        }
        
        var _completeMe = function()
        {
            $("#p1_b2_unlock").remove();
            Facade.model.get("appData").content[_contentId].complete = true;
            
            Facade.controller.dispatchEvent(ControllerConstants.BLOCK_COMPLETE);
        }
        
        var public = 
        {
            init: _init
        }
        
        return public;
    }
);