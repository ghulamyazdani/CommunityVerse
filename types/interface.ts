type front = {
    title: string
    date: Date
    excerpt: string
    tag: string
    cover_image: string
    author: string
}

export interface postInt {
    slug: string
    frontmatter: front
}
export interface postprop {
    post: postInt
}

export interface slugProps {
    posts: []
    frontmatter: front
    content: string
    slug: string
    resData: []
}
export interface Related {
    posts: []
    slug: string
    tag: string
}

export interface Mentor {
    name: string
    position: string
    description: string
    image: string
}
