import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { addBug} from '../redux/actions';

const AddBug = (props) => {
    const [title,setTitle] = useState("");
    const [status,setStatus] = useState("");
    let nextId;
    // useEffect(()=>{
    //     nextId = props.bugList.length +1
    // },[props.bugList])

    const onSubmit = (e)=>{
        e.preventDefault();
        const newBug = {
            id: props.bugList.length +1,
            description: title,
    currentStatus: status
        }

        props.addBug(newBug)
    }

    return(
        <div>
            <form onSubmit={(e)=>onSubmit(e)}>
                <label>Bug description</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <label>Bug Status</label>
                <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Close">Close</option>
                </select>
                <button type='Submit'>Add New Bug</button>
            </form>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {bugList: state.bugReducer}
}

const mapDispatchToProps = () => {
    return {
        addBug
    }
}

export default connect(mapStateToProps,{addBug})(AddBug);


