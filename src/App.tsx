import React from 'react';
import { giorgione } from './giorgione';
import styles from './App.module.css';

function randomize(input: string[]): string[][] {
  let available = [...input];
  const result = [];
  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 4; j++) {
      const idx = Math.floor(Math.random() * available.length);
      row.push(available[idx]);
      available.splice(idx, 1);
    }
    result.push(row);
  }
  return result;
}

const rows = randomize(giorgione);

function Row({ elements }: { elements: string[] }) {
  return (
    <div className={styles.row}>
      {elements.map(el => (
        <div key={el}><div>{el}</div></div>
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <h1>B come BINGO</h1>
      <div className={styles.container}>
        <Row elements={rows[0]} />
        <Row elements={rows[1]} />
        <Row elements={rows[2]} />
        <Row elements={rows[3]} />
        {/*<Row elements={rows[4]} />*/}
      </div>
    </>
  );
}

export default App;
