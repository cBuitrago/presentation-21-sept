({
    appDir: "src",
    baseUrl: "js",
    dir: "dist",
    removeCombined: true,
    optimizeCss: "standard",
    fileExclusionRegExp: /^\.|less/,
    writeBuildTxt: false,
    modules:
    [
        {
            name: "main",
            include:
            [
                "content_p1_b2",
                "content_p1_b4",
                "constants_core_controller",
                "constants_core_view",
                "core_facade",
                "core_model",
                "core_view",
                "core_controller",
                "scorm",
                "scorm_connector",
                "scorm_constants",
                "systems_systems_start",
                "systems_page",
                "utilities_liquid",
                "utilities_query_params",
                "utilities_button_injector",
                "utilities_progress_tracker",
                "utilities/carousel",
                "utilities/transition",
                "utilities/modal",
                "jquery",
                "minivents",
                "preloadjs",
                "lzstring",
                "tweenmax",
                "scrollmagic"
            ]
        }
    ],
    stubModules:
    [
        'json',
        'text',
        'scrollmagic_debug'
    ],
    paths:
    {
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
            exports: 'preloadjs'
        },
        'lzstring':
        {
            exports: 'lzstring'
        },
        'tweenmax':
        {
            export: 'tweenmax'
        }
    }
})