/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dmztdsduf/',
  },
}
