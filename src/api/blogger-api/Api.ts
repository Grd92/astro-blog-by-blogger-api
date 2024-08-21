import type { Post } from "./model/Post";

export default class BloggerAPI {
  private readonly baseUrl: string = 'https://www.googleapis.com/blogger/v3/blogs'

  constructor(private readonly apiKey: string) {}


  public async getTotalEntries(blogId: string) {
    const url = new URL(`${this.baseUrl}/${blogId}`);
      url.searchParams.append('key', this.apiKey);
      url.searchParams.append('fields', 'posts(totalItems)');

      console.log( url )

    try {
      const response = await fetch(url.toString());

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener el total de entradas del blog:', error);
      return { posts: { totalItems: 0 } };
    }
  }

  public async getEntries(blogId: string, pageToken?: string, maxResults?: number) {
    if (maxResults === undefined) maxResults = 10

    const url = new URL(`${this.baseUrl}/${blogId}/posts`);
      url.searchParams.append('key', this.apiKey);
      url.searchParams.append('maxResults', maxResults.toString());
      url.searchParams.append('fields', 'items(id,title,url,published,labels),nextPageToken');
    
    if (pageToken) url.searchParams.append('pageToken', pageToken);

    try {
      const response = await fetch(url.toString());

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();

      return {
        items: data?.items 
        ? data.items.map((item: any) => ({
          id: item.id,
          title: item.title,
          url: item.url,
          published: item.published,
          labels: item.labels,
        }))
        : [],
        nextPageToken: data.nextPageToken
      };
    } catch (error) {
      console.error('Error al obtener las entradas del blog:', error);
      return { items: [], nextPageToken: undefined, error: {
        err: error?.toString()
       } };
    }
  }

  public async getEntry(blogId: string, postId: string) {
    const url = new URL(`${this.baseUrl}/${blogId}/posts/${postId}`);
    url.searchParams.append('key', this.apiKey);

    try {
      const response = await fetch(url.toString());

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      return await response.json();
    } catch (error) {
      console.error('Error al obtener la entrada del blog:', error);
      return null;
    }
  }

  public async getEntryByPath(blogId: string, path: string) {
    const url = new URL(`${this.baseUrl}/${blogId}/posts/bypath`);

    url.searchParams.append('key', this.apiKey);
    url.searchParams.append('path', path);

    try {
      const response = await fetch(url.toString());

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      return await response.json() as Post
    } catch (error) {
      console.error('Error al obtener la entrada del blog:', error);
      // new Error('not post founded')
      return { title: 'Error! Post not found.', content: '' }
    }
  }
}