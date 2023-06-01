import { getFirestore, Timestamp, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, onSnapshot, arrayUnion, arrayRemove, startAt, startAfter, endAt, endBefore, limit } from "firebase/firestore";

const db = getFirestore();

export const fnGetDocs = (collectionName) => {
  return new Promise((resolve) => {
    getDocs(collection(db, collectionName)).then((querySnapshot) => {
      console.log(querySnapshot.docs.length); //갯수출력
      resolve(querySnapshot.docs)
    }).catch((error) => {
      alert(error.message)
    })
  })
}

export const fnAddDoc = (collectionName, dataObj) => {
  return new Promise((resolve) => {
    addDoc(collection(db, collectionName), dataObj)
      .then((doc) => { //컬렉션=폴더, 데이터는 객체로 넣어야함
        resolve()
      })
  })
}

export const fnWatchCollection = (collectionName, fnsetState1, fnsetState2) => {
  onSnapshot(
    collection(db, collectionName),
    (snapshot) => {
      fnsetState1(snapshot.docs)
      fnsetState2(snapshot.docs)
    },
    (error) => {
      alert(error.message)
    })
}//fnWatchCollection


export const fnGetDoc = (collectionName, docid) => {
  return new Promise((resolve) => {
    const docRef = doc(db, collectionName, docid);
    getDoc(docRef).then((doc) => {
      resolve(doc.data())
    }).catch((error) => {
      alert(error.message)
    })

  })//getDoc then
}


export const fnUpdateDoc = (collectionName, docid, dataObj) => {
  return new Promise((resolve) => {
    const docRef = doc(db, collectionName, docid);
    updateDoc(docRef, dataObj)
      .then((doc) => {
        resolve()
      })//updateDoc then
  })
}

export const fnDeleteDoc = (collectionName, docid) => {
  return new Promise((resolve) => {
    deleteDoc(doc(db, collectionName, docid)).then(() => {
      resolve()
    }).catch((error) => {
      alert(error.message)
    })//deleteDoc then
  })
}

