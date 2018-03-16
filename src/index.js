import React from 'react';
import ReactDOM from 'react-dom';
import Routie from 'routie-2';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/popper.min';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../src/Quiz.css';
import Quiz from '../src/Quiz';
import AddGameForm from '../src/AddGameForm';
//import './index.css';

//import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();


const handleOnGameFormSubmitted=(formEntries)=>{
    console.log("I am in handleOnGameFormSubmitted() with me : ");
    console.dir(formEntries);
    let quizData = {
        imageUrl: formEntries.imageUrl,
        books: [formEntries.answer1, formEntries.answer2,
        formEntries.answer3, formEntries.answer4]
    };
    ReactDOM.render(<Quiz NewGameData={quizData} />, document.getElementById('root'));
}
Routie({
    '': () => {
        ReactDOM.render(<Quiz />, document.getElementById('root'));
    },
    'Add': () => {
        ReactDOM.render(<AddGameForm onGameFormSubmitted={handleOnGameFormSubmitted}/>, document.getElementById('root'));
    }

});


