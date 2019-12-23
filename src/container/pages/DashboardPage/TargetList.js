import React from 'react';

import Target from './Target';

const TargetList = (props) => {
  const { targets, updateSelects } = props;

  const [all, setAll] = React.useState(false);
  const [selects, setSelects] = React.useState(targets.map(item => false))

  React.useEffect(() => {
    const newAll = targets.map(item => all);
    setSelects(newAll)
    updateSelects(newAll)
  }, [all])

  React.useEffect(() => {
    const newAll = targets.map(item => false);
    setSelects(newAll)
    updateSelects(newAll)
  }, [targets])

  const onCheck = e => {
    setAll(e.target.checked)
  }

  const setSelect = idx => value => {
    if (selects) { selects[idx] = value }
    const newAll = [...selects];
    setSelects(newAll)
    updateSelects(newAll)
  }

  return (
    <table className="table table-bordered dataTable">
      <thead>
        <tr role="row">
          <th><input type='checkbox' onChange={onCheck} checked={all} /></th>
          <th>Status</th>
          <th>Name</th>
          <th>Description</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {targets.map((item, idx) => (
          <Target key={idx} data={item} setSelect={setSelect(idx)} selected={selects[idx]} />
        ))}
      </tbody>
    </table>
  )
}

export default TargetList
