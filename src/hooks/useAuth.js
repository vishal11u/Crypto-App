import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuthStatus = async () => {
        try {
            const token = await AsyncStorage.getItem('authToken');
            if (token) {
                setIsAuthenticated(true);
                setUser({ id: '123', name: 'John Doe' });
            }
        } catch (error) {
            console.error('Error checking auth status:', error);
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials) => {
        try {
            await AsyncStorage.setItem('authToken', 'dummy_token');
            setIsAuthenticated(true);
            setUser({ id: '123', name: 'John Doe' });
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('authToken');
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    useEffect(() => {
        checkAuthStatus();
    }, []);

    return { isAuthenticated, user, loading, login, logout };
};

export default useAuth;