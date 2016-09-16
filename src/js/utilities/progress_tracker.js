define
(
    [
        "minivents"
    ],
    function(Events)
    {
        var _CONST = {};
        Object.defineProperty(_CONST, "PROGRESS_UPDATE", {value:"progress_update", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_CONST, "PROGRESS_COMPLETE", {value:"progress_complete", writable:false, enumerable:false, configurable:false});
        
        this.items;
        this.completed;
        
        this.events;
        
        function _contsructor(itemCount, defaultValue)
        {
            this.items = new Array(itemCount);
            
            if (defaultValue == null)
                defaultValue = false;
            
            for(i = 0; i < itemCount; i++)
            {
                this.items[i] = defaultValue;
            }
            
            this.completed = defaultValue;
            
            this.events = new Events();
        }
        
        var _completeItem = function(index)
        {
            if (index >= 0 && index < this.items.length)
            {
                oldValue = this.items[index];
                this.items[index] = true;
                
                if (oldValue !== this.items[index])
                {
                    this.events.emit(_CONST.PROGRESS_UPDATE, index);
                }
                
                if (this.completePercent() === 1 && this.completed === false)
                {
                    this.completed = true;
                    this.events.emit(_CONST.PROGRESS_COMPLETE);
                }
            }
        }
        
        var _resetItem = function(index)
        {
            if (index >= 0 && index < this.items.length)
            {
                this.items[index] = false;
                this.completed = false;
                
                if (oldValue !== this.items[index])
                {
                    this.events.emit(_CONST.PROGRESS_UPDATE, index);
                }
            }
        }
        
        var _resetAll = function()
        {
            for(i = 0; i < this.items.length; i++)
            {
                this.items[i] = false;
            }
            this.completed = false;
        }
        
        var _isComplete = function(index)
        {
            if (index != null)
            {
                return this.items[index];
            }
            return this.completed;
        }
        
        var _completeCount = function()
        {
            var counter = 0;
            
            for(i = 0; i < this.items.length; i++)
            {
                if (this.items[i] === true)
                {
                    counter++;
                }
            }
            
            return counter;
        }
        
        var _completePercent = function()
        {
            return this.completeCount() / this.items.length;
        }
        
        var _addEventListener = function(type, callback)
        {
            switch(type)
            {
                case _CONST.PROGRESS_UPDATE:
                    this.events.on(type, callback);
                    break;
                case _CONST.PROGRESS_COMPLETE:
                    this.events.on(type, callback);
                    break;
            }
        }
        
        var _removeEventListener = function(type, callback)
        {
            this.events.off(type, callback);
        }
        
        var _destructor = function()
        {
            this.events.off(_CONST.PROGRESS_UPDATE);
            this.events.off(_CONST.PROGRESS_COMPLETE);
        }
        
        _contsructor.prototype = 
        {
            completeItem: _completeItem,
            resetItem: _resetItem,
            resetAll: _resetAll,
            isComplete: _isComplete,
            completeCount: _completeCount,
            completePercent: _completePercent,
            addEventListener: _addEventListener,
            removeEventListener: _removeEventListener,
            destructor: _destructor
        }
        _contsructor.PROGRESS_UPDATE = _CONST.PROGRESS_UPDATE;
        _contsructor.PROGRESS_COMPLETE = _CONST.PROGRESS_COMPLETE;

        return _contsructor;
    }
);