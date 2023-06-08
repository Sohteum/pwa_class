import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser, onAuthStateChanged, setPersistence, browserSessionPersistence, browserLocalPersistence } from "firebase/auth";
export const auth = getAuth();

export const fnCreateUser = (email, password) => {
  return new Promise((resolve) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      resolve()
    }).catch((error) => {
      alert(error.message)
    });
  })//promise
}//fnCreateUser 회원가입함수


export const fnUpdateProfile = (displayName, photoURL) => {
  return new Promise((resolve) => {
    updateProfile(auth.currentUser, {// 로그인된사용자
      displayName, photoURL
      //스토리지에접근해서 사진을 업로드하고 그다음에 실행이되어야함 
    }).then(() => {
      alert('회원정보수정완료')
    }).catch((error) => {
      alert(error.message)
    });
  })
}

export const fnSignOut = () => {
  return new Promise((resolve) => {
    signOut(auth).then(() => {
      alert('로그아웃 되었습니다')
    })
  })
}