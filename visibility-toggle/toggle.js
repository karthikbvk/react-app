const visible = {
    Title:'Visibility Toggle',
    content : ['i am gonna show something', 'i am hidden']
}    
const appRoot = document.getElementById('app');
let visibility = false;
let visCounthide;
let visCountshow;

const show = () => {

    visibility = ! visibility;
    
            // const visCountshow = visible.content[0];
            // console.log(visCountshow);
            render();
}  

const render =() =>{
    const template = ( 
    
        <div>
        <h1>{visible.Title}</h1>
        <p> {visibility ? ' ':'i am gonna show something'}</p>
        
        <button onClick={show}>{visibility ? 'show details':'hide'}</button>
        </div>
        );
    
    ReactDOM.render(template,appRoot);
}
render();



