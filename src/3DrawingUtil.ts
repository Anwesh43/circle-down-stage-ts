class DrawingUtil {

    static drawCircle(context : CanvasRenderingContext2D, x : number, y : number, r : number) {
        context.beginPath()
        context.arc(x, y, r, 0, 2 * Math.PI)
        context.fill()
    }

    static drawScaleDownCircle(context : CanvasRenderingContext2D, i : number, scale : number, w : number) {
        const sf : number = ScaleUtil.sinify(scale)
        const sc : number = ScaleUtil.divideScale(sf, i, circles)
        const gap : number = w / circles
        context.save()
        DrawingUtil.drawCircle(context, gap * i + gap / 2, 0, gap / 2 * (sc))
        context.restore()
    }

    static drawSDCNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        const gap : number = h / (nodes + 1)
        context.fillStyle = foreColor
        context.save()
        context.translate(0, gap * (i + 1))
        DrawingUtil.drawScaleDownCircle(context, i, scale, w)
        context.restore()
    }
}
