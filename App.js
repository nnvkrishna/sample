

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import './src/i18n'; 
import { useTranslation } from 'react-i18next';


import {TranslatorProvider} from 'react-native-translator'
import Translator from 'react-native-translator';

function App(){

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    // <View>
    // <SafeAreaView style={styles.container}>
    //  <View>
    //   <Translator
    //     from="en"
    //     to="zh"
    //     value={value}
    //     onTranslated={(t) => setResult(t)}
    //   />
    //   <TextInput value={value} style={{color:'black',fontSize:30}} onChangeText={(t) => setValue(t)} />
    //   <Text style={{color:'black',fontSize:30}}>{result}</Text>
    // </View>
    
    // </SafeAreaView>
    // </View>
   <View>
     <Text>{t('welcome')}</Text>
      <Text>{t('greeting')}</Text>

      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="Spanish" onPress={() => changeLanguage('es')} />
      </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
