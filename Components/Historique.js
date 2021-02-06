import React, { Component } from 'react';
import{
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Platform,
    Modal,
    TouchableOpacity
} from "react-native"


import LinearGradient from 'react-native-linear-gradient';
import SIZES from '../constants/theme';
import FONTS from '../constants/theme';
import icons from '../constants/icons';
import images from '../constants/images';

import COLORS from '../constants/theme';
import { Button } from 'native-base';

class Historique extends React.Component {

    constructor (){
        super();
        this.state = {
            names: [
                {'name': 'Dépôt', 'date':'21/01/2021','id': 1},
                {'name': 'Retrait', 'date':'21/01/2021', 'id': 2},
                {'name': 'Retrait', 'date':'21/01/2021' ,'id': 3},
                {'name': 'Paiement', 'date':'21/01/2021' , 'id': 4},
                {'name': 'Paiement', 'date': '21/01/2021' , 'id': 5},
                {'name': 'Paiement', 'date': '21/01/2021' , 'id': 6},
                {'name': 'Dépôt', 'date': '21/01/2021' , 'id': 7},
                {'name': 'Depot', 'date': '21/01/2021' , 'id': 8},
                {'name': 'Depot', 'date': '21/01/2021' , 'id': 9},
                {'name': 'Paiement', 'date': '21/01/2021' , 'id': 10},
                {'name': 'Paiement', 'date': '21/01/2021' , 'id': 11},
                {'name': 'Piement', 'date': '21/01/2021' , 'id': 12}
            ],
            modalOpen: false
          
        }
      }

    
    
    render(){
        return(

            <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : null}
            style={{ flex: 1 }}
            >
                <LinearGradient
                colors={['#FFFFFF', '#FFFFFF']}
                style={{ flex: 1 }}
                >
                    <View
                    style={{
                        marginTop: 20,
                        height: 200,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                    <Image
                        source={images.wallieLogo}
                        resizeMode="contain"
                        style={{
                            width: "80%"
                        }}
                    />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center'}}>
                        <Text style={{ ...FONTS.h1 }}>Bienvenue Blanche MATTI</Text>
                        <Text style={{ ...FONTS.body2}}>Solde en cours: 5000 FCFA</Text>
                    </View>
                    <View style={styles.scrollview}>
                        <ScrollView > 
                            { 
                            this.state.names.map((item, index) => ( 
                                <View key = {item.id} style = {styles.item} > 
                                    <TouchableOpacity  onPress={()=>this.setState({modalOpen: true})}>
                                        <Text>{item.name}</Text> 
                                        <Text>{item.date}</Text>
                                        
                                    </TouchableOpacity>
                                </View> 
                                )) 
                            } 
                        </ScrollView>
                        <Modal 
                        visible={this.state.modalOpen}

                        >
                            <View style={{ flex:1, backgroundColor:'000000aa'}}>
                                <View style={{margin: 50, padding: 40, borderRadius: 10, backgroundColor: '#FFFFFF'}}>
                                    <Text style={{ fontSize: 20, textAlign: 'center'}}>Details transactions </Text>
                                    <Text>Date:  </Text>
                                    <Text>Montant: 15000 F</Text>
                                </View>
                                <View>
                                    <TouchableOpacity 
                                    style={{
                                        height: 50,
                                        backgroundColor: '#2f4f4f',
                                        
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onPress={()=> this.setState({modalOpen:false})}
                                    >
                                        <Text>OK</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </LinearGradient>    
            </KeyboardAvoidingView>
            
        )
    }
}

export default Historique

const styles = StyleSheet.create ({
    item: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       padding: 30,
       margin: 2,
       borderColor: '#2a4944',
       borderWidth: 1,
       
    },
    container: {
        flex: 1,
        marginTop: 20
      },
      text_container: {
          flex: 1,
          textAlign: 'center',
          alignItems: 'center',
      },
      textstyle:{
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignContent: 'space-between'
      },
      scrollview: {
          flex: 2,
      }
 })