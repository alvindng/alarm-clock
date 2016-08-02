(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function AlarmClock() {
  this.alarm = [];
}

AlarmClock.prototype.setAlarm = function (alarm) {
  this.alarm.push(alarm);
};

AlarmClock.prototype.removeAlarm = function (alarm) {
  index = this.alarm.indexOf(alarm);
  this.alarm.splice(index, 1);
};

exports.alarmModule = AlarmClock;

},{}],2:[function(require,module,exports){
var AlarmClock = require('./../js/alarm-clock.js').alarmModule;
$(document).ready(function(){
  var time = moment().format("h:mm:ss A");
  var clock = new AlarmClock();

  setInterval(function() {
    time = moment().format("h:mm:ss A");
    $('#time').text(time);
    clock.alarm.forEach(function(alarm) {
      if (alarm === moment().format("H:mm")) {
        $('#output').append("<div><img src='https://media1.giphy.com/media/8U760UjMO8mxa/100.gif'> " + "<button id='snooze' type='button'>Snooze</button></div>");
        clock.removeAlarm(alarm);
      }
    });
  }, 1000);

  $('.alarm').submit(function(event) {
    event.preventDefault();
    var alarm = $('#alarm').val();
    $('#alarm').val("");
    clock.setAlarm(alarm);
    $('#output').append('<p>Your alarm is set at ' + alarm + '.</p>');
  });

  $('#output').on('click', '#snooze', function() {
    var alarm = moment().add(1, 'm').format("H:mm");
    clock.setAlarm(alarm);
  });
});

},{"./../js/alarm-clock.js":1}]},{},[2]);
