import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ title, slug }: any) => {
  const disqusShortname = "your-disqus-shortname";
  const disqusConfig = {
    url: `communityblogs.disqus.com`,
    identifier: slug, // Single post id
    title: title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
