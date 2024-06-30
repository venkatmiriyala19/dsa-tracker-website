import { jwtDecode } from 'jwt-decode'; // Correct import syntax for jwt-decode

const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }
    try {
        const decoded = jwtDecode(token);
        return decoded._id;
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
};

const getUserName = () => {
    const user = localStorage.getItem('user');
    if (!user) {
        return null;
    }
    try {
        const parsedUser = JSON.parse(user); // Parse the user object from local storage
        return parsedUser.name;
    } catch (error) {
        console.error('Invalid user data:', error);
        return null;
    }
};

export { getUserIdFromToken, getUserName }; // Exporting functions correctly
