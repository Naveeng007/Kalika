import {firebase,GoogleAuthProvider} from '../firebase/firebase'

export const startLogin=()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(GoogleAuthProvider);
    }
}

export const startLogout=()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}

export const logout=()=>({
    type:'LOGOUT',
})
export const login=(uid='',imgUrl={},email='',displayName='')=>({
    type:'LOGIN',
    uid,
    imgUrl,
    displayName,
    email,
})