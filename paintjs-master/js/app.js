class App {
  constructor({ canvas, colorPallete, colorPicker }) {
    this.canvas = canvas;
    this.colorPallete = colorPallete;
    this.colorPicker = colorPicker;

    this.context = null;
    this.isDrawing = false;

    this.init();
  }

  init() {
    this.context = this.canvas.getContext('2d');

    this.canvas.addEventListener('mousedown', this.handleCanvasMousedown.bind(this));
    this.canvas.addEventListener('mousemove', this.handleCanvasMousemove.bind(this));
    this.canvas.addEventListener('mouseup', this.handleCanvasMouseup.bind(this));
    this.canvas.addEventListener('mouseleave', this.handleCanvasMouseleave.bind(this));
  }

  handleCanvasMousedown(evt) {
    this.lastEvent = evt;
    this.isDrawing = true;
  }

  handleCanvasMousemove(evt) {
    if (this.isDrawing) {
      this.context.beginPath();
      this.context.moveTo(this.lastEvent.offsetX, this.lastEvent.offsetY);
      this.context.lineTo(evt.offsetX, evt.offsetY);
      this.context.strokeStyle = this.colorPallete.currentColor;
      this.context.stroke();
      this.lastEvent = evt;
    }
  }

  handleCanvasMouseup(evt) {
    this.isDrawing = false;
  }

  handleCanvasMouseleave(evt) {
    this.isDrawing = false;
  }
}