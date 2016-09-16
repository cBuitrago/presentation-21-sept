define
(
    [
        "jquery",
        "core_facade",
        "content_buttons_app_menu_toggle"
    ],
    function($, Facade, MenuToggle)
    {
        var _contentId;
        
        var _init = function(contentId)
        {
            _contentId = contentId;
            
            var menuToggle = new MenuToggle("#app_menu_icon", "#app_menu_closed", "#app_menu_open");
            menuToggle.events.on(MenuToggle.TOGGLE, _onChange);
        }
        
        var _onChange = function(isOpen)
        {
            //show or hide menu
        }
        
        var public = 
        {
            init: _init
        }

        return public;
    }
);