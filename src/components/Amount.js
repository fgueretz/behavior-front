import React from 'react';

const containerStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
};

const defaultTextStyle = {
	fontSize: 20,
	textAlign: 'center'
};

const positiveStyle = Object.assign(
	{
		marginRight: 8,
		borderBottom: '1px solid rgba(0, 128, 0, 0.8)'

	},
	defaultTextStyle
);

const negativeStyle = Object.assign(
	{
		borderBottom: '1px solid rgba(255, 0, 0, 0.8)'
	},
	defaultTextStyle
);

const dividerStyle = {
	height: 70,
	marginRight: 8,
	borderLeft: '1px solid rgba(0, 0, 0, 0.8)'
};

function Amount(props) {
	return (
		<div style={containerStyle}>
			<span style={positiveStyle}>
				{'Positive'}
				<br/>
				{props.positive}
			</span>
			<span style={dividerStyle}/>
			<span style={negativeStyle}>
				{'Negative'}
				<br/>
				{props.negative}
			</span>
		</div>
	);
};

export default Amount;