import ImagePicker from 'react-native-image-crop-picker';
import React, {useState} from 'react';
import {heightToDp, widthToDp} from '../Dimensions/dimension';

// --------------image picker from camera--------------------------------------

const imagePickerCamera = async (type = null) => {
  let imagePath = '';
  await ImagePicker.openCamera({
    width: widthToDp(100),
    height: heightToDp(50),
    cropping: true,
    freeStyleCropEnabled: true,
  }).then(image => {
    imagePath = image.path;
  });
  return imagePath;
};

// ----------------image picker from  gallery-------------------------------------

const imagePickerGallery = async (type = null) => {
  let imagePath = '';
  await ImagePicker.openPicker({
    width: widthToDp(100),
    height: heightToDp(50),
    cropping: true,
    freeStyleCropEnabled: true,
  }).then(image => {
    imagePath = image.path;
  });
  return imagePath;
};

export {imagePickerCamera, imagePickerGallery};
