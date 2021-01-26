import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions
} from 'react-native';
var { height, width } = Dimensions.get('window')
function HomeScreen({ navigation }) {
    const [listData, setlistData] = useState([
        {
            type: "N", amount: 7,
            name: "guac de la costa",
            desc: "tortills de mais , ruit de la passsion",
        },
        {
            type: "D", amount: 7,
            name: "Chincharron y cerves",
            desc: "tortills de mais , ruit de la passsion",
        },
        {
            type: "N", amount: 7,
            name: "guac de la costa",
            desc: "tortills de mais , ruit de la passsion",
        },
        {
            type: "D", amount: 7,
            name: "guac de la costa",
            content: "tortills de mais , ruit de la passsion",
        },
        {
            type: "N", amount: 7,
            name: "guac de la costa",
            desc: "tortills de mais , ruit de la passsion",
        },
    ]);
    const [itemLength, setitemLength] = useState(0);
    const [totalItems, settotalItems] = useState(0);
    function changeButton(index) {
        let newArr = [...listData];
        newArr[index].itemLength = 1;
        setlistData(newArr)
        addtoCard()
    }

    function changeItemQnty(value, index) {
        let newArr = [...listData];
        if (value == "ADD") {
            listData[index].itemLength = listData[index].itemLength + 1;
        } else {
            listData[index].itemLength = listData[index].itemLength - 1;
        }
        setlistData(newArr)
        addtoCard()

    }
    function addtoCard() {
        let newArr = [...listData];
        let getItems = newArr.filter((item) => item.itemLength && item.itemLength > 0);
        console.log("newARR", getItems)
        settotalItems(getItems)
    }

    function moveToCart() {
        navigation.navigate('Cart', {
            cartItems: totalItems,
        })
    }
    const renderRow = (data) => {
        console.log("itemmm", data)
        return (
            <View style={styles.listView}>
                <View style={{ flex: 0.1 }}>
                    <Text style={styles.typeTxt}>{data.item.type}</Text>
                </View>
                <View style={{ flex: 0.6, paddingLeft: 10 }}>
                    <Text>{data.item.name}</Text>
                    <Text>{data.item.desc}</Text>
                    <Text style={{ color: '#f0c03e', paddingTop: 2 }}>${data.item.amount}</Text>
                </View>
                <View style={{ flex: 0.3, alignItems: 'center' }}>
                    {
                        !(data.item.itemLength && data.item.itemLength > 0) ?
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={() => {
                                    changeButton(data.index)
                                }}>

                                <Text style={styles.addTxt}>ADD</Text>
                            </TouchableOpacity>
                            :
                            <View style={styles.countView}>
                                <TouchableOpacity style={styles.qnty}
                                    onPress={() => {
                                        changeItemQnty("DEL", data.index)
                                    }}>
                                    <Text style={{ fontSize: 16 }}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.qnty}>
                                    <Text style={{ fontSize: 16 }}>{data.item.itemLength}</Text>
                                </View>
                                <TouchableOpacity style={styles.qnty}
                                    onPress={() => {
                                        changeItemQnty("ADD", data.index)
                                    }}>
                                    <Text style={{ fontSize: 16 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                    }
                </View>
            </View>

        );
    };
    return (
        <View style={{ flex: 1 }}>
            <Image style={styles.restaurantImage}
                source={require('../images/bg.jpg')}>
            </Image>
            <View style={styles.popUpView}>
                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', marginTop: 20 }}>Inka Restaurant
                </Text>
                <Text style={{ fontSize: 10, textAlign: 'center', marginTop: 10 }}>5.0(200+) | All days : 09.00 AM - 06.00 PM
                </Text>

                <Text style={{ fontSize: 10, textAlign: 'center', marginTop: 10 }}>Reach us at : 9876543210
                </Text>
                <TouchableOpacity style={styles.tableButton}>
                    <Text style={{ fontSize: 16, color: '#fff' }}>BOOK A TABLE
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{ marginTop: 120 }}
                data={listData}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
                extraData={listData}
            />
            {
                totalItems.length ?
                    <TouchableOpacity style={styles.bottomButton}
                        onPress={moveToCart}>
                        <Text style={{ color: '#fff' }}>
                            VIEW CART [{totalItems.length} Items]
                        </Text>
                    </TouchableOpacity>
                    :
                    null
            }
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    popUpView: {
        height: 150, width: 310,
        borderRadius: 4,
        marginLeft: 30,
        position: 'absolute', zIndex: 2, top: 130,
        backgroundColor: '#fff',
    },
    restaurantImage: {
        width: '100%',
        height: 180
    },
    tableButton: {
        height: 30, marginTop: 10, justifyContent: 'center', alignItems: 'center',
        backgroundColor: 'black', borderRadius: 5,
        marginLeft: 85, marginRight: 85
    },
    addButton: {
        height: 30, width: 80, backgroundColor: 'green',
        justifyContent: 'center'
    },
    listView: {
        height: 90, flexDirection: 'row'
    },
    countView: {
        flexDirection: 'row', borderWidth: 0.5, height: 30,
        width: 80, borderColor: '#f0c03e'
    },
    bottomButton: {
        height: 55, backgroundColor: '#071c3d', justifyContent: 'center', alignItems: 'center'
    },
    qnty: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    addTxt: {
        textAlign: 'center', color: '#fff'
    },
    typeTxt: {
        borderRadius: 2, borderWidth: 0.5, padding: 2,
        textAlign: 'center', margin: 10
    },
})