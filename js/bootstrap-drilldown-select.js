'use strict';

(function($) {
  $.fn.drilldownSelect = function(params) {
    /** @type {Object} default properties for dropdown */
    var defaults = {
      left: 15, // if you don't put it inside fo some "row" - you must set left spacing
      height: 200, // height of the drilldown
      data: [], // data to be uses
      keyName: 'id', // name of key parameter in data array
      valueName: 'name', // name of value parameter in data array
      listName: 'list', // name of list parameter in data array
      appendValue: true, // append value or replace it
      textBack: 'Back...', // text for go back link
      /** function that will be called on select of final element */
      onSelected: function(event) {
      	alert($(event.target).data('id'));
      }
    };
    /** @type {Object} extend defauls */
    var params = $.extend(defaults, params);
    /** @type {Boolean} flag to define if  */
    var isVisible = false;

    /** Hook function on each element */
    return this.each(function(options) {
      /** get this element */
      var element = $(this);
      /** set default placeholder */
      var textHolder = element.find('span.text');
      textHolder.html(textHolder.attr('placeholder'));
      /** get parent elment */
      var parent = element.parent();
      /** create a dropdown object */
      makeDropdown(element, null, '', false);
      /** hook event that will fix size and position */
      parent.on('show.bs.dropdown', function(event) {
	      var target = $(event.relatedTarget);
	      var holder = $(event.target).find('.dropdown-menu');
	      holder.width(target.outerWidth() - 2);
	      holder.css('left', defaults.left);
	      isVisible = true;
      });
    });

    /**
     * Make a dropdown menu
     * @param  {Object} element parent element
     * @param  {Event} event   jQuery event object
     * @param  {String} path    coma separated path
     * @param  {Boolean} show    show or not a menu
     */
    function makeDropdown(element, event, path, show) {
      var pathArray = (path) ? (path + '').split(',') : [];
      var data = defaults.data;
      if (pathArray.length) {
        for (var i = 0; i < pathArray.length; i++) {
          var pathArrayElement = pathArray[i];
          for (var j = 0; j < data.length; j++) {
            if (data[j].id == pathArrayElement) {
              data = data[j][defaults.listName];
              break;
            }
          }
        }
      }
      if (!data) {
        defaults.onSelected(event);
        element.dropdown('toggle');
        isVisible = false;
        return false;
      }
      if (isVisible) {
        element.dropdown('toggle');
        isVisible = false;        
      }
      var parent = element.parent();
      parent.find('ul.dropdown-menu').remove();
      var menu = $('<ul class="dropdown-menu" style="' + ((defaults.height) ? 'height: ' + defaults.height + 'px; ' : '') + 'overflow: auto;"></ul>');
      var dataItem = null;
      var childItem = null;
      var tempPathArray = pathArray.slice();
      if (pathArray.length) {
        tempPathArray.pop();
        childItem = $('<li><a href="#" data-path="' + tempPathArray.join(',') + '"><b>' + defaults.textBack + '</b></a></li>');
        childItem.on('click', function(event) {
          var textHolder = element.find('span.text');
          textHolder.html(textHolder.attr('placeholder'));
          makeDropdown(element, event, $(event.target).closest('[data-path]').data('path'), true);
          return false;
        });
        menu.append(childItem);
      }
      for (var i = 0; i < data.length; i++) {
        dataItem = data[i];
        tempPathArray = pathArray.slice();
        tempPathArray.push(dataItem[defaults.keyName]);
        var hasChild = (dataItem[defaults.listName] != undefined && dataItem[defaults.listName] && dataItem[defaults.listName].length) ? 'hasChild' : '';
        childItem = $('<li class="' + hasChild + '"><a href="#" data-path="' + tempPathArray.join(',') + '" data-id="' + dataItem[defaults.keyName] + '">' + dataItem[defaults.valueName] + '</a></li>');
        childItem.on('click', function(event) {
          event.preventDefault();
          var eventTarget = $(event.target);
          var textHolder = element.find('span.text');
          if (textHolder.html() == textHolder.attr('placeholder')) {
            textHolder.html('');
          }
          var text = defaults.appendValue ? (textHolder.html() ? textHolder.html() + ' - ' : '') + eventTarget.html() : eventTarget.html();
          textHolder.html(text);
          makeDropdown(element, event, eventTarget.closest('[data-path]').data('path'), true);
          return false;
        });
        menu.append(childItem);
      }
      menu.insertAfter(element);
      if (show) {
        element.dropdown('toggle');
        isVisible = true;
        return false;
      }
    };
  };
})(jQuery);
