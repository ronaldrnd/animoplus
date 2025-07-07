// data.js - Données pour la fonctionnalité de recherche d'éleveur

export const speciesData = [
  { 
    id: 1, 
    name: 'Chien', 
    image: new URL('@/assets/images/dog.svg', import.meta.url).href,
    description: 'Fidèle compagnon à quatre pattes'
  },
  { 
    id: 2, 
    name: 'Chat', 
    image: new URL('@/assets/images/cat.svg', import.meta.url).href,
    description: 'Compagnon indépendant et affectueux'
  },
  { 
    id: 3, 
    name: 'Oiseaux', 
    image: new URL('@/assets/images/bird.svg', import.meta.url).href,
    description: 'Compagnons colorés et chanteurs'
  },
  { 
    id: 4, 
    name: 'Rongeurs', 
    image: new URL('@/assets/images/rodent.svg', import.meta.url).href,
    description: 'Petits compagnons pleins de vie'
  },
  { 
    id: 5, 
    name: 'Lapin', 
    image: new URL('@/assets/images/rabbit.svg', import.meta.url).href,
    description: 'Compagnon doux et câlin'
  },
  { 
    id: 6, 
    name: 'Reptiles', 
    image: new URL('@/assets/images/reptile.svg', import.meta.url).href,
    description: 'Compagnons exotiques fascinants'
  },
  { 
    id: 7, 
    name: 'Poisson', 
    image: new URL('@/assets/images/fish.svg', import.meta.url).href,
    description: 'Compagnons aquatiques paisibles'
  },
  { 
    id: 8, 
    name: 'Cheval', 
    image: new URL('@/assets/images/horse.svg', import.meta.url).href,
    description: 'Noble compagnon équestre'
  }
]

