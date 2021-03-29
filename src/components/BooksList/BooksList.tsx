import styled from "styled-components";
import BookItem from "../BookItem/BookItem"

interface BooksListInteface {
    list:Array<{ 
        id: number, 
        title: string, 
        authors:[],
        categories:[],
        thumbnail:string,
    }>
}

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:100px;
    background: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

`

const BooksList: React.FC<BooksListInteface> = ({list}) => {

  return (
    <div>
        {list.map(item => {
            return(
                <StyledWrapper>
                    <BookItem key={item.id} item={item}/>
                </StyledWrapper>
            )
        })}

    </div>
  );
}

export default BooksList;
