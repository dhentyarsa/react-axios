import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DataDroppdown = (props) => {
  return (
    <DropdownItem>{props.firstname}{' '}{props.lastname}<br></br>{props.email}</DropdownItem>
  );
}

export default DataDroppdown;