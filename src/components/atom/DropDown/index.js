import { Dropdown } from "react-bootstrap";

export const DropDown = (props) => {
    const {
        current,
        setCurrent,
        items,
    } = props;

    const handleDropDownClick = (e) => {
        setCurrent(e.currentTarget.title);
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success">
                {current || '선택'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    items.map((item, index) => (
                        <Dropdown.Item key={index} title={item} onClick={handleDropDownClick}>{item}</Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}
