define
(
    [
        "minivents"
    ],
    function(Events)
    {
        var _events = new Events();
        
        var _addEvent = function(name, callback)
        {
            return _events.on(name, callback);
        }

        var _removeEvent = function(name)
        {
            return _events.off(name);
        }

        var _dispatchEvent = function(name, data)
        {
            return _events.emit(name, data);
        }
        
        var public = 
        {
            addEvent: _addEvent,
            removeEvent: _removeEvent,
            dispatchEvent : _dispatchEvent
        }

        return public;
    }
);