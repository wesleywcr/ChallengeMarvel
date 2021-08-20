import { useRouter } from 'next/router';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import md5 from 'md5';
import { GetStaticProps } from 'next';

const privateKey = '4fa4f7b92a414c18771f1dc235229d08898f11a2';
const publicKey = 'b4dd137f9d9be269c0b2cf814ade168a';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

export default function Details() {
  const { query } = useRouter();
  return (
    <>
      <Typography variant="h1" component="h2">
        Teste:{query.name}
      </Typography>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params;

  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  const data = await response.data.data.results;
  return {
    props: {},
  };
};
