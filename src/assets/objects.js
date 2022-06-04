const objects = [
  {
    id: 'key-left-spacer'
  },
  {
    id: 1,
    name: 'Memorices',
    imagen: 'https://cdn-icons-png.flaticon.com/512/3576/3576226.png',
    description: 'Atravete a recitar de memoria los versiculos de la biblia'
  },
  {
    id: 2,
    name: 'Palabras Clave',
    imagen: 'https://cdn-icons-png.flaticon.com/512/3170/3170748.png',
    description: 'Menciona en escencia el versiculo con la palabra clave'
  },
  {
    id: 3,
    name: 'Proximamente',
    imagen: 'https://cdn-icons-png.flaticon.com/512/7553/7553291.png',
    description: 'Te interesa ser parte, dejanos tus ideas ->'
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
    description
  })=>({
    key: id,
    title: name,
    image: imagen,
    description
  })
)

export default values
