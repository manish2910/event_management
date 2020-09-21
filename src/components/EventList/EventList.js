import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { reset, free, discount, noDiscount } from '../../action/action';
import './EventList.css';

const EventList = ({ lists, filtered, reset, free, discount, noDiscount }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        if(filtered.length !== 0){
            setList(filtered);
        }else{
            setList(lists);
        }
        // eslint-disable-next-line
    },[filtered]);

    return (
        <Header>
            {list.length ? <>
                <div className="sort_event_button">
                    <button onClick={reset}>All</button>
                    <button onClick={free}>Free</button>
                    <button onClick={discount}>Discount</button>
                    <button onClick={noDiscount}>No Discount</button>
                </div>
                <div className="list_heading">
                    <span> Name</span>
                    <span> Description</span>
                    <span> Venue</span>
                    <span> Pricing</span>
                    <span> Discount</span>
                </div>
            {list.map(e => (
                <div key={e.id} className="list">
                    <span>{e.eventname}</span>
                    <span>{e.description}</span>
                    <span>{e.venue}</span>
                    <span>{e.price}</span>
                    <span>{e.discount}</span>
                </div>
            ))}
            </>:<div className="no_event_message">Please add event...</div>}
        </Header>
    )
};

const mapStateToProps = state => {
    return {
        lists:state.eventReducer.lists,
        filtered:state.eventReducer.filtered
    }
}

export default connect(mapStateToProps, { reset, free, discount, noDiscount })(EventList);