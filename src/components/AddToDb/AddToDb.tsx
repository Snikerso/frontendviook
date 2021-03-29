import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../Button/Button";

interface AddToDbInteface {

  setBooks:React.Dispatch<React.SetStateAction<any>>;
}

const StyledWrapper = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:100px;
`


const AddToDb:React.FC<AddToDbInteface> = ({setBooks}) => {
const { register, handleSubmit, watch } = useForm();
let watched = watch()
const onSubmit = (data:any) =>{
  console.log(data.query)
  fetch(`https://obscure-springs-47612.herokuapp.com/db/`,{
    method: 'POST',
    body:JSON.stringify({q:data.query}),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
  .then(data => setBooks(data))
}
  return (
    <StyledWrapper onSubmit={handleSubmit(onSubmit)}>
        <h2>Dodaj nowe książki do bazy</h2>
      <label>Co chcesz dodać ?</label>
      <input ref={register()} name={"query"} />

      <Button text={"Dodaj"} onClick={()=>console.log("click")}/>
    </StyledWrapper>

  );
}

export default AddToDb;
