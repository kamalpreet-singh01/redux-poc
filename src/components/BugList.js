import React from 'react';
import {connect} from 'react-redux';
import { addBug, removeBug} from '../redux/actions';

class BugList extends React.Component{
    render(){
        return(
            <div>
                {this.props.bugList.map(bug => {return(
                    <div key={bug.id}>
                        <p>{bug.description}</p>
                        <button onClick={()=>{
                            this.props.removeBug(bug.id)
                        }}>Remove</button>
                        </div>
                )})}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {bugList: state.bugReducer}
}

const mapDispatchToProps = () => {
    return {
        addBug,removeBug
    }
}

export default connect(mapStateToProps,{removeBug})(BugList);