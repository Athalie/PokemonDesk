import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';

export const App = () => <div className={cn(s.header, 'color')}>Yes, we did it! This is App component!</div>;

export default App;
