define
(
    [
        "jquery",
        "tweenmax",
        "minivents"
    ],
    function($, TweenMax, Events)
    {
        //console.log(TweenMax);
        Object.defineProperty(this, "TOGGLE", {value:"toggle", writable:false, enumerable:false, configurable:false});
        
        this.elementId;
        this.closedId;
        this.openId;
        
        this.isOpen;
        this.events;
        
        function _contructor(elementId, closedId, openId)
        {
            this.elementId = elementId;
            this.closedId = closedId;
            this.openId = openId;
            
            this.isOpen = false;
            this.events = new Events();
            
            //console.log(TweenMax);
            
            //TweenMax.to($(this.closedId), 0, {css:{opacity:0}});
            //TweenMax.to($(this.openId), 0, {css:{opacity:0}});
            
            $(this.closedId).removeClass("hide");
            $(this.openId).removeClass("hide");
            
            $(this.elementId).addClass("button-mode");
            $(this.elementId).on("click", $.proxy(_toggleMenu, this));
        }
        
        var _toggleMenu = function(event)
        {
            if (this.isOpen)
            {
                $(this.closedId).removeClass("hide");
                $(this.openId).addClass("hide");
            }
            else
            {
                $(this.closedId).addClass("hide");
                $(this.openId).removeClass("hide");
            }
            this.isOpen = !this.isOpen;
            this.events.emit(TOGGLE, this.isOpen);
        }
        
        _contructor.prototype = { }
        _contructor.TOGGLE = TOGGLE;

        return _contructor;
    }
);