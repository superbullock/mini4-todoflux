/**
 * Created by danielbullock on 3/12/15.
 */
var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher;

AppDispatcher.handleAction = function (action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

module.exports = AppDispatcher;