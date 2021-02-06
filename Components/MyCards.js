import React from "react";
import{
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform,
    Modal,
} from "react-native"
import {Picker} from '@react-native-picker/picker';
import SIZES from '../constants/theme';
import FONTS from '../constants/theme';
import icons from '../constants/icons';
import COLORS from '../constants/theme';
import LinearGradient from 'react-native-linear-gradient';

class MyCards extends React.Component{

    constructor(){
        super(),
        this.state = {
            modalOpen: false,
            language: 'java'
        }  
    }

    render() {
        return(
            <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : null}
            style={{flex: 1}}
        >
            <LinearGradient
                colors={['#FFFFFF', '#FFFFFF']}
                style={{ flex: 1 }}
            >
                <View style={{marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <TouchableOpacity
                            style={{
                            height: 40,
                            width: 40,   
                            }}           
                        >
                            <Image
                                source={icons.back}
                                style={{
                                top: -5,
                                right: -5,
                                height: 30,
                                width: 30,                
                                }}
                            />        
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{ fontSize: 20, textAlign:'center' }}>My Cards</Text>
                    </View>
                    <View >
                        <TouchableOpacity
                            style={{
                            height: 40,
                            width: 40,   
                            }} 
                            onPress={() => this.setState({modalOpen: true})}           
                        >
                            <Image
                                source={icons.plus}
                                style={{
                                top: -5,
                                right: -5,
                                height: 30,
                                width: 30,                
                                }}
                            />
                        </TouchableOpacity>
                        <Modal visible= {this.state.modalOpen} >
                            <View style={{ flex:1, backgroundColor:'000000aa'}}>
                                <View style={{margin: 10, padding: 10, borderRadius: 10, backgroundColor: '#FFFFFF'}}>
                                    <Text style={{ fontSize: 20, textAlign: 'center'}}>Ajout Carte bancaire </Text>
                                    {/*<Picker
                                        selectedValue={this.state.language}
                                        style={{height: 50, width: 100}}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.setState({language: itemValue})
                                        }>
                                        <Picker.Item label="Java" value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                    </Picker>*/}
                                    <View style={{ marginTop: 10 }}>
                                        <Text>CA:  </Text>
                                        <TextInput 
                                            style={{
                                                
                                                marginVertical: 5,
                                                borderBottomColor: COLORS.white,
                                                borderBottomWidth: 1,
                                                height: 50,
                                                color: COLORS.white,
                                                ...FONTS.body3
                                            }}
                                            placeholder="Entrer le CA"
                                            placeholderTextColor={COLORS.white}
                                            selectionColor={COLORS.white}
                                        />
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text>Chapitre:  </Text>
                                        <TextInput 
                                            style={{
                                                
                                                marginVertical: 10,
                                                borderBottomColor: COLORS.white,
                                                borderBottomWidth: 1,
                                                height: 50,
                                                color: COLORS.white,
                                                ...FONTS.body3
                                            }}
                                            placeholder="Entrer le chapitre"
                                            placeholderTextColor={COLORS.white}
                                            selectionColor={COLORS.white}
                                        />
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text>Numero de compte:  </Text>
                                        <TextInput 
                                            style={{
                                                
                                                marginVertical: 10,
                                                borderBottomColor: COLORS.white,
                                                borderBottomWidth: 1,
                                                height: 50,
                                                color: COLORS.white,
                                                ...FONTS.body3
                                            }}
                                            placeholder="Entrer le numero de compte"
                                            placeholderTextColor={COLORS.white}
                                            selectionColor={COLORS.white}
                                        />
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text>CRI:  </Text>
                                        <TextInput 
                                            style={{
                                             
                                                marginVertical: 10,
                                                borderBottomColor: COLORS.white,
                                                borderBottomWidth: 1,
                                                height: 50,
                                                color: COLORS.white,
                                                ...FONTS.body3
                                            }}
                                            placeholder="Entrer le CRI"
                                            placeholderTextColor={COLORS.white}
                                            selectionColor={COLORS.white}
                                        />
                                    </View>
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
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
        )
    }
}

export default MyCards;