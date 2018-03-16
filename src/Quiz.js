import React from 'react';
import Book from '../src/Book';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Routie from 'routie-2';
class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initializeGame(this.props.NewGameData ? this.props.NewGameData:'');
    }

    initializeGame = (aNewGameData) => {
        if (aNewGameData) {
            data.push(aNewGameData);
        }
        console.dir(data);
       return _.extend({
            bgClass: 'neutral',
            showContinue: false
        }, data.selectGame());
    }

    handleBookSelected = (title) => {
        console.log(title + ": In Quiz handleBookSelected()");
        let isCorrect = this.checkAnswer(title);

        console.log(isCorrect + ": In Quiz handleBookSelected()");

        console.log(this + ": In Quiz handleBookSelected()");

        this.setState({
            bgClass: isCorrect ? 'pass' : 'fail',
            showContinue:isCorrect
        });
    }

    checkAnswer = (title) => {
        console.log(title + ": In Quiz checkAnswer()");
        console.log(this.state.correctAnswer + ": In Quiz checkAnswer()");
        if (title===this.state.correctAnswer) {
            return true;
        }
        return false;
    }

    handleContinue = () => {
        this.setState(this.initializeGame());
    }
    handleAddGame = () => {
        console.log("Add Game clicked: handleAddGame()");
        Routie('Add');
    }
    render() {
        return (<div>

            {/*this.props.bookTitles.map(function (aTitle, index) {
               return (<Book key={index} title={aTitle} />);
            })*/}
            <div className="row">
                <div className="col-md-4">
                    <img src={this.state.author.imageUrl} className="authorimage" alt={this.state.author.name}/>
                </div>
                <div className="col-md-7">
                    {this.state.books.map((aTitle, index) => {
                        return (<Book onBookSelected={this.handleBookSelected} key={index} title={aTitle} />);
                    })
                    }
                </div>
                <div className={"col-md-1 "+ this.state.bgClass}>
                </div>
            </div>
            {this.state.showContinue ? (
                <div className="row">
                    <div className="col-md-12">
                        <input onClick={this.handleContinue} type="button"
                            className="btn btn-primary btn-lg float-right" value="Continue" />
                    </div>
                </div>
            ) : <span />}

            <div className="row">
                <div className="col-md-12">
                    <input onClick={this.handleAddGame} is="addGameButton" type="button"
                        value="Add Game" class="btn "/>
                </div>
            </div>
        </div>);
    }

}

var data = [
    {
        name: 'Mark Twain',
        imageUrl: require('../src/images/authors/marktwain.jpg'),
        books: ['The Adventures of Huckleberry Finn']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: require('../src/images/authors/josephconrad.PNG'),
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: require('../src/images/authors/jkrowling.jpg'),
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Daniel Ogren',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: require('../src/images/authors/stephenking.jpg'),
        imageSource: 'Wikimedia Commons',
        imageAttribution: 'Pinguino',
        books: ['The Shining', 'IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: require('../src/images/authors/charlesdickens.jpg'),
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: require('../src/images/authors/williamshakespeare.jpg'),
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];
data.selectGame = function () {
    let books = _.shuffle(this.reduce((acc, val) => {
        return acc.concat(val.books);
    }, [])).slice(0, 4);

    let answer = books[_.random(books.length - 1)];

    return {
        books: books,
        author: _.find(this, (author) => {
            return author.books.some((title) => {
                return title === answer;
            });
        }),
        correctAnswer:answer

    };
}
Quiz.propTypes = {
    NewGameData: PropTypes.object
}
export default Quiz;