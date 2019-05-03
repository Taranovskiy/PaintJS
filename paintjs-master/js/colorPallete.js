class ColorPallete {
  constructor({ element, colors = [] }) {
    this.element = element;
    this.colorElements = [];

    this.colors = colors;
    this.currentColor = null;

    this.init();
  }

  init() {
    this.colors.forEach(color => {
      const li = document.createElement('li');
      li.className = 'color-palette__color';
      li.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
      this.element.appendChild(li);
      this.colorElements.push(li);
    });
  }
}