import { StyleSheet, Text, View, TouchableOpacity, SectionList, Image } from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const datasource = [
    {
        data: [
            { name: 'Psyduck', cardNumber: '175' },
            { name: 'Poliwhirl', cardNumber: '176' },
        ],
        title: "WATER",
        bgColor: "skyblue",
        icon: "droplet"
    },
    {
        data: [
            { name: 'Alakazam', cardNumber: '201' },
            { name: 'Mew', cardNumber: '193' },
        ],
        title: "PSYCHIC",
        bgColor: "hotpink",
        icon: "eye"
    },
    {
        data: [
            { name: 'Dragonair', cardNumber: '181' },
            { name: 'Dragonite', cardNumber: '149' },

        ],
        title: "DRAGON",
        bgColor: "dodgerblue",
        icon: "dragon"
    },
];

const renderItem = ({ item }) => {
    const imgUrl = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.cardNumber}-2x.png`;

    return (
        <TouchableOpacity style={styles.itemRow}>
            <View style={styles.itemContent}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Image source={{ uri: imgUrl }} style={styles.cardImage} />
            </View>
        </TouchableOpacity>
    );
};

const renderSectionHeader = ({ section }) => (
    <View style={[styles.headerBar, { backgroundColor: section.bgColor }]}>
        <FontAwesome6 name={section.icon} size={16} color="white" />
        <Text style={styles.headerText}>{section.title}</Text>
    </View>
);

const App = () => {
    return (
        <View style={{ flex: 1, paddingTop: 40 ,backgroundColor: 'white' }}>
            <View style={styles.btnBox}>
                <TouchableOpacity style={styles.addBtn}>
                    <Text style={styles.addBtnText}>ADD POKEMON</Text>
                </TouchableOpacity>
            </View>

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    addBtn: {
        backgroundColor: "deepskyblue",
        paddingVertical: 12,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 6,
        alignItems: "center",
        borderWidth: 1
    },
    addBtnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    btnBox: {
        borderWidth: 1,
    },

    headerBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        borderWidth: 1,
        marginTop: 10,
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 6
    },

    itemRow: {
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderColor: "black",
        backgroundColor: "white",
        borderWidth:1,
    },

    itemContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    nameText: {
        flex:1,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'left',
    },
    cardImage: {
        width: 140,
        height: 190,
    }
});

export default App;
