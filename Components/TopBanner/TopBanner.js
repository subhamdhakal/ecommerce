import React, {useEffect, useRef} from 'react';
import {ImageBackground, FlatList, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {SliderBox} from 'react-native-image-slider-box';

let CurrentSlide = 0;
let IntervalTime = 2500;
let timerId = null;
function TopBanner() {
  const flatlist = useRef();

  const gotoNextPage = () => {
    if (CurrentSlide >= DATA.length) CurrentSlide = 0;
    flatlist.current.scrollToIndex({
      index: CurrentSlide++,
      animated: true,
    });
  };

  const startAutoPlay = () => {
    timerId = setInterval(gotoNextPage, IntervalTime);
  };

  const stopAutoPlay = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  // useEffect(() => {
  //   stopAutoPlay();
  //   startAutoPlay();
  //   return () => {
  //     stopAutoPlay();
  //   };
  // }, []);
  const DATA = [
    'https://yescart.creatrixtechnologies.com/images/thumbs/0000103_MicrosoftTeams-image (2).png',

    'https://yescart.creatrixtechnologies.com/images/thumbs/0000104_MicrosoftTeams-image (3).png',
  ];

  const renderItem = ({item}) => {
    return (
      <ImageBackground source={item.image} style={styles.img}>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>{item.text}</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  return (
    <SliderBox
      images={DATA}
      sliderBoxHeight={150}
      onCurrentImagePressed={(index) => console.warn(`image ${index} pressed`)}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"
      paginationBoxVerticalPadding={20}
      autoplay
      circleLoop
      resizeMethod={'resize'}
      resizeMode={'cover'}
      paginationBoxStyle={{
        position: 'absolute',
        bottom: 0,
        padding: 0,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
      }}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0,
        padding: 0,
        margin: 0,
        backgroundColor: 'rgba(128, 128, 128, 0.92)',
      }}
      ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 2}}
      imageLoadingColor="#2196F3"
    />
  );
}

export default TopBanner;
