import {useEffect, useState} from 'react';
import storage from './firebase';
function App() {
const [image , setImage] = useState('');
const [getOne , setGetOne] = useState('');
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
  getOneImageEffect();
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

  const getOneImageEffect = async () => {
    let result = await storage.ref().child("images/1648143560.4_ben.badr.goo@gmail.com.gif").getDownloadURL();
    console.log(result);
    setGetOne(result);
  };


  
  return (
    <div className="App">
      <center>
      <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
      <button onClick={upload}>Upload</button>
      </center>
      <div>
      <p>get all</p>
        {files && files.map((file) => (
          <img src={file} alt="" width="100px"/>
          ))}
      </div>
      <p>get one</p>
          <img src={getOne} alt="" width="300px"/>
    </div>
  );
}
  
export default App;