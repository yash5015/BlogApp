import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Home from './MainApp/Home';
import Interest from './MainApp/Interest';
import Explore from './MainApp/Explore';
import Saved from './MainApp/Saved';
import Profile from './MainApp/Profile';
import FloatingActionButton from './MainApp/FloatingActionButton';
import Deatils from './MainApp/Deatils';

const HomeRoute = () => <Home />;

const ExploreRoute = () => <Explore />;

const SavedRoute = () => <Deatils />;

const ProfileRoute = () => <Profile />;

const HomeMain = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'Home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'Explore',
      title: 'Explore',
      focusedIcon: 'compass',
      unfocusedIcon: 'compass-outline',
    },
    {
      key: 'Saved',
      title: 'Saved',
      focusedIcon: 'bookmark',
      unfocusedIcon: 'bookmark-outline',
    },
    {
      key: 'Profile',
      title: 'Profile',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: HomeRoute,
    Explore: ExploreRoute,
    Saved: SavedRoute,
    Profile: ProfileRoute,
  });

  const [activeTabs, setActiveTabs] = React.useState();

  const handleTabs = ({route}) => {
    setActiveTabs(route['key']);
  };

  return (
    <>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={false}
        compact={false}
        activeColor="blue"
        inactiveColor="grey"
        onTabPress={handleTabs}
      />
      {/* {index === 0 || activeTabs === 'Home' ? <FloatingActionButton /> : null} */}
    </>
  );
};

export default HomeMain;
