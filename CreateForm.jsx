function CreateForm(){
    const [content, setContent ]=useState('');
    
    return (
    <form>
        <input type="text" placeholder="輸入代辦事項"
        value = {content } 
        onChange={()=>{setContent(e.target.value) }}/>
        <button type="submit">加入</button>
    
    <form/>
    
    )；
    
}
export default CreateForm