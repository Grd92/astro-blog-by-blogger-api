# Astro Blog (by Blogger Api - Google)

```sh
npm i astro-blog-by-blogger-api@latest
```

Environment development:

| Node.JS | Npm	    |
|---------|---------|
| v22.6.0 | 10.8.2  |

## 🪧 Project Info

Astro Blog (by Blogger Api - Google) It is a project created to display posts from the website https://www.blogger.com in an easy and simple way in our website built with Astro.build, allowing us to have a dynamic and simple blog on our website.

The integration is easy and simple, consequently having a static website with a fully dynamic blog part.

## 🚩 How to implement Astro Blog (by Blogger Api - Google) ?

You must add the following keys to your `.env` configuration file

```sh
GOOGLE_API_KEY=******************************
GOOGLE_DEFAULT_PAGE_LENGHT=4
GOOGLE_BLOG_ID=******************************
SLOGAN_BLOG=Slogan of Blog
```

Details

GOOGLE_API_KEY -> Api key of Google Cloud Console for Blogger api access
GOOGLE_DEFAULT_PAGE_LENGHT -> Number that indicate amount of items should be show in list
GOOGLE_BLOG_ID -> Blog ID to show posts
SLOGAN_BLOG -> Text to display on the posts listing page

### How the post details page works ?

The Post will be displayed by loading the post through its url, if the blogger post display page is:
`https://mycustomblog.blogspot.com/2023/11/other-entry.html`

the part `/2023/11/other-entry.html` will be taken to load it, giving as a link on your website made with astro.build with the following url:
`https://my-astro-web.com/blog/post/2023/11/other-entry.html`

### Steps to use
1. Create api key for access to Blogger Api
2. Import Astro Blog (by Blogger Api - Google) inside your https://astro.build project
3. Import variables into your `.env` file
4. Config `output: "hybrid"` render in `astro.config.mjs`
5. Create pages for `/blog` (based in the sample) and import components

## 🚀 Project Structure

Inside of Astro Blog (by Blogger Api - Google), you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── api/
│       └── blogger-api/
│           └── Api.ts
│           └── model/
│               └── Author.ts
│               └── Blog.ts
│               └── Image.ts
│               └── Post.ts
│               └── Replies.ts
│   └── components/
│       └── blogger/
│           └── BlogList.astro
│           └── BlogPost.astro
│           └── build-blog.css
│   └── pages/
│       └── index.astro
│       └── post/
│           └── [...path].astro
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

In the `src/components/` folder we find the components that should be used in our Astro site, that is, the components that will be imported and used.

In the `src/pages/` folder we will find an example of how we should mount the blog in our website, that is to say how the components should be used to display the posts, it is important to follow the example, we could say that the content of `src/pages/` should go inside your `src/pages/blog` folder.

The project makes use of taildwind as a development dependency, it is thought so that the project where it is imported also makes use of tailwind, so that they are displayed correctly do not forget to add the following configuration line:

`'./node_modules/astro-blog-by-blogger-api/**/*.astro'` in the file
`tailwind.config.mjs`.

Result file as this `tailwind.config.mjs`:

```
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/astro-blog-by-blogger-api/**/*.astro'
	],
	theme: {
		extend: {},
	},
	plugins: [],
}

```

If you want to apply your own css styles you can use the built-in classes in the html
```
.blog
#blog-container-title
#blog-container-list
.blog-list-item
```

Translated with DeepL.com (free version)

## 🙋‍♂️🙋‍♀️ Contribute

If you find bugs in the code, want to improve the components or even would like to improve them to add new features, you are definitely welcome to create a Pull Request to improve Astro Blog (by Blogger Api).

As I would like to eventually be able to include a post search engine, filtering by tags and custom themes for data visualization. Thank you very much.

## 👀 Do you have any questions or would you like to talk to me?

Do not hesitate to contact me with any questions you may have at [twitter](https://x.com/GRD_92).