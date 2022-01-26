type front = {
  title: string;
  date: Date;
  excerpt: string;
  cover_image: string;
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
}
