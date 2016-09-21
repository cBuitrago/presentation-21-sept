define
(
    [
        "jquery",
        "core_facade",
        "systems_page"
    ],
    function($, Facade, Page)
    {
        var _registerSystems = function(systemsStart)
        {
            Page.init();
            /*for (var systemName in systemsStart)
            {
                console.log(systemName, systemsStart[systemName]);
            }*/
        }
        
        var public = 
        {
            registerSystems: _registerSystems
        }

        return public;
    }
);