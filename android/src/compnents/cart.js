import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions
} from 'react-native';
var { height, width } = Dimensions.get('window')
function CartScreen({ route, navigation }) {
    const { cartItems } = route.params;

    const renderRows = (data) => {
        return (
            <View style={styles.listView}>
                <View style={{ flex: 0.1 }}>
                    <Text style={styles.typestyle}>{data.item.type}</Text>
                </View>
                <View style={{ flex: 0.6, paddingLeft: 10 }}>
                    <Text>{data.item.name}</Text>
                    <Text>{data.item.desc}</Text>
                    <Text style={{ color: '#f0c03e', paddingTop: 2 }}>${data.item.amount}</Text>
                </View>
                <View style={{ flex: 0.3, alignItems: 'center' }}>

                    <View style={styles.countView}>
                        <TouchableOpacity style={styles.qnty}>
                            <Text style={{ fontSize: 16 }}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.qnty}>
                            <Text style={{ fontSize: 16 }}>{data.item.itemLength}</Text>
                        </View>
                        <TouchableOpacity style={styles.qnty}>
                            <Text style={{ fontSize: 16 }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.restaurantImage}>
                <View style={styles.innerBox}>
                    <Text style={{ color: '#e8a633', fontSize: 18, textAlign: 'center' }}>Total Cost
                </Text>
                    <Text style={{ color: 'black', fontSize: 18, textAlign: 'center', }}>$ 350.00
                </Text>
                </View>
            </View>
            <Text style={{ fontSize: 18, paddingLeft: 20, marginTop: 10 }}>Review Orders
            </Text>
            <FlatList
                style={{ marginTop: 10 }}
                data={cartItems}
                renderItem={renderRows}
                keyExtractor={(item, index) => index.toString()}
                extraData={cartItems}
            />
            {
                cartItems.length ?
                    <TouchableOpacity style={styles.bottomButton}>
                        <Text style={{ color: '#fff' }}>
                            PLACE ORDER
                </Text>
                    </TouchableOpacity>
                    :
                    null
            }
        </View>
    );
}

export default CartScreen;

const styles = StyleSheet.create({

    restaurantImage: {
        width: '100%', justifyContent: 'center', alignItems: 'center',
        backgroundColor: "#071c3d",
        height: 180
    },
    innerBox: {
        height: 80, width: 150, backgroundColor: '#fff',
        justifyContent: 'center', alignItems: 'center'
    },
    bottomButton: {
        height: 55, width: '100%', backgroundColor: '#071c3d',
        justifyContent: 'center', alignItems: 'center',
        position: 'absolute', bottom: 0
    },
    listView: {
        height: 90, flexDirection: 'row'
    },
    countView: {
        flexDirection: 'row', borderWidth: 0.5, height: 30, marginRight: 20
    },
    qnty: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    typestyle: {
        borderRadius: 2, borderWidth: 0.5, padding: 2,
        textAlign: 'center', margin: 10
    },
})
