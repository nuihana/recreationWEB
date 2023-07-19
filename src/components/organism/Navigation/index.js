import { NavLink } from "react-router-dom";
import cx from 'classnames';

import { useQuery } from "hooks";
import {
    Music,
    MusicActive
} from "static/svgs";

export const Navigation = () => {
    const { location } = useQuery();
    const isVisit = location.pathname.indexOf('/v1/visit') > -1;

    return (
        <nav className={cx('gnc', { isVisit })}>
            <ul>
                <li>
                    <NavLink to="/v1/music" activeClassName="active">
                        <MusicActive className="activeIcon" />
                        <Music className="defaultIcon" />
                        <span>음악</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/v1/music" activeClassName="active">
                        <MusicActive className="activeIcon" />
                        <Music className="defaultIcon" />
                        <span>음악</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/v1/music" activeClassName="active">
                        <MusicActive className="activeIcon" />
                        <Music className="defaultIcon" />
                        <span>음악</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/v1/music" activeClassName="active">
                        <MusicActive className="activeIcon" />
                        <Music className="defaultIcon" />
                        <span>음악</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
