'use strict';

/**
 * 어떤 일을 하고 있습니까?
 * @class VisibleObjectsController
 */
var VisibleObjectsController = function() 
{
	if (!(this instanceof VisibleObjectsController)) 
	{
		throw new Error(Messages.CONSTRUCT_ERROR);
	}
	
	this.currentVisibles0 = [];
	this.currentVisibles1 = [];
	this.currentVisibles2 = [];
	this.currentVisibles3 = [];
	
	//this.currentRenderables0 = [];
	//this.currentRenderables1 = [];
	//this.currentRenderables2 = [];
	//this.currentRenderables3 = [];
	
	//this.currentRenderableRefArray = [];
};

VisibleObjectsController.prototype.initArrays = function() 
{
	this.currentVisibles0 = [];
	this.currentVisibles1 = [];
	this.currentVisibles2 = [];
	this.currentVisibles3 = [];
	
	//this.currentRenderables0 = [];
	//this.currentRenderables1 = [];
	//this.currentRenderables2 = [];
	//this.currentRenderables3 = [];
};
