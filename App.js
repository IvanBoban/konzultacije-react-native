
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DepartmentScreen from './DepartmentScreen';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen'
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Department: {screen: DepartmentScreen},
  Profile: {screen: DetailsScreen},
});
const App = createAppContainer(MainNavigator);
export default App;

