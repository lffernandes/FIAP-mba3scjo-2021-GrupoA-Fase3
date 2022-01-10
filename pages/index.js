import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import List from '../components/List';
import styled from 'styled-components';


const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

export default function Home({ lists }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
  
     <div className='lists'>
       {lists.map(( list, index) => (
         <List key={index} list={list}/>
       ))}
     </div>
</div>
  )
}

export async function getStaticProps() {

  const files = fs.readdirSync(path.join('lists'))

  const lists = files.map((filename) => {

    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('lists', filename),
      'utf-8'
    )

    const { data:frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })
  return {
    props: {
      lists: lists.sort(),
    },
  }
}