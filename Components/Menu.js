
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import SIZES from '../constants/theme';
import FONTS from '../constants/theme';
import icons from '../constants/icons';
import images from '../constants/images';
import COLORS from '../constants/theme';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native"
import  Paiement  from './Paiement';

const Menu = ({navigation}) => {

    const featuresData = [
        {
            id: 1,
            icon: icons.scan,
            color: COLORS.purple,
            page:"Paiement",
            description: "Effectuer Paiement "
        },
        {
            id: 2,
            icon: icons.transfert,
            color: COLORS.yellow,
            page: "Transfert",
            description: "Transfert d'argent"
        },
        {
            id: 3,
            icon: icons.historique,
            color: COLORS.primary,
            page:"Historique",
            description: "Historique des transactions"
        },
        {
            id: 4,
            icon: icons.facture,
            color: COLORS.red,
            page: "Paiementfacture",
            description: "Paiement de facture"
        },
        
    ]
    const [features, setFeatures] = React.useState(featuresData)

    function renderHeader() {

        /*const toggleDrawer = () => (
            //Props to open/close the drawer
            navigation.navigationProps.toggleDrawer()
        )*/

        return (
            <View style={{  marginVertical: 20, flexDirection: 'row'}}>
                <View>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,   
                        }}
                        //onPress={()=> navigation.navigate("MyCards")}
                    >
                        <Image
                            source={icons.menu}
                            style={{
                                top: -5,
                                right: -5,
                                height: 30,
                                width: 30,
                                
                            }}
                        />
                        
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1, alignItems: 'center'}}>
                    <Text style={{ ...FONTS.h1 }}>Bienvenue Blanche MATTI</Text>
                    <Text style={{ ...FONTS.body2}}>Solde en cours: 5000 FCFA</Text>
                </View>
            </View>
        )
    }
    
    function renderFeatures() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: 20, width: 200, alignItems: 'center' }}
                onPress={() => navigation.navigate(item.page)}
            >
                <View
                    style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                        
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 50,
                            width: 50,
                            tintColor: item.color
                        }}
                    />
                </View>
                <Text style={{  ...FONTS.body4 }}>{item.description}</Text>
            </TouchableOpacity>
        )

        return(
            <FlatList
                
                data={features}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', paddingLeft: 10 }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: 20 }}
            />
        )
    }

    
    return(
        <SafeAreaView style={{ flex: 1 }}>
            {renderHeader()}
            {renderFeatures()}
        </SafeAreaView>
    )

}

export default Menu;