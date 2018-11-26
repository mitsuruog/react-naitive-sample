import React from 'react';
import { View, ScrollView, StyleSheet, TextInput, Text, Switch, Slider, Picker, KeyboardAvoidingView } from 'react-native';

interface FormState {
  formValues: {
    input?: string;
    password?: string;
    switch?: boolean;
    textarea?: string;
    slider?: number;
    picker?: string;
  };
  formValid: boolean;
}

export default class Form extends React.Component<{}, FormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      formValues: {},
      formValid: false,
    };
    this.onFormChange = this.onFormChange.bind(this);
    this.validation = this.validation.bind(this);
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        // AndroidとiOSでkeyboardのサイズが違う場合はどうするんだろう
        keyboardVerticalOffset={124}
        enabled={true}
      >
        <ScrollView>
          <View style={style.container}>
            <View style={style.formGroup}>
              <Text style={style.label}>Input</Text>
              <TextInput
                style={style.input}
                value={this.state.formValues.input}
                onChangeText={(value) => this.onFormChange({ input: value })}
              />
            </View>
            <View style={style.formGroup}>
              <Text style={style.label}>Password</Text>
              <TextInput
                style={style.input}
                secureTextEntry={true}
                textContentType={'password'}
                value={this.state.formValues.password}
                onChangeText={(value) => this.onFormChange({ password: value })}
              />
            </View>
            <View style={style.formGroup}>
              <Text style={style.label}>Textarea</Text>
              <TextInput
                style={style.textarea}
                value={this.state.formValues.textarea}
                multiline={true}
                numberOfLines={4}
                onChangeText={(value) => this.onFormChange({ textarea: value })}
              />
            </View>
            <View style={style.formGroup}>
              <Text style={style.label}>Switch</Text>
              <Switch
                value={this.state.formValues.switch}
                onValueChange={(value) => this.onFormChange({ switch: value })}
              />
            </View>
            <View style={style.formGroup}>
              <Text style={style.label}>Slider</Text>
              <Slider
                minimumValue={0}
                maximumValue={100}
                step={10}
                value={this.state.formValues.slider}
                onValueChange={(value) => this.onFormChange({ slider: value })}
              />
            </View>
            <View style={style.formGroup}>
              <Text style={style.label}>Picker</Text>
              <Picker
                selectedValue={this.state.formValues.picker}
                onValueChange={(value) => this.onFormChange({ picker: value })}
              >
                <Picker.Item label="aaa" value="aaa" />
                <Picker.Item label="bbb" value="bbb" />
                <Picker.Item label="ccc" value="ccc" />
              </Picker>
            </View>

            <Text>FormValues:</Text>
            <Text>{JSON.stringify(this.state, null, 2)}</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
  private onFormChange(partialFormValue: {}) {
    this.setState({ formValues: Object.assign({}, this.state.formValues, partialFormValue) }, () => {
      this.validation();
    });
  }
  private validation() {
    // なにかいいバリデーションロジック
    this.setState({ formValid: Boolean(Math.floor((Math.random() * 10)) % 2) });
  }
}

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
  textarea: {
    padding: 8,
    borderColor: '#B8BEC2',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
  }
});