import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import { addEvent, error, noError } from '../../action/action';
import './EventForm.css';

const EventForm = ({ addEvent, error, noError, errors }) => {
    const [values, setValues] = useState({
        eventname:"",
        description:"",
        venue:"",
        price:"",
        discount:""
    });

    const history = useHistory();

    const { eventname, description, venue, price, discount } = values;
    
    const submitHandler = e => {
        e.preventDefault()
        let anyEmpty = false;
        for(let i in values){
            if(values[i] === ""){
                anyEmpty = true;
                break;
            }
        }
        if(!anyEmpty){
            addEvent(values);
            history.push('/');
        }else{
            error("Fill all the fields.")
        }
    }

    const handleChange = name => e => {
        if( name === "price" || name === "discount" ){
            let regex = /^[0-9]*$/;
            if(e.target.value.match(regex)){
                setValues({
                    ...values,
                    [name]: e.target.value
                });
            }
        }else{
            setValues({
                ...values,
                [name]: e.target.value
            });
        }
        noError("");
    }

    const clearFormHandler = e => {
        setValues({
            ...values,
            eventname:"",
            description:"",
            venue:"",
            price:"",
            discount:""
        });
    }
    
    return (
        <Header>
            <div className={errors ? "error form_heading":"form_heading"}>
                {errors ? errors:"Register Event"}
            </div>
            <div className="form_main">
                <form onSubmit={submitHandler}>
                    <div className="event_name">
                        <label>Event Name:</label>
                        <input type="text" placeholder="Enter Event Name" value={eventname || ""} onChange={handleChange("eventname")} />
                    </div>
                    <div className="event_description">
                        <label>Description:</label>
                        <input type="text" placeholder="Enter Description" value={description || ""} onChange={handleChange("description")} />
                    </div>
                    <div className="event_venue">
                        <label>Venue:</label>
                        <input type="text" placeholder="Enter Venue" value={venue || ""} onChange={handleChange("venue")} />
                    </div>
                    <div className="event_pricing">
                        <span className="event_price">
                            <label>Price:</label><br />
                            <input type="text" placeholder="Enter Price" value={price || ""} onChange={handleChange("price")} />
                        </span>
                        <span className="event_discount">
                            <label>Discount:</label><br />
                            <input type="text" placeholder="Enter Discount" value={discount || ""} onChange={handleChange("discount")} />
                        </span>
                    </div>
                    <div className="event_button">
                        <input type="button" value="Clear" onClick={clearFormHandler}/>
                        <input type="submit" value="Add"/>
                    </div>
                </form>
            </div>
        </Header>
    )
}

const mapStateToProps = state => ({
    errors:state.eventReducer.errors
});

export default connect(mapStateToProps, { addEvent, error, noError })(EventForm);