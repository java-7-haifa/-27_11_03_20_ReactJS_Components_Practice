import React from 'react';

export default props => {
    return (
        <>
        <h1>{props.author}</h1>
        <h2>{props.date}</h2>
        <p>{props.text}</p>
        <ul>
            {props.comments.map(comment => {
                return (
                    <li key={comment.id} className='card'>
                        <h3>{comment.author}</h3>
                        <h4>{comment.date}</h4>
                        <p>{comment.message}</p>
                    </li>
                );
            })}
        </ul>
        <hr/>
        <input className='form-control' placeholder='Type your name'/>
        <input className='form-control' placeholder='Type your message'/>
        <button className='btn btn-primary' onClick={() => props.addCommentHandler(props.pid,'Vasya','Message')}>Send</button>
        </>
    );
}