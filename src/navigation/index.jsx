import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ForgotPassword, ResetPassword, Splash, Home, DashBoard, Progress } from '@screens';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerMode: false }}>
                    <Stack.Screen name='splash' component={Splash} />
                    <Stack.Screen name='login' component={Login} />
                    <Stack.Screen name='signup' component={SignUp} />
                    <Stack.Screen name='home' component={Home} />
                    <Stack.Screen name='dashboard' component={DashBoard} />
                    <Stack.Screen name='progress' component={Progress} />
                    <Stack.Screen name='forgotpassword' component={ForgotPassword} />
                    <Stack.Screen name='resetpassword' component={ResetPassword} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

export default Navigation;
