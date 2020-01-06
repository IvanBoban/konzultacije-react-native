
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: DetailsScreen},
});
const App = createAppContainer(MainNavigator);
export default App;

