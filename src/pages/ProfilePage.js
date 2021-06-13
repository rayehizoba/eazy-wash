import React from 'react';
import {
  View,
  ScrollView,
  Pressable,
  Text,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import tw from '../lib/tailwind';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from '../components/Toolbar';
import {useBackHandler} from '@react-native-community/hooks';
import Button from '../components/Button';
import * as appActions from '../actions/app';
import * as userActions from '../actions/user';
import {connect} from 'react-redux';
import ValidationError from '../components/ValidationError';
import Validator from '../lib/Validator';

function ProfilePage(props) {

  if (!props.user.model) {
    return null;
  }

  const inputFirstName = React.useRef(null);
  const inputSurname = React.useRef(null);
  const inputEmail = React.useRef(null);
  const inputPhone = React.useRef(null);
  const inputPassword = React.useRef(null);
  const inputAddress = React.useRef(null);

  const [firstname, setFirstName] = React.useState(props.user.model.firstname);
  const [surname, setSurname] = React.useState(props.user.model.surname);
  const [email, setEmail] = React.useState(props.user.model.email);
  const [phone, setPhone] = React.useState(props.user.model.phone);
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState(props.user.model.address);
  const [formErrors, setFormErrors] = React.useState();

  const pressedUpdate = () => {
    const data = {
      firstname,
      surname,
      email,
      phone,
      address,
    };
    const rules = {
      firstname: 'required',
      surname: 'required',
      email: 'required|email',
      phone: 'required',
      address: 'required',
    };
    const validation = new Validator(data, rules);
    if (validation.passes()) {
      setFormErrors(null);
      props.updateProfile(data);
    } else {
      setFormErrors(validation.errors.all());
    }
  };

  React.useEffect(() => {
    if (!props.user.update && props.user.updateSuccess) {
      ToastAndroid.showWithGravity('Your account has been updated successfully', ToastAndroid.LONG, ToastAndroid.CENTER);
    }
    if (!props.user.update && props.user.updateError) {
      ToastAndroid.showWithGravity(props.user.updateError.message, ToastAndroid.LONG, ToastAndroid.CENTER);
    }
  }, [props.user.update]);

  React.useEffect(() => props.clearErrors, []);

  const pressedBack = () => props.navigation.navigate('HomePage');

  useBackHandler(() => {
    pressedBack();
    return true;
  });

  return (
    <>
      <Toolbar title="My Profile" backHandler={pressedBack}/>
      <ScrollView style={tw`p-3`}>
        <View style={tw`flex flex-row justify-center py-5`}>
          <Image
            style={tw`h-24 w-24 rounded-full bg-gray-200`}
            source={{uri: props.user.model.avatar}}
          />
        </View>
        <TouchableOpacity>
          <Text style={tw`uppercase text-blue-600 font-bold text-center`}>
            Change Avatar
          </Text>
        </TouchableOpacity>

        <View style={tw`mt-5 border-2 border-gray-200 rounded-2xl`}>
          <View style={tw`border-b-2 border-gray-200 p-3`}>
            <TouchableWithoutFeedback onPress={() => inputFirstName.current.focus()}>
              <Text style={tw`text-gray-400 font-bold`}>
                Full name
              </Text>
            </TouchableWithoutFeedback>
            <View style={tw`flex flex-row`}>
              <View style={tw`w-1/2`}>
                <TextInput
                  ref={inputFirstName}
                  value={firstname}
                  onChangeText={setFirstName}
                  onSubmitEditing={() => inputSurname.current.focus()}
                  returnKeyType={'next'}
                  blurOnSubmit={false}
                  style={tw`text-xl font-medium text-gray-800 p-1`}
                  editable={!props.user.update}
                  placeholder="First Name"
                />
              </View>
              <View style={tw`w-1/2`}>
                <TextInput
                  ref={inputSurname}
                  value={surname}
                  onChangeText={setSurname}
                  onSubmitEditing={() => inputEmail.current.focus()}
                  returnKeyType={'next'}
                  blurOnSubmit={false}
                  style={tw`text-xl font-medium text-gray-800 p-1`}
                  editable={!props.user.update}
                  placeholder="Surname"
                />
              </View>
            </View>
            <ValidationError name="firstname" errors={formErrors}/>
            <ValidationError name="surname" errors={formErrors}/>
          </View>
          <View style={tw`border-b-2 border-gray-200 p-3`}>
            <TouchableWithoutFeedback onPress={() => inputEmail.current.focus()}>
              <Text style={tw`text-gray-400 font-bold`}>
                Email address
              </Text>
            </TouchableWithoutFeedback>
            <TextInput
              ref={inputEmail}
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={() => inputPhone.current.focus()}
              returnKeyType={'next'}
              blurOnSubmit={false}
              keyboardType="email-address"
              autoCapitalize="none"
              style={tw`text-xl font-medium text-gray-800 p-1`}
              editable={!props.user.update}
              placeholder="Email address"
            />
            <ValidationError name="email" errors={formErrors}/>
          </View>
          <View style={tw`border-b-2 border-gray-200 p-3`}>
            <TouchableWithoutFeedback onPress={() => inputPhone.current.focus()}>
              <Text style={tw`text-gray-400 font-bold`}>
                Phone number
              </Text>
            </TouchableWithoutFeedback>
            <TextInput
              ref={inputPhone}
              value={phone}
              onChangeText={setPhone}
              onSubmitEditing={() => inputAddress.current.focus()}
              returnKeyType={'next'}
              blurOnSubmit={false}
              keyboardType="phone-pad"
              style={tw`text-xl font-medium text-gray-800 p-1`}
              editable={!props.user.update}
              placeholder="Phone number"
            />
            <ValidationError name="phone" errors={formErrors}/>
          </View>
          <View style={tw`p-3`}>
            <TouchableWithoutFeedback onPress={() => inputAddress.current.focus()}>
              <Text style={tw`text-gray-400 font-bold`}>
                Delivery address
              </Text>
            </TouchableWithoutFeedback>
            <TextInput
              ref={inputAddress}
              value={address}
              onChangeText={setAddress}
              style={tw`text-xl font-medium text-gray-800 p-1`}
              editable={!props.user.update}
              placeholder="Delivery address"
              multiline
              numberOfLines={3}
            />
            <ValidationError name="address" errors={formErrors}/>
          </View>
          <Button
            onPress={pressedUpdate}
            title="Update Account"
            disabled={props.user.update}
          />
        </View>
        <Button outline title="Contact Us" style={tw`my-3`}/>
        <Button onPress={props.logout} outline title="Sign Out" style={tw`mb-3`}/>
        <Text style={tw`text-xs text-gray-400 text-center`}>
          Made by devshop 🖥️📱 2021
        </Text>
        <View style={tw`h-10`}/>
      </ScrollView>
    </>
  );
}

const mapStateToProps = state => ({
  app: state.app,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(appActions.clearErrors()),
  logout: () => dispatch(userActions.logout()),
  updateProfile: (data) => dispatch(userActions.updateProfile(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
