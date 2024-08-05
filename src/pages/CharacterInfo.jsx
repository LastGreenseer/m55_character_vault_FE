import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5001/api/character/${id}`)
        .then(response => response.json())
        .then(data => setCharacter(data));
    }, [id]);

    return (
        <div>
            {character ? (
                <>
                <h2>{character.name}</h2>
                <p>{character.info}</p>
                </>
            ) : (
                <p>Loading..</p>
            )}
        </div>
    );
};

export default CharacterInfo;