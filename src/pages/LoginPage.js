import React from 'react';
import {View, Pressable, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import tw from '../lib/tailwind';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Space from '../components/Space';
import Button from '../components/Button';
import Validator from '../lib/Validator';
import ValidationError from '../components/ValidationError';
import * as app from '../../app.json';
import * as userActions from '../actions/user';
import {connect} from 'react-redux';

function LoginPage(props) {

  const inputEmail = React.useRef(null);
  const inputPassword = React.useRef(null);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [formErrors, setFormErrors] = React.useState();

  const pressedLogin = () => {
    const data = {email, password};
    const rules = {
      email: 'required|email',
      password: 'required|min:5',
    };
    const validation = new Validator(data, rules);
    if (validation.passes()) {
      setFormErrors(null);
      props.login(email, password);
    } else {
      setFormErrors(validation.errors.all());
    }
  };

  return (
    <View style={tw`p-3 flex-1 flex flex-col justify-center`}>
      <View>
        <Space X={1} style={tw`flex flex-row items-center justify-center`}>
          <Text style={tw`text-2xl text-blue-600 font-bold tracking-tighter`}>
            {app.name}
          </Text>
          <Icon name="washing-machine" style={tw`text-4xl text-blue-600`}/>
        </Space>
        <View style={tw`mt-5 border-2 border-gray-200 rounded-2xl`}>
          <View style={tw`border-b-2 border-gray-200 p-3`}>
            <TouchableWithoutFeedback onPress={() => inputEmail.current.focus()}>
              <Text style={tw`text-gray-400 font-bold`}>
                Email address
              </Text>
            </TouchableWithoutFeedback>
            <TextInput
              autoFocus
              ref={inputEmail}
              value={email}
              onChangeText={setEmail}
              onSubmitEditing={() => inputPassword.current.focus()}
              returnKeyType={'next'}
              keyboardType="email-address"
              blurOnSubmit={false}
              style={tw`text-xl font-medium text-gray-800 p-1`}
              autoCapitalize="none"
              editable={!props.user.login}
            />
            <ValidationError name="email" errors={formErrors}/>
          </View>
          <View style={tw`border-b-2 border-gray-200 p-3`}>
            <TouchableWithoutFeedback onPress={() => inputPassword.current.focus()}>
              <Text style={tw`text-gray-400 font-bold`}>
                Password
              </Text>
            </TouchableWithoutFeedback>
            <TextInput
              ref={inputPassword}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={pressedLogin}
              selectTextOnFocus
              style={tw`text-xl font-medium text-gray-800 p-1`}
              editable={!props.user.login}
            />
            <ValidationError name="password" errors={formErrors}/>
          </View>
          <Button onPress={pressedLogin} disabled={props.user.login} title="Sign In"/>
        </View>
        <Button
          onPress={() => props.navigation.navigate('RegisterPage')}
          outline
          disabled={props.user.login}
          title="Register Now"
          style={tw`mt-5`}
        />
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(userActions.login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
