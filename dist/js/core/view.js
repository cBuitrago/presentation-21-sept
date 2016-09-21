define
(
    function()
    {
        var _addScene = function(id, zIndex)
        {
            var element = document.createElement('div');
            element.id = "scene_" + id;
            element.className = "scene";
            element.setAttribute('name', element.id);
            
            if (zIndex !== "undefined")
            {
                element.style.zIndex = zIndex;
            }
            
            document.body.appendChild(element);
        }
        
        var _emptyScene = function(scene)
        {
            var parent = document.getElementById("scene_" + scene);
            while (parent.firstChild)
            {
                parent.removeChild(parent.firstChild);
            }
        }
        
        var _removeScene = function(scene)
        {
            var child = document.getElementById("scene_" + scene);
            document.body.removeChild(child)
        }
        
        var _getScene = function(scene)
        {
            return document.getElementById("scene_" + scene);
        }
        
        var _addObserver = function(scene, id, node, zIndex)
        {
            var sceneElement = document.getElementById("scene_" + scene);
            
            var element = document.createElement('div');
            element.id = scene + "_" + id;
            element.className = "observer " + scene;
            element.setAttribute('name', element.id);
            
            if (node)
            {
                element.appendChild(node);
            }
            
            if (zIndex)
            {
                element.style.zIndex = zIndex;
            }
            
            sceneElement.appendChild(element);
        }
        
        var _removeObserver = function(scene, observer)
        {
            var parent = document.getElementById("scene_" + scene);
            var child = document.getElementById(scene + "_" + observer);
            parent.removeChild(child);
        }
        
        var _getObserver = function(scene, observer)
        {
            return document.getElementById(scene + "_" + observer);
        }
        
        var public = 
        {
            addScene: _addScene,
            emptyScene: _emptyScene,
            removeScene: _removeScene,
            getScene: _getScene,
            addObserver: _addObserver,
            removeObserver: _removeObserver,
            getObserver: _getObserver
        }

        return public;
    }
);