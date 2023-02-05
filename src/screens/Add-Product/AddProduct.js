import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {heightToDp, widthToDp} from '../../utils/Dimensions/dimension';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../../store/slice/product-slice';
import RBSheet from 'react-native-raw-bottom-sheet';
import PickPhotoBottomSheet from '../../components/ImagePickerBottomSheet/ImagePickerBottomSheet';
import {
  imagePickerCamera,
  imagePickerGallery,
} from '../../utils/image/imagePicker';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/native';

export default function AddProduct() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [offerPrice, setOfferPrice] = useState();
  const [imagePath, setImagePath] = useState(null);
  const dispatch = useDispatch();
  const refRBSheet = useRef();
  const navigation = useNavigation();

  const {uid} = useSelector(state => state.auth);

  const bottomSheetHandle = documentType => {
    refRBSheet.current.open();
  };

  const setKYC = async pickerType => {
    const a =
      pickerType == 'camera' ? imagePickerCamera() : imagePickerGallery();
    a.then(path => {
      uploadImageToFireBase(path);
    }).catch(error => {
      // Alert.alert('Something wrong !', 'Please check your internet connection');
    });
  };

  async function uploadImageToFireBase(path) {
    const imageRef = storage().ref(`${path}/${name}`);
    await imageRef.putFile(path, {contentType: 'image/jpg'}).catch(error => {
      throw error;
    });
    const url = await imageRef.getDownloadURL().catch(error => {
      throw error;
    });
    setImagePath(url);

    // task
    //   .then(e => {
    //     // 4
    //     console.log(e.downloadURL);
    //     console.log('Image uploaded to the bucket!');
    //   })
    //   .catch(e => console.log('uploading image error => ', e));
  }
  const handleSubmit = () => {
    dispatch(
      addProduct({
        user_id: uid,
        name: name,
        price: price,
        offerPrice: offerPrice,
        image_url: imagePath,
      }),
    )
      .unwrap()
      .then(() => {
        navigation.navigate('Products');
      })
      .catch(e => {
        alert('Some Error Occured');
      });
  };
  return (
    <>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'blue', fontSize: 25, margin: widthToDp(5)}}>
          WS Assignment
        </Text>
        <Text style={{color: 'black', fontSize: 18, margin: widthToDp(5)}}>
          Add your product
        </Text>
        <TextInput
          placeholder="Name"
          mode="outlined"
          style={{width: widthToDp(50)}}
          label={'Name'}
          onChangeText={val => {
            setName(val);
          }}
          value={name}
        />
        <TextInput
          placeholder="Price"
          mode="outlined"
          style={{width: widthToDp(50)}}
          label={'Price'}
          onChangeText={val => {
            setPrice(val);
          }}
          value={price}
        />
        <TextInput
          placeholder="Offer Price"
          mode="outlined"
          style={{width: widthToDp(50)}}
          label={'Offer Price'}
          onChangeText={val => {
            setOfferPrice(val);
          }}
          value={offerPrice}
        />
        {imagePath !== null ? (
          <Image
            source={{uri: imagePath}}
            style={{width: widthToDp(40), height: heightToDp(10)}}
            resizeMode="contain"
          />
        ) : null}

        <TouchableOpacity
          onPress={() => bottomSheetHandle()}
          style={{
            width: widthToDp(40),
            height: heightToDp(5),
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
            margin: widthToDp(5),
          }}>
          <Text>Upload Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={{
            width: widthToDp(40),
            height: heightToDp(5),
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Sumbit</Text>
        </TouchableOpacity>
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        onClose={pickerType => pickerType && setKYC(pickerType)} //call setKyc and pass current document type and pickerType  if picker type is not undefined
        closeDuration={0} // close duration
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: 'black',
          },
        }}>
        <PickPhotoBottomSheet refRBSheet={refRBSheet} setKYC={setKYC} />
      </RBSheet>
    </>
  );
}
