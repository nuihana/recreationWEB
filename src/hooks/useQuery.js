import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import querystring from "querystring";

export const useQuery = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const query = useMemo(() => querystring.parse(location.search), [
        location.search,
    ]);

    return {
        navigate,
        location,
        params,
        query,
    };
};
