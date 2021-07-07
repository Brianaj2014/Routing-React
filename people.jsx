import React, {useState, useEffect} from 'react';

export default function People() {
    const [people, setPeople] = useState([]);
        useEffect(() => {
            fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => setPeople(people));
        }, []);

        return (
         <>

        <h1>People</h1>

         {people.map}

         </>

        )
    
};