class ColorPicker {
  constructor({ element }) {
    this.element = element;
    this.previewElement = null;

    this.color = {
      red: 0,
      green: 0,
      blue: 0
    };

    this.onAdd = () => {};

    this.init();
  }

  init() {
    this.previewElement = this.element.querySelector('.color-picker__preview');
    this.setPreviewBackground(this.color);
    this.element.querySelectorAll('.color-picker__slider')
      .forEach(slider => slider.addEventListener('change', this.handleChange.bind(this)));
    this.element.querySelector('.color-picker__close-button')
      .addEventListener('click', this.handleCloseButton.bind(this));
    this.element.querySelector('.color-picker__add-button')
      .addEventListener('click', this.handleAdd.bind(this));
  }

  handleChange({ target }) {
    this.color[target.id] = Number(target.value);
    this.setPreviewBackground(this.color);
  }

  handleCloseButton() {
    this.close();
  }

  handleAdd() {
    this.onAdd(this.color);
    this.reset();
    this.close();
  }

  setPreviewBackground(color) {
    return this.previewElement.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
  }

  open() {
    this.element.style.display = 'block';
  }
  
  close() {
    this.element.style.display = 'none';
  }

  reset() {
    this.color = {
      red: 0,
      green: 0,
      blue: 0
    };
  }
}