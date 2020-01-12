class Renderer {

    cd : CircleDown = new CircleDown()
    animator : Animator = new Animator()

    render(context : CanvasRenderingContext2D) {
        this.cd.draw(context)
    }

    handleTap(cb : Function) {
        this.cd.startUpdating(() => {
            this.animator.start(() => {
                cb()
                this.cd.update(() => {
                    this.animator.stop()
                    cb()
                })
            })
        })
    }
}
