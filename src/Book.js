import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        console.log(this.props.title +": In book handleClick()");
       this.props.onBookSelected(this.props.title);
    }
    render() {
        return (
            <div className="answer" onClick={this.handleClick}>
                <h4>
                    {this.props.title}
                </h4>
            </div>
        );
    }
}
Book.propTypes = {
    title: PropTypes.string.isRequired
};

export default Book;