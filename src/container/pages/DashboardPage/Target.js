import React from 'react';

const Target = props => {
  const { data, setSelect, selected } = props;
  const activeIcon = "fas fa-check-circle pr-1 text-success";
  const disableIcon = "fas fa-times-circle pr-1 text-danger";

  return (
    <tr>
      <td><span><input type='checkbox' checked={selected} onChange={e => setSelect(e.target.checked)} /></span></td>
      <td className="status-cell">
        <div className="status">
          <i className={data.status === 'on' ? activeIcon : disableIcon}></i>
        </div>
      </td>
      <td>{data.name}</td>
      <td>{data.comment}</td>
      <td>{data.createDate}</td>
    </tr>
  )
}

export default Target
