'use strict';

/**
 * 어떤 일을 하고 있습니까?
 */
var NeoTexture = function() {
	this.lod;
	this.textureId; // texture id in gl.***
	this.texImage; // image. delete this once upload to gl.***
	this.load_started = false;
	this.load_finished = false;
};