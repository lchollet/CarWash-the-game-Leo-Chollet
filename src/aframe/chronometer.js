AFRAME.registerComponent("chronometer", {
    schema: {
      stop: { type: "boolean", default: false },
    },
  
    init: function () {
      this.tick = AFRAME.utils.throttleTick(this.chrono, 10, this);
      this.minutes = 0;
      this.seconds = 0;
      this.tens = 0;
      this.displayMinutes = "00";
      this.displaySeconds = "00";
      this.displayTens = "00";
    },
  
    chrono: function (t, dt) {
      if (this.data.stop) return;
      this.tens++;
  
      if (this.tens <= 9) {
        this.displayTens = "0" + this.tens;
      }
  
      if (this.tens > 9) {
        this.displayTens = this.tens;
      }
  
      if (this.tens > 99) {
        this.seconds++;
        this.displaySeconds = "0" + this.seconds;
        this.tens = 0;
        this.displayTens = "0" + 0;
      }
  
      if (this.seconds > 9) {
        this.displaySeconds = this.seconds;
      }
      if (this.seconds > 59) {
        this.minutes++;
        this.displayMinutes = "0" + this.minutes;
        this.seconds = 0;
        this.displaySeconds = "0" + 0;
      }
      if (this.minutes > 9) {
        this.displayMinutes = this.minutes;
      }
      this.el.setAttribute(
        "value",
        this.displayMinutes + ":" + this.displaySeconds + ":" + this.displayTens
      );
    },
  });