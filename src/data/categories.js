export const categories = [
  {
    slug: 'womens-fashion',
    name: "Women's Fashion",
    icon: '👗',
    color: '#f76b8a',
    subcategories: ['Dresses', 'Tops & Blouses', 'Skirts', 'Jeans', 'Outerwear', 'Shoes', 'Bags', 'Swimwear'],
  },
  {
    slug: 'mens-fashion',
    name: "Men's Fashion",
    icon: '👔',
    color: '#4a7bd9',
    subcategories: ['Shirts', 'T-Shirts', 'Jeans', 'Jackets', 'Shoes', 'Suits', 'Accessories'],
  },
  {
    slug: 'phones-telecom',
    name: 'Phones & Telecom',
    icon: '📱',
    color: '#31b0d5',
    subcategories: ['Smartphones', 'Phone Cases', 'Screen Protectors', 'Chargers', 'Power Banks', 'Accessories'],
  },
  {
    slug: 'computer-office',
    name: 'Computer & Office',
    icon: '💻',
    color: '#7b6cd9',
    subcategories: ['Laptops', 'Keyboards', 'Mice', 'Monitors', 'USB Hubs', 'Office Supplies'],
  },
  {
    slug: 'consumer-electronics',
    name: 'Consumer Electronics',
    icon: '🎧',
    color: '#ec4899',
    subcategories: ['Headphones', 'Earbuds', 'Speakers', 'Cameras', 'Smart Watches', 'Drones'],
  },
  {
    slug: 'jewelry-watches',
    name: 'Jewelry & Watches',
    icon: '⌚',
    color: '#f4a261',
    subcategories: ['Necklaces', 'Rings', 'Earrings', 'Bracelets', 'Watches', 'Wallets'],
  },
  {
    slug: 'home-pet-appliances',
    name: 'Home, Pet & Appliances',
    icon: '🏠',
    color: '#2a9d8f',
    subcategories: ['Home Decor', 'Kitchen', 'Lighting', 'Robot Vacuums', 'Pet Supplies', 'Air Purifiers'],
  },
  {
    slug: 'bags-shoes',
    name: 'Bags & Shoes',
    icon: '👜',
    color: '#e76f51',
    subcategories: ['Handbags', 'Backpacks', 'Sneakers', 'Boots', 'Sandals', 'Luggage'],
  },
  {
    slug: 'toys-kids-babies',
    name: 'Toys, Kids & Babies',
    icon: '🧸',
    color: '#e9c46a',
    subcategories: ['Building Blocks', 'RC Toys', 'Dolls', 'Puzzles', 'Baby Gear', 'Games'],
  },
  {
    slug: 'outdoor-sports',
    name: 'Outdoor Fun & Sports',
    icon: '🚴',
    color: '#457b9d',
    subcategories: ['Camping', 'Cycling', 'Fitness', 'Fishing', 'Running Shoes', 'Sports Gear'],
  },
]

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug)
}
