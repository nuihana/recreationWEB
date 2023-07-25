import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image } from "react-bootstrap";

import { action } from "store/person";

const PersonPageDetail = () => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");
    const [alreadyUsed, setAlreadyUsed] = useState([]);
    const person = useSelector(state => state.person.person);

    useEffect(() => {
        nextPersonQuiz();
    }, []);

    const nextPersonQuiz = () => {
        const request = {
            "usedList": alreadyUsed,
        };

        dispatch(action.getPerson(request))
            .unwrap()
            .then(response => {
                // console.log("### response :", response);
                setAlreadyUsed(prev => { return [...prev, response.seq] });
            })
            .catch(error => {
                // console.log("### error :", error);
                setErrorMessage(error.message);
            });
    }

    return (
        <div className="personPageDetail">
            {errorMessage && <div>{errorMessage}</div>}
            <div className="bodyRow">
                {person ?
                    <div>
                        <h5>{person.name}</h5>
                        <div>
                            <Image src={person.url} fluid />
                        </div>
                        <div className="buttonRow">
                            <Button variant='primary' onClick={nextPersonQuiz}>다음</Button>
                        </div>
                    </div>
                    :
                    <div>
                        <h5>데이터 끝</h5>
                    </div>}
            </div>
        </div>
    )
}

export default PersonPageDetail
