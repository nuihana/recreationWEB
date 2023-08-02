import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { useQuery } from "hooks";

import { DropDown } from "components/atom";
import { setCondition } from "store/proverb";

const ProverbPageHome = () => {
    const dispatch = useDispatch();
    const { navigate } = useQuery();

    const proverbItems = ["속담", "사자성어"];
    const proverbMap = new Map([
            ["속담", "p_0001"],
            ["사자성어", "p_0002"]
        ]);
    const [proverb, setProverb] = useState('');

    const startProverbQuiz = () => {
        const type = proverbMap.get(proverb);
        dispatch(setCondition({ type : type}));
        navigate('/v1/proverb/detail');
    }

    const handleCondition = (prev) => {
        setProverb(prev);
    }

    return (
        <div className="proverbPage">
            <div className="titleRow">
                <h1>속담</h1>
            </div>
            <div className="conditionRow">
                <DropDown items={proverbItems} current={proverb} setCurrent={handleCondition}/>
            </div>
            <div className="buttonRow">
                <Button variant='primary' onClick={startProverbQuiz}>시작</Button>
            </div>
        </div>
    )
}

export default ProverbPageHome
