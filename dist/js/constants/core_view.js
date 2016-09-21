define
(
    function()
    {
        var public = {};
        Object.defineProperty(public, "ALERT_INIT", {value:"content_load", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "ALERT_READY", {value:"content_load", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "ALERT_CLOSE", {value:"content_load", writable:false, enumerable:false, configurable:false});

        Object.defineProperty(public, "POPUP_INIT", {value:"content_load", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "POPUP_READY", {value:"content_load", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "POPUP_CLOSE", {value:"content_load", writable:false, enumerable:false, configurable:false});

        Object.defineProperty(public, "CONTENT_INIT", {value:"content_load", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "CONTENT_READY", {value:"content_load", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "CONTENT_UPDATE", {value:"content_load", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "CONTENT_COMPLETE", {value:"content_load", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "CONTENT_CLOSE", {value:"content_load", writable:false, enumerable:false, configurable:false});

        Object.defineProperty(public, "NAVIGATION_SYNC", {value:"content_load", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "NAVIGATION_PLAY", {value:"content_load", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "NAVIGATION_PAUSE", {value:"content_load", writable:false, enumerable:false, configurable:false});
        Object.defineProperty(public, "NAVIGATION_PROGRESS_COMPLETE", {value:"content_load", writable:false, enumerable:false, configurable:false});

        return public;
    }
);