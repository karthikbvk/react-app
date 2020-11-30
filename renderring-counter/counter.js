let count=0;
const addOne = () => {
    count++;
    rerenderapp();
};
const minusOne = () => {
    count--;
    rerenderapp();
};
const reset = () =>{
    count = 0;
    rerenderapp();
};

const appRoot = document.getElementById('app');
const rerenderapp = ()=>{
    const template = (
    
        <div>
            <h2>Count :{count}</h2>
            <button id="click-add" onClick={addOne} className="btnAdd">+1</button>
            <button id="click-btn" onClick={minusOne} className="btn">-1</button>
            <button id="reset-btn" onClick={reset} className="reset">reset</button>
        
        </div>
    
    
    );

    ReactDOM.render(template, appRoot);

};
rerenderapp();