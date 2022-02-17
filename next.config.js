/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})
;(module.exports = nextConfig),
    withMDX({
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    })
