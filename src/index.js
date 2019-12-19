import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { configureStore } from './redux/store';

import './assets/themify-icon/themify-icons.css';
import './assets/simple-line-icon/simple-line-icons.css';
import './assets/elagent/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/animate.css';
import './assets/animator.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';
import './assets/responsive.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-notifications/lib/notifications.css';

const loader = document.querySelector('#preloader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');


setTimeout(() =>
  // the show/hide functions are passed as props
  ReactDOM.render(
    <Provider store={configureStore()}>
      <App
        hideLoader={hideLoader}
        showLoader={showLoader}
        />
    </Provider>,
    document.getElementById('root')
  )
, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
