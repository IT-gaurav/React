import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';


const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img className="avatar" alt="Avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a className="author" href="/">
                        {faker.name.firstName()}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:00 PM

                        </span>
                    </div>
                    <div className="text">Nice Blog post!</div>
                </div>
            </div>
        </div>
    );
}



ReactDOM.render(<App />, document.querySelector('#root'));