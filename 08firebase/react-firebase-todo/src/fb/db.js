import { getFirestore, Timestamp, collection, doc, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, writeBatch, query, where, orderBy, limit, onSnapshot, arrayUnion, arrayRemove, startAt, startAfter, endAt, endBefore, getCountFromServer } from "firebase/firestore";
export const db = getFirestore();


export const fnAddDoc = (collectionName, data) => {
  return new Promise((resolve) => {
    addDoc(collection(db, collectionName), data).then((doc) => {
      resolve()
    })
  })
}

export const fnDeleteCollection = (collectionName) => {//파일 전체 지우는 함수
  return new Promise((resolve) => {
    const batch = writeBatch(db);
    const querySnapshot = getDocs(collection(db, collectionName)).then((querySnapshot) => {
      querySnapshot.forEach((v) => {
        const docRef = doc(db, collectionName, v.id);
        batch.delete(docRef);
      })//forEach
      batch.commit().then(() => {
        resolve()
      })//batch then
    })//getDoc then
  })
}

export const fnGetDocsCnt = (collectionName) => {
  return new Promise((resolve) => {
    getCountFromServer(collection(db, collectionName)).
      then((snapshot) => {
        resolve(snapshot.data().count)
      })

  })
}

export const fnGetDocs = (collectionName, limitCnt, nextDoc = null) => {
  return new Promise((resolve) => {
    const queryString = nextDoc ?
      query(collection(db, collectionName), orderBy('timestamp', 'desc'), startAfter(nextDoc), limit(limitCnt))
      :
      query(collection(db, collectionName), orderBy('timestamp', 'desc'), limit(limitCnt))

    getDocs(queryString)
      .then((querySnapshot) => {
        resolve({
          docsArr: querySnapshot.docs,
          nextDoc: querySnapshot.docs[querySnapshot.docs.length - 1]
        })

      })//getDocs
  })
}


export const fnGetDoc = (collectionName, docid) => {
  return new Promise((resolve) => {
    const docRef = doc(db, collectionName, docid);
    getDoc(docRef).then((doc) => {
      resolve(doc.data()) //data붙여줘야함
    })
  })
}


export const fnUpdateDoc = (collectionName, docid, data) => {//data무조건 객체
  return new Promise((resolve) => {
    const docRef = doc(db, collectionName, docid);
    updateDoc(docRef, data).then((doc) => {
      resolve(doc.id, doc.data())
    })//updateDoc then
  })
}


export const fnDeleteDoc = (collectionName, docid) => {
  return new Promise((resolve) => {
    const db = getFirestore();
    deleteDoc(doc(db, collectionName, docid)).then(() => {
      resolve()
    })//deleteDoc then
  })
}