define
(
    function()
    {
        var _data = {};
        
        var _add = function(key, data)
        {
            if (_has(key))
            {
                throw "model data conflict";
            }
            //console.log(data);
            _data[key] = data;
            //console.log(_data[key]);
        }
        
        var _modify = function(key, data)
        {
            _data[key] = data;
        }
        
        var _remove = function(key)
        {
            delete _data[key];
        }
        
        var _has = function(key)
        {
            return _data.hasOwnProperty(key);
        }
        
        var _get = function(key)
        {
            return _data[key];
        }
        
        var public = 
        {
            add: _add,
            modify: _modify,
            remove: _remove,
            has: _has,
            get: _get
        }

        return public;
    }
);