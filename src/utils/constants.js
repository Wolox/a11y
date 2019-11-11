import { routes } from '../router'

import homeIcon from '../assets/home-icon.svg'
import plusIcon from '../assets/plus-icon.svg'

export const navbarItems = [
  { id: 1, label: 'Home', to: routes.home, img: homeIcon, alt: 'Ir a la home' },
  { id: 2, label: 'Nuevo', to: routes.new, img: plusIcon, alt: 'Agregar nuevo item' }
]

export const reviewValues = [
  { id: 'review-value-1', optionLabel: '1', value: 1 },
  { id: 'review-value-2', optionLabel: '2', value: 2 },
  { id: 'review-value-3', optionLabel: '3', value: 3 },
  { id: 'review-value-4', optionLabel: '4', value: 4 },
  { id: 'review-value-5', optionLabel: '5', value: 5 },
  { id: 'review-value-6', optionLabel: '6', value: 6 },
  { id: 'review-value-7', optionLabel: '7', value: 7 },
  { id: 'review-value-8', optionLabel: '8', value: 8 },
  { id: 'review-value-9', optionLabel: '9', value: 9 },
  { id: 'review-value-10', optionLabel: '10', value: 10 }
]

export const seenStatus = [
  { id: 'seenStatus-1', optionLabel: 'Pendiente', value: 1 },
  { id: 'seenStatus-2', optionLabel: 'En curso', value: 2 },
  { id: 'seenStatus-3', optionLabel: 'Visto', value: 3 }
]
