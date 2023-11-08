import { View, Text } from "react-native";
 const Badge = ({ children }) => {
    return (
      <View>
        {children}
        {/* 20521850 */}
          <View
            style={{
              position: 'absolute',
              top: -5, 
              right: -5, 
              backgroundColor: 'red', 
              borderRadius: 10, 
              width: 20, 
              height: 20, 
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white' }}>8</Text>
          </View>
      </View>
    );
  };
  export default Badge