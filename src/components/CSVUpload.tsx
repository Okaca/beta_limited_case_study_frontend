import React, { useState } from "react";
import axios from "axios";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { toast } from "react-toastify";

interface CSVUploadProps {
    onDataUpload: (data: any) => void; // Type for the onDataUpload function
  }

const CSVUpload: React.FC<CSVUploadProps> = ({ onDataUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "text/csv") {
      setFile(selectedFile);
    } else {
      toast.error("Please upload a valid CSV file.");
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      toast.error("No file detected! Please select a file to upload.");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:3000/api/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      onDataUpload(response.data);
      toast.success("File uploaded successfully!");
    } catch (error) {
      toast.error("Error uploading the file!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      <div className="flex items-center space-x-2 border p-2 rounded-lg">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          id="csv-upload-input"
          className=""
        />
      </div>

      <button
        onClick={handleUpload}
        disabled={uploading || !file}
        className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 disabled:bg-gray-400"
      >
        <FileUploadIcon />
        <span>{uploading ? "Uploading..." : "Upload CSV"}</span>
      </button>
    </div>
  );
};

export default CSVUpload;
