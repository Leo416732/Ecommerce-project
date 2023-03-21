import multer from "multer";
import { nanoid } from "nanoid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const ext = extractExtension(file.originalname);
    console.log("ext: ", ext);
    const newName = nanoid() + "." + ext;
    cb(null, newName);
  },
});
const extractExtension = (name) => {
  const splitted = name.split(".");
  return splitted[splitted.length - 1];
};

const upload = multer({ storage: storage });

export default upload;
