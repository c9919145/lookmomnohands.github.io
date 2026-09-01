const img = (seed, bg, label, sub) =>
  `https://placehold.co/400x400/${bg}/ffffff?text=${encodeURIComponent(label)}`

export const products = [
  // Electronics
  { id: 'p1', name: 'Wireless Bluetooth Headphones Noise Cancelling Over-Ear', category: 'consumer-electronics', price: 8.99, originalPrice: 25.99, discount: 65, rating: 4.7, reviews: 3200, sold: 12400, image: img('h1', '3b3b3b', 'Headphones', 'Noise Cancelling'), badge: 'Choice', shipping: 'Free Shipping' },
  { id: 'p2', name: 'Wireless Earbuds Bluetooth 5.3 with Charging Case', category: 'consumer-electronics', price: 6.5, originalPrice: 18.0, discount: 64, rating: 4.6, reviews: 2100, sold: 8900, image: img('e1', '1f6f8b', 'Earbuds', 'Bluetooth 5.3'), badge: 'Choice' },
  { id: 'p3', name: 'Bluetooth Speaker Portable Waterproof Mini', category: 'consumer-electronics', price: 9.99, originalPrice: 22.99, discount: 57, rating: 4.5, reviews: 980, sold: 4100, image: img('s1', '6d28d9', 'Speaker', 'Portable'), shipping: 'Free Shipping' },
  { id: 'p4', name: 'Smart Watch Fitness Tracker Heart Rate Monitor', category: 'consumer-electronics', price: 12.5, originalPrice: 39.99, discount: 69, rating: 4.4, reviews: 1500, sold: 5300, image: img('w1', '065f46', 'Smart Watch', 'Fitness'), badge: 'Choice' },
  { id: 'p5', name: '1080P Mini Action Camera Sports Waterproof', category: 'consumer-electronics', price: 19.99, originalPrice: 49.99, discount: 60, rating: 4.3, reviews: 640, sold: 2200, image: img('c1', '7c2d12', 'Action Cam', '1080P') },

  // Fashion
  { id: 'p6', name: "Women's Summer Floral Dress Casual Beach", category: 'womens-fashion', price: 9.2, originalPrice: 28.99, discount: 68, rating: 4.5, reviews: 1200, sold: 5100, image: img('d1', 'db2777', 'Floral Dress', 'Summer'), shipping: 'Free Shipping' },
  { id: 'p7', name: 'Women Sexy Lace Sleeveless Bodycon Midi Dress', category: 'womens-fashion', price: 7.8, originalPrice: 21.99, discount: 65, rating: 4.4, reviews: 870, sold: 3600, image: img('d2', '9d174d', 'Bodycon', 'Midi') },
  { id: 'p8', name: 'Men Casual Slim Fit Cotton Shirt Long Sleeve', category: 'mens-fashion', price: 8.5, originalPrice: 24.99, discount: 66, rating: 4.6, reviews: 1100, sold: 4700, image: img('sh1', '1e3a8a', 'Men Shirt', 'Casual'), badge: 'Choice' },
  { id: 'p9', name: 'Men Slim Fit Oversized T-Shirt Fashion Street', category: 'mens-fashion', price: 4.25, originalPrice: 12.99, discount: 67, rating: 4.5, reviews: 2600, sold: 9800, image: img('tsh', '111827', 'T-Shirt', 'Slim Fit'), shipping: 'Free Shipping' },

  // Jewelry & Watches
  { id: 'p10', name: "Men's Classic Leather Watch Waterproof Analog", category: 'jewelry-watches', price: 14.5, originalPrice: 45.0, discount: 68, rating: 4.7, reviews: 1750, sold: 6900, image: img('lw', '57534e', 'Leather Watch', 'Classic'), badge: 'Choice' },
  { id: 'p11', name: 'Stainless Steel Gold Chain Necklace Men', category: 'jewelry-watches', price: 3.99, originalPrice: 12.99, discount: 69, rating: 4.6, reviews: 2200, sold: 8400, image: img('gold', 'b45309', 'Gold Chain', 'Necklace'), shipping: 'Free Shipping' },
  { id: 'p12', name: '925 Sterling Silver Value Pack Ring Set', category: 'jewelry-watches', price: 5.2, originalPrice: 16.99, discount: 69, rating: 4.4, reviews: 940, sold: 3100, image: img('ring', '4b5563', 'Ring Set', 'Silver') },

  // Home
  { id: 'p13', name: 'Smart Home LED Strip Lights RGB 5050 Remote', category: 'home-pet-appliances', price: 4.99, originalPrice: 15.99, discount: 69, rating: 4.8, reviews: 4100, sold: 16200, image: img('led', '7c3aed', 'LED Strip', 'RGB'), badge: 'Choice', shipping: 'Free Shipping' },
  { id: 'p14', name: 'Robot Vacuum Cleaner Smart Home Automatic', category: 'home-pet-appliances', price: 89.99, originalPrice: 249.99, discount: 64, rating: 4.3, reviews: 320, sold: 980, image: img('vac', '334155', 'Robot Vacuum', 'Smart') },
  { id: 'p15', name: 'Aromatherapy Essential Oil Diffuser 500ML', category: 'home-pet-appliances', price: 7.5, originalPrice: 23.99, discount: 69, rating: 4.6, reviews: 1500, sold: 5200, image: img('diff', '0e7490', 'Diffuser', '500ML'), shipping: 'Free Shipping' },

  // Bags & Shoes
  { id: 'p16', name: "Women's Handbag PU Leather Crossbody Tote", category: 'bags-shoes', price: 11.99, originalPrice: 34.99, discount: 66, rating: 4.5, reviews: 860, sold: 2800, image: img('bag', '92400e', 'Handbag', 'Crossbody'), badge: 'Choice' },
  { id: 'p17', name: 'Running Shoes Men Breathable Lightweight Sneakers', category: 'bags-shoes', price: 18.99, originalPrice: 55.0, discount: 65, rating: 4.4, reviews: 1900, sold: 7300, image: img('snk', 'dc2626', 'Running', 'Shoes'), shipping: 'Free Shipping' },
  { id: 'p18', name: 'Casual Canvas Backpack Laptop Travel Rucksack', category: 'bags-shoes', price: 9.99, originalPrice: 29.99, discount: 67, rating: 4.6, reviews: 1300, sold: 4900, image: img('back', '166534', 'Backpack', 'Canvas') },

  // Phone & Computer
  { id: 'p19', name: 'USB C Cable Fast Charging Type C Data Cord 3Pack', category: 'phones-telecom', price: 1.99, originalPrice: 6.99, discount: 72, rating: 4.7, reviews: 8900, sold: 31500, image: img('usbc', '0369a1', 'USB C', '3Pack'), badge: 'Choice', shipping: 'Free Shipping' },
  { id: 'p20', name: 'iPhone Phone Case Shockproof Transparent Clear', category: 'phones-telecom', price: 2.5, originalPrice: 8.99, discount: 72, rating: 4.6, reviews: 5200, sold: 21000, image: img('case', '0f172a', 'Phone Case', 'Clear') },
  { id: 'p21', name: 'Mechanical Gaming Keyboard RGB Backlit 87 Keys', category: 'computer-office', price: 23.99, originalPrice: 59.99, discount: 60, rating: 4.7, reviews: 2200, sold: 6100, image: img('kb', '4c1d95', 'Keyboard', 'Gaming'), badge: 'Choice' },
  { id: 'p22', name: 'Wireless Mouse Rechargeable Silent Computer', category: 'computer-office', price: 4.99, originalPrice: 14.99, discount: 67, rating: 4.6, reviews: 3400, sold: 12900, image: img('ms', '0891b2', 'Mouse', 'Wireless'), shipping: 'Free Shipping' },

  // Toys
  { id: 'p23', name: 'Building Blocks Compatible 1000+ Pcs Creative Set', category: 'toys-kids-babies', price: 12.99, originalPrice: 39.99, discount: 68, rating: 4.8, reviews: 2700, sold: 9800, image: img('blocks', 'f59e0b', 'Building', 'Blocks'), badge: 'Choice' },
  { id: 'p24', name: 'RC Car Remote Control Stunt Vehicle 4WD', category: 'toys-kids-babies', price: 16.99, originalPrice: 49.99, discount: 66, rating: 4.5, reviews: 1500, sold: 4700, image: img('rc', '059669', 'RC Car', '4WD'), shipping: 'Free Shipping' },
  { id: 'p25', name: 'Mini Drone RC Quadcopter with Camera', category: 'toys-kids-babies', price: 24.99, originalPrice: 69.99, discount: 64, rating: 4.2, reviews: 690, sold: 2200, image: img('drone', '1d4ed8', 'Mini Drone', 'Camera') },

  // Outdoor
  { id: 'p26', name: 'Camping Tent 2 Person Waterproof Windproof', category: 'outdoor-sports', price: 32.99, originalPrice: 89.99, discount: 63, rating: 4.6, reviews: 1100, sold: 3100, image: img('tent', '15803d', 'Camping', 'Tent'), badge: 'Choice' },
  { id: 'p27', name: 'Fishing Rod Carbon Fiber Full Set Kit', category: 'outdoor-sports', price: 21.99, originalPrice: 59.99, discount: 63, rating: 4.5, reviews: 760, sold: 2400, image: img('rod', '0c4a6e', 'Fishing', 'Rod'), shipping: 'Free Shipping' },
  { id: 'p28', name: 'Resistance Bands Set Exercise Workout', category: 'outdoor-sports', price: 6.99, originalPrice: 19.99, discount: 65, rating: 4.7, reviews: 2900, sold: 11200, image: img('bands', 'a21caf', 'Resistance', 'Bands') },
]

export function getProduct(id) {
  return products.find((p) => p.id === id)
}

export function getByCategory(slug) {
  return products.filter((p) => p.category === slug)
}
