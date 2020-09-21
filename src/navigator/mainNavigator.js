import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList105028Navigator from '../features/ArticleList105028/navigator';
import ArticleList105027Navigator from '../features/ArticleList105027/navigator';
import ArticleList105026Navigator from '../features/ArticleList105026/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList105028: { screen: ArticleList105028Navigator },
ArticleList105027: { screen: ArticleList105027Navigator },
ArticleList105026: { screen: ArticleList105026Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
