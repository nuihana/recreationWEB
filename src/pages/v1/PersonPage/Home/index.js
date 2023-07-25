import { Button } from "react-bootstrap";

import { useQuery } from "hooks";

const PersonPageHome = () => {
    const { navigate } = useQuery();

    const startPersonQuiz = () => {
        navigate('/v1/person/detail');
    }

    return (
        <div className="personPage">
            <div className="titleRow">
                <h1>인물</h1>
            </div>
            <div className="conditionRow">
            </div>
            <div className="buttonRow">
                <Button variant='primary' onClick={startPersonQuiz}>시작</Button>
            </div>
        </div>
    )
}

export default PersonPageHome
