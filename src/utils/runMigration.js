import { migrateInitialData } from '../services/firebaseData';

export const runDataMigration = async () => {
  try {
    console.log('Starting data migration...');
    const success = await migrateInitialData();
    if (success) {
      console.log('✅ Data migration completed successfully!');
      alert('Data migration completed successfully! Check your Firebase console to see the migrated data.');
    } else {
      console.log('❌ Data migration failed!');
      alert('Data migration failed. Check console for errors.');
    }
    return success;
  } catch (error) {
    console.error('Migration error:', error);
    alert('Migration error: ' + error.message);
    return false;
  }
};

// For development - can be called from browser console
window.runDataMigration = runDataMigration;