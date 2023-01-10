import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';

function App() {
  const subtitle = 'A church body worshipping God in Spirit and Truth';

  return (
    <>
      <Header subtitle={subtitle} />
      <Banner />
    </>
  );
}

export default App;
