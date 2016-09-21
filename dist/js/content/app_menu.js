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
            //menuToggle.events.on(MenuToggle.TOGGLE, _onChange);
            $ ( "div#app_menu_icon" ).click(_onChange);
            $ ( "ul#main_menu_list li a" ).click(_onClose);
        }
        
        var _onChange = function(isOpen)
        {
            //show or hide menu
            $( "div#safe" ).toggleClass('visible');
            $( "ul#main_menu_list" ).toggleClass('nav-collapse');
        }
        
        var _onClose = function(event)
        {
            $ ( '#app_menu_icon' ).click();
            $ ("html, body").animate({ scrollTop: $( event.currentTarget.attributes["href"].value).position().top }, 500);
        }
        
        var _onScrollDown = function()
        {
            
        }
        
        var public = 
        {
            init: _init
        }

        return public;
    }
);