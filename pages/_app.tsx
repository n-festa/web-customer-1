import React, { Fragment } from 'react';
import Router from 'next/router';
import {wrapper} from '../store';

// types
import type { AppProps } from 'next/app';

//import 'bootstrap/dist/css/bootstrap.css';
// global styles
//import 'react-rater/lib/react-rater.css';
import 'swiper/swiper.scss';
import 'rc-slider/assets/index.css';
//import '../public/css/index.css';
//import '../public/css/global.css';
import '../assets/v2.css';
import '../assets/v1.scss';
//import * as gtag from './../utils/gtag';

const isProduction = process.env.NODE_ENV === 'production';

// only events on production
/*
if(isProduction) {
  
  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url));
}
*/
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);