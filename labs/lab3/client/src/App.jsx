import { useState } from "react";
import "./App.css";

const App = () => {
  // what do we need to track
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]); 
  const [displayImage, setDisplayImage] = useState(null);
  const [message, setMessage] = useState("");

  // State for multiple random images from server
  const [multipleRandomImages, setMultipleRandomImages] = useState([]);

  // State for random dog image from dog.ceo
  const [dogUrl, setDogUrl] = useState(null);

  // Handlers
  const handleSingleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSingleFile(e.target.files[0]);
    }
  };

  // fetch functions -> fetch a random single image
  const fetchSingleFile = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fetch/single`);

      const blob = await response.blob(); // we made a blob

      const imageUrl = URL.createObjectURL(blob);
      setDisplayImage(imageUrl);
    } catch (error) {
      console.error("Error fetching single file:", error);
    }
  };

  // fetch functions -> save single
  const handleSubmitSingleFile = async (e) => {
    e.preventDefault();
    if (!singleFile) {
      setMessage("Please select a file before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", singleFile);
      
      const response = await fetch(`http://localhost:8000/save/single`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Image upload failed");
      }
      setMessage("File uploaded successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Fetch multiple random images from server
  const fetchMultipleRandomImages = async () => {
    try {
      const response = await fetch("http://localhost:8000/fetch/multiple");
      if (!response.ok) {
        throw new Error("Failed to fetch multiple images");
      }
      const data = await response.json(); // data should be an array of filenames
      setMultipleRandomImages(data);
    } catch (error) {
      console.error("Error fetching multiple images:", error);
    }
  };

  // Fetch a random dog from dog.ceo
  const fetchRandomDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error("Failed to fetch dog image");
      }
      const data = await response.json();
      setDogUrl(data.message); // data.message is the dog image URL
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  // Upload the fetched random dog to server
  const handleSaveDogImage = async () => {
    if (!dogUrl) {
      alert("Please fetch a dog image first!");
      return;
    }
    try {
      // fetch the dog image as a blob
      const resp = await fetch(dogUrl);
      const blob = await resp.blob();
      // convert blob to a File
      const dogFile = new File([blob], "randomDog.jpg", { type: blob.type });

      // build form data
      const formData = new FormData();
      formData.append("file", dogFile);

      // send to server
      const uploadResponse = await fetch("http://localhost:8000/save/dog", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Dog upload failed");
      }

      const data = await uploadResponse.json();
      setMessage("Dog image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading dog image:", error);
    }
  };

  return (
    <div>
       <div className="container">
      <p>{message}</p>

      {/* Existing single-file fetch and upload */}
      <h2>Fetch Single Random Image</h2>
      <button onClick={fetchSingleFile}>Fetch Single File</button>
      {displayImage && (
        <div>
          <h3>Single File</h3>
          <img
            src={displayImage}
            alt="Display"
            style={{ width: "200px", marginTop: "10px" }}
          />
        </div>
      )}

      <form onSubmit={handleSubmitSingleFile}>
        <h2>Upload Single File</h2>
        <input type="file" onChange={handleSingleFileChange} />
        <button type="submit">Upload Single File</button>
      </form>

      {/* Fetch multiple images from server */}
      <hr />
      <h2>Fetch Multiple Random Images</h2>
      <button onClick={fetchMultipleRandomImages}>Fetch Multiple Images</button>
      <div style={{ marginTop: "10px" }}>
        {multipleRandomImages.map((filename, idx) => (
          <img
            key={idx}
            src={`http://localhost:8000/fetch/file/${filename}`}
            alt="Random"
            style={{ width: "150px", marginRight: "8px" }}
          />
        ))}
      </div>

      {/* Fetch and save random dog image */}
      <hr />
      <h2>Fetch Random Dog & Save to Server</h2>
      <button onClick={fetchRandomDog}>Get Random Dog</button>
      {dogUrl && (
        <div style={{ marginTop: "10px" }}>
          <img
            src={dogUrl}
            alt="Dog"
            style={{ width: "200px", marginRight: "8px" }}
          />
        </div>
      )}
      <button onClick={handleSaveDogImage} style={{ marginTop: "10px" }}>
        Upload This Dog to Server
      </button>
    </div>
    </div>
  );
};

export default App;
