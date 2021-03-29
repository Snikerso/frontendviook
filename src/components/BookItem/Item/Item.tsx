import styled from "styled-components";

interface CategoriesInteface {
    item:[]
}

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
`
const Category = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
  padding:5px;
  margin-bottom:7px;
`

const Categories: React.FC<CategoriesInteface> = ({item}) => {

  return (
    <StyledWrapper>

              {item.map(item => {
                  return(
                    <Category>
                        {item}
                    </Category>
                  )
              })}

    </StyledWrapper>

  );
}

export default Categories;
