import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone-s3-uploader';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ImageUpload.css';
const dropStyles = {
  width: '200px',
  height: '50px',
  border: '1px solid black',
  backgroundColor: 'whitesmoke',
  color: 'green',
};

class ImageUpload extends Component {
  handleFinishedUpload = (info) => {
    console.log(this.props.id);
    this.setState({
      avatar: info.fileUrl,
    });
    console.log(info);
    console.log(info.fileUrl);
    // this.props.dispatch({
    //   type: 'POST_IMAGE_URL',
    //   payload: info.fileUrl,
    // });
    const avatarInfo = { avatarPath: info.fileUrl, avatarId: this.props.id };
    this.props.dispatch({
      type: 'UPDATE_USER_AVATAR',
      payload: avatarInfo,
    });
  };
  render() {
    // const uploadOptions = {
    //   server: 'https://retired-for-hire.herokuapp.com',
    //   // server: 'http://localhost:5000',
    //   //server: localhost:5000 to run locally instead of heroku
    //   signingUrlQueryParams: { uploadType: 'avatar' },
    // };
    const s3Url = 'https://retired-for-hire.s3.amazonaws.com';

    const innerDropElement = (
      <div className="inner-drop">
        <p>Click or Select a File Here</p>
      </div>
    );

    const toast = (innerHTML) => {
      const el = document.getElementById('toast');
      el.innerHTML = innerHTML;
      el.className = 'show';
      setTimeout(() => {
        el.className = el.className.replace('show', '');
      }, 3000);
    };

    const getUploadParams = () => {
      return { url: 'https://retired-for-hire.herokuapp.com' };
    };

    const handleChangeStatus = ({ meta, remove }, status) => {
      if (status === 'headers_received') {
        toast(`${meta.name} uploaded!`);
        remove();
      } else if (status === 'aborted') {
        toast(`${meta.name}, upload failed...`);
      }
    };
    return (
      <React.Fragment>
        <div id="toast">Upload an Image Here</div>
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          // upload={uploadOptions}
          s3Url={s3Url}
          maxFiles={1}
          multiple={false}
          canCancel={false}
          inputContent="Drop A File"
          styles={{
            dropzone: { width: 400, height: 200 },
            dropzoneActive: { borderColor: 'green' },
          }}
        />
      </React.Fragment>
      // <DropzoneS3Uploader
      //   getUploadParams={getUploadParams}
      //   onChangeStatus={handleChangeStatus}
      //   children={innerDropElement}
      //   onFinish={this.handleFinishedUpload}
      //   s3Url={s3Url}
      //   // style={dropStyles}
      //   maxSize={1024 * 1024 * 5}
      //   upload={uploadOptions}
      // />
    );
  }
}

export default connect(mapStoreToProps)(ImageUpload);
