export const sortByDate = (a: any, b: any) => {
    return (
        new Date(b.frontmatter.date).valueOf() -
        new Date(a.frontmatter.date).valueOf()
    )
}
