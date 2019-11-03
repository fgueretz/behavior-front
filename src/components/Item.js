import React from 'react';
import { MdThumbDown } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";

const containerStyle = {
	display: 'flex',
	borderBottom: '1px solid rgba(0, 0, 0, 0.4)'
};

const textStyle = {
	paddingLeft: 8,
	marginRight: 'auto',
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	backgroundColor: 'rgba(250, 235, 215, 1)'
};

const iconWrapperStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '4px 8px',
	marginTop: 2,
	marginBottom: 2,
	borderLeft: '1px solid rgba(0, 0, 0, 0.6)'
};

const positive = 'Positivo';

function Item(props) {
	let wrapperStyle = containerStyle, IconCmp = MdThumbDown,
		iconColor = 'rgba(255, 0, 0, 1)', msgStyle = textStyle;

	if (props.value === positive) {
		iconColor = 'rgba(0, 128, 0, 1)';
		IconCmp = MdThumbUp;

		msgStyle = Object.assign(
			{},
			textStyle,
			{
				backgroundColor: 'rgba(143, 188, 143, 0.5)'
			}
		);
	}

	if (props.lastChild) {
		wrapperStyle = Object.assign(
			{},
			wrapperStyle,
			{
				border: 'none	'
			}
		);
	}

	return (
		<li style={wrapperStyle}>
			<span style={msgStyle}>
				{props.text}
			</span>
			<div style={iconWrapperStyle}>
				<IconCmp color={iconColor}/>
			</div> 
		</li>
	);
}

export default Item;