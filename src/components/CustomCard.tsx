import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

interface Props {
    title: string;
    subtitle: string;
    background: any; // image source
}

export default function CustomCard({ title, subtitle, background }: Props) {
    return (
        <ImageBackground source={background} style={styles.card} imageStyle={styles.image}>
            <View style={styles.overlay}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 260,
        height: 180,
        borderRadius: 16,
        marginRight: 16,  // 👈 space between cards
        overflow: "hidden",
        elevation: 4, // shadow for Android
    },
    image: {
        borderRadius: 16,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.13)", // dark overlay for readability
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: "#fff",
        marginBottom: 8,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        fontWeight: "400",
        color: "#ddd",
        textAlign: "center",
    },
});
