import React from 'react';
import VAChart from './valence-arousal';
import './container.css'
import WelcomeText from './text';
import RetroForm from './retroForm';

const AppContainer = () => (
    <div className='Container'>
        <WelcomeText />
        <VAChart arousal='0.1' valence='0.2' />
        <RetroForm />
    </div>
)

export default AppContainer;