export const racesBySpecies = {
  1: [ // Chien
    { id: 1, name: 'Labrador', popularity: 'Très populaire' },
    { id: 2, name: 'Golden Retriever', popularity: 'Très populaire' },
    { id: 3, name: 'Berger Allemand', popularity: 'Populaire' },
    { id: 4, name: 'Bulldog Français', popularity: 'Très populaire' },
    { id: 5, name: 'Beagle', popularity: 'Populaire' },
    { id: 6, name: 'Rottweiler', popularity: 'Modéré' },
    { id: 7, name: 'Yorkshire Terrier', popularity: 'Populaire' },
    { id: 8, name: 'Chihuahua', popularity: 'Populaire' }
  ],
  2: [ // Chat
    { id: 9, name: 'Persan', popularity: 'Très populaire' },
    { id: 10, name: 'Maine Coon', popularity: 'Très populaire' },
    { id: 11, name: 'Siamois', popularity: 'Populaire' },
    { id: 12, name: 'British Shorthair', popularity: 'Populaire' },
    { id: 13, name: 'Ragdoll', popularity: 'Populaire' },
    { id: 14, name: 'Bengal', popularity: 'Modéré' },
    { id: 15, name: 'Sphynx', popularity: 'Modéré' },
    { id: 16, name: 'Abyssin', popularity: 'Modéré' }
  ],
  3: [ // Oiseaux
    { id: 17, name: 'Canari', popularity: 'Très populaire' },
    { id: 18, name: 'Perruche', popularity: 'Très populaire' },
    { id: 19, name: 'Cockatiel', popularity: 'Populaire' },
    { id: 20, name: 'Inséparable', popularity: 'Populaire' },
    { id: 21, name: 'Conure', popularity: 'Modéré' },
    { id: 22, name: 'Cacatoès', popularity: 'Modéré' },
    { id: 23, name: 'Ara', popularity: 'Rare' },
    { id: 24, name: 'Gris du Gabon', popularity: 'Modéré' }
  ],
  4: [ // Rongeurs
    { id: 25, name: 'Hamster doré', popularity: 'Très populaire' },
    { id: 26, name: 'Cochon d\'Inde', popularity: 'Très populaire' },
    { id: 27, name: 'Gerbille', popularity: 'Populaire' },
    { id: 28, name: 'Rat domestique', popularity: 'Populaire' },
    { id: 29, name: 'Chinchilla', popularity: 'Modéré' },
    { id: 30, name: 'Octodonte', popularity: 'Modéré' },
    { id: 31, name: 'Écureuil de Corée', popularity: 'Rare' },
    { id: 32, name: 'Hamster nain', popularity: 'Populaire' }
  ],
  5: [ // Lapin
    { id: 33, name: 'Lapin Nain', popularity: 'Très populaire' },
    { id: 34, name: 'Lapin Bélier', popularity: 'Très populaire' },
    { id: 35, name: 'Lapin Angora', popularity: 'Populaire' },
    { id: 36, name: 'Lapin Rex', popularity: 'Populaire' },
    { id: 37, name: 'Lapin Géant des Flandres', popularity: 'Modéré' },
    { id: 38, name: 'Lapin Fauve de Bourgogne', popularity: 'Modéré' },
    { id: 39, name: 'Lapin Papillon', popularity: 'Modéré' },
    { id: 40, name: 'Lapin Hotot', popularity: 'Rare' }
  ],
  6: [ // Reptiles
    { id: 41, name: 'Pogona', popularity: 'Très populaire' },
    { id: 42, name: 'Gecko Léopard', popularity: 'Très populaire' },
    { id: 43, name: 'Python Royal', popularity: 'Populaire' },
    { id: 44, name: 'Tortue Hermann', popularity: 'Populaire' },
    { id: 45, name: 'Iguane Vert', popularity: 'Modéré' },
    { id: 46, name: 'Caméléon', popularity: 'Modéré' },
    { id: 47, name: 'Serpent des Blés', popularity: 'Populaire' },
    { id: 48, name: 'Axolotl', popularity: 'Modéré' }
  ],
  7: [ // Poisson
    { id: 49, name: 'Poisson Rouge', popularity: 'Très populaire' },
    { id: 50, name: 'Guppy', popularity: 'Très populaire' },
    { id: 51, name: 'Betta', popularity: 'Très populaire' },
    { id: 52, name: 'Néon', popularity: 'Populaire' },
    { id: 53, name: 'Molly', popularity: 'Populaire' },
    { id: 54, name: 'Platy', popularity: 'Populaire' },
    { id: 55, name: 'Scalaire', popularity: 'Modéré' },
    { id: 56, name: 'Discus', popularity: 'Modéré' }
  ],
  8: [ // Cheval
    { id: 57, name: 'Pur-sang', popularity: 'Très populaire' },
    { id: 58, name: 'Quarter Horse', popularity: 'Très populaire' },
    { id: 59, name: 'Selle Français', popularity: 'Populaire' },
    { id: 60, name: 'Frison', popularity: 'Populaire' },
    { id: 61, name: 'Arabe', popularity: 'Populaire' },
    { id: 62, name: 'Andalou', popularity: 'Modéré' },
    { id: 63, name: 'Percheron', popularity: 'Modéré' },
    { id: 64, name: 'Shetland', popularity: 'Populaire' }
  ]
}

