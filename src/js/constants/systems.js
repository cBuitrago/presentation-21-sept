define
(
    function()
    {
        var _routing = {};
        Object.defineProperty(_routing, "PAGE_UPDATE", {value:"page_update", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_routing, "BLOCK_UPDATE", {value:"block_update", writable:false, enumerable:false, configurable:false});
        
        var public = 
        {
            ROUTING: _routing
        }

        return public;
    }
);