import React from 'react';

import Counter from '../../components/counter/counter.component';
import MetaTags from '../../components/meta-tags/meta-tags.component';

import './homepage.styles.scss';


const HomePage = () => (
      <div>
        <Counter />
        <MetaTags />   
      </div>
    );

export default HomePage;

