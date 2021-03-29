import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../Button/Button";

interface FiltrationInteface {

  setBooks:React.Dispatch<React.SetStateAction<any>>;
}

const StyledWrapper = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
`


const Filtration:React.FC<FiltrationInteface> = ({setBooks}) => {
const { register, handleSubmit, watch } = useForm();
let watched = watch()
const onSubmit = (data:any) =>{
  fetch(`https://obscure-springs-47612.herokuapp.com/books?${data['author1'] && "author="+data['author1']}${data['author2'] && "&author="+data['author2']}${data['published_date'] && "published_date="+data['published_date']}${data['sort'] && "sort="+data['sort']}`)
  .then(res => res.json())
  .then(data => setBooks(data))
}
  return (
    <StyledWrapper onSubmit={handleSubmit(onSubmit)}>
      
      <label>Autor pierwszy</label>
      <input ref={register()} name={"author1"} />
      <label>Autor drugi</label>
      <input ref={register()} name={"author2"}/>
      <label>Data publikacji</label>
      <input ref={register()} name={"published_date"}/>
      <label>Sortowanie przez date publikacji</label>
      <select name={"sort"} ref={register()}>
        <option value={''}>-</option>
        <option value={'-published_date'}>malejąco</option>
        <option value={'published_date'}>rosnąco</option>
      </select>
      <h3>Query</h3>
      <p>{`https://obscure-springs-47612.herokuapp.com/books?${watched['author1'] && "author="+watched['author1']}${watched['author2'] && "&author="+watched['author2']}${watched['published_date'] && "published_date="+watched['published_date']}${watched['sort'] && "sort="+watched['sort']}`}</p>

      <Button text={"Zatwierdź"} onClick={()=>console.log("click")}/>
    </StyledWrapper>

  );
}

export default Filtration;
