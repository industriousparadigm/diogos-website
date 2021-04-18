import { getPostBySlug, getAllPosts } from 'lib/posts-api';
import markdownToHtml from 'lib/markdown-to-html';

export default function Post({ post, morePosts, preview }) {
  // const router = useRouter()
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  return (
    <>
      <h1>{post.title}</h1>
      <article
        className="mb-32"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
