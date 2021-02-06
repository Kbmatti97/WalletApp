import React from "react";
import{
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import SIZES from '../constants/theme';
import FONTS from '../constants/theme';
import icons from '../constants/icons';
import images from '../constants/images';

import COLORS from '../constants/theme';

const Connexion = ({ navigation }) => {

    const [showPassword, setShowPassword] = React.useState(false)
    const [textInputTel, setTextInputTel] = React.useState('')
    const [textInputCode, setTextInputCode] = React.useState('')
    const [areas, setAreas] = React.useState([])
    const [selectedArea, setSelectedArea] = React.useState(null)
    const [modalVisible, setModalVisible] = React.useState(false)

    //fonction pour l'api des indicatifs des pays

    React.useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => {
                let areaData = data.map(item => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`
                    }
                })

                setAreas(areaData)

                if (areaData.length > 0) {
                    let defaultData = areaData.filter(a => a.code == "SN")

                    if (defaultData.length > 0) {
                        setSelectedArea(defaultData[0])
                    }
                }
            })
    }, [])
    /*function renderHeader() {
        return (
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    alignItems: "center",
                    marginTop: 10,
                    paddingHorizontal: 10
                }}
                onPress={() => console.log("Sign Up")}
            >
                <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: '#FFFFFF'
                    }}
                />

                <Text style={{ marginLeft: 15, color: '#FFFFFF', ...FONTS.h4 }}>Connexion</Text>
            </TouchableOpacity>
        )
    }*/

    function renderLogo(){
        return(
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
        )
    }

    function renderForm() {
        return(

            <View
                style={{
                    marginTop: 30,
                    marginHorizontal: 30,
                }}
            >
                {/*champs telephone*/}
                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: '#2f4f4f', ...FONTS.body3 }}>Telephone</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {/* Country Code */}
                        <TouchableOpacity
                            style={{
                                width: 100,
                                height: 50,
                                marginHorizontal: 5,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                ...FONTS.body2
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <View style={{ justifyContent: 'center' }}>
                                <Image
                                    source={icons.down}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        tintColor: COLORS.white
                                    }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Image
                                    source={{ uri: selectedArea?.flag }}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            </View>

                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{selectedArea?.callingCode}</Text>
                            </View>
                        </TouchableOpacity>
                        {/* Telephone */}
                        <TextInput
                            style={{
                                flex: 1,
                                marginVertical: SIZES.padding,
                                borderBottomColor: COLORS.white,
                                borderBottomWidth: 1,
                                height: 50,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                            placeholder="Entrer le numero de telephone"
                            placeholderTextColor={COLORS.white}
                            selectionColor={COLORS.white}
                        />
                    </View>
                </View>
                
                {/*code secret*/}
                <View style={{ marginTop: 30 }}>
                    <Text style={{ color: '#2f4f4f', ...FONTS.body3 }}>Code secret</Text>
                    <TextInput
                        style={{
                            marginVertical: 20,
                            borderBottomColor: '#2f4f4f',
                            borderBottomWidth: 2,
                            height: 50,
                            color: '#2f4f4f',
                            ...FONTS.body3
                        }}
                        placeholder="Enter Password"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 20,
                            height: 30,
                            width: 30
                        }}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={showPassword ? icons.disable_eye : icons.eye}
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>

            </View>

        )
        
    }

    function renderButton() {

        /*const CheckTextinput = () => (
            textInputTel(setTextInputTel),
            textInputCode(setTextInputCode)

            if(textInputTel == '' || textInputCode == '') {
                Alert.alert("Please Enter All the Values.");
            }
            else{
            
            navigation.navigate("Menu");
            
            }
                        
        )*/
        return (
            <View style={{ margin: 30 }}>
                <TouchableOpacity
                    style={{
                        height: 70,
                        backgroundColor: '#2f4f4f',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Menu")}
                >
                    <Text style={{ color: '#FFFFFF', ...FONTS.h3 }}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }

    /** fonction qui renvoie la liste des pays */   
    function renderAreaCodesModal() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ padding: 10, flexDirection: 'row' }}
                    onPress={() => {
                        setSelectedArea(item)
                        setModalVisible(false)
                    }}
                >
                    <Image
                        source={{ uri: item.flag }}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        } 

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View
                            style={{
                                height: 400,
                                width: SIZES.width ,
                                backgroundColor: '#FFFFFF',
                                borderRadius: 30
                            }}
                        >
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.code}
                                showsVerticalScrollIndicator={false}
                                style={{
                                    padding: 20,
                                    marginBottom: 20
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )

    }


    return(
        //KeyboardAvoiding utilise la librairie LinearGradient
        <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : null}
            style={{ flex: 1 }}
        >
            <LinearGradient
                colors={['#FFFFFF', '#FFFFFF']}
                style={{ flex: 1 }}
            >
                <ScrollView>
                {renderLogo()}
                {renderForm()}
                {renderButton()}
                </ScrollView>
            </LinearGradient>
            {renderAreaCodesModal()}
        </KeyboardAvoidingView>
            
    )
}

export default Connexion;