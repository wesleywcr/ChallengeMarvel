import axios from 'axios';
import md5 from 'md5';
import { GetStaticProps } from 'next';

import Header from '../components/Header';
import Image from 'next/image';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import ComponentCard from '../components/Card';

const privateKey = '4fa4f7b92a414c18771f1dc235229d08898f11a2';
const publicKey = 'b4dd137f9d9be269c0b2cf814ade168a';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

export default function Home({ characters }) {
  return (
    <Container>
      <Header />
      <Typography variant="h1" component="h2" style={{ margin: 50 }}>
        Personagens
      </Typography>

      {console.log(characters.name)}
      <Grid container spacing={1}>
        {characters?.map((characters) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={characters.id}>
              <ComponentCard
                imagepath={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
                title={characters.name}
                description={characters.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  const data = await response.data.data.results;
  return {
    props: {
      characters: data,
    },
    revalidate: 10,
  };
};
