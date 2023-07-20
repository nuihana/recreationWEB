import { useState } from "react";
import { DropDown } from "components/atom";

const MusicPage = () => {
    const [genre, setGenre] = useState('');
    const genreList = ['락', '발라드'];

    const [releaseYear, setReleaseYear] = useState('');
    const releaseYearList = ['1960', '1970', '1980', '1990', '2000', '2010', '2020'];

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
                            className='genre'
                            current={genre}
                            setCurrent={setGenre}
                            items={genreList}
                            iterationKey='my-music-genre'
                            placeholder='선택해주세요'
                            withFullSize
                        />
                    </dd>
                </div>
                <div>
                    <dt>발매일 제한</dt>
                    <dd>
                        <DropDown
                            className='year'
                            current={releaseYear}
                            setCurrent={setReleaseYear}
                            items={releaseYearList}
                            iterationKey='my-music-year'
                            placeholder='선택해주세요'
                            withFullSize
                        />
                    </dd>
                </div>
            </div>
            <div className="button">
                <button className="btnItem">시작</button>
            </div>
        </div>
    )
}

export default MusicPage
