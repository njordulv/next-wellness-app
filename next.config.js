/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  images: {
    domains: ['dummyimage.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    config.resolve.alias['@Components'] = path.join(
      __dirname,
      './src/app/components'
    )
    config.resolve.alias['@Store'] = path.join(__dirname, './src/app/lib/redux')
    config.resolve.alias['@Styles'] = path.join(__dirname, './src/app/styles')
    config.resolve.alias['@Data'] = path.join(__dirname, './src/app/data')
    config.resolve.alias['@App'] = path.join(__dirname, './src/app')

    return config
  },
}
