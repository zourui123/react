import React , {Component} from 'react';
// 需要 npm prop-types
import PropTypes from 'prop-types';
class Title extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.texts}</h1>
            </div>
        )
    }
}

Title.propTypes = {
    texts: PropTypes.string
}
export default Title;