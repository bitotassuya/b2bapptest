import React from 'react';
import { View, StyleSheet, Text, Dimension } from 'react-native';
import { colors, parameters } from "../global/styles";
//import { Icon } from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'



export default function Header() {
    return (

        <View
            style={styles.header}>
            <View style={{
                marginLeft: 20
            }}>




                <AntDesign
                    name='stepbackward'
                    color={colors.headerText}
                    size={35}
                    onPress={() => { }}
                />


            </View>



            <Text style={styles.headerOfText}>My Account</Text>
        </View>



    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight
    },
    headerOfText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30


    }

})