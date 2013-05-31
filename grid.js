var Grid = Class.create({

	// Constructor
	initialize: function (width, height, cellSize) {
		// Parameters
		this.width = width === undefined ? 0 : width;
		this.height = height === undefined ? 0 : height;
		this.cellSize = cellSize === undefined ? 0 : cellSize;

		this.cellMap = [];
	},


	// Public methods
	getCell = function (x, y) {
		if (x === undefined || y === undefined)
			return null;

		return this.cellMap[x][y];
	},


	// Private methods
});

// Static methods
