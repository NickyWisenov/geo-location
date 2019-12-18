import React from 'react';
import './DashboardPage.scss';

const DashboardPage = () => {
  return(
    <div className="page__dashboard">
      <div className="header">
        <button className="button is-small is-success new">
          <i class="fas fa-plus-circle"></i>
          New
        </button>
        <button className="button is-small edit">
          Edit
        </button>
        <button className="button is-small enable">
          Enable
        </button>
        <button className="button is-small disable">
          Disable
        </button>
        <button className="button is-small trash">
          Trash
        </button>
      </div>
    </div>
  )
}

export default DashboardPage;
