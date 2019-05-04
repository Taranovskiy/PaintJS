new App({
  canvas: document.querySelector('#canvas'),

  colorPallete: new ColorPallete({
    element: document.querySelector('#color-palette'),
    colors: [
      { red: 252, green: 76, blue: 79 },
      { red: 79, green: 163, blue: 252 },
      { red: 104, green: 178, blue: 91 }
    ]
  }),

  colorPicker: new ColorPicker({
    element: ducument.querySelector('#color-picker')
  })
})