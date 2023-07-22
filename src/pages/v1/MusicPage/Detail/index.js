import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

import { action } from "store/music";

const MusicPageDetail = () => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");
    const music = useSelector(state => state.music.music);

    useEffect(() => {
        nextMusicQuiz();
    }, []);

    const nextMusicQuiz = () => {
        dispatch(action.getMusic())
            .unwrap()
            .then(response => {
                // console.log("### response :", response);
            })
            .catch(error => {
                // console.log("### error :", error);
                setErrorMessage(error.message);
            });
    }

    return (
        <div className="musicPageDetail">
            {errorMessage && <div>{errorMessage}</div>}
            {music && <div>{music.title}</div>}
            <div className="buttonRow">
                <Button variant='primary' onClick={nextMusicQuiz}>다음</Button>
            </div>
        </div>
    )
}

export default MusicPageDetail
