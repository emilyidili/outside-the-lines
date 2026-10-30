// Generates products.json from content/site.json so Snipcart can check prices.
// Runs on every Netlify deploy (see netlify.toml). Safe to run by hand: node build-products.js
const fs = require('fs');
const slug = x => String(x == null ? '' : x).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const site = JSON.parse(fs.readFileSync('content/site.json', 'utf8'));
const base = (process.env.URL || 'https://outsidethelines.uk').replace(/\/$/, '');
const out = [];
(site.types || []).forEach(t => (t.shapes || []).forEach(s => (s.sizes || []).forEach(z => {
  out.push({ id: slug(t.key) + '--' + slug(s.id) + '--' + slug(z.label), price: Number(z.price) || 0, url: '/products.json' });
})));
fs.writeFileSync('products.json', JSON.stringify(out, null, 2) + '\n');
console.log('products.json: ' + out.length + ' products');
