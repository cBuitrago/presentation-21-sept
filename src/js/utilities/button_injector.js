define
(
    [
        
    ],
    function()
    {
        this.element;
        
        function _contsructor(element)
        {
            this.element = element;
            this.element.addClass("button-mode");
        }
        
        var _getElement = function()
        {
            return this.element;
        }
        
        var _destructor = function()
        {
            var newElement = this.element.cloneNode(true);
            this.element.parentNode.replaceChild(newElement, this.element);
            this.element = newElement;
        }
        
        _contsructor.prototype = 
        {
            getElement: _getElement,
            //removeEventListener: this.element.removeEventListener,
            //addEventListener: this.element.addEventListener,
            destructor: _destructor
        }

        return _contsructor;
    }
);