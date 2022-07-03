import React from 'react'
import { View, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity, Animated } from 'react-native'
import StyleText from '../Theme/Text'

const { width, height } = Dimensions.get('window')

const ITEM_SIZE = width * 0.80;
const SPACE_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const ITEM_HEIGHT = height * 0.85
const SPACE_ITEM_SIZE_HEIGTH = (height - ITEM_HEIGHT) / 2;

const getItemLayout = (data, index) => (
  {length: width, offset: (width * 0.8) * index, index}
)

export default function Slider({ objects, navigation }) {
  
  const scrollX = React.useRef(new Animated.Value(0)).current
  return (
    <View style={styles.container}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={objects}
        horizontal
        pagingEnabled
        snapToAlignment={"start"}
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        bounces={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        scrollEventThrottle={16}

        initialScrollIndex={1}
        getItemLayout={getItemLayout}
        
        renderItem={({ item, index }) => {

          if (!item.image) {
            return <View style={{ width: SPACE_ITEM_SIZE }} />
          }
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            (index) * ITEM_SIZE
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, 50, 0]
          })

          return (
            <View  key={item.key} style={{ width: ITEM_SIZE, height: ITEM_HEIGHT, paddingVertical: SPACE_ITEM_SIZE_HEIGTH + 10 }}>
              <Animated.View
                style={{
                  marginHorizontal: 10,
                  padding: 10,
                  alingItems: 'center',
                  backgroundColor: 'transparent',
                  borderRadius: 30,
                  transform: [{ translateY }]
                }}>

                <TouchableOpacity onPress={() => { navigation.navigate(item.component) }} style={{ alignItems: 'center' }}>
                  <Image
                    source={ item.image }
                    style={styles.image}>
                  </Image>
                  <StyleText fontSize='large' fontWeight='bold' color='primary'>{item.title}</StyleText>
                </TouchableOpacity>
                <View style={styles.content}>
                  <StyleText fontSize='small' fontWeight='normal' color='secondary'>{item.description}</StyleText>
                </View>
              </Animated.View>
            </View>
          )
        }}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: '100%',
    height: ITEM_SIZE * .88,
    resizeMode: 'cover'
  }
  ,
  content: {
    alignItems: 'center',
    paddingTop: 10
  }
})