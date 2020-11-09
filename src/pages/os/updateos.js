import React, {  useState } from 'react';

export default function Upadate(props){
  const { onSubmit } = props;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function handleSubmit(e) {
      e.preventDefault();
  
      await onSubmit({
        title,
        description,
      });
  
      setTitle('');
      setDescription('');
    }
  

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Titulo:<input value={title} onChange={e => setTitle(e.target.value)} /></label><br/>        
            <label>Descrição:<input value={description} onChange={e => setDescription(e.target.value)} /></label><br/> 

            <button type="submit">Alterar</button>       
        </form>
        </div>
    );
}