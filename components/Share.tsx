import React from 'react'
import IconTwitter from './Icons/twitter'
import IconFacebook from './Icons/Facebook'
import IconLinkedin from './Icons/Linkedin'
import IconWhatsapp from './Icons/Whatsapp'
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
} from 'react-share'
export default function share({ slug }: any): JSX.Element {
    return (
        <div className="share lg:sticky top-0 lg:top-28 relative flex flex-col mr-2 mt-16">
            <p className="text-center share-text">Share this</p>
            <TwitterShareButton
                title={slug}
                url={'http://community-blog.vercel.app/blog/' + slug}
                hashtags={[slug]}
                className="Demo__some-network__share-button"
            >
                <IconTwitter className="h-10 w-10 mx-auto m-2 hover:text-[#1DA1F2]" />
            </TwitterShareButton>
            <LinkedinShareButton
                title={slug}
                url={'http://community-blog.vercel.app/blog/' + slug}
                className="Demo__some-network__share-button"
            >
                <IconLinkedin className="h-10 w-10 mx-auto m-2 hover:text-[#006192]" />
            </LinkedinShareButton>
            <FacebookShareButton
                url={'http://community-blog.vercel.app/blog/' + slug}
                quote={'フェイスブックはタイトルが付けれるようです'}
                hashtag={'#' + slug}
                className="Demo__some-network__share-button"
            >
                <IconFacebook className="h-10 w-10 mx-auto m-2 hover:text-[#3b5998]" />
            </FacebookShareButton>
            <WhatsappShareButton
                url={'http://community-blog.vercel.app/blog/' + slug}
                className="Demo__some-network__share-button"
            >
                <IconWhatsapp className="h-10 w-10 mx-auto m-2 hover:text-[#25D366]" />
            </WhatsappShareButton>
        </div>
    )
}
