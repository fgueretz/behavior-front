import React from 'react';

const buttonStyle = {
	fontSize: 14,
	outline: 'none',
	borderRadius: 3,
	backgroundColor: 'white',
	border: '1px solid black',
	fontWeight: 'bold',
	padding: 8,
	marginLeft: 'auto',
	display: 'flex',
	cursor: 'pointer'
};

function FilterButton(props) {
	let buttonText = 'Filter by status';

	if (props.filterItems) {
		buttonText = 'Remove filter';
	}

	return (
		<button style={buttonStyle} onClick={props.onClick.bind(null, !props.filterItems)}>
			{buttonText}
		</button>
	);
};

export default FilterButton;