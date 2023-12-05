import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import 'react-native-svg';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import SafeArea from '../components/share_component/safeArea';
import Home from './home';
import React, { useState } from 'react';
import News from './news';
import { styles } from '../styles/style';
import Heart from './heart';
import Nutrition from './nutrition';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
function renderSwitch(param: any) {
  switch (param) {
    case 'Home':
      return <Home />;
    case 'News':
      return <News />;
    case 'Heart':
      return <Heart />;
    case 'Nutrition':
      return <Nutrition />;
    default:
      return <Home />;
  }
}
export default function Layout(): any {
  let [screen, changeScreen] = useState('Home');
  let [fontsLoaded, fontError] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });
  const insets = useSafeAreaInsets();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <View style={styles.layout}>
        <View style={[styles.header, { paddingTop: insets.top }]}>
          
        </View>
        <SafeArea>{renderSwitch(screen)}</SafeArea>
        <View style={[styles.tab, { paddingBottom: insets.bottom }]}>
          <FlatList
            data={DATA}
            columnWrapperStyle={styles.row}
            renderItem={({ item }: any) => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  changeScreen(item.title);
                }}>
                <View
                  style={
                    item.title === screen
                      ? [styles.menuIcon, styles.menuIconActive]
                      : [styles.menuIcon, styles.menuIconNoActive]
                  }>
                  <Text
                    style={
                      item.title === screen
                        ? styles.menuTextActive
                        : styles.menuTextNoActive
                    }>
                    {item.icon}
                  </Text>
                </View>
                <Text style={styles.buttonText}>{item.title}</Text>
              </TouchableOpacity>
            )}
            numColumns={DATA.length}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
      </View>
    </>
  );
}

const DATA: any = [
  {
    id: 1,
    title: 'Home',
    icon: <AntDesign name="home" size={20} />,
  },
  {
    id: 2,
    title: 'Nutrition',
    icon: <MaterialCommunityIcons name="chandelier" size={20} />,
  },
  {
    id: 3,
    title: 'Heart',
    icon: <FontAwesome5 name="heartbeat" size={20} />,
  },
  {
    id: 4,
    title: 'News',
    icon: <Entypo name="news" size={20} />,
  },
];
