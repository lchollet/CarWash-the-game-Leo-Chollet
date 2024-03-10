AFRAME.registerComponent('bubble-pop', {
    schema: {
      on: { type: 'string', default: 'click' },
    },
  
    init: function () {
      this.onClick = this.onClick.bind(this);
      this.bubbles = document.querySelectorAll('[bubble-pop]');
      this.poppedCount = 0;
      this.bubbleCounter = document.getElementById('bubble-counter'); // Reference to the text element
      this.attachClickListeners();
    },
  
    attachClickListeners: function () {
      this.bubbles.forEach(bubble => {
        bubble.addEventListener(this.data.on, this.onClick);
      });
    },
  
    onClick: function (event) {
      const bubble = event.target;
      bubble.setAttribute('visible', 'false');
      bubble.removeAttribute('bubble-pop');
      bubble.removeEventListener(this.data.on, this.onClick);
      this.poppedCount++;
      console.log('Bubbles popped:', this.poppedCount);
  
      // Emit bubblePopped event
      bubble.emit('bubblePopped');
  
      // Update bubble counter text
      if (this.bubbleCounter) {
        this.bubbleCounter.setAttribute('value', 'Bubbles popped: ' + this.poppedCount);
      }
  
      setTimeout(() => {
        bubble.removeAttribute('sound');
      }, 2000);
    }
  });
  