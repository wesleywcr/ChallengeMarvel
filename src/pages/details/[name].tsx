import { useRouter } from 'next/router';
import axios from 'axios';
import md5 from 'md5';
import { Typography, CardMedia, Container, Card } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const useStyles = makeStyles({
  root: {
    backgroundColor: '#3f3e3e',
    color: '#f2f2f2',
  },
  customTitle: {
    color: '#f2f2f2',
    font: 'bold',
  },
  customP: {
    color: '#f2f2f2',
    margin: '1rem',
    marginBottom: '2rem',
  },
  media: {
    height: 140,
  },
  heroContent: {
    backgroundColor: '#e23636',
  },
  card: {
    margin: '2rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
});

export default function Details({ characters }) {
  const classes = useStyles();
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className={classes.root}>
      <Header />
      {characters.map((characters) => {
        return (
          <div className={classes.heroContent} key={characters.id}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
                className={classes.customTitle}
              >
                {characters.name}
              </Typography>
              <Typography
                variant="h5"
                align="justify"
                color="textSecondary"
                paragraph
                className={classes.customP}
              >
                {characters.description}
              </Typography>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
                  title="Image title"
                />
              </Card>
              <Typography
                variant="h5"
                align="center"
                paragraph
                className={classes.customTitle}
              >
                Histórias em quadrinhos:
              </Typography>
              <Typography
                variant="h5"
                align="justify"
                paragraph
                className={classes.customP}
              >
                {characters.comics['items'][0]['name']}
              </Typography>
              <Typography
                variant="h5"
                align="center"
                paragraph
                className={classes.customTitle}
              >
                Series:
              </Typography>
              <Typography
                variant="h5"
                align="center"
                paragraph
                className={classes.customP}
              >
                {characters.stories['items'][0]['name']}
              </Typography>
            </Container>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await axios.get(
    `http://gateway.marvel.com/v1/public/characters/${params.name}?ts=${ts}&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`
  );
  const data = await response.data.data.results;
  return {
    props: {
      characters: data,
    },
    //
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          name: '1011334',
        },
      },
      {
        params: {
          name: '1017100',
        },
      },
      {
        params: {
          name: '1009144',
        },
      },
      {
        params: {
          name: '1010699',
        },
      },
      {
        params: {
          name: '1009146',
        },
      },
      {
        params: {
          name: '1016823',
        },
      },
      {
        params: {
          name: '1009148',
        },
      },
      {
        params: {
          name: '1009149',
        },
      },
      {
        params: {
          name: '1010903',
        },
      },
      {
        params: {
          name: '1011266',
        },
      },
      {
        params: {
          name: '1010354',
        },
      },
      {
        params: {
          name: '1010846',
        },
      },
      {
        params: {
          name: '1012717',
        },
      },
      {
        params: {
          name: '1011297',
        },
      },
      {
        params: {
          name: '1011031',
        },
      },
      {
        params: {
          name: '1009150',
        },
      },
    ],
    fallback: false,
  };
}
