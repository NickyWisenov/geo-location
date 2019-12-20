import React from 'react';

import Target from './Target';

const TargetList = (props) => {
  const { targets } = props;
  return (
    <table>
      <thead>
        <tr>
          <th><input type='checkbox' /></th>
          <th>Status</th>
          <th>Name</th>
          <th>Description</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {targets.map(item => (
          <Target key={item._id} data={item} />
        ))}
      </tbody>
    </table>
  )
}

export default TargetList
