import React from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';
import s from './Home.module.scss';
import { navigate } from 'hookrouter';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.rootWrapper}>
        <Heading type="h1" >
          <b>Find</b> all your
          <br />
          favotite
          <br />
          <b>Pokemon</b>
        </Heading>

        <Heading type="h3">
          You can know the type of Pokemon,
          <br />
          its strengths, disadvantages and
          <br />
          abilities
        </Heading>
        <Button onClick={() => navigate("/pokedex")}>See pokemons</Button>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
