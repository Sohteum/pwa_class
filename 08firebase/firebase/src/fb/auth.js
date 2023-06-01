import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, deleteUser, onAuthStateChanged, setPersistence, browserSessionPersistence, browserLocalPersistence } from "firebase/auth";

export const auth = getAuth();

export const fnCreateUser = (email, password) => {
  return new Promise((resolve) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        resolve(result.user)//다음 함수 실행하라는뜻
      }).catch((error) => {
        alert(error.message)
      });
  })

}//fn
//비동기니까 끝나고다음애가 기다리고있는것. 회원가입할동안 기다리고있다가 끝나면 이메일 보내줄거야

export const fnUpdateRrofile = (nickName, photoURL) => {
  return new Promise((resolve) => {
    updateProfile(auth.currentUser, {
      displayName: nickName,
      photoURL: photoURL,
    }).then(() => {
      resolve()//안에 아무것도 안넣어도됨. 다음걸 진행하라는 뜻. 받아서 쓸게 없으면 굳이
    }).catch((error) => {
      alert(error.message)
    });
  })
}

export const fnSignIn = (email, password) => {
  return new Promise((resolve) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        resolve()
      }).catch((error) => {
        alert(error.message)
      });
  })
}

export const fnsendEmailVerification = () => {
  return new Promise((resolve) => {
    sendEmailVerification(auth.currentUser) //현재 로그인된 사용자에게 메일을 보내겠다는뜻
      .then(() => {
        alert('인증 메일을 확인 후 로그인 해주세요')
        resolve()
      });
  })
}

export const fnCheckEmailVerification = () => {
  return (
    (auth.currentUser.emailVerified) ? true : false
  )
}//fnCheckEmailVerification 

export const fnSetPersistence = (checked) => {
  return new Promise((resolve) => {
    if (checked) {
      setPersistence(auth, browserLocalPersistence)
        .then(() => {
          resolve()
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          resolve()
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }//if else
  })

}//fnSetPersistence

export const fnSignOut = () => {
  return new Promise((resolve) => {
    signOut(auth)
      .then(() => {
        resolve()
      }).catch((error) => {
        alert(error.message)
      });
  })
}

export const fnDeleteUser = () => {
  return new Promise((resolve) => {
    deleteUser(auth.currentUser)
    .then(() => {
      resolve()
    }).catch((error) => {
      alert(error.message)
    });
  })
}