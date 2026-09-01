import { mkdirSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const meta = [
  { id: 'p1', label: 'Headphones', icon: '🎧', c1: '#1e293b', c2: '#0f172a', iconColor: '#ffffff' },
  { id: 'p2', label: 'Earbuds', icon: '🎧', c1: '#1f6f8b', c2: '#0b3d4f', iconColor: '#ffffff' },
  { id: 'p3', label: 'Speaker', icon: '🔊', c1: '#6d28d9', c2: '#3b0764', iconColor: '#ffffff' },
  { id: 'p4', label: 'Smart Watch', icon: '⌚', c1: '#065f46', c2: '#022c22', iconColor: '#ffffff' },
  { id: 'p5', label: 'Action Camera', icon: '📷', c1: '#7c2d12', c2: '#431407', iconColor: '#ffffff' },
  { id: 'p6', label: 'Floral Dress', icon: '👗', c1: '#db2777', c2: '#831843', iconColor: '#ffffff' },
  { id: 'p7', label: 'Midi Dress', icon: '👗', c1: '#9d174d', c2: '#500724', iconColor: '#ffffff' },
  { id: 'p8', label: 'Casual Shirt', icon: '👔', c1: '#1e3a8a', c2: '#172554', iconColor: '#ffffff' },
  { id: 'p9', label: 'T-Shirt', icon: '👕', c1: '#111827', c2: '#030712', iconColor: '#ffffff' },
  { id: 'p10', label: 'Leather Watch', icon: '⌚', c1: '#57534e', c2: '#292524', iconColor: '#ffffff' },
  { id: 'p11', label: 'Gold Chain', icon: '📿', c1: '#b45309', c2: '#713f12', iconColor: '#ffffff' },
  { id: 'p12', label: 'Ring Set', icon: '💍', c1: '#4b5563', c2: '#1f2937', iconColor: '#ffffff' },
  { id: 'p13', label: 'LED Strip', icon: '💡', c1: '#7c3aed', c2: '#4c1d95', iconColor: '#ffffff' },
  { id: 'p14', label: 'Robot Vacuum', icon: '🤖', c1: '#334155', c2: '#0f172a', iconColor: '#ffffff' },
  { id: 'p15', label: 'Diffuser', icon: '🌿', c1: '#0e7490', c2: '#164e63', iconColor: '#ffffff' },
  { id: 'p16', label: 'Handbag', icon: '👜', c1: '#92400e', c2: '#451a03', iconColor: '#ffffff' },
  { id: 'p17', label: 'Running Shoes', icon: '👟', c1: '#dc2626', c2: '#7f1d1d', iconColor: '#ffffff' },
  { id: 'p18', label: 'Backpack', icon: '🎒', c1: '#166534', c2: '#14532d', iconColor: '#ffffff' },
  { id: 'p19', label: 'USB C Cable', icon: '🔌', c1: '#0369a1', c2: '#082f49', iconColor: '#ffffff' },
  { id: 'p20', label: 'Phone Case', icon: '📱', c1: '#0f172a', c2: '#020617', iconColor: '#ffffff' },
  { id: 'p21', label: 'Gaming Keyboard', icon: '⌨️', c1: '#4c1d95', c2: '#2e1065', iconColor: '#ffffff' },
  { id: 'p22', label: 'Wireless Mouse', icon: '🖱️', c1: '#0891b2', c2: '#164e63', iconColor: '#ffffff' },
  { id: 'p23', label: 'Building Blocks', icon: '🧱', c1: '#f59e0b', c2: '#b45309', iconColor: '#ffffff' },
  { id: 'p24', label: 'RC Car', icon: '🚗', c1: '#059669', c2: '#064e3b', iconColor: '#ffffff' },
  { id: 'p25', label: 'Mini Drone', icon: '🚁', c1: '#1d4ed8', c2: '#172554', iconColor: '#ffffff' },
  { id: 'p26', label: 'Camping Tent', icon: '⛺', c1: '#15803d', c2: '#14532d', iconColor: '#ffffff' },
  { id: 'p27', label: 'Fishing Rod', icon: '🎣', c1: '#0c4a6e', c2: '#082f49', iconColor: '#ffffff' },
  { id: 'p28', label: 'Resistance Bands', icon: '🏋️', c1: '#a21caf', c2: '#701a75', iconColor: '#ffffff' },
]

const outDir = join(__dirname, '../src/assets/products')
mkdirSync(outDir, { recursive: true })

function svg(m) {
  const label = m.label.toUpperCase().replace(/&/g, '&amp;')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${m.c1}"/>
      <stop offset="100%" stop-color="${m.c2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="400" fill="url(#bg)"/>
  <rect width="400" height="400" fill="url(#glow)"/>
  <circle cx="200" cy="180" r="105" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>
  <text x="200" y="215" font-size="120" text-anchor="middle" dominant-baseline="middle">${m.icon}</text>
  <text x="200" y="330" font-size="32" font-family="Arial, Helvetica, sans-serif" font-weight="bold" text-anchor="middle" fill="${m.iconColor}" letter-spacing="2">${label}</text>
  <text x="200" y="366" font-size="18" font-family="Arial, Helvetica, sans-serif" text-anchor="middle" fill="${m.iconColor}" fill-opacity="0.7" letter-spacing="1">ALIEXPRESS US</text>
</svg>
`
}

meta.forEach((m) => {
  writeFileSync(join(outDir, `${m.id}.svg`), svg(m))
  console.log('wrote', `${m.id}.svg`)
})
console.log('Done:', meta.length, 'images')
