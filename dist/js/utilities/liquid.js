define
(
    function()
    {
        var _const = {};
        Object.defineProperty(_const, "POSITION_TYPE_FIXED", {value:"fixed", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_const, "POSITION_TYPE_RELATIVE", {value:"relative", writable:false, enumerable:false, configurable:false});

        Object.defineProperty(_const, "REGISTRATION_TOP_LEFT", {value:"top_left", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_const, "REGISTRATION_TOP_CENTER", {value:"top_center", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_const, "REGISTRATION_TOP_RIGHT", {value:"top_right", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_const, "REGISTRATION_CENTER_LEFT", {value:"center_left", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_const, "REGISTRATION_CENTER", {value:"center", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_const, "REGISTRATION_CENTER_RIGHT", {value:"center_right", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_const, "REGISTRATION_BOTTOM_LEFT", {value:"bottom_left", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_const, "REGISTRATION_BOTTOM_CENTER", {value:"bottom_center", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_const, "REGISTRATION_BOTTOM_RIGHT", {value:"bottom_right", writable:false, enumerable:false, configurable:false});

        Object.defineProperty(_const, "ALIGN_LEFT", {value:"left", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_const, "ALIGN_CENTER", {value:"center", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(_const, "ALIGN_RIGHT", {value:"right", writable:false, enumerable:false, configurable:false});
        
        var _elements = {};
        var _source = {};
        var _offset = {};
        
        var _init = function(sourceWidth, sourceHeight)
        {
            _source.width = sourceWidth;
            _source.height = sourceHeight;
            _source.ratio = sourceWidth / sourceHeight;
            
            _calculateOffset();
        }
        
        var _start = function()
        {
            window.onresize = _onResize;
        }
        
        var _stop = function()
        {
            window.onresize = null;
        }
        
        var _addObject = function(key, element, options)
        {
            var object = {};
            object.options = _validateOptions(options);
            object.element = element;
            element.style.position = 'fixed';

            _placeElement(object);
            _elements[key] = object;
        }
        
        var _removeObject = function(key)
        {
            delete _elements[key];
        }
        
        var _updateObject = function(key, options)
        {
            _elements[key].options = _validateOptions(options);
        }
        
        var _onResize = function(event)
        {
            _calculateOffset();

            for(var key in _elements)
                _placeElement(_elements[key]);
        }
        
        var _validateOptions = function(options)
        {
            // set defaults
            options.x = ('x' in options) ? options.x : 0;
            options.y = ('y' in options) ? options.y : 0;
            options.positionType = ('positionType' in options) ? options.positionType : {y: _const.POSITION_TYPE_FIXED, x: _const.POSITION_TYPE_FIXED};
            options.align = ('align' in options) ? options.align : _const.ALIGN_LEFT;
            options.referenceLocation = ('referenceLocation' in options) ? options.referenceLocation : _const.REGISTRATION_TOP_LEFT;

            options.width = ('width' in options) ? options.width : 0;
            options.height = ('height' in options) ? options.height : 0;
            options.scaleRate = ('scaleRate' in options) ? options.scaleRate : 0;

            // validate values
            if (isNaN(parseFloat(options.x)) || !isFinite(options.x))
                throw "X not a valid number";

            if (isNaN(parseFloat(options.y)) || !isFinite(options.x))
                throw "Y not a valid number";

            switch(options.positionType)
            {
                case _const.POSITION_TYPE_FIXED:
                    options.positionType = {x:_const.POSITION_TYPE_FIXED, y:_const.POSITION_TYPE_FIXED}
                    break;
                case _const.POSITION_TYPE_RELATIVE:
                    options.positionType = {x:_const.POSITION_TYPE_RELATIVE, y:_const.POSITION_TYPE_RELATIVE}
                    break;
                default:
                    if (options.positionType instanceof Object)
                    {
                        options.positionType.x = ('x' in options.positionType) ? options.positionType.x : _const.POSITION_TYPE_FIXED;
                        options.positionType.y = ('y' in options.positionType) ? options.positionType.y : _const.POSITION_TYPE_FIXED;

                        switch(options.positionType.x)
                        {
                            case _const.POSITION_TYPE_FIXED:
                            case _const.POSITION_TYPE_RELATIVE:
                                break;
                            default:
                                throw "bad X position type";
                        }

                        switch(options.positionType.y)
                        {
                            case _const.POSITION_TYPE_FIXED:
                            case _const.POSITION_TYPE_RELATIVE:
                                break;
                            default:
                                throw "bad Y position type";
                        }
                    }
                    else
                        throw "bad position type";
            }

            switch(options.align)
            {
                case _const.ALIGN_LEFT:
                case _const.ALIGN_CENTER:
                case _const.ALIGN_RIGHT:
                    break;
                default:
                    throw "bad align";
            }

            switch(options.referenceLocation)
            {
                case _const.REGISTRATION_TOP_LEFT:
                case _const.REGISTRATION_TOP_CENTER:
                case _const.REGISTRATION_TOP_RIGHT:
                case _const.REGISTRATION_CENTER_LEFT:
                case _const.REGISTRATION_CENTER:
                case _const.REGISTRATION_CENTER_RIGHT:
                case _const.REGISTRATION_BOTTOM_LEFT:
                case _const.REGISTRATION_BOTTOM_CENTER:
                case _const.REGISTRATION_BOTTOM_RIGHT:
                    break;
                default:
                    "bad reference type";
            }

            return options;
        }
        
        var _calculateOffset = function()
        {
            ratio = window.innerWidth / window.innerHeight;
            //console.log(ratio, _source.ratio);
            if (ratio > _source.ratio) // window is wider
            {
                //console.log("window is wider");
                _offset.scale = window.innerHeight / _source.height;
                _offset.y = 0;
                //_offset.height = window.innerHeight;

                //_offset.width = window.innerHeight * _source.ratio;
                _offset.x = (window.innerWidth - _offset.width) >> 1;
            }
            else if (ratio < _source.ratio) // window is taller
            {
                //console.log("window is taller");
                _offset.scale = window.innerWidth / _source.width;
                _offset.x = 0;
                //_offset.width = window.innerWidth;

                //_offset.height = window.innerWidth / _source.ratio;
                _offset.y = (window.innerHeight - _offsets.height) >> 1;
            }
            else // same ratio
            {
                //console.log("window is equal");
                _offset.scale = window.innerWidth / _source.width;
                _offset.x = 0;
                _offset.y = 0;
                //_offset.width = window.innerWidth;
                //_offset.height = window.innerHeight;
            }
            _offset.width = window.innerWidth;
            _offset.height = window.innerHeight;

            _offset[_const.REGISTRATION_TOP_LEFT] = {x:_offset.x, y:_offset.y};
            _offset[_const.REGISTRATION_TOP_CENTER] = {x:_offset.x + (_offset.width >> 1), y:_offset.y};
            _offset[_const.REGISTRATION_TOP_RIGHT] = {x:_offset.x + _offset.width, y:_offset.y};
            _offset[_const.REGISTRATION_CENTER_LEFT] = {x:_offset.x, y:_offset.y + (_offset.height >> 1)};
            _offset[_const.REGISTRATION_CENTER] = {x:_offset.x + (_offset.width >> 1), y:_offset.y + (_offset.height >> 1)};
            _offset[_const.REGISTRATION_CENTER_RIGHT] = {x:_offset.x + _offset.width, y:_offset.y + (_offset.height >> 1)};
            _offset[_const.REGISTRATION_BOTTOM_LEFT] = {x:_offset.x, y:_offset.y + _offset.height};
            _offset[_const.REGISTRATION_BOTTOM_CENTER] = {x:_offset.x + (_offset.width >> 1), y:_offset.y + _offset.height};
            _offset[_const.REGISTRATION_BOTTOM_RIGHT] = {x:_offset.x + _offset.width, y:_offset.y + _offset.height};
        }
        
        var _placeElement = function(object)
        {
            var x = 0;
            var y = 0;
            console.log(_offset);
            if (object.options.positionType.x === _const.POSITION_TYPE_FIXED)
                x = _offset[object.options.referenceLocation].x + object.options.x;
            else
                x = _offset[object.options.referenceLocation].x + (_offset[_const.REGISTRATION_CENTER].x * object.options.x);

            if (object.options.positionType.y === _const.POSITION_TYPE_FIXED)
                y = _offset[object.options.referenceLocation].y + object.options.y;
            else
                y = _offset[object.options.referenceLocation].y + (_offset[_const.REGISTRATION_CENTER].y * object.options.y);

            if (object.options.align === _const.ALIGN_CENTER)
                x -= object.element.offsetWidth / 2;
            else if (object.options.align === _const.ALIGN_RIGHT)
                x -= object.element.offsetWidth;
            
            object.element.style.top = y + "px";
            object.element.style.left = x + "px";
        }
        
        var public = 
        {
            const: _const,
            init: _init,
            start: _start,
            stop: _stop,
            addObject: _addObject,
            removeObject: _removeObject,
            updateObject : _updateObject
        }
        
        return public;
    }
);