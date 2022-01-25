import firebase  from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"

const firebaseConfig  = {
  apiKey: 'AIzaSyAdH-0YHD1Z4OxeGnso-ekSmIBKUAQYNSk',
  authDomain: 'https://yamemoim-76929-default-rtdb.firebaseio.com/',
  projectId: 'yamemoim-76929',
  storageBucket: 'yamemoim-76929.appspot.com',
  messagingSenderId: '824886566328',
  appId: '1:824886566328:android:dee16544355447520f834d'
};
function initFirebase(){
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
}
initFirebase();

const database = firebase.database();
const storage = firebase.storage();
export  {database,storage};