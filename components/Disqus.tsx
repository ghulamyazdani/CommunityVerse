import { DiscussionEmbed } from 'disqus-react'
const DisqusComments = ({ title, slug }: any) => {
    console.log(title, slug)
    const disqusShortname = 'communityblogs'
    const disqusConfig = {
        url: `http://localhost:3000`,
        identifier: slug, // Single post id
        title: title, // Single post title
    }
    return (
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    )
}
export default DisqusComments
// import {DiscussionEmbed} from "disqus-react"

// const Comments = () => {
//   const disqusShortname = "Demo-GfG"

//   const disqusConfig = {
//     url: "http://localhost:3000",
//     identifier:'123',
//     title: "Demo Post"
//   }

//   return (
//     <div>
//       <DiscussionEmbed
//         shortname={disqusShortname}
//         config={disqusConfig}
//       />
//     </div>
//   )
// }

// export default Comments;
