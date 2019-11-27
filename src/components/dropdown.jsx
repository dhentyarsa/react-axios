import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropdownMain = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown color='primary' isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        User List
        </DropdownToggle>
            <DropdownMenu>
                {props.renderddown}
            </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownMain;