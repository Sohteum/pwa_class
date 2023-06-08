import { getAuth, sendPasswordResetEmail, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser, onAuthStateChanged, setPersistence, browserSessionPersistence, browserLocalPersistence } from "firebase/auth";
export const auth = getAuth();


export const fnCreateUser = (email, password, setFadeOut) => {
  return new Promise((resolve) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      resolve()
    }).catch((error) => {
      alert(error.message)
      setFadeOut(true)
    });
  })//promise
}//fnCreateUser 회원가입함수


export const fnUpdateProfile = (displayName, photoURL) => {
  return new Promise((resolve) => {
    updateProfile(auth.currentUser, {// 로그인된사용자
      displayName, photoURL
      //스토리지에접근해서 사진을 업로드하고 그다음에 실행이되어야함 
    }).then(() => {
      resolve()
    }).catch((error) => {
      alert(error.message)
    });
  })
}

export const fnSignin = (email, password, setFadeOut) => {
  return new Promise((resolve) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      resolve()
    }).catch((error) => {
      alert(error.message)
      setFadeOut(true)
    });
  })
}

export const fnSetPersistence = (checked, setFadeOut) => {
  return new Promise((resolve) => {
    const persistence = (checked) ? browserLocalPersistence : browserSessionPersistence
    setPersistence(auth, persistence)
      .then(() => {
        resolve()
      }).catch(() => {
        setFadeOut(true)
      })
  })
}

export const fnSignOut = () => {
  return new Promise((resolve) => {
    signOut(auth).then(() => {
      resolve()
    })
  })
}

export const fnSendEmailVerification = () => {
  return new Promise((resolve) => {
    sendEmailVerification(auth.currentUser).then(() => {
      resolve()
    });
  })
}

export const fnSignInWithPopup = (setFadeOut) => {
  return new Promise((resolve) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      resolve()
    }).catch((error) => {
      alert(error.message)
      setFadeOut(true)
    });
  })
}

export const fnSendPasswordResetEmail = (email) => {
  return new Promise((resolve) => {
    sendPasswordResetEmail(auth, email).then(() => {
      resolve()
    })
  })
}