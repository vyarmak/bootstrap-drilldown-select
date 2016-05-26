/*!
 * Bootstrap-drilldown-select v0.0.1 (https://github.io/vyarmak/bootstrap-drilldown-select)
 * Copyright 2015 Viktor Yarmak (https://github.com/vyarmak)
 * Licensed under the GPL license
 */

$(document).ready(function() {
  $('#drilldown1').drilldownSelect({ appendValue: true, data: data});
  $('#drilldown2').drilldownSelect({ appendValue: false, data: data});
  var test = $('#drilldown3').drilldownSelect({ appendValue: false, data: data, textBack: 'Go to previous section...'});
  test.setItemSelected([1, 18]);
});

var data = [
  {
    "id": 0,
    "name": "Will choose later"
  },
  {
    "id": 999999,
    "name": "I have my own option"
  },
  {
    "id": 50202,
    "name": "I'm disabled dude",
    "active": false
  },
  {
    "id": 50203,
    "name": "I have my own disabled children",
    "active": true,
    "list": [
      {"id": 1, "name": "Sub 1", "active": true},
      {"id": 2, "name": "Sub 2", "active": false},
      {"id": 3, "name": "Sub 3", "active": true},
      {"id": 4, "name": "Sub 4", "active": false},
      {"id": 5, "name": "Sub 5", "active": true},
      {"id": 6, "name": "Sub 6", "active": false},
      {"id": 7, "name": "Sub 7", "active": true},
      {"id": 8, "name": "Sub 8", "active": false},
      {"id": 9, "name": "Sub 9", "active": true}
    ]
  },
  {
    "id": 1,
    "name": "Option 1",
    "list": [
      {"id": 1, "name": "Sub 1", "list": [
        {"id": 1, "name": "Sub 1"},
        {"id": 2, "name": "Sub 2"},
        {"id": 3, "name": "Sub 3"},
        {"id": 4, "name": "Sub 4"},
        {"id": 5, "name": "Sub 5"},
        {"id": 6, "name": "Sub 6"},
        {"id": 7, "name": "Sub 7"},
        {"id": 8, "name": "Sub 8"},
        {"id": 9, "name": "Sub 9"},
        {"id": 10, "name": "Sub 10"},
        {"id": 11, "name": "Sub 11"},
        {"id": 12, "name": "Sub 12"},
        {"id": 13, "name": "Sub 13"},
        {"id": 14, "name": "Sub 14"},
        {"id": 15, "name": "Sub 15"},
        {"id": 16, "name": "Sub 16"},
        {"id": 17, "name": "Sub 17"},
        {"id": 18, "name": "Sub 18"}
      ]},
      {"id": 2, "name": "Sub 2"},
      {"id": 3, "name": "Sub 3"},
      {"id": 4, "name": "Sub 4"},
      {"id": 5, "name": "Sub 5"},
      {"id": 6, "name": "Sub 6"},
      {"id": 7, "name": "Sub 7"},
      {"id": 8, "name": "Sub 8"},
      {"id": 9, "name": "Sub 9"},
      {"id": 10, "name": "Sub 10"},
      {"id": 11, "name": "Sub 11"},
      {"id": 12, "name": "Sub 12"},
      {"id": 13, "name": "Sub 13"},
      {"id": 14, "name": "Sub 14"},
      {"id": 15, "name": "Sub 15"},
      {"id": 16, "name": "Sub 16"},
      {"id": 17, "name": "Sub 17"},
      {"id": 18, "name": "Sub 18"}
    ]
  },
  {
    "id": 2,
    "name": "Option 2",
    "list": [
      {"id": 1, "name": "Option 2 - Sub 1"},
      {"id": 2, "name": "Option 2 - Sub 2"},
      {"id": 3, "name": "Option 2 - Sub 3"},
      {"id": 4, "name": "Option 2 - Sub 4"},
      {"id": 5, "name": "Option 2 - Sub 5"},
      {"id": 6, "name": "Option 2 - Sub 6"},
      {"id": 7, "name": "Option 2 - Sub 7"},
      {"id": 8, "name": "Option 2 - Sub 8"},
      {"id": 9, "name": "Option 2 - Sub 9"},
      {"id": 10, "name": "Option 2 - Sub 10"},
      {"id": 11, "name": "Option 2 - Sub 11"},
      {"id": 12, "name": "Option 2 - Sub 12"},
      {"id": 13, "name": "Option 2 - Sub 13"},
      {"id": 14, "name": "Option 2 - Sub 14"},
      {"id": 15, "name": "Option 2 - Sub 15"},
      {"id": 16, "name": "Option 2 - Sub 16"},
      {"id": 17, "name": "Option 2 - Sub 17"},
      {"id": 18, "name": "Option 2 - Sub 18"}
    ]
  },
  {
    "id": 3,
    "name": "Option 3",
    "list": [
      {"id": 1, "name": "Option 3 - Sub 1"},
      {"id": 2, "name": "Option 3 - Sub 2"},
      {"id": 3, "name": "Option 3 - Sub 3"},
      {"id": 4, "name": "Option 3 - Sub 4"},
      {"id": 5, "name": "Option 3 - Sub 5"},
      {"id": 6, "name": "Option 3 - Sub 6"},
      {"id": 7, "name": "Option 3 - Sub 7"},
      {"id": 8, "name": "Option 3 - Sub 8"},
      {"id": 9, "name": "Option 3 - Sub 9"},
      {"id": 10, "name": "Option 3 - Sub 10"},
      {"id": 11, "name": "Option 3 - Sub 11"},
      {"id": 12, "name": "Option 3 - Sub 12"},
      {"id": 13, "name": "Option 3 - Sub 13"},
      {"id": 14, "name": "Option 3 - Sub 14"},
      {"id": 15, "name": "Option 3 - Sub 15"},
      {"id": 16, "name": "Option 3 - Sub 16"},
      {"id": 17, "name": "Option 3 - Sub 17"},
      {"id": 18, "name": "Option 3 - Sub 18"}
    ]
  },
  {
    "id": 4,
    "name": "Option 4",
    "list": [
      {"id": 1, "name": "Option 4 - Sub 1"},
      {"id": 2, "name": "Option 4 - Sub 2"},
      {"id": 3, "name": "Option 4 - Sub 3"},
      {"id": 4, "name": "Option 4 - Sub 4"},
      {"id": 5, "name": "Option 4 - Sub 5"},
      {"id": 6, "name": "Option 4 - Sub 6"},
      {"id": 7, "name": "Option 4 - Sub 7"},
      {"id": 8, "name": "Option 4 - Sub 8"},
      {"id": 9, "name": "Option 4 - Sub 9"},
      {"id": 10, "name": "Option 4 - Sub 10"},
      {"id": 11, "name": "Option 4 - Sub 11"},
      {"id": 12, "name": "Option 4 - Sub 12"},
      {"id": 13, "name": "Option 4 - Sub 13"},
      {"id": 14, "name": "Option 4 - Sub 14"},
      {"id": 15, "name": "Option 4 - Sub 15"},
      {"id": 16, "name": "Option 4 - Sub 16"},
      {"id": 17, "name": "Option 4 - Sub 17"},
      {"id": 18, "name": "Option 4 - Sub 18"}
    ]
  },
  {
    "id": 5,
    "name": "Option 5",
    "list": [
      {"id": 1, "name": "Option 5 - Sub 1"},
      {"id": 2, "name": "Option 5 - Sub 2"},
      {"id": 3, "name": "Option 5 - Sub 3"},
      {"id": 4, "name": "Option 5 - Sub 4"},
      {"id": 5, "name": "Option 5 - Sub 5"},
      {"id": 6, "name": "Option 5 - Sub 6"},
      {"id": 7, "name": "Option 5 - Sub 7"},
      {"id": 8, "name": "Option 5 - Sub 8"},
      {"id": 9, "name": "Option 5 - Sub 9"},
      {"id": 10, "name": "Option 5 - Sub 10"},
      {"id": 11, "name": "Option 5 - Sub 11"},
      {"id": 12, "name": "Option 5 - Sub 12"},
      {"id": 13, "name": "Option 5 - Sub 13"},
      {"id": 14, "name": "Option 5 - Sub 14"},
      {"id": 15, "name": "Option 5 - Sub 15"},
      {"id": 16, "name": "Option 5 - Sub 16"},
      {"id": 17, "name": "Option 5 - Sub 17"},
      {"id": 18, "name": "Option 5 - Sub 18"}
    ]
  },
  {
    "id": 6,
    "name": "Option 6",
    "list": [
      {"id": 1, "name": "Option 6 - Sub 1"},
      {"id": 2, "name": "Option 6 - Sub 2"},
      {"id": 3, "name": "Option 6 - Sub 3"},
      {"id": 4, "name": "Option 6 - Sub 4"},
      {"id": 5, "name": "Option 6 - Sub 5"},
      {"id": 6, "name": "Option 6 - Sub 6"},
      {"id": 7, "name": "Option 6 - Sub 7"},
      {"id": 8, "name": "Option 6 - Sub 8"},
      {"id": 9, "name": "Option 6 - Sub 9"},
      {"id": 10, "name": "Option 6 - Sub 10"},
      {"id": 11, "name": "Option 6 - Sub 11"},
      {"id": 12, "name": "Option 6 - Sub 12"},
      {"id": 13, "name": "Option 6 - Sub 13"},
      {"id": 14, "name": "Option 6 - Sub 14"},
      {"id": 15, "name": "Option 6 - Sub 15"},
      {"id": 16, "name": "Option 6 - Sub 16"},
      {"id": 17, "name": "Option 6 - Sub 17"},
      {"id": 18, "name": "Option 6 - Sub 18"}
    ]
  },
  {
    "id": 7,
    "name": "Option 7",
    "list": [
      {"id": 1, "name": "Option 7 - Sub 1"},
      {"id": 2, "name": "Option 7 - Sub 2"},
      {"id": 3, "name": "Option 7 - Sub 3"},
      {"id": 4, "name": "Option 7 - Sub 4"},
      {"id": 5, "name": "Option 7 - Sub 5"},
      {"id": 6, "name": "Option 7 - Sub 6"},
      {"id": 7, "name": "Option 7 - Sub 7"},
      {"id": 8, "name": "Option 7 - Sub 8"},
      {"id": 9, "name": "Option 7 - Sub 9"},
      {"id": 10, "name": "Option 7 - Sub 10"},
      {"id": 11, "name": "Option 7 - Sub 11"},
      {"id": 12, "name": "Option 7 - Sub 12"},
      {"id": 13, "name": "Option 7 - Sub 13"},
      {"id": 14, "name": "Option 7 - Sub 14"},
      {"id": 15, "name": "Option 7 - Sub 15"},
      {"id": 16, "name": "Option 7 - Sub 16"},
      {"id": 17, "name": "Option 7 - Sub 17"},
      {"id": 18, "name": "Option 7 - Sub 18"}
    ]
  },
  {
    "id": 8,
    "name": "Option 8",
    "list": [
      {"id": 1, "name": "Option 8 - Sub 1"},
      {"id": 2, "name": "Option 8 - Sub 2"},
      {"id": 3, "name": "Option 8 - Sub 3"},
      {"id": 4, "name": "Option 8 - Sub 4"},
      {"id": 5, "name": "Option 8 - Sub 5"},
      {"id": 6, "name": "Option 8 - Sub 6"},
      {"id": 7, "name": "Option 8 - Sub 7"},
      {"id": 8, "name": "Option 8 - Sub 8"},
      {"id": 9, "name": "Option 8 - Sub 9"},
      {"id": 10, "name": "Option 8 - Sub 10"},
      {"id": 11, "name": "Option 8 - Sub 11"},
      {"id": 12, "name": "Option 8 - Sub 12"},
      {"id": 13, "name": "Option 8 - Sub 13"},
      {"id": 14, "name": "Option 8 - Sub 14"},
      {"id": 15, "name": "Option 8 - Sub 15"},
      {"id": 16, "name": "Option 8 - Sub 16"},
      {"id": 17, "name": "Option 8 - Sub 17"},
      {"id": 18, "name": "Option 8 - Sub 18"}
    ]
  },
  {
    "id": 9,
    "name": "Option 9",
    "list": [
      {"id": 1, "name": "Option 9 - Sub 1"},
      {"id": 2, "name": "Option 9 - Sub 2"},
      {"id": 3, "name": "Option 9 - Sub 3"},
      {"id": 4, "name": "Option 9 - Sub 4"},
      {"id": 5, "name": "Option 9 - Sub 5"},
      {"id": 6, "name": "Option 9 - Sub 6"},
      {"id": 7, "name": "Option 9 - Sub 7"},
      {"id": 8, "name": "Option 9 - Sub 8"},
      {"id": 9, "name": "Option 9 - Sub 9"},
      {"id": 10, "name": "Option 9 - Sub 10"},
      {"id": 11, "name": "Option 9 - Sub 11"},
      {"id": 12, "name": "Option 9 - Sub 12"},
      {"id": 13, "name": "Option 9 - Sub 13"},
      {"id": 14, "name": "Option 9 - Sub 14"},
      {"id": 15, "name": "Option 9 - Sub 15"},
      {"id": 16, "name": "Option 9 - Sub 16"},
      {"id": 17, "name": "Option 9 - Sub 17"},
      {"id": 18, "name": "Option 9 - Sub 18"}
    ]
  },
  {
    "id": 10,
    "name": "Option 10",
    "list": [
      {"id": 1, "name": "Option 10 - Sub 1"},
      {"id": 2, "name": "Option 10 - Sub 2"},
      {"id": 3, "name": "Option 10 - Sub 3"},
      {"id": 4, "name": "Option 10 - Sub 4"},
      {"id": 5, "name": "Option 10 - Sub 5"},
      {"id": 6, "name": "Option 10 - Sub 6"},
      {"id": 7, "name": "Option 10 - Sub 7"},
      {"id": 8, "name": "Option 10 - Sub 8"},
      {"id": 9, "name": "Option 10 - Sub 9"},
      {"id": 10, "name": "Option 10 - Sub 10"},
      {"id": 11, "name": "Option 10 - Sub 11"},
      {"id": 12, "name": "Option 10 - Sub 12"},
      {"id": 13, "name": "Option 10 - Sub 13"},
      {"id": 14, "name": "Option 10 - Sub 14"},
      {"id": 15, "name": "Option 10 - Sub 15"},
      {"id": 16, "name": "Option 10 - Sub 16"},
      {"id": 17, "name": "Option 10 - Sub 17"},
      {"id": 18, "name": "Option 10 - Sub 18"}
    ]
  }
]