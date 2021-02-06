import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    Modal,
    Button
} from "react-native"

export default function PopupTransaction(){
    const [modalOpen, setModalOpen] = React.useState(true);
    return(
        <View>
            <Modal visible={modalOpen}>
                <View>
                    <Button title='OK' onPress={()=> setModalOpen(false)} />
                </View>

            </Modal>
        </View>

    )
}
