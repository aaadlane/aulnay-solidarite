import React from 'react'

export default function DisplayMessage(message) {
    return (
        <div>
            <p>{message.message.message_content}</p>
            {console.log(message)}
        </div>
    )
}
