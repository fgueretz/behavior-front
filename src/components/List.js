import React from 'react';
import Item from './Item';

const containerStyle = {
	paddingInlineStart: '0px',
	marginBlockStart: '0px',
	marginBlockEnd: '0px',	
	border: '1px solid rgba(0, 0, 0, 0.6)',
	borderRadius: 4
};

const positive = 'Positivo';
let amount = {}, count = 0;

function setAmountValue(positiveValue, dataLength) {
	amount.positive = positiveValue;
	amount.negative = dataLength - positiveValue;
};

function getFilteredItems(data) {
	const items = Object.keys(data), newItems = [];

	items.map((item, index) => {
		const value = data[item],
			component = (
				<Item
					text={item}
					key={index}
					value={value}
					lastChild={index === (items.length -1)}
				/>
			);

		if (value === positive) {
			count += 1;

			 return newItems.unshift(component);
		}
		
		return newItems.push(component);
	});

	setAmountValue(count, newItems.length);

	return newItems;
};

function getItems(data, filterByStatus) {
	const items = Object.keys(data);
	let newItems;

	if (filterByStatus) return getFilteredItems(data);

	newItems = items.map((item, index) => {
		const value = data[item];

		if (value === positive) {
			count += 1;
		}

		return (
			<Item
				text={item}
				key={index}
				value={value}
				lastChild={index === (items.length -1)}
			/>
		);
	});

	setAmountValue(count, newItems.length);

	return newItems;
};

function List(props) {
	count = 0;

	React.useEffect(() => {
		props.setAmount(amount);
	}, [props]);

	return (
		<ul style={containerStyle}>
			{getItems(props.data, props.filterByStatus)}
		</ul>
	);
}

export default List;