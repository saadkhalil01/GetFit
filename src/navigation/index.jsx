import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ForgotPassword, Splash, Home, DashBoard, Progress } from '@screens';
import { useEffect, useState } from 'react';

const Stack = createStackNavigator();

const Navigation = () => {
    const [user, setUser] = useState('');

    const onAuthStateChanged = (data) => {
        setUser(data);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerMode: false }}>
                <Stack.Screen name='splash'>
                    {(props) => <Splash {...props} user={user} />}
                </Stack.Screen>
                <>
                    <Stack.Screen name='home' component={Home} />
                    <Stack.Screen name='dashboard' component={DashBoard} />
                    <Stack.Screen name='progress' component={Progress} />
                </>
                <>
                    <Stack.Screen name='login' component={Login} />
                    <Stack.Screen name='signup' component={SignUp} />
                    <Stack.Screen name='forgotpassword' component={ForgotPassword} />
                </>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
