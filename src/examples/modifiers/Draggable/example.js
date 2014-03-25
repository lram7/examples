define(function(require, exports, module) {                                                                                                                                                                 
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Draggable = require('famous/modifiers/Draggable');

    var mainContext = Engine.createContext();

    //show a grid for reference
    var grid = new Surface({
        size: [481,481],
        classes: ['graph']
    });

    // TODO Fix github issue: https://github.com/Famous/modifiers/issues/7
    var draggable = new Draggable( {
        snapX: 40, 
        snapY: 40, 
        xRange: [-220, 220],
        yRange: [-220, 220],
    });

    var surface = new Surface({
        size: [40, 40],
        content: 'drag',
        classes: ['red-bg'],
        properties: {
            lineHeight: '40px',
            textAlign: 'center'
        }
     });
    surface.pipe(draggable);

    var node = mainContext.add(new Modifier({origin:[0.5,0.5]}))
    node.add(grid);
    node.add(draggable).add(surface);
});
