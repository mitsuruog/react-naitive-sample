import React from 'react';
import { ScrollView, View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';

class DummyModel {
  public userId: number;
  public id: number;
  public title: string;
  public body: string;

  constructor(args?: {}) {
    Object.assign(this, args);
  }
}

interface HttpState {
  loading: boolean;
  data: Array<DummyModel>;
}

export default class Http extends React.Component<{}, HttpState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loading: false,
      data: [],
    };
    this.fetch = this.fetch.bind(this);
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    return (
      <View style={style.container}>
        {this.state.loading ? (
          <ActivityIndicator
            style={style.loading}
            size="large"
            animating={this.state.loading}
          />
        ) : (
            <ScrollView>
              {this.state.data.map(item => (
                <View
                  style={style.item}
                  key={item.id}
                >
                  <Text style={style.title}>{item.title}</Text>
                  <Text style={style.body}>{item.body}</Text>
                </View>
              ))}
            </ScrollView>
          )}
        <View style={style.button}>
          <Button
            title="Reload"
            onPress={this.fetch}
          />
        </View>
      </View>
    )
  }
  private fetch() {
    this.setState({ loading: true }, () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((responseJson: Array<DummyModel>) => {
          this.setState({
            data: responseJson.map(item => new DummyModel(item)),
            loading: false,
          });
        })
        .catch(error => {
          console.error(error);
          this.setState({
            loading: false,
          });
        });
    });
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 8,
    borderBottomColor: '#EEE',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {

  },
  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});