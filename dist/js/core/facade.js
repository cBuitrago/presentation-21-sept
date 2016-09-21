define
(
    [
        "core_model",
        "core_view",
        "core_controller"
    ],
    function(model, view, controller)
    {
        var public = 
        {
            model: model,
            view: view,
            controller: controller
        }

        return public;
    }
);