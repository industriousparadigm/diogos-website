import { getAllPosts } from 'lib/posts-api';
import Link from 'next/link';
import styled from 'styled-components';

export default function Blog({ allPosts }) {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <ImageWrapper>
              <Image src={post.coverImage} />
            </ImageWrapper>
            <Link href={`/blog/${post.slug}`}>
              <h4>{post.title}</h4>
            </Link>
            <br />
            <time dateTime={post.date}>
              {new Date(post.date).toDateString().split(' ').slice(1).join(' ')}
            </time>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allPosts }
  };
}

const ImageWrapper = styled.div`
  object-fit: contain;
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
