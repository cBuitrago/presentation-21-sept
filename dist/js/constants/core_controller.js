define
(
    function()
    {
        var public = {}
        
        Object.defineProperty(public, "BLOCK_UPDATE", {value:"block_update", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "BLOCK_COMPLETE", {value:"block_complete", writable:false, enumerable:false, configurable:false});

        return public;
    }
);