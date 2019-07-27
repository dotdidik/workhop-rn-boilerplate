import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from "react-navigation";
import HomeScreen from '../home';
import ProfileScreen from '../profile';
import DetailScreen from '../detail';
import ProductsScreen from '../products';
import PDetails from '../products/details';

const Home = createStackNavigator({
    MainHome: {
        screen: HomeScreen
    },
    Details: {
        screen: DetailScreen,
    }
})

const Profile = createStackNavigator({
    MainProfile: {
        screen: ProfileScreen
    },
})

const Product = createStackNavigator({
    Product: {
        screen: ProductsScreen
    },
    PDetails: {
        screen: PDetails
    }
})

const TabNav = createBottomTabNavigator({
    Home: {
        screen: Home

    },
    Product: {
        screen: Product
    },
    Profile: {
        screen: Profile
    }

})

export default createAppContainer(TabNav)