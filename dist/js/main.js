require.config
(
    {
        baseUrl: "js",
        paths:
        {
            content_app_menu: "content/app_menu",
            content_buttons_app_menu_toggle: "content/buttons/app_menu_toggle",
            content_p1_b2: "content/p1_b2",
            content_p1_b4: "content/p1_b4",
            constants_core_controller: "constants/core_controller",
            constants_core_view: "constants/core_view",
            constants_systems: "constants/systems",
            core_facade: "core/facade",
            core_model: "core/model",
            core_view: "core/view",
            core_controller: "core/controller",
            scorm: "scorm/scorm",
            scorm_connector: "scorm/scorm_connector",
            scorm_constants: "scorm/scorm_constants",
            systems_systems_start: "systems/systems_start",
            systems_page: "systems/page",
            systems_routing: "systems/routing",
            utilities_liquid: "utilities/liquid",
            utilities_query_params: "utilities/query_params",
            utilities_button_injector: "utilities/button_injector",
            utilities_progress_tracker: "utilities/progress_tracker",
            utilities_carousel: "utilities/carousel",
            utilities_transition: "utilities/transition",
            utilities_modal: "utilities/modal",
            jquery: "external/jquery-3.0.0.min",
            minivents: "external/minivents.amd.min",
            preloadjs: "external/preloadjs-0.6.2.min",
            lzstring: "external/lz-string.min",
            tweenmax: "external/tweenmax.min",
            scrollmagic: "external/scrollmagic.min",
            scrollmagic_debug: "external/plugins/debug.addIndicators.min",
            text: "external/plugins/text",
            json: "external/plugins/json"
        },
        shim:
        {
            'preloadjs':
            {
                exports:'preloadjs'
            },
            'lzstring':
            {
                exports:'lzstring'
            }
        }
    }
);

require
(
    [
        'jquery',
        'core_facade',
        'tweenmax',
        'systems_systems_start',
        'json!../data/app_data.json',
        'utilities_carousel',
        'utilities_modal',
        'utilities_transition'
    ],
    function($, Facade, TweenMax, SystemsStart, appData)
    {
        var _init = function()
        {
            Facade.model.add("appData", appData);
            
            var limit = appData.sceneList.length;
            for (var i = 0; i < limit; i++)
            {
                Facade.view.addScene(appData.sceneList[i]);
            }
            
            SystemsStart.registerSystems(appData.systemsStart);
            
            Facade.view.addObserver("navigation", appData.navigation.startLocation);
            $("#navigation_" + appData.navigation.startLocation).load(appData.navigation.mainNavigation.html);
            
            require(["content_app_menu"],function(Block){Block.init("content_app_menu");})
            
            //load content dependacies
            /*var contentItem = appData.startLocation;
            do
            {
                Facade.view.addObserver("content", contentItem);
                $("#content_" + contentItem).load(appData.content[contentItem].html);
                
                if (appData.content[contentItem].complete && appData.content[contentItem].autoNext)
                    contentItem = appData.content[contentItem].nextId;
                else
                    contentItem = null;
            } while (contentItem);*/
            //facade.view.emptyScene("content");
            
            //console.log(page);
            
            //page.init(appData.startLocation);
            
            //setTimeout(check, 1000);
            //location.hash = queryParams.getParam("location");
        }
        
        _init();
        
    }
);