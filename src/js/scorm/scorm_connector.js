/*
 * @version 2.1
 * @author Massimo Canonico
 */

define
(
    function()
    {
        Object.defineProperty(this, "MAX_PARENTS_TO_SEARCH", {value:500, writable:false, enumerable:false, configurable:false});
        
        var _objApi = null;
        
        var _api = function()
        {
            if (_objApi == null)
            {
                if ((window.parent != null) && (window.parent != window))
                    _objApi = _findApi(window.parent);
                else if (window.top.opener != null)
                    _objApi = _findApi(window.top.opener);
                
                if (_objApi != null)
                    _objApi.LMSInitialize("");
                
            }
            return _objApi;
        }
        
        var _value = function(parameter, value)
        {
            if (value == null)
            {
                return _api().LMSGetValue(parameter);
            }
            
            _api().LMSSetValue(parameter, value);
        }
        
        var _error = function()
        {
            lmsError = _api().LMSGetLastError();
            if(lmsError != "0")
                lmsError = _api().LMSGetErrorString(lmsError);
            return lmsError;
        }
        
        var _commit = function()
        {
            return _api().LMSCommit("");
        }
        
        var _finish = function()
        {
            _api().LMSFinish("");
        }
        
        var _findApi = function(win)
        {
            var nParentsSearched = 0;

            while((win.API == null) && (win.parent != null) && (win.parent != win) && (nParentsSearched <= MAX_PARENTS_TO_SEARCH))
            {
                nParentsSearched++;
                win = win.parent;
            }

            return win.API;
        }
        
        var public = 
        {
            api: _api,
            value: _value,
            error: _error,
            commit: _commit,
            finish: _finish
        }

        return public;
    }
);