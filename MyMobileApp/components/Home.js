import { StyleSheet, View } from 'react-native';
import { Text, Divider } from 'react-native-paper';


export default function Home() {
    return (
        <View>
            <Text variant="headlineLarge">Headline Large</Text>
            <Divider />
            <Text variant="bodyMedium" style={styles.body}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    body: {
        padding: 8,
        textAlign: 'justify'
    }
});
