import type { Author } from "./Author";
import type { Blog } from "./Blog";
import type { Replies } from "./Replies";

export interface Post {
    kind: string;
    id: string;
    blog: Blog;
    published: string;
    updated: string;
    url: string;
    selfLink: string;
    title: string;
    content: string;
    author: Author;
    replies: Replies;
    etag: string;
}
