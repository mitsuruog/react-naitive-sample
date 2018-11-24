import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface LoginState {
  formValid: boolean;
  formValue: {
    userName: string;
    password: string;
  }
}

export default class Login extends React.Component<{}, LoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      formValid: false,
      formValue: {
        userName: '',
        password: '',
      }
    };
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onPress = this.onPress.bind(this);
    this.validate = this.validate.bind(this);
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.formGroup}>
          <Text style={style.label}>UserName</Text>
          <TextInput
            style={style.input}
            underlineColorAndroid="transparent"
            placeholder="aaa"
            placeholderTextColor="#B8BEC2"
            autoCapitalize="none"
            onChangeText={this.onChangeUserName}
          />
        </View>
        <View style={style.formGroup}>
          <Text style={style.label}>Password</Text>
          <TextInput
            style={style.input}
            underlineColorAndroid="transparent"
            placeholder="aaa"
            placeholderTextColor="#B8BEC2"
            autoCapitalize="none"
            onChangeText={this.onChangePassword}
          />
        </View>
        <Button
          title="Login"
          disabled={!this.state.formValid}
          onPress={this.onPress}
        />
      </View>
    );
  }
  private onPress() {

  }
  private onChangeUserName(userName: string) {
    this.setState({ formValue: { userName } }, () => this.validate());
  }
  private onChangePassword(password: string) {
    this.setState({ formValue: { password } }, () => this.validate());
  }
  private validate() {
    const { userName, password } = this.state.formValue;
    this.setState({ formValid: Boolean(userName && password) });
  };
};

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    padding: 8,
    borderColor: '#B8BEC2',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
  },
});