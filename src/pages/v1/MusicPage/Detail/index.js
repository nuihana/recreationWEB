import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import YouTube from "react-youtube";

import { action } from "store/music";

const MusicPageDetail = () => {
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState("");
    const music = useSelector(state => state.music.music);

    useEffect(() => {
        nextMusicQuiz();
    }, []);

    const nextMusicQuiz = () => {
        // TODO: 이미 재생된 영상 데이터 호출시 제외하도록 기능 개선, 검색조건 추가
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
            <div className="bodyRow">
                {music &&
                    <div>
                        <h5>{music.singer} - {music.title}</h5>
                        <div>
                            <YouTube videoId={music.url} />
                        </div>
                    </div>}
            </div>
            <div className="buttonRow">
                <Button variant='primary' onClick={nextMusicQuiz}>다음</Button>
            </div>
        </div>
    )
}

export default MusicPageDetail
