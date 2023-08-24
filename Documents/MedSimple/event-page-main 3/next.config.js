/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  async rewrites () {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        {
          source: '/aulas/:path*',
          destination: '/lessons/:path*', 
        },
        {
          source: '/aula/:path*',
          destination: '/lessons/:path*', 
        },
        {
          source: '/plataforma-medsimple',
          destination: '/sales', 
        },
        {
          source: '/conheca',
          destination: '/known', 
        }
      ]
    }
  },

  async redirects () {
    return [
      {
        source: '/',
        destination: '/aula/o-jeito-errado-de-estudar',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
