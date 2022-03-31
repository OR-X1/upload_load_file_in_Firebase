import {useEffect, useState} from 'react';
import storage from './firebase';
function App() {
const [image , setImage] = useState('');
const [files, setFiles] = useState();

const upload = ()=>{
  if(image == null)
    return;
  storage.ref(`/images/${image.name}`).put(image)
  .on("state_changed" , alert("success") , alert);
  imageEffect();
}

useEffect(() => {
  imageEffect();
}, []);

function imageEffect(){
  const fetchImages = async () => {
    let result = await storage.ref().child("images").listAll();
    let urlPromises = result.items.map((imageRef) =>
      imageRef.getDownloadURL()
    );

    return Promise.all(urlPromises);
  };

  const loadImages = async () => {
    const urls = await fetchImages();
    setFiles(urls);
  };
  loadImages();
}


  
  return (
    <div className="App">
      <center>
      <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
      <button onClick={upload}>Upload</button>
      </center>
      <div>
        {files && files.map((file) => (
          <img src={file} alt="" width="100px"/>
        ))}
      </div>
    </div>
  );
}
  
export default App;