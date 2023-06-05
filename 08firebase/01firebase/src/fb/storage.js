import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, listAll} from "firebase/storage";


const storage = getStorage();

export const fnUploadFile = (folder, file) => {
  return new Promise((resolve) => {
    const storageRef = ref(storage, `${folder}/${Date.now()}-${file.name}`);
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            resolve(url)
          }).catch((error) => {
            console.log(error.message)
          })//getDownloadURL  then catch
      }).catch((error) => {
        console.log(error.message)
      })//uploadBytes then catch
  })
}//fnUploadFile


export const fnDeleteStorage = (folderName) => {
  return new Promise((resolve) => {
    const folderRef = ref(storage, folderName);
    listAll(folderRef)
      .then((dir) => {
        dir.items.forEach((v) => {
          const fileRef = ref(storage, `${folderRef.fullPath}/${v.name}`);
          deleteObject(fileRef)
        });
        resolve() //파일을 다 지운 후 리졸브
      }).catch((error) => {
        alert(error.message)
      });
  })
}