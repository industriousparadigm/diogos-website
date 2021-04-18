import RowSeparator from 'components/RowSeparator';
import Spacer from 'components/Spacer';
import { getAllPosts } from 'lib/posts-api';
import Link from 'next/link';
import styled from 'styled-components';

export default function Blog({ allPosts }) {
  return (
    <ul>
      {allPosts.map((post, index) => (
        <li key={post.slug}>
          <ImageWrapper>
            <Image src={post.coverImage} />
          </ImageWrapper>
          <h3>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          {/* <time dateTime={post.date}>
              {new Date(post.date).toDateString().split(' ').slice(1).join(' ')}
            </time> */}
          <p>{post.excerpt}</p>
          {index !== allPosts.length - 1 && (
            <>
              <Spacer size={12} />
              <RowSeparator width="50" />
              <Spacer size={24} />
            </>
          )}
        </li>
      ))}
    </ul>
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
