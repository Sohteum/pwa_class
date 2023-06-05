import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env._REACT_APP_API_KEY,
  authDomain: process.env._REACT_APP_AUTH_DOMAIN,
  projectId: process.env._REACT_APP_PROJECT_ID,
  storageBucket: process.env._REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env._REACT_APP_MSG_SENDER_ID,
  appId: process.env._REACT_APP_APP_ID
};


const fb = initializeApp(firebaseConfig);
export default fb
