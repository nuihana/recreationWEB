import { useState } from "react";
import { Button } from "react-bootstrap";

import { useQuery } from "hooks";
import { DropDown } from "components/atom";

const MusicPageHome = () => {
    const { navigate } = useQuery();

    const [genre, setGenre] = useState('');
    const genreList = ['락', '발라드'];

    const [releaseYear, setReleaseYear] = useState('');
    const releaseYearList = ['1960', '1970', '1980', '1990', '2000', '2010', '2020'];

    const startMusicQuiz = () => {
        navigate('/v1/music/detail');
    }

    return (
        <div className="musicPage">
            <div className="titleRow">
                <h1>음악</h1>
            </div>
            <div className="conditionRow">
                <div>
                    <dt>장르 제한</dt>
                    <dd>
                        <DropDown
                            current={genre}
                            setCurrent={setGenre}
                            items={genreList}
                        />
                    </dd>
                </div>
                <div>
                    <dt>발매일 제한</dt>
                    <dd>
                        <DropDown
                            current={releaseYear}
                            setCurrent={setReleaseYear}
                            items={releaseYearList}
                        />
                    </dd>
                </div>
            </div>
            <div className="buttonRow">
                <Button variant='primary' onClick={startMusicQuiz}>시작</Button>
            </div>
        </div>
    )
}

export default MusicPageHome
