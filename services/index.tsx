export const submitComment = async (obj: any) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })

    return result.json()
}

export const getLike = async (slug: any) => {
    const res = await fetch(`/api/likes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const resData = await res.json()
    const likes = resData.filter((element: any) => {
        if (element.slug === slug) {
            return element
        }
    })

    if (likes.length > 0) {
        return likes[0].likes
    } else {
        postLikes({ slug: slug, likes: 0 })
        return 0
    }
}

export const postLikes = async (obj: any) => {
    const result = await fetch('/api/likes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })

    return result.json()
}

export const putLikes = async (obj: any) => {
    const result = await fetch('/api/likes', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
}

export const postMentors = async (obj: any) => {
    const result = await fetch('/api/mentors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
}
