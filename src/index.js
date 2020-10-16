import React from 'react';      // точка входа в библиотеку реакт
import ReactDOM from 'react-dom';     // подключается только в index.js он нужен для работы с DOM

import App from './App';  // он вставлен ниже в <App />


ReactDOM.render(         // запускает наш js код после загрузки страницы
  <React.StrictMode>  {/* работает как 'use strict' */}
    <App />   {/* само приложение из App.js */}
  </React.StrictMode>,    /* работает как 'use strict' */
  document.getElementById('root'),
  () => {
    // тут наш js код
    // console.log('Hello');
  }
);

