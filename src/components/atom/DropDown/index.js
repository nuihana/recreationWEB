import { useRef, useState } from "react";
import { useClickAway } from "react-use";

import { ChevronDown } from "static/svgs";

export const DropDown = (props) => {
    const {
        className,
        current,
        setCurrent,
        items,
        iterationKey,
        withRightPadding,
        withFullSize,
        placeholder,
    } = props;

    const dropDownRef = useRef(null);

    const [dropDownOpen, setDropDownOpen] = useState(false);

    const shouldHighLight = (!placeholder && current !== items[0]);

    const handleDropDownOpen = () => {
        setDropDownOpen((prev) => !prev);
    }

    const handleDropDownClick = (e) => {
        setCurrent(e.currentTarget.title);
        setDropDownOpen(false);
    }

    useClickAway(dropDownRef, () => {
        setDropDownOpen(false);
    }, ['click']);

    let newClassName = `dropDown ${className}`
    if (dropDownOpen) newClassName += ' open';
    if (withRightPadding) newClassName += ' rightPadding';
    if (withFullSize) newClassName += ' full';

    return (
        <div className={newClassName}>
            <div
                className={`current ${shouldHighLight ? 'highLight' : ''}`}
                onClick={handleDropDownOpen}
                ref={dropDownRef}
            >
                <span>{current || placeholder}</span>
                <ChevronDown className='chevronDonw' />
            </div>
            <ul>
                {
                    items.map((label) => (
                        <li key={`${iterationKey}-${label}`} className={label === current ? 'current' : ''}>
                            <button title={label} onClick={handleDropDownClick}>{label}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
