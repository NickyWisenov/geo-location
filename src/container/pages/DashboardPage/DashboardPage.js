import React from 'react';

import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import TargetList from './TargetList';
import * as DashboardService from '../../../service/dashboard';

import './DashboardPage.scss';
class DashboardPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      targets: [],
      showNew: false,
      edit: false,
      name: '',
      comment: '',
      status: false,
      errMsg: '',
      file: undefined
    }

    this.token = localStorage.getItem('geo-token');
    this.dlgStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0,.3)'
      }
    }
  }

  async componentDidMount() {
    const token = localStorage.getItem('geo-token');
    console.log(token);
    const data = await DashboardService.getTargets(token);
    this.setState({
      targets: data
    })
  }

  handleNew = () => {
    this.setState({ showNew: true, edit: false });
  }

  handleClose = () => {
    this.setState({ showNew: false });
  }

  handleOK = async () => {
    const { edit, name, comment, file, status } = this.state;
    if (!edit) {
      try {
        await DashboardService.createTarget(this.token, name, status, comment, file);
        this.setState({ showNew: false, errMsg: '' });
      } catch (error) {
        console.log(error);
        this.setState({ errMsg: error.toString() });
      }
    }
  }

  changeName = e => {
    this.setState({ name: e.target.value });
  }

  changeComment = e => {
    this.setState({ comment: e.target.value });
  }

  changeFile = acceptedFiles => {
    console.log('changeFile: ', acceptedFiles);
    this.setState({ file: acceptedFiles[0] })
  }

  changeStatus = e => {
    console.log(e.target);
    this.setState({ status: e.target.checked });
  }

  render() {
    const { targets, showNew, edit, name, comment, status } = this.state;
    return (
      <div className="page__dashboard mt-5 pt-2">
        <div className="btn-toolbar pb-2" role="toolbar" aria-label="Toolbar with button groups">
          <div className="mr-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-success btn-sm" onClick={this.handleNew}>
              <i className="fas fa-plus-circle pr-1"></i>
              New</button>
            <button type="button" className="btn btn-outline-dark btn-sm">Edit</button>
            <button type="button" className="btn btn-outline-dark btn-sm">Enable</button>
            <button type="button" className="btn btn-outline-dark btn-sm">Disable</button>
            <button type="button" className="btn btn-outline-dark btn-sm">Trash</button>
          </div>
        </div>
        {targets.length > 0 && (
          <div className='target-list'>
            <TargetList targets={targets} />
          </div>
        )}

        {showNew && (
          <Modal
            isOpen={showNew}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.handleClose}
            style={this.dlgStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >

            <h2 ref={subtitle => this.subtitle = subtitle}>Field Boundaries Kanton Wallis</h2>
            <div className='field'>
              <label>Status:
              <input type='checkbox' checked={status} onChange={this.changeStatus} />
              </label>
            </div>
            <div className='field'>
              <label>Name:
              <input type='text' value={name} onChange={this.changeName} />
              </label>
            </div>
            <div className='field'>
              <label>Comment:
              <input type='text' value={comment} onChange={this.changeComment} />
              </label>
            </div>
            <div className='field'>
              <Dropzone onDrop={this.changeFile}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
            <div className='field'>
              <button onClick={this.handleOK}>OK</button>
              <button onClick={this.handleClose}>Cancel</button>
            </div>
          </Modal>
        )}
      </div>
    )
  }
}

export default DashboardPage;
