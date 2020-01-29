//import
import React from 'react';
import ReactDOM from 'react-dom';



// const btnTextFn = () => { return 'Click Me' }

// create react component

const App = () => {

    const btnText = { text: 'click', text2: 'click2' };
    const style = { backgroundColor: 'bisque' };
    // const style = { border: '2px solid coral' }

    return (
        <div>
            <label for="name">Enter Name:</label>
            <input type="text" name="name" id="name" />
            {/* <button type="submit" class="input" style="background-color:bisque">Submit</button> */}
            <button type="submit" className="input" style={style}>
                {btnText.text}
                {/* Submit */}
            </button>
        </div>
    )
}


// take react component and show it to screen
ReactDOM.render(<App />, document.querySelector('#root'));

