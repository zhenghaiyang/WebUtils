'use strict';
  // 存储localStorage
  const setStore = function(name, content){
  	if (!name) return;
  	if (typeof content !== 'string') {
  		content = JSON.stringify(content);
  	}
  	window.localStorage.setItem(name, content);
  }
  // 获取localStorage
  const getStore = function(name){
  	if (!name) return;
  	return window.localStorage.getItem(name);
  }

  //删除localStorage
  const removeStore = function(name) {
   if (!name) return;
   window.localStorage.removeItem(name);
 }

var utils={
  setStore:setStore,
  getStore:getStore,
  removeStore:removeStore
}


module.exports =utils
