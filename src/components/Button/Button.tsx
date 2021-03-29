import styled from "styled-components";

interface CategoriesInteface {
    text:string,
    onClick: ()=>void
}

const StyledWrapper = styled.button`
    display:flex;
    flex-direction:column;
    width:80px;
    background: #FFFFFF;
    box-shadow: 4px 7px 4px rgba(0, 0, 0, 0.25);
    outline:none;
    border:none;
    padding:10px;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    align-self:flex-end;
`


const Button: React.FC<CategoriesInteface> = ({text,onClick}) => {

  return (
    <StyledWrapper onClick={onClick} >
      {text}
    </StyledWrapper>

  );
}

export default Button;
