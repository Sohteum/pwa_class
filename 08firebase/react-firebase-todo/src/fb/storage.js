//파일은 디비아니구 이렇게 특정한 공간에 저장이 됨.
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, listAll } from "firebase/storage";
export const storage = getStorage();

export const fnUploadFile = (uid, file) => {

  return new Promise((resolve) => {
    const path = `${uid}/${Date.now()}-${file.name}`
    const storageRef = ref(storage, path);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((outputUrl) => {

        //사용자가 업로드했던 오리지널 네임일 필요한거 지금은 내가 임의로 Date.now붙였으니까
        resolve({
          outputUrl,
          storageUrl: path,
          orgUrl: file.name,
        })

      })
    })//uploadBytes then catch
  })//Promise
}//fnUploadFile


export const fnDeleteFolder = (folderName) => {
  return new Promise((resolve) => {
    const folderRef = ref(storage, folderName);
    listAll(folderRef)
      .then((dir) => {
        dir.items.forEach((v) => {
          const fileRef = ref(storage, `${folderRef.fullPath}/${v.name}`);
          deleteObject(fileRef)
        })
        resolve()
      })
  })
}

export const fnDeleteObject =(path)=>{
  return new Promise((resolve)=>{
    const storageRef= ref(storage, path);
    deleteObject(storageRef).then(() => {
      resolve()
    }).catch((error) => {
      // 삭제중오류
    });
  })
}


