var bubble = function(start, finish) {
  this.start = start;
  this.finish = finish;
}

var videoTrigger = function() {
  this.video = $('.demonstration-vid');
  this.bubbles = [
    new bubble(5, 10)];
}

videoTrigger.prototype.timer = function(start, finish, bubble) {
  this.video.bind("timeupdate", function() {
    var time = this.currentTime;
    if (time >= start && time <= finish) {
      $(bubble).addClass('show');
    } else {
      $(bubble).removeClass('show');
    }
  });
}

videoTrigger.prototype.run = function() {
  for (var i = 0; i < this.bubbles.length; i++) {
    var bubbles = $('.bubble');
    $(bubbles[i]).addClass("order-" + i);
    var start = this.bubbles[i].start;
    var finish = this.bubbles[i].finish;
    this.timer(start, finish, bubbles[i]);
  }
}


$(document).ready(function() {
  vid = new videoTrigger();
  vid.run();
}
