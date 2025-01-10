import React from "react";
import { Image, Text, TextInput, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Entypo';
import { ScrollView } from "react-native";

import Category from "../components/Home/Category";
import Offer from "../components/Home/Offer";
import Feature from "../components/Home/Feature";
import Discount from "../components/Home/Discount";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1619454016518-697bc231e7cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" }}
                        style={styles.profileImage}
                    />
                    <View>
                        <Text style={styles.locationText}>Deliver Now</Text>
                        <Text style={styles.location}>Current Location <Icon name="down" size={20} color="#00CCBB" /></Text>
                    </View>
                </View>
                <Icon2 name="user-circle-o" size={33} color="#00CCBB" />
            </View>

            {/* Search */}
            <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    <Icon name="search1" size={18} color="#999" />
                    <TextInput placeholder="Restaurants and cuisines" style={styles.searchInput} />
                </View>
                <Icon3 name="sound-mix" size={28} color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                {/* categories */}
                <Category />
                {/* Offer near you */}
                <Offer />
                {/* Feature */}
                <Feature />
                {/* Tasty Discount */}
                <Discount />
            </ScrollView>

        </SafeAreaView>
    );
};

// Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 16,
        paddingBottom: 16,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 25,  // Fixed radius for better consistency
        marginRight: 12,
        padding: 4,
    },
    locationText: {
        fontSize: 14,
        color: '#666',
    },
    location: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        paddingBottom: 16,
    },
    searchBox: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#F0F0F0',
        borderRadius: 30,
        alignItems: 'center',
        marginRight: 10,
    },
    searchInput: {
        fontSize: 14,
        color: '#333',
        marginLeft: 8,
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#F8F8F8',
    }
});

export default HomeScreen;
