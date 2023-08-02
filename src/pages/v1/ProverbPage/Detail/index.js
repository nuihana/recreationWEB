import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { action } from "store/proverb";
import { Button } from "react-bootstrap";

const ProverbPageDetail = () => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");
    const [alreadyUsed, setAlreadyUsed] = useState([]);
    const proverb = useSelector(state => state.proverb.proverb);
    const condition = useSelector(state => state.proverbCondition.type);

    useEffect(() => {
        nextProverbQuiz();
    }, []);

    const nextProverbQuiz = () => {
        const request = {
            "type": condition.type,
            "usedList": alreadyUsed,
        };

        dispatch(action.getProverb(request))
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
        <div className="proverbPageDetail">
            {errorMessage && <div>{errorMessage}</div>}
            <div className="bodyRow">
                {proverb ?
                    <div>
                        <h5>{proverb.word}</h5>
                        <div className="buttonRow">
                            <Button variant='primary' onClick={nextProverbQuiz}>다음</Button>
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

export default ProverbPageDetail
