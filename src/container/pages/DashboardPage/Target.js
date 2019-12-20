import React from 'react';

const Target = props => {
  const { data } = props;
  return (
    <tr>
      <td><span><input type='checkbox' /></span></td>
      <td><button className={data.status ? 'active' : ''} /></td>
      <td>{data.name}</td>
      <td>{data.comment}</td>
      <td>{data.createDate}</td>
    </tr>
  )
}

export default Target
