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

  // Handler for multiple-file upload 
  const handleMultipleFileChange = (e) => {
    // e.target.files is a FileList
    setMultipleFiles(Array.from(e.target.files));
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

   // Upload multiple files
   const handleSubmitMultipleFiles = async (e) => {
    e.preventDefault();
    if (multipleFiles.length === 0) {
      setMessage("Please select one or more files before uploading.");
      return;
    }

    try {
      const formData = new FormData();
      
      multipleFiles.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch("http://localhost:8000/save/multiple", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Multiple file upload failed");
      }
      setMessage(`Successfully uploaded ${multipleFiles.length} files!`);
      // Reset the files in state
      setMultipleFiles([]);
    } catch (error) {
      console.error("Error uploading multiple files:", error);
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
    <div className="container">
    {/* Display messages */}
    {message && <div className="message">{message}</div>}

          {/* Fetch Single Random Image */}
      <section className="section">
        <h2>Fetch Single Random Image</h2>
        <button onClick={fetchSingleFile}>Fetch Single File</button>
        {displayImage && (
          <div style={{ marginTop: "10px" }}>
            <img src={displayImage} alt="Display" width="200" />
          </div>
        )}
      </section>

      {/* Upload Single File */}
      <section className="section">
        <h2>Upload Single File</h2>
        <form onSubmit={handleSubmitSingleFile}>
          <input type="file" onChange={handleSingleFileChange} />
          <button type="submit">Upload Single File</button>
        </form>
      </section>

      {/*Upload Multiple Files */}
      <section className="section">
        <h2>Upload Multiple Files</h2>
        <form onSubmit={handleSubmitMultipleFiles}>
          <input type="file" multiple onChange={handleMultipleFileChange} />
          <button type="submit">Upload Multiple Files</button>
        </form>
        {multipleFiles.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <p>Selected {multipleFiles.length} files to upload.</p>
          </div>
        )}
      </section>

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
    
  );
};

export default App;
