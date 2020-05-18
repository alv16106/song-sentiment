import React from 'react';
import Typography from '@material-ui/core/Typography';

import chart from '../assets/valence.png'
import './container.css'

const WelcomeText = () => (
    <div className='Welcome'>
        <Typography variant="h2" component="h2" gutterBottom>
            Bienvenido a sentiment song
        </Typography>
        <Typography variant="h5" gutterBottom>
            <b>Sentiment song</b> clasifica canciones de acuerdo a la escala <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2367156/'>valence-arousal</a>:
        </Typography>
        <img src={chart} alt="chart" />
        <Typography variant="body1" paragraph>
            Por favor escuche el audio presentado mas arriba. {'\n'}
            Esta cancion en especifico ha sido clasificada de la siguiente manera:
        </Typography>
    </div>
)


export default WelcomeText;