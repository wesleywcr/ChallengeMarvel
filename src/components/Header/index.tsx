/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: '#e23636',
      color: '#f2f2f2',
    },
    link: {
      color: '#fff',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
  })
);

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            <Link href={'/'}>
              <span>MARVEL</span>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
