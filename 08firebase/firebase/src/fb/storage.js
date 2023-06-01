import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";


const storage = getStorage();

export const fnUploadFile = (folder, file) => {
  return new Promise((resolve) => {
    const storageRef = ref(storage, `${folder}/${Date.now()}-${file.name}`);
    uploadBytes(storageRef, file)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref)
      .then((url) => {
        resolve()
      }).catch((error) => {
        console.log('error.message')
      })//getDownloadURL  then catch
    }).catch((error) => {
      console.log('error.message')
    })//uploadBytes then catch
  })
}//fnUploadFile