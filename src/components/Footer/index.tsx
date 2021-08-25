import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#3f3e3e',
    padding: 6,
  },
});
export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="h5" align="center" gutterBottom>
          Projeto Marvel
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Tudo sobre o mundo Marvel você encontra aqui!
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © 2021'}
        </Typography>
      </footer>
    </>
  );
}
