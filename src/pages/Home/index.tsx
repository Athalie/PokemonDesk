import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

import s from './Home.module.scss';

const HomePage = () => <div className={s.root}>
    <Header />
    <Layout className={s.contentWrap}>
    <div className={s.contentText}>

        <h1>
            <b>Find</b> all your favourites <b>Pokemon</b>
        </h1>
        <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <Button>
            See pokemons
        </Button>

    </div>
    </Layout>
</div>;

export default HomePage;