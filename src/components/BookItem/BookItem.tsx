import styled from "styled-components";
import Button from "../Button/Button";
import Item from "./Item/Item";

interface BooksItemInteface {
    item:{ 
        id: number, 
        title: string ,
        authors:[],
        categories:[],
        thumbnail:string,
    }
}

const StyledWrapper = styled.div`
    display:flex;
    background: #FFFFFF;
    justify-content:space-around;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    width:600px;

`
const StyledWrapperInner = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin-left:30px;
    padding:10px;
`

const BookItem: React.FC<BooksItemInteface> = ({item}) => {

  return (
    <StyledWrapper>
      <img src={item.thumbnail}/>
      <StyledWrapperInner>


        <h3>Autorzy</h3>
        <Item item={item.authors}/>


        <h3>Categorie</h3>
        <Item item={item.categories}/>
        <div>
              stars
        </div>
        <Button text={"Wejdź"} onClick={()=>console.log("click")}/>
        </StyledWrapperInner>

    </StyledWrapper>
  );
}

export default BookItem;
