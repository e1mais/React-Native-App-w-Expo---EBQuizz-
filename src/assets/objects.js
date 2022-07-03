const objects = [
  {
    id: 'key-left-spacer'
  },
  {
    id: 3,
    name: 'Proximamente',
    imagen: require('./img/ideas.png'),
    description: 'Te interesa ser parte, dejanos tus ideas ->',
    component: 'Ideas'
  },
  {
    id: 1,
    name: 'Memorices',
    imagen: require('./img/cerebro.png'),
    description: 'Atravete a recitar de memoria los versiculos de la biblia',
    component: 'Memorices'
  },
  {
    id: 2,
    name: 'Palabras Clave',
    imagen: require('./img/llave.png'),
    description: 'Menciona en escencia el versiculo con la palabra clave',
    component: 'KeyWords'
  },
  {
    id: 'key-right-spacer'
  }
]

const values = objects.map(
  ({
    id,
    name,
    imagen,
    description,
    component
  })=>({
    key: id,
    title: name,
    image: imagen,
    description,
    component
  })
)

export default values
