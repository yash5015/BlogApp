// First Method

// import React, {useRef, useState} from 'react';
// import {View, Button} from 'react-native';
// import {RichEditor, RichToolbar, actions} from 'react-native-pell-rich-editor';

// const RichTextEditor = () => {
//   const editorRef = useRef();
//   const [disabled, setDisable] = useState(false);
//   return (
//     <View style={{height: '100%', width: '100%'}}>
//       <RichToolbar
//         editor={editorRef}
//         iconTint="#000000"
//         selectedIconTint="#2095F2"
//         selectedButtonStyle={{
//           backgroundColor: 'lightgrey',
//         }}
//         actions={[
//           actions.setBold,
//           actions.setItalic,
//           actions.setUnderline,
//           actions.alignCenter,
//           actions.alignRight,
//           actions.alignFull,
//           actions.insertBulletsList,
//           actions.insertOrderedList,
//           actions.setTextColor,
//           actions.fontSize,
//         ]}

//       />
//       <RichEditor
//         // disabled={disabled}
//         // scrollEnabled={false}
//         // editorInitializedCallback={() => setDisable(true)}
//         ref={editorRef}
//         style={{
//           minHeight: 150,
//         }}
//         useContainer
//       />
//     </View>
//   );
// };

// export default RichTextEditor;

// Second Method

// import React from 'react';
// import {
//   Text,
//   Platform,
//   KeyboardAvoidingView,
//   SafeAreaView,
//   ScrollView,
// } from 'react-native';
// import {actions, RichEditor, RichToolbar} from 'react-native-pell-rich-editor';

// const handleColor = ({tintColor}) => <Text style={{color: tintColor}}>H1</Text>;
// const RichTextEditor = () => {
//   const richText = React.useRef();
//   return (
//     <SafeAreaView>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={{flex: 1, backgroundColor: 'yellow'}}>
//         <RichToolbar
//           editor={richText}
//           actions={[
//             actions.setBold,
//             actions.setItalic,
//             actions.setUnderline,
//             actions.alignCenter,
//             actions.alignRight,
//             actions.alignFull,
//             actions.insertBulletsList,
//             actions.insertOrderedList,
//             actions.setTextColor,
//             actions.fontSize,
//           ]}
//           iconMap={{[actions.setTextColor]: handleColor}}
//         />
//         {/* <ScrollView> */}
//         <RichEditor
//           useContainer={true}
//           ref={richText}
//           onChange={descriptionText => {
//             console.log('descriptionText:', descriptionText);
//           }}
//         />
//         {/* </ScrollView> */}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default RichTextEditor;

// Third Method

import React, {forwardRef, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  KeyboardAvoidingViewBase,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';

const RichTextEditor = ({Myref}) => {
  // const RichTextRef = useRef(); //reference to the RichEditor component
  const [article, setArticle] = useState('');

  // this function will be called when the editor has been initialized
  function editorInitializedCallback() {
    Myref.current?.registerToolbar(function (items) {
      // items contain all the actions that are currently active
      console.log(
        'Toolbar click, selected items (insert end callback):',
        items,
      );
    });
  }

  // Callback after height change
  // function handleHeightChange(height) {
  //   console.log('editor height change:', height);
  //   RichTextRef.current?.blurContentEditor();
  // }

  const DisableKeyboard = () => {
    Myref.current?.blurContentEditor();
  };

  return (
    <View style={styles.container}>
      <RichToolbar
        style={[styles.richBar]}
        editor={Myref}
        disabled={false}
        iconTint={'black'}
        selectedIconTint={'black'}
        selectedButtonStyle={{
          backgroundColor: 'lightgrey',
        }}
        disabledIconTint={'black'}
        iconSize={16}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.alignLeft,
          actions.alignCenter,
          actions.alignRight,
          actions.alignFull,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertLine,
          actions.fontSize,
        ]}

        // map icons for self made actions
      />
      <RichEditor
        disabled={false}
        containerStyle={styles.editor}
        ref={Myref}
        style={styles.rich}
        onChange={text => setArticle(text)}
        editorInitializedCallback={editorInitializedCallback}
        // onHeightChange={DisableKeyboard}
      />
    </View>
  );
};

export default RichTextEditor;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#F5FCFF',
    borderColor: 'lightgrey',
    borderWidth: 0.4,
    minHeight: 180,
    borderRadius: 10,
  },
  editor: {
    borderColor: 'lightgreay',
    // borderTopWidth: 0.1,
  },
  richBar: {
    // height: 50,
    backgroundColor: '#fff',
    alignItems: 'flex-start',

    borderBottomWidth: 0.2,
  },
  rich: {
    // height: 60,
    flex: 1,
  },
});
