// Represents a grid using the canvas element for rendering.
var CanvasGrid = Class.create(Grid, {
	
	// Constructor
	initialize: function (canvas, width, height, cellSize) {
		this.canvas = canvas;
		this.width = width === undefined ? 0 : width;
		this.height = height === undefined ? 0 : height;
		this.cellSize = cellSize === undefined ? 0 : cellSize;
	},

	
	// Public methods


	// Private methods

});

// Static methods
