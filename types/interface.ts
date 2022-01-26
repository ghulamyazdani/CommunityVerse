export interface postInt {
  frontmatter: {
    title: string;
    date: Date;
    excerpt: string;
    cover_image: string;
  };
}
export interface postprop {
  post: postInt;
}
