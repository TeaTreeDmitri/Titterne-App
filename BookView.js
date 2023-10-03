import React, {useEffect, useState}  from 'react';
import { View, ImageBackground, Text, Image, Pressable, FlatList } from 'react-native';

import PagerView from 'react-native-pager-view'

function BookView(props) {

    useEffect(() => {

    }, [props.currentStory])

  return (

<View style={{
                    width: '90%',
                    height: '90%',
                    position: 'absolute',
                    left: '5%',
                    top: '5%'
                }}>
                    <ImageBackground source={require('./assets/BookOpen.png')}
                    style={{
                        position: 'absolute',
                        width: '110%',
                        height: '110%',
                        resizeMode: 'cover',
                        bottom: 0,
                        right: 10,
                    }}>

                    <Pressable onPress={() => props.handleBookClose()}
                    style={{
                        position: 'absolute',
                        right: 20,
                        top: 20,
                        zIndex: 100,
                    }}
                    >
                    <Image source={require('./assets/graphics/closeIcon.png')}
                    style={{
                        width: 80,
                        height: 80,
                        resizeMode: 'contain',
                    }}
                    />
                    </Pressable>

                    {props.currentStory.title != '' && (
                    <Pressable onPress={() => props.handleStoryClose()}
                    style={{
                        position: 'absolute',
                        right: 120,
                        top: 500,
                        zIndex: 100,
                    }}>
                        <Text style={props.styles.pText}
                    >Choose a Different Story</Text>
                    </Pressable>
                    )}

                        {/* story not chosen aka CONTENTS PAGES */}
                        {props.currentStory.title === '' && (
                            <PagerView 
                            initialPage={0}
                            style={{flex: 1}}>

                                <View key="1" style={{
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                }}>
                                    <FlatList 
                                    numColumns={2}
                                    data={props.storyTitles}
                                        renderItem={({item}) => (
                                            <Pressable onPress={() => {
                                                props.setCurrentStory(item)
                                            }}
                                                
                                            style={{
                                                width: '50%',
                                            }}>
                                                <View style={{
                                                    width: '100%',
                                                    flexBasis: '40%',
                                                    marginHorizontal: '5%',
                                                    marginVertical: 5,
                                                    justifyContent: 'space-around',
                                                    alignItems: 'center',
                                                    }}>
                                                        <Image source = {item.thumbnail} style={{
                                                        height: 150,
                                                        width: 150,
                                                        opacity: 0.8,
                                                        }}/>
                                                    <Text style={props.styles.h2Text}>{item.title}</Text>
                                                </View>

                                            </Pressable>
                                        )}
                                    style={{
                                        paddingVertical: '10%',
                                        width: '100%',
                                        height: '100%',
                                    }}
                                        keyExtractor={(item, index) => index.toString()}
                                        />
                                </View>

                            </PagerView>) }

                            {/* story IS CHOSEN, show story */}

                        {props.currentStory.title != '' && (
                            <View style={{flex: 1}}>
                                    {props.renderStoryContents()}
                            </View>
                        )}

                </ImageBackground>
                </View>
  )
}

export default BookView