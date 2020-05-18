import React from 'react';
import './container.css'
import { Button, Radio, RadioGroup, 
	FormControl, FormControlLabel, FormLabel, 
	Input, Slider, InputLabel, FormHelperText
} from '@material-ui/core';
import VAChart from './valence-arousal';

class RetroForm extends React.Component {
	state = {
		correct: 'si',
		valence: 0.5,
		arousal: 0.2,
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}

	handleInputChange = name => event => {
		this.setState({
			[name]: Number(event.target.value)
		})
	}

	handleSliderChange = name => (event, nv) => {
		this.setState({
			[name]: Number(nv)
		})
	}

	onClick = s => {
		alert('Gracias por su apoyo')
	}


	render(){
		const {correct, valence, arousal} = this.state

		return (
			<div className="Form">
				<FormControl component="fieldset">
					<FormLabel component="legend">¿Te parece correcta la clasificacion?</FormLabel>
					<RadioGroup aria-label="correcto" name="correct" value={correct} onChange={this.handleChange('correct')}>
						<FormControlLabel value="si" control={<Radio />} label="Si" />
						<FormControlLabel value="no" control={<Radio />} label="No" />
					</RadioGroup>
				</FormControl>
				{correct === 'no' && <div className="Selectors">
					<FormLabel component="legend">Elije nuevos valores!:</FormLabel>
					<div className="Sliders">
						<FormControl component="fieldset" style={{margin: 10}}>
							<InputLabel htmlFor="valence">Valence</InputLabel>
							<Input
								id="valence"
								value={valence}
								margin="dense"
								onChange={this.handleInputChange('valence')}
								inputProps={{
									step: 0.1,
									min: 0,
									max: 1,
									type: 'number',
									'aria-labelledby': 'input-slider',
								}}
							/>
							<Slider
								value={typeof valence === 'number' ? valence : 0}
								onChange={this.handleSliderChange('valence')}
								aria-labelledby="input-slider"
								step={0.1}
								marks
								min={0}
								max={1}
							/>
							<FormHelperText id="valence help">Te parece positiva o negativa la cancion</FormHelperText>
						</FormControl>

						<FormControl component="fieldset" style={{margin: 10}}>
							<InputLabel htmlFor="arousal">Arousal</InputLabel>
							<Input
								id="arousal"
								value={arousal}
								margin="dense"
								onChange={this.handleInputChange('arousal')}
								inputProps={{
									step: 0.1,
									min: 0,
									max: 1,
									type: 'number',
									'aria-labelledby': 'input-slider',
								}}
							/>
							<Slider
								value={typeof arousal === 'number' ? arousal : 0}
								onChange={this.handleSliderChange('arousal')}
								aria-labelledby="input-slider"
								step={0.1}
								marks
								min={0}
								max={1}
							/>
							<FormHelperText id="valence help">Que tan intensa es la cancion</FormHelperText>
						</FormControl>
					</div>
					<VAChart valence={valence} arousal={arousal} />
				</div>}
				<div>
					<Button variant="contained" color="secondary" onClick={this.onClick}> Enviar </Button>
				</div>
			</div>
		)
	}
}

export default RetroForm;