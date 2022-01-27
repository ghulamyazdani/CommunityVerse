type front = {
  title: string;
  date: Date;
  excerpt: string;
  tag: string;
  cover_image: string;
  author: string;
};

export interface postInt {
  slug: string;
  frontmatter: front;
}
export interface postprop {
  post: postInt;
}

export interface slugProps {
  frontmatter: front;
  content: string;
  slug: string;
  resData: [];
}
