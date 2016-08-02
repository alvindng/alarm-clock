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
