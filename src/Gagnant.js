import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Gagnant({ candidats }) {
    const [gagnant, setGagnant] = useState('');


    function calculerGagnant(event) {
        let maxCount = 0;
        candidats.map(candidat => {

             if (candidat.count === maxCount && candidat.count >0){
                alert("C'est une egalité")
                setGagnant("");
                event.preventDefault();
            };

            if (candidat.count > maxCount) {
                maxCount = candidat.count;
                setGagnant(candidat);
            }
             return gagnant;
        })
    }

    return (
        <div>
            <div>
                <Button variant="success" size="lg" onClick={calculerGagnant} >Show the winner</Button>
            </div>
            {gagnant.name}

        </div>
    );
}