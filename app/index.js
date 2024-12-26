// pages/index.js

export async function getStaticProps() {
  try {
  console.log("static props called")
    const res = await fetch(process.env.HOSTNAME+'/api/v1/catalog');
    const data = await res.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: { data: null }, // Or provide fallback data
    };
  }
}