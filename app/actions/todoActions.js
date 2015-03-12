/**
 * Created by danielbullock on 3/12/15.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var todoActions = {

  addItem: function (item) {
    AppDispatcher.handleAction({
      actionType: appConstants.ADD_ITEM,
      data: item
    })
  },

  removeItem: function (index) {
    AppDispatcher.handleAction({
      actionType: appConstants.REMOVE_ITEM,
      dat: index
    })
  }

};

module.exports = todoActions;