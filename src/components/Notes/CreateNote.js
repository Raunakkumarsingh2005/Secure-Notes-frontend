<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/Notes.css';

const CreateNote = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const noteData = { content }; // Directly use the content as a string
      await api.post('/notes', noteData);
      navigate('/notes');
    } catch (err) {
      setError('Error creating note');
      console.error(err);
=======
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdNoteAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Buttons from "../../utils/Buttons";
import toast from "react-hot-toast";

const CreateNote = () => {
  const navigate = useNavigate();
  //set the content of the reactquill
  const [editorContent, setEditorContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (content, delta, source, editor) => {
    setEditorContent(content);
  };

  //note create handler
  const handleSubmit = async () => {
    if (editorContent.trim().length === 0) {
      return toast.error("Note content is required");
    }
    try {
      setLoading(true);
      const noteData = { content: editorContent };
      await api.post("/notes", noteData);
      toast.success("Note create successful");
      navigate("/notes");
    } catch (err) {
      toast.error("Error creating note");
    } finally {
      setLoading(false);
>>>>>>> new-code
    }
  };

  return (
<<<<<<< HEAD
    <div className="note-form-container">
      <h2>Create a New Note</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="note-form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter note content"
          required
        />
        <button type="submit">Create Note</button>
      </form>
=======
    <div className="min-h-[calc(100vh-74px)] p-10">
      <div className="flex items-center gap-1 pb-5">
        <h1 className="font-montserrat  text-slate-800 sm:text-4xl text-2xl font-semibold ">
          Create New Note
        </h1>
        <MdNoteAlt className="text-slate-700 text-4xl" />
      </div>

      <div className="h-72 sm:mb-20  lg:mb-14 mb-28 ">
        <ReactQuill
          className="h-full "
          value={editorContent}
          onChange={handleChange}
          modules={{
            toolbar: [
              [
                {
                  header: [1, 2, 3, 4, 5, 6],
                },
              ],
              [{ size: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
              ],
              ["clean"],
            ],
          }}
        />
      </div>

      <Buttons
        disabled={loading}
        onClickhandler={handleSubmit}
        className="bg-customRed  text-white px-4 py-2 hover:text-slate-300 rounded-sm"
      >
        {loading ? <span>Loading...</span> : " Create Note"}
      </Buttons>
>>>>>>> new-code
    </div>
  );
};

export default CreateNote;