export const breedersData = [
  {
    id: 1,
    name: 'Aleksandra',
    age: 29,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Éleveuse passionnée depuis 10 ans, spécialisée dans les races de compagnie.',
    location: 'Paris, France',
    distance: '5 km',
    rating: 4.8,
    specialties: ['Chien', 'Chat'],
    verified: true
  },
  {
    id: 2,
    name: 'Dior',
    age: 19,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Jeune éleveuse dynamique avec une approche moderne de l\'élevage.',
    location: 'Lyon, France',
    distance: '12 km',
    rating: 4.5,
    specialties: ['Oiseaux', 'Rongeurs'],
    verified: true
  },
  {
    id: 3,
    name: 'Marie',
    age: 33,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Éleveuse expérimentée reconnue pour la qualité de ses reproducteurs.',
    location: 'Marseille, France',
    distance: '8 km',
    rating: 4.9,
    specialties: ['Lapin', 'Reptiles'],
    verified: true
  },
  {
    id: 4,
    name: 'Marine',
    age: 21,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Passionnée d\'aquariophilie et d\'élevage de poissons tropicaux.',
    location: 'Nice, France',
    distance: '15 km',
    rating: 4.6,
    specialties: ['Poisson'],
    verified: true
  },
  {
    id: 5,
    name: 'Pierre',
    age: 45,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Éleveur traditionnel avec 20 ans d\'expérience dans l\'élevage équin.',
    location: 'Bordeaux, France',
    distance: '22 km',
    rating: 4.7,
    specialties: ['Cheval'],
    verified: true
  },
  {
    id: 6,
    name: 'Sophie',
    age: 38,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Spécialiste des races rares et des animaux exotiques.',
    location: 'Toulouse, France',
    distance: '18 km',
    rating: 4.8,
    specialties: ['Reptiles', 'Oiseaux'],
    verified: true
  },
  {
    id: 7,
    name: 'Antoine',
    age: 27,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Éleveur certifié avec une approche éthique et responsable.',
    location: 'Nantes, France',
    distance: '10 km',
    rating: 4.7,
    specialties: ['Chien', 'Chat'],
    verified: true
  },
  {
    id: 8,
    name: 'Claire',
    age: 42,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Éleveuse passionnée offrant un suivi personnalisé à chaque client.',
    location: 'Lille, France',
    distance: '25 km',
    rating: 4.9,
    specialties: ['Lapin', 'Rongeurs'],
    verified: true
  },
  {
    id: 9,
    name: 'Thomas',
    age: 35,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Éleveur multi-espèces avec une expertise en génétique animale.',
    location: 'Strasbourg, France',
    distance: '20 km',
    rating: 4.6,
    specialties: ['Chien', 'Chat', 'Oiseaux'],
    verified: true
  },
  {
    id: 10,
    name: 'Isabelle',
    age: 51,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Vétérinaire et éleveuse, garantit la santé optimale de ses animaux.',
    location: 'Montpellier, France',
    distance: '14 km',
    rating: 5.0,
    specialties: ['Chien', 'Chat', 'Lapin'],
    verified: true
  },
  {
    id: 11,
    name: 'Lucas',
    age: 24,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Nouveau dans le domaine mais très prometteur, formation vétérinaire.',
    location: 'Rennes, France',
    distance: '28 km',
    rating: 4.4,
    specialties: ['Rongeurs', 'Reptiles'],
    verified: false
  },
  {
    id: 12,
    name: 'Camille',
    age: 36,
    image: new URL('@/assets/images/image1.svg', import.meta.url).href,
    description: 'Éleveuse bio, privilégie les méthodes naturelles et respectueuses.',
    location: 'Angers, France',
    distance: '16 km',
    rating: 4.8,
    specialties: ['Lapin', 'Poisson'],
    verified: true
  }
]

// Fonction utilitaire pour obtenir les races par espèce
export const getRacesBySpeciesId = (speciesId) => {
  return racesBySpecies[speciesId] || []
}

// Fonction utilitaire pour obtenir une espèce par ID
export const getSpeciesById = (speciesId) => {
  return speciesData.find(species => species.id === speciesId)
}

// Fonction utilitaire pour filtrer les éleveurs par spécialité
export const getBreedersBySpecialty = (specialty) => {
  return breedersData.filter(breeder => 
    breeder.specialties.includes(specialty)
  )
}

// Fonction utilitaire pour obtenir les éleveurs dans un rayon donné
export const getBreedersByDistance = (maxDistance) => {
  return breedersData.filter(breeder => 
    parseInt(breeder.distance) <= maxDistance
  )
}