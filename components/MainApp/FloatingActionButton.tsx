import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {FAB, Portal} from 'react-native-paper';

const FloatingActionButton = () => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  const navigation = useNavigation();

  return (
    <Portal>
      <FAB
        visible
        icon={open ? 'calendar-today' : 'plus'}
        // actions={[
        //   {icon: 'plus', onPress: () => console.log('Pressed add')},
        //   {
        //     icon: 'star',
        //     label: 'Star',
        //     onPress: () => console.log('Pressed star'),
        //   },
        //   {
        //     icon: 'email',
        //     label: 'Email',
        //     onPress: () => console.log('Pressed email'),
        //   },
        //   {
        //     icon: 'bell',
        //     label: 'Remind',
        //     onPress: () => console.log('Pressed notifications'),
        //   },
        // ]}
        // onStateChange={onStateChange}
        onPress={() => {
          // if (open) {
          // }
          // do something if the speed dial is open
          navigation.navigate('UploadBlog');
        }}
        color="white"
        style={{
          // display: `${show ? 'none' : 'flex'}`,
          position: 'absolute',
          bottom: 120,
          zIndex: 1,
          right: 15,
          // paddingBottom: 10,
          backgroundColor: 'blue',
          borderRadius: 50,
        }}
        fabStyle={{}}
      />
    </Portal>
  );
};

export default FloatingActionButton;
