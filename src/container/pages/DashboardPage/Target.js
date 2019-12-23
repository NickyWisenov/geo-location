import React from 'react';
import disableIcon from '../../../assets/imgs/remove.svg';
import activeIcon from '../../../assets/imgs/correct-symbol.svg';

const Target = props => {
  const { data } = props;
  return (
    <tr>
      <td><span><input type='checkbox' /></span></td>
      <td className="status-cell">
        <div className="status">
          <img src={data.status === 'active' ? activeIcon : disableIcon} alt="icon"/>
        </div>
      </td>
      <td>{data.name}</td>
      <td>{data.comment}</td>
      <td>{data.createDate}</td>
    </tr>
  )
}

export default Target
