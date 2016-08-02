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
