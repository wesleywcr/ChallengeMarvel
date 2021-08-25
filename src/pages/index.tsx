import axios from 'axios';
import md5 from 'md5';
import { GetStaticProps } from 'next';

import Header from '../components/Header';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import ComponentCard from '../components/Card';
import Footer from '../components/Footer';

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

export default function Home({ characters }) {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h1" component="h2" style={{ margin: 50 }}>
          Personagens
        </Typography>

        <Grid container spacing={1}>
          {characters?.map((characters) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={characters.id}>
                <ComponentCard
                  imagepath={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
                  title={characters.name}
                  description={characters.description}
                  id={characters.id}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/characters?limit=100&ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`
  );
  const data = await response.data.data.results;
  return {
    props: {
      characters: data,
    },
    revalidate: 1000,
  };
};
