const mapping = {
  house: 'home',
  airplay: '',
  aperture: '',
  archive: '',
  arrowDown: '',
  arrowUp: '',
  arrowStart: 'arrow-left',
  arrowEnd: 'arrow-right',
  arrowClockwise: 'rotate-cw',
  arrowCounterClockwise: 'rotate-ccw',
  arrowsIn: 'minimize',
  arrowsOut: 'maximize'
}

const inlineScript = 'feather.replace();'

function handler ({ params }) {
  const attr = params.attr
  attr['data-feather'] = mapping[attr.name]
  delete attr.name
}

function iconset (ctx) {
  return {
    name: 'feather',
    scripts: [
      'waibuFeather.virtual:/feather/feather.min.js'
    ],
    inlineScript,
    mapping,
    handler
  }
}

export default iconset
