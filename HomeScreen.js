import React, { Component } from 'react'
import { View, FlatList, ActivityIndicator, Button  } from 'react-native';
export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Odsjeci'
      };


    constructor(props){
    super(props);
    this.state ={ isLoading: true}
    }
    componentDidMount(){
          return fetch(`https://nastavnici-api.herokuapp.com/odsjeci`)
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
          onPress={() => navigate('Department', {
                department: `${item.code}`
          } )}
          >
            </Button>
            }  
               
            />
            
      </View>
      );
        
    }
}
