import React from 'react';
import PropTypes from 'prop-types';

class AddGameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = AddGameForm.setFormData();
    }

    handleSubmit = (event) => {

        this.props.onGameFormSubmitted(this.state);
        event.preventDefault();
        console.dir(this.state);
        //let s = this.state;
        //Object.keys(s).forEach((key) => {
        //    console.log(key +' : ' + s[key] );
        //})
       
    };

    handleChange = (event) => {
        let target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Add Game</h1>
                    <form role="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input name="imageUrl" type="text" className="form-control" placeholder="Image Url"
                                value={this.state.imageUrl} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <input name="answer1" type="text" className="form-control" placeholder="Answer 1"
                                value={this.state.answer1} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input name="answer2" type="text" className="form-control" placeholder="Answer 2"
                                value={this.state.answer2} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input name="answer3" type="text" className="form-control" placeholder="Answer 3"
                                value={this.state.answer3} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input name="answer4" type="text" className="form-control" placeholder="Answer 4"
                                value={this.state.answer4} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
AddGameForm.setFormData = () => {
    return ({
        imageUrl:'',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: ''
    });
}

AddGameForm.propTypes = {
    onGameFormSubmitted: PropTypes.func.isRequired
}

export default AddGameForm;