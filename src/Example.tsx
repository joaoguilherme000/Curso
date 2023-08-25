import { Text, View } from "react-native";

interface ExampleProps {
    text?: string;
    children?: string;
}

const Example = ({ children, text}: ExampleProps) => {
    
    return (
        <View>
            <Text style={{ color: 'red'}}>{children}</Text>
            <Text style={{ color: 'blue'}}>{text}</Text>
        </View>
    )
};

export default Example;