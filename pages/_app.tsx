import React, { Fragment } from 'react';
import Router from 'next/router';
import {wrapper} from '../store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// types
import type { AppProps } from 'next/app';

// global styles

import '../assets/css/bootstrap.min.css';
import '../assets/css/global.css';
import '../assets/css/style.css';

import * as gtag from './../utils/gtag';

const isProduction = process.env.NODE_ENV === 'production';

// only events on production
if(isProduction) {
  
  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);