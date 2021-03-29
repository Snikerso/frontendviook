
import React,{ useEffect } from 'react';
import BooksList from './components/BooksList/BooksList';
import styled from 'styled-components'
import Filtration from './components/Filtration/Filtration';
import AddToDb from './components/AddToDb/AddToDb';

const Main = styled.main`
  display:flex;
  flex-direction:column;
  width:100%;
  align-items:center;
  justify-content:center;
`

function App() {
  const [books, setBooks] = React.useState([])

  useEffect(()=>{
    fetch("https://obscure-springs-47612.herokuapp.com/books")
    .then(res => res.json())
    .then(data => setBooks(data))
  },[])
   
  return (
    <Main>
        <h2>Filtruj istniejące książki w bazie</h2>
        <Filtration setBooks={setBooks}/>


        <AddToDb setBooks={setBooks}/>
        <BooksList list={books} />
    </Main>
  );
}

export default App;
