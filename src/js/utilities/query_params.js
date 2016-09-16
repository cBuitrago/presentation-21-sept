define
(
    function()
    {
        var _getParam = function (name)
        {
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(window.location.href);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        
        var _getAll = function()
        {
            var search = location.search.substring(1);
            return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
        }
        
        var public = 
        {
            getParam: _getParam,
            getAll: _getAll
        }

        return public;
    }
);