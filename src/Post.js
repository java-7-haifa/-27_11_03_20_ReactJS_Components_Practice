import React from 'react';

export default props => {
    return (
    <>
    <h2>{props.author}</h2>
    <h3>{props.date}</h3>
    <p>{props.desc}</p>
    <button className='btn btn-success' onClick={()=> props.onClickHandler(props.pid)}>More</button>
    </>
    );
}