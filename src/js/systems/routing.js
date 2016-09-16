define
(
    [
        "core_facade",
        "utilities_query_params"
    ],
    function(Facade, QueryParams)
    {
        var _pageId;
        var _blockId;
        
        var _init = function()
        {
            _pageId = QueryParams.getParam("page");
            _blockId = QueryParams.getParam("block");
        }
        
        var _page = function(page)
        {
            if (page != NULL)
            {
                _pageId = page;
            }
            
            return _pageId;
        }
        
        var _block = function(block)
        {
            if (block != NULL)
            {
                _blockId = block;
            }
            
            return _blockId;
        }
        
        var public = 
        {
            page: _page,
            block: _block
        }
        
        _init();
        
        return public;
    }
);