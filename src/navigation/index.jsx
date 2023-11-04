import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ForgotPassword, ResetPassword } from '@screens';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='login' component={Login} />
                    <Stack.Screen name='signup' component={SignUp} />
                    <Stack.Screen name='forgotpassword' component={ForgotPassword} />
                    <Stack.Screen name='resetpassword' component={ResetPassword} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default Navigation;
