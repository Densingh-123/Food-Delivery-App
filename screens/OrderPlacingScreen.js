import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const OrderPlacingScreen = () => {
    const navigation = useNavigation();
    const [bar, setBar] = useState(0);

    useEffect(() => {
        // Increment progress every 500ms
        const interval = setInterval(() => {
            setBar((prevBar) => {
                if (prevBar < 1) {
                    return prevBar + 0.1;
                } else {
                    clearInterval(interval); // Clear interval once progress reaches 1
                    return 1;
                }
            });
        }, 500);

        // Navigate to the 'Delivery' screen after 6 seconds
        const timeout = setTimeout(() => {
            navigation.navigate('Delivery');
        }, 6000);

        // Cleanup on component unmount
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [navigation]);

    return (
        <SafeAreaView className='items-center justify-center h-full w-full bg-[#19c7b9]'>
            <Animatable.Image
                source={{ uri: 'https://media.giphy.com/media/mWaLPeeQLPT3i/giphy.gif' }}
                className='h-56 w-56 rounded-full'
            />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
                className='text-lg text-white mt-7'>
                Waiting for restaurant to accept your order
            </Animatable.Text>
            <Progress.Bar
                progress={bar}
                width={200}
                height={7}
                className='mt-5 rounded-xl'
                color='white'
            />
        </SafeAreaView>
    );
};

export default OrderPlacingScreen;
