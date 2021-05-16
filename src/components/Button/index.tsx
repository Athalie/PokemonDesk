import React from 'react';

import s from './Button.module.scss';

const Button: React.FC = ({ children }) => <button type="button" className={s.root}>
    {children}
</button>;

export default Button;