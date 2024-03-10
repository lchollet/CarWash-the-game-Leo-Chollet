AFRAME.registerComponent('bubble-pop', {
    schema: {
        bubble: {type: 'selector'},
        on: {type: 'string', default: 'contactbegin'},
    },
    init: function () {
        this.onEvent = this.onEvent.bind(this);
        console.log("test");
        this.el.addEventListener(this.data.on, this.onEvent);
    },
    onEvent: function () {
        this.data.bubble.emit('pop');
        console.log(this.data);
        this.data.bubble.setAttribute('visible', 'false');
        this.data.bubble.removeAttribute('bubble-pop');
        setTimeout(() => {
            this.data.bubble.removeAttribute('sound');
        }, 2000);
        

    }
});