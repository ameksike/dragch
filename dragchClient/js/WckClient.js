/*
 * @package:        DragCh Client
 * @version:        1.0
 * @description:    Cliente de conexión para la comunicación por WebSocket.
 * @authors:        Antonio Membrides Espinosa
 * @mail:           ameksike@gmail.com
 * @created		    28/10/2014
 * @updated		    15/10/2015
 * @copyright  	    Copyright (c) 2014-2019
 * @license:        GPL v3
 */  
var WckClient = function(cfg){
	var _this = this;
	
	this.construct = function(cfg){
		this.cfg = {
			"host": "localhost",
			"port": 8081
		}
		this.setting(cfg);
	}
	this.setting = function(cfg){
		for(var i in cfg)
			_this.cfg[i]=cfg[i];
	}
	
	this.send = function(msg){
		_this.websocket.send(JSON.stringify(msg));
	}
	this.url = function(){
		return "ws://"+_this.cfg["host"]+":"+this.cfg["port"];
	}
	this.connect = function(){
		_this.websocket = new WebSocket(_this.url());
		_this.websocket.onopen = function(ev)  {  	_this.onConnect.apply(_this, [ev]);  };
		_this.websocket.onclose = function(ev) {  	_this.onDisconnect.apply(_this, [ev]);  };
		_this.websocket.onerror = function(ev) {  	_this.onError.apply(_this, [ev]);  };
		_this.websocket.onmessage = function(ev) {  _this.onMessage.apply(_this, [ev]);  };
	}
	this.disconnect = function(){
		_this.websocket.onclose 	= function(ev){
			$('#message_box').append(createLi('System','desconectado.png','Connection Closed'));
		};
	}

	//... events
	this.onMessage = function(ev){}
	this.onConnect = function(ev){}
	this.onDisconnect = function(ev){}
	this.onError = function(ev){}
	//...
	this.construct.apply(this, arguments);
} 
