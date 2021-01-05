
export type TransformToNewsPost = <T>(input: T) => NewsPost;

export interface NewsPost {
  id: string;
  title: string;
  publicationDate: string;
  link: string;
}
