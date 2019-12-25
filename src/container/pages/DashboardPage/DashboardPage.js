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

    this.selects = [];
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
    } else {
      try {
        this.handelGeneralHandle(async (item) => {
          return await DashboardService.updateTarget(this.token, item._id, {
            ...item,
            status: this.state.status,
            name: this.state.name,
            comment: this.state.comment,
            file: this.state.file
          });
        })
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

  updateSelects = selects => {
    this.selects = selects;
    console.log(selects);
  }

  handleEditClick = () => {
    if (this.selects.filter((it) => it).length !== 1) { return; }

    this.setState({
      showNew: true,
      edit: true
    });

    this.handelGeneralHandle(async (item) => {
      this.setState({
        name: item.name,
        status: item.status,
        comment: item.comment
      })
    });
  }

  handelGeneralHandle = callback => {
    const { targets } = this.state;
    Promise.all(targets.map(async (item, idx) => {
      if (!this.selects[idx]) return false;
      return callback(item);
    })).then((res) => {
      console.log(res);
    });
  }

  handleEnableClick = () => {
    this.handelGeneralHandle(async (item) => {
      if (item.status === 'on') return false;
      return await DashboardService.updateTarget(this.token, item._id, {
        ...item,
        status: 'on'
      });
    })
  }

  handleDisableClick = () => {
    this.handelGeneralHandle(async (item) => {
      if (item.status !== 'on') return false;
      return await DashboardService.updateTarget(this.token, item._id, {
        ...item,
        status: 'off'
      });
    });
  }

  handleTrashClick = async () => {
    this.handelGeneralHandle(async (item) => {
      return await DashboardService.deleteTarget(this.token, item._id);
    })
  }

  render() {
    const { targets, showNew, name, comment, status } = this.state;

    return (
      <div className="page__dashboard mt-5 pt-2">
        <div className="btn-toolbar pb-2" role="toolbar" aria-label="Toolbar with button groups">
          <div className="mr-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-success btn-sm px-3" onClick={this.handleNew}>
              <i className="fas fa-plus-circle pr-1"></i>
              New</button>
            <button type="button" className="btn btn-outline-dark btn-sm px-3" onClick={this.handleEditClick}>
              <i className="fas fa-edit pr-1"></i>
              Edit</button>
            <button type="button" className="btn btn-outline-primary btn-sm px-3" onClick={this.handleEnableClick}>
              <i className="fas fa-check-circle pr-1"></i>
              Enable</button>
            <button type="button" className="btn btn-outline-danger btn-sm px-3" onClick={this.handleDisableClick}>
              <i className="fas fa-times-circle pr-1"></i>
              Disable</button>
            <button type="button" className="btn btn-outline-warning btn-sm px-3" onClick={this.handleTrashClick}>
              <i className="fas fa-trash pr-1"></i>
              Trash</button>
          </div>
        </div>
        {targets.length > 0 && (
          <div className='target-list pr-4'>
            <TargetList targets={targets} updateSelects={this.updateSelects} />
          </div>
        )}

        {showNew && (
          <Modal
            isOpen={showNew}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.handleClose}
            // style={this.dlgStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className="modal__header">
              <h2 ref={subtitle => this.subtitle = subtitle}>ID 19023123912</h2>
            </div>
            <div className="modal__body">
              <div className='field'>
                <div className="field__left">
                  <label>Status:</label>
                </div>
                <div className="field__right">
                  <div className="toggle">
                    <input type="checkbox" className="check" checked={status === 'on' ? true : false} onChange={this.changeStatus}/>
                    <b className="b switch"></b>
                    <b className="b track"></b>
                  </div>
                </div>
              </div>
              <div className='field'>
                <div className="field__left">
                  <label>Name:</label>
                </div>
                <div className="field__right">
                  <input type='text' value={name} onChange={this.changeName} />
                </div>
              </div>
              <div className='field'>
                <div className="field__left">
                  <label>Comment:</label>
                </div>
                <div className="field__right">
                  <input type='text' value={comment} onChange={this.changeComment} />
                </div>
              </div>
              <div className="field">
                <Dropzone onDrop={this.changeFile}>
                  {({ getRootProps, getInputProps }) => (
                    <section className="drop-zone">
                      <div className="drop-zone-content" {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                        <button className="btn btn-bordered">Browse File</button>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
            </div>
            <div className="modal__footer">
              <button className="btn btn-success btn-sm px-4" onClick={this.handleOK}>OK</button>
              <button className="btn btn-dark btn-sm px-2" onClick={this.handleClose}>Cancel</button>
            </div>
          </Modal>
        )}
      </div>
    )
  }
}

export default DashboardPage;
