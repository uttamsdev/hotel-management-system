import { useState } from "react";

export const ImageUploader = ({ existingImageUrl, selector }) => {
  const [preview, setPreview] = useState(existingImageUrl);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL for the file preview
      const fileUrl = URL.createObjectURL(file);
      setPreview(fileUrl);
    }
  };

  return (
    <div>
      <label htmlFor="img">Upload Image:</label>
      <div className="flex items-center gap-1 border px-1 py-1 rounded">
        {preview && (
          <img className="w-[52px] h-[28px] rounded" src={preview} alt="Preview" style={{ maxWidth: "200px" }} />
        )}
        <input
          className="!px-0 !py-0 !border-none"
          name="img"
          id={selector}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};
