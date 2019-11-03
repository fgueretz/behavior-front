import React from 'react';
import List from './components/List';
import Amount from './components/Amount';
import FilterButton from './components/FilterButton';
import data from './data';

const containerStyle = {
  padding: '10px 20px'
};

const headerStyle = {
  fontSize: 20,
  color: 'black',
  fontWeight: 'bold',
  width: '100%',
  justifyContent: 'center',
  display: 'flex',
  paddingBottom: 20
};

const buttonWrapperStyle = {
  width: '100%',
  paddingBottom: 20
};

function getAmount(amount) {
  if (amount) {
    return <Amount positive={amount.positive} negative={amount.negative}/>
  }

  return null;
} ;

function App() {
  let [amount, setAmount] = React.useState(),
    [filterItems, setFilterItems] = React.useState(false);

  return (
    <div className="App" style={containerStyle}>
      <span style={headerStyle}>
        {'Behavior detection'}
      </span>
      {getAmount(amount)}
      <div style={buttonWrapperStyle}>
        <FilterButton onClick={setFilterItems} filterItems={filterItems}/>
      </div>
      <List data={data} setAmount={setAmount} filterByStatus={filterItems}/>
    </div>
  );
}

export default App;
