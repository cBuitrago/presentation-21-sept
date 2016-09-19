define
(
    [
        "jquery",
        "core_facade",
        "constants_core_controller"
    ],
    function($, Facade, ControllerConstants)
    {
        var _pageList;
        var _appData;
        
        var _init = function()
        {
            _pageList = [];
            _appData =  Facade.model.get("appData");
            
            var contentItem = _appData.content.startLocation;
            do
            {
                Facade.view.addObserver("content", contentItem);
                $("#content_" + contentItem).load(_appData.content[contentItem].html);
                
                if (requirejs.s.contexts._.config.paths.hasOwnProperty("content_" + contentItem) === true)
                {
                    require(["content_" + contentItem],function(Block){Block.init(contentItem);})
                }
                
                _pageList.push(contentItem);
                
                if (_appData.content[contentItem].complete === false)
                {
                    break;
                }
                
                contentItem = _appData.content[contentItem].nextId;
            } while (contentItem)
            Facade.controller.addEvent(ControllerConstants.BLOCK_COMPLETE, _update);
            // add event listener
        }
        
        var _update = function()
        {
            var contentItem = _pageList[_pageList.length - 1];
            
            if (_appData.content[contentItem].complete === false)
            {
                return;
            }
            
            contentItem = _appData.content[contentItem].nextId;
            while (contentItem)
            {
                Facade.view.addObserver("content", contentItem);
                $("#content_" + contentItem).load(_appData.content[contentItem].html);
                
                if (requirejs.s.contexts._.config.paths.hasOwnProperty("content_" + contentItem) === true)
                {
                    require(["content_" + contentItem],function(Block){Block.init(contentItem);})
                }
                
                _pageList.push(contentItem);
                
                if (_appData.content[contentItem].complete === false)
                {
                    break;
                }
                
                contentItem = _appData.content[contentItem].nextId;
            }
        }
        
        var public = 
        {
            init: _init
        }

        return public;
    }
);