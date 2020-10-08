import React from 'react'

export default function DisplayMessage(message) {
    return (
        <div>
            <p>{message.message.message_content}</p>
            {console.log(message)}
        </div>
    )
}


// je dois afficher les messages de lutilisateur quie st dans le contexte
// et l utilisateur qui a l id de l'annonce postée