import React, { Component } from 'react'; 
import {  View, FlatList, ActivityIndicator, Button  } from 'react-native';
export default class DepartmentScreen extends Component {
    static navigationOptions = {
        title: 'Termini Konzultacija',
      };
    constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }
  
    componentDidMount(){
      const { navigation  } = this.props;
      const department= navigation.getParam('department')
        return fetch(`https://nastavnici-api.herokuapp.com/${department}`)
        .then((response) =>response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
      
    }
    render() {
      const { navigation  } = this.props;
      const {navigate} = this.props.navigation;
      if (this.state.isLoading){
        return (
          <View style={{flex: 1, padding:20}}>
            <ActivityIndicator/>
          </View>
        )  
      }
      return (
        <View style={{flex: 1}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <Button
          title={item.name} 
          key={item.id}
          onPress={() => navigate('Profile', {
              name: `${item.name}`,
              room: `${item.room}`,
              email: `${item.email}`,
              konz1: `${item.konz1}`,
              konz2: `${item.konz2}`,
          } )}
          >
            </Button>
            }  
               
            />
            
      </View>
      );
    }
  }
  
  
  