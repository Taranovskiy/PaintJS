class ColorPallete {
  constructor({ element, colors = [] }) {
    this.element = element;
    this.colorElements = [];

    this.colors = colors;
    this.currentColor = null;

    this.init();
  }

  init() {
    this.element.addEventListener('click', this.handleColorSelected.bind(this));

    this.colors.forEach(color => {
      const li = document.createElement('li');
      li.className = 'color-palette__color';
      li.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
      this.element.appendChild(li);
      this.colorElements.push(li);
    });
  }

  handleColorSelected({ target }) {
    if (target.tagName === 'LI') {
      this.currentColor = target.style.backgroundColor;
      
      this.colorElements.forEach(el => el.classList.remove('selected'));

      target.classList.add('selected');
    }
  }
}