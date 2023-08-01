import { Button } from "react-bootstrap";

import { useQuery } from "hooks";

import { DropDown } from "components/atom";
import {useState} from "react";

const ProverbPageHome = () => {
    const proverbItems = ["속담", "사자성어"];
    const [proverb, setProverb] = useState('');

    const { navigate } = useQuery();

    const startProverbQuiz = () => {
        navigate('/v1/proverb/detail');
    }

    const setCondition = (prev) => {
        setProverb(prev);
    }

    return (
        <div className="proverbPage">
            <div className="titleRow">
                <h1>속담</h1>
            </div>
            <div className="conditionRow">
                <DropDown items={proverbItems} current={proverb} setCurrent={setCondition}/>
            </div>
            <div className="buttonRow">
                <Button variant='primary' onClick={startProverbQuiz}>시작</Button>
            </div>
        </div>
    )
}

export default ProverbPageHome
