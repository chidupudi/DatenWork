import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

// Function to create default admin user
export const createDefaultAdmin = async () => {
  try {
    const adminCredentials = {
      email: 'admin@datenwork.com',
      password: 'Datenwork@123'
    };

    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      adminCredentials.email, 
      adminCredentials.password
    );

    console.log('Default admin user created successfully:', userCredential.user.email);
    return {
      success: true,
      email: adminCredentials.email,
      password: adminCredentials.password,
      user: userCredential.user
    };
  } catch (error) {
    console.error('Error creating admin user:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Note: Alternative admin creation removed for security