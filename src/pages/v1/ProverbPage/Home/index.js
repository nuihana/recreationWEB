import { Button } from "react-bootstrap";

import { useQuery } from "hooks";

const ProverbPageHome = () => {
    const { navigate } = useQuery();

    const startProverbQuiz = () => {
        navigate('/v1/proverb/detail');
    }

    return (
        <div className="proverbPage">
            <div className="titleRow">
                <h1>속담</h1>
            </div>
            <div className="conditionRow">
            </div>
            <div className="buttonRow">
                <Button variant='primary' onClick={startProverbQuiz}>시작</Button>
            </div>
        </div>
    )
}

export default ProverbPageHome
