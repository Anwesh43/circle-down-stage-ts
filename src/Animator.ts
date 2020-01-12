const delay : number = 30
class Animator {

    animated : boolean = false
    interval : number

    start(cb : Function) {
        if (!this.animated) {
            this.animated = false
            setInterval(cb, delay)
        }
    }

    stop() {
        if (this.animated) {
            this.animated = false
            this.interval = setInterval(cb, delay)
        }
    }
}
