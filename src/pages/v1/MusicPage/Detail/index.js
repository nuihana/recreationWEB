import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import YouTube from "react-youtube";

import { action } from "store/music";

const MusicPageDetail = () => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");
    const [alreadyUsed, setAlreadyUsed] = useState([]);
    const music = useSelector(state => state.music.music);

    useEffect(() => {
        nextMusicQuiz();
    }, []);

    const nextMusicQuiz = () => {
        const request = {
            "usedList": alreadyUsed,
        };

        dispatch(action.getMusic(request))
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
        <div className="musicPageDetail">
            {errorMessage && <div>{errorMessage}</div>}
            <div className="bodyRow">
                {music ?
                    <div>
                        <h5>{music.singer} - {music.title}</h5>
                        <div>
                            <YouTube videoId={music.url} />
                        </div>
                        <div className="buttonRow">
                            <Button variant='primary' onClick={nextMusicQuiz}>다음</Button>
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

export default MusicPageDetail
