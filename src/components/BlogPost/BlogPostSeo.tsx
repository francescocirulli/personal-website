import { ArticleJsonLd, NextSeo } from 'next-seo'
import { Post } from 'contentlayer/generated'

const BlogPostSeo = ({ post }: { post: Post }) => {
  const { slug, title, excerpt, date } = post
  const publishedTime = new Date(date).toISOString()
  const url = `https://frank.lol/posts/${slug}`

  return (
    <>
      <NextSeo
        title={`${title} – frank`}
        description={excerpt}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime,
          },
          url,
          title,
          description: excerpt,
          images: post.image
            ? [
                {
                  url: `https://frank.lol/static/images/${post.slug}/${post.image}`,
                },
              ]
            : [],
        }}
      />
      <ArticleJsonLd
        authorName="frank"
        dateModified={date}
        datePublished={date}
        description={excerpt}
        publisherName="frank"
        title={title}
        url={url}
        images={[]}
        publisherLogo=""
      />
    </>
  )
}

export default BlogPostSeo
