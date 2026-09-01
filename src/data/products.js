const imageMap = import.meta.glob('../assets/products/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
})

const img = (seed) =>
  imageMap[`../assets/products/p${seed}.svg`] || ''

export const products = [
  // Electronics
  { id: 'p1', name: 'Wireless Bluetooth Headphones Noise Cancelling Over-Ear', category: 'consumer-electronics', price: 8.99, originalPrice: 25.99, discount: 65, rating: 4.7, reviews: 3200, sold: 12400, image: img(1), badge: 'Choice', shipping: 'Free Shipping' },
  { id: 'p2', name: 'Wireless Earbuds Bluetooth 5.3 with Charging Case', category: 'consumer-electronics', price: 6.5, originalPrice: 18.0, discount: 64, rating: 4.6, reviews: 2100, sold: 8900, image: img(2), badge: 'Choice' },
  { id: 'p3', name: 'Bluetooth Speaker Portable Waterproof Mini', category: 'consumer-electronics', price: 9.99, originalPrice: 22.99, discount: 57, rating: 4.5, reviews: 980, sold: 4100, image: img(3), shipping: 'Free Shipping' },
  { id: 'p4', name: 'Smart Watch Fitness Tracker Heart Rate Monitor', category: 'consumer-electronics', price: 12.5, originalPrice: 39.99, discount: 69, rating: 4.4, reviews: 1500, sold: 5300, image: img(4), badge: 'Choice' },
  { id: 'p5', name: '1080P Mini Action Camera Sports Waterproof', category: 'consumer-electronics', price: 19.99, originalPrice: 49.99, discount: 60, rating: 4.3, reviews: 640, sold: 2200, image: img(5) },

  // Fashion
  { id: 'p6', name: "Women's Summer Floral Dress Casual Beach", category: 'womens-fashion', price: 9.2, originalPrice: 28.99, discount: 68, rating: 4.5, reviews: 1200, sold: 5100, image: img(6), shipping: 'Free Shipping' },
  { id: 'p7', name: 'Women Sexy Lace Sleeveless Bodycon Midi Dress', category: 'womens-fashion', price: 7.8, originalPrice: 21.99, discount: 65, rating: 4.4, reviews: 870, sold: 3600, image: img(7) },
  { id: 'p8', name: 'Men Casual Slim Fit Cotton Shirt Long Sleeve', category: 'mens-fashion', price: 8.5, originalPrice: 24.99, discount: 66, rating: 4.6, reviews: 1100, sold: 4700, image: img(8), badge: 'Choice' },
  { id: 'p9', name: 'Men Slim Fit Oversized T-Shirt Fashion Street', category: 'mens-fashion', price: 4.25, originalPrice: 12.99, discount: 67, rating: 4.5, reviews: 2600, sold: 9800, image: img(9), shipping: 'Free Shipping' },

  // Jewelry & Watches
  { id: 'p10', name: "Men's Classic Leather Watch Waterproof Analog", category: 'jewelry-watches', price: 14.5, originalPrice: 45.0, discount: 68, rating: 4.7, reviews: 1750, sold: 6900, image: img(10), badge: 'Choice' },
  { id: 'p11', name: 'Stainless Steel Gold Chain Necklace Men', category: 'jewelry-watches', price: 3.99, originalPrice: 12.99, discount: 69, rating: 4.6, reviews: 2200, sold: 8400, image: img(11), shipping: 'Free Shipping' },
  { id: 'p12', name: '925 Sterling Silver Value Pack Ring Set', category: 'jewelry-watches', price: 5.2, originalPrice: 16.99, discount: 69, rating: 4.4, reviews: 940, sold: 3100, image: img(12) },

  // Home
  { id: 'p13', name: 'Smart Home LED Strip Lights RGB 5050 Remote', category: 'home-pet-appliances', price: 4.99, originalPrice: 15.99, discount: 69, rating: 4.8, reviews: 4100, sold: 16200, image: img(13), badge: 'Choice', shipping: 'Free Shipping' },
  { id: 'p14', name: 'Robot Vacuum Cleaner Smart Home Automatic', category: 'home-pet-appliances', price: 89.99, originalPrice: 249.99, discount: 64, rating: 4.3, reviews: 320, sold: 980, image: img(14) },
  { id: 'p15', name: 'Aromatherapy Essential Oil Diffuser 500ML', category: 'home-pet-appliances', price: 7.5, originalPrice: 23.99, discount: 69, rating: 4.6, reviews: 1500, sold: 5200, image: img(15), shipping: 'Free Shipping' },

  // Bags & Shoes
  { id: 'p16', name: "Women's Handbag PU Leather Crossbody Tote", category: 'bags-shoes', price: 11.99, originalPrice: 34.99, discount: 66, rating: 4.5, reviews: 860, sold: 2800, image: img(16), badge: 'Choice' },
  { id: 'p17', name: 'Running Shoes Men Breathable Lightweight Sneakers', category: 'bags-shoes', price: 18.99, originalPrice: 55.0, discount: 65, rating: 4.4, reviews: 1900, sold: 7300, image: img(17), shipping: 'Free Shipping' },
  { id: 'p18', name: 'Casual Canvas Backpack Laptop Travel Rucksack', category: 'bags-shoes', price: 9.99, originalPrice: 29.99, discount: 67, rating: 4.6, reviews: 1300, sold: 4900, image: img(18) },

  // Phone & Computer
  { id: 'p19', name: 'USB C Cable Fast Charging Type C Data Cord 3Pack', category: 'phones-telecom', price: 1.99, originalPrice: 6.99, discount: 72, rating: 4.7, reviews: 8900, sold: 31500, image: img(19), badge: 'Choice', shipping: 'Free Shipping' },
  { id: 'p20', name: 'iPhone Phone Case Shockproof Transparent Clear', category: 'phones-telecom', price: 2.5, originalPrice: 8.99, discount: 72, rating: 4.6, reviews: 5200, sold: 21000, image: img(20) },
  { id: 'p21', name: 'Mechanical Gaming Keyboard RGB Backlit 87 Keys', category: 'computer-office', price: 23.99, originalPrice: 59.99, discount: 60, rating: 4.7, reviews: 2200, sold: 6100, image: img(21), badge: 'Choice' },
  { id: 'p22', name: 'Wireless Mouse Rechargeable Silent Computer', category: 'computer-office', price: 4.99, originalPrice: 14.99, discount: 67, rating: 4.6, reviews: 3400, sold: 12900, image: img(22), shipping: 'Free Shipping' },

  // Toys
  { id: 'p23', name: 'Building Blocks Compatible 1000+ Pcs Creative Set', category: 'toys-kids-babies', price: 12.99, originalPrice: 39.99, discount: 68, rating: 4.8, reviews: 2700, sold: 9800, image: img(23), badge: 'Choice' },
  { id: 'p24', name: 'RC Car Remote Control Stunt Vehicle 4WD', category: 'toys-kids-babies', price: 16.99, originalPrice: 49.99, discount: 66, rating: 4.5, reviews: 1500, sold: 4700, image: img(24), shipping: 'Free Shipping' },
  { id: 'p25', name: 'Mini Drone RC Quadcopter with Camera', category: 'toys-kids-babies', price: 24.99, originalPrice: 69.99, discount: 64, rating: 4.2, reviews: 690, sold: 2200, image: img(25) },

  // Outdoor
  { id: 'p26', name: 'Camping Tent 2 Person Waterproof Windproof', category: 'outdoor-sports', price: 32.99, originalPrice: 89.99, discount: 63, rating: 4.6, reviews: 1100, sold: 3100, image: img(26), badge: 'Choice' },
  { id: 'p27', name: 'Fishing Rod Carbon Fiber Full Set Kit', category: 'outdoor-sports', price: 21.99, originalPrice: 59.99, discount: 63, rating: 4.5, reviews: 760, sold: 2400, image: img(27), shipping: 'Free Shipping' },
  { id: 'p28', name: 'Resistance Bands Set Exercise Workout', category: 'outdoor-sports', price: 6.99, originalPrice: 19.99, discount: 65, rating: 4.7, reviews: 2900, sold: 11200, image: img(28) },
]

export function getProduct(id) {
  return products.find((p) => p.id === id)
}

export function getByCategory(slug) {
  return products.filter((p) => p.category === slug)
}
