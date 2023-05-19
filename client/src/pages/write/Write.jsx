import { useContext, useState } from "react"
import "./write.css"
import axios from "axios";
import { Context } from "../../context/Context";
<script src="https://cdn.ckeditor.com/4.19.0/standard/ckeditor.js"></script>

export default function Write() {

    const [title, setTitle] = useState("")
    const [categories, setCats] = useState("");
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)
    const {user} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            categories,
            desc
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename;
            
            try {
                await axios.post("/upload", data);
            }catch(err){}
        }
        try {
           const res = await axios.post("/posts", newPost);
           window.location.replace("/post/" + res.data._id);
        }catch(err){}
        
    };

  return (
    <div className="write">
        {file && (
        <img 
        className="writeImg"
        src={URL.createObjectURL(file)} 
        alt="" />
        )}
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}
                onChange={(e) => setFile(e.target.files[0])}/>

                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}
                onChange={e => setTitle(e.target.value)}/>

            <div className="writeInput">
                <h1>Category</h1>
                <div className="categories">
                    <input
                    type="radio"
                    checked={categories === "Horror"}
                    name="categories"
                    value="Horror"
                    id="Horror"
                    onChange={(e) => setCats(e.target.value)}
                    />
                    <label htmlFor="Horror">Horror</label>
                </div>
                <div className="categories">
                    <input
                    type="radio"
                    checked={categories === "Comedy"}
                    name="categories"
                    value="Comedy"
                    id="Comedy"
                    onChange={(e) => setCats(e.target.value)}
                    />
                    <label htmlFor="Comedy">Comedy</label>
                </div>
                <div className="categories">
                    <input
                    type="radio"
                    checked={categories === "Drama"}
                    name="categories"
                    value="Drama"
                    id="Drama"
                    onChange={(e) => setCats(e.target.value)}
                    />
                    <label htmlFor="Drama">Drama</label>
                </div>
                <div className="categories">
                    <input
                    type="radio"
                    checked={categories === "Fiction"}
                    name="categories"
                    value="Fiction"
                    id="Fiction"
                    onChange={(e) => setCats(e.target.value)}
                    />
                    <label htmlFor="Fiction">Fiction</label>
                </div>
                <div className="categories">
                    <input
                    type="radio"
                    checked={categories === "Romance"}
                    name="categories"
                    value="Romance"
                    id="Romance"
                    onChange={(e) => setCats(e.target.value)}
                    />
                    <label htmlFor="Romance">Romance</label>
                </div>
                <div className="categories">
                    <input
                    type="radio"
                    checked={categories === "Fantasy"}
                    name="categories"
                    value="Fantasy"
                    id="Fantasy"
                    onChange={(e) => setCats(e.target.value)}
                    />
                    <label htmlFor="Fantasy">Fantasy</label>
                </div>
                <div className="categories">
                    <input
                    type="radio"
                    checked={categories === "Adventure"}
                    name="categories"
                    value="Adventure"
                    id="Adventure"
                    onChange={(e) => setCats(e.target.value)}
                    />
                    <label htmlFor="Adventure">Adventure</label>
                </div>
                <div className="categories">
                    <input
                    type="radio"
                    checked={categories === "Science Fiction"}
                    name="categories"
                    value="Science Fiction"
                    id="Science Fiction"
                    onChange={(e) => setCats(e.target.value)}
                    />
                    <label htmlFor="Science Fiction">Science Fiction</label>
                </div>
                <div className="categories">
                    <input
                    type="radio"
                    checked={categories === "Action"}
                    name="categories"
                    value="Action"
                    id="Action"
                    onChange={(e) => setCats(e.target.value)}
                    />
                    <label htmlFor="Action">Action</label>
                </div>
                <div className="categories">
                    <input
                    type="radio"
                    checked={categories === "Mecha"}
                    name="categories"
                    value="Mecha"
                    id="Mecha"
                    onChange={(e) => setCats(e.target.value)}
                    />
                    <label htmlFor="Mecha">Mecha</label>
                </div>
            </div>

            </div>
            <div className="writeFormGroup">
                <textarea placeholder="write your imajination, share your experience" name="desc" type="text" className="writeInput writeText"
                onChange={e => setDesc(e.target.value)}>
                </textarea>
            </div>
            <button className="writeSubmit" type="submit">Publish</button>
        </form>
    </div>
  );
}
