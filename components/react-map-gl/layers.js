import colors from '../../styles/colors'

export const casConfirmesLayer = {
  id: 'cas-confirmes',
  type: 'circle',
  source: 'cas-confirmes',
  filter: ['>', 'casConfirmes', 0],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': colors.orange,
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['sqrt', ['number', ['get', 'casConfirmes']]],
      0,
      10,
      100,
      80
    ]
  }
}

export const casConfirmesCountLayer = {
  id: 'cas-confirmes-count',
  type: 'symbol',
  source: 'cas-confirmes',
  filter: ['>', 'casConfirmes', 0],
  layout: {
    'text-field': '{casConfirmes}',
    'text-size': 16
  }
}

export const decesLayer = {
  id: 'deces',
  type: 'circle',
  source: 'deces',
  filter: ['>', 'deces', 0],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': colors.red,
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['sqrt', ['number', ['get', 'deces']]],
      0,
      10,
      30,
      80
    ]
  }
}

export const decesCountLayer = {
  id: 'deces-count',
  type: 'symbol',
  source: 'deces',
  filter: ['>', 'deces', 0],
  layout: {
    'text-field': '{deces}',
    'text-size': 16
  }
}

export const hospitalisesLayer = {
  id: 'hospitalises',
  type: 'circle',
  source: 'hospitalises',
  filter: ['>', 'hospitalises', 0],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': colors.darkGrey,
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['sqrt', ['number', ['get', 'hospitalises']]],
      0,
      10,
      30,
      80
    ]
  }
}

export const hospitalisesCountLayer = {
  id: 'hospitalises-count',
  type: 'symbol',
  source: 'hospitalises',
  filter: ['>', 'hospitalises', 0],
  layout: {
    'text-field': '{hospitalises}',
    'text-size': 16
  }
}

export const reanimationLayer = {
  id: 'reanimation',
  type: 'circle',
  source: 'reanimation',
  filter: ['>', 'reanimation', 0],
  paint: {
    'circle-opacity': 0.6,
    'circle-color': colors.darkerGrey,
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['sqrt', ['number', ['get', 'reanimation']]],
      0,
      10,
      30,
      80
    ]
  }
}

export const reanimationCountLayer = {
  id: 'reanimation-count',
  type: 'symbol',
  source: 'reanimation',
  filter: ['>', 'reanimation', 0],
  layout: {
    'text-field': '{reanimation}',
    'text-size': 16
  }
}
