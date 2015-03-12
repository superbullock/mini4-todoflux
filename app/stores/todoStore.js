/**
 * Created by danielbullock on 3/12/15.
 */
var AppDispatcher = require('./dispatcher/AppDispatcher');
var appConstants = require('./constants/appConstants');
var EventEmitter = require('events').EventEmitter;
var objectAssign = ('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

var _store = {
  list: [],

  addItem: function (item) {
    this.list.push(item);
  },

  removeItem: function (index) {
    this.list.splice(index, 1);
  }

}

var todoStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function (cb) {
    this.on(CHANGE_EVENT, cb)
  },

  removeChangeListener: function (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getList: function () {
    return _store.list;
  }
})

AppDispatcher.register(function (payload) {
  var action = payload.action;
  switch (action.actionType) {
    case appConstants.ADD_ITEM :
      addItem(action.data);
      todoStore.emit(CHANGE_EVENT);
      break;
    case appConstants.REMOVE_ITEM:
      removeItem(action.data);
      todoStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }

}),

module.exports = todoStore;