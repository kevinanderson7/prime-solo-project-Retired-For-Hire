import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
    const uploadOptions = {
      server: 'https://retired-for-hire.herokuapp.com',
      // server: 'http://localhost:5000',
      //server: localhost:5000 to run locally instead of heroku
      signingUrlQueryParams: { uploadType: 'avatar' },
    };
    const s3Url = 'https://retired-for-hire.s3.amazonaws.com';
    return (
      <DropzoneS3Uploader
        onFinish={this.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
    );
  }
}

export default connect(mapStoreToProps)(ImageUpload);
