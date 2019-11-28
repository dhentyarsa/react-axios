import React from 'react';
import { DropdownItem } from 'reactstrap';

const DataDroppdown = (props) => {
  return (
        <div>
            <DropdownItem>{props.firstname}{' '}{props.lastname}<br></br>{props.email}</DropdownItem>
            <DropdownItem divider/>
        </div>
  );
}

export default DataDroppdown;