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

  const res = await fetch('http://localhost:3004/lists')
  const listas = await res.json(() => {
    const markdownWithMeta = listas.itens

    const { data:frontmatter } = matter(markdownWithMeta)
return {
  frontmatter
}
  })
 
  return {
    props: {
      lists: listas.sort(function(a,b) {return Number(new Date(a.dataCompra)) - Number(new Date(b.dataCompra));
      })
    },
  }
}

// export async function getStaticPaths() {
//   const idList = await fetchAllIds();
//   const paths = [
//   ];
//   idList.forEach((id) => {paths.push(`/gunluk/${id}`)})
//   return { paths, fallback: true };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;

//  try {
//     const data= await fetchGunluk(slug);
//     return data? { props: { data} } : { notFound: true };
//   } catch (error) {
//     console.error(error);
//     return { notFound: true };
//   }

// }
