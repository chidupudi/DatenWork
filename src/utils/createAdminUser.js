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

// Alternative admin credentials (in case first one fails)
export const alternativeAdminCredentials = {
  email: 'admin@test.com',
  password: 'Test123456'
};

export const createAlternativeAdmin = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      alternativeAdminCredentials.email, 
      alternativeAdminCredentials.password
    );

    console.log('Alternative admin user created successfully:', userCredential.user.email);
    return {
      success: true,
      email: alternativeAdminCredentials.email,
      password: alternativeAdminCredentials.password,
      user: userCredential.user
    };
  } catch (error) {
    console.error('Error creating alternative admin user:', error);
    return {
      success: false,
      error: error.message
    };
  }
};