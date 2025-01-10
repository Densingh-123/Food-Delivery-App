import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { data } from '../../data/Data';
import FeatureCard from './FeatureCard';
import Icon from 'react-native-vector-icons/Ionicons';

const Feature = () => {
    return (
        <View style={styles.container}>
            {/* Title Section */}
            <View style={styles.headerContainer}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.title}>Featured</Text>
                    <Text style={styles.subtitle}>Why not support your local restaurant tonight?</Text>
                </View>
                <Icon name='md-arrow-forward-sharp' size={25} color='#00CCBB' />
            </View>

            {/* Cards Scroll */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
                {data.map((offer) => {
                    return (
                        <View style={styles.cardContainer} key={offer.id}>
                            <FeatureCard 
                                id={offer.id} 
                                img={offer.image} 
                                name={offer.name} 
                                cat={offer.category} 
                                price={offer.price} 
                                location={offer.location} 
                                des={offer.desc} 
                            />
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    headerTextContainer: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    scrollViewContainer: {
        paddingTop: 15,
        paddingLeft: 7,
        paddingBottom: 30, // Adding bottom padding for spacing between cards
    },
    cardContainer: {
        marginRight: 12, // Space between the cards
    }
});

export default Feature;
