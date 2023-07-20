import { NavLink } from "react-router-dom";
import cx from 'classnames';

import { useQuery } from "hooks";
import {
    Home,
    HomeActive,
    Music,
    MusicActive,
    Person,
    PersonActive,
    Scene,
    SceneActive
} from "static/svgs";

export const Navigation = () => {
    const { location } = useQuery();
    const isVisit = location.pathname.indexOf('/v1/visit') > -1;

    return (
        <nav className={cx('gnb', { isVisit })}>
            <ul>
                <li>
                    <NavLink to="/v1/" className={({ isActive }) => 'active'}>
                        <HomeActive className="activeIcon" />
                        <Home className="defaultIcon" />
                        <span>홈</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/v1/music" className={({ isActive }) => 'active'}>
                        <MusicActive className="activeIcon" />
                        <Music className="defaultIcon" />
                        <span>음악</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/v1/person" className={({ isActive }) => 'active'}>
                        <PersonActive className="activeIcon" />
                        <Person className="defaultIcon" />
                        <span>인물</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/v1/scene" className={({ isActive }) => 'active'}>
                        <SceneActive className="activeIcon" />
                        <Scene className="defaultIcon" />
                        <span>장면</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
