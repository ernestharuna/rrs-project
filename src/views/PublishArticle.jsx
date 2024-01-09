import { useForm } from "react-hook-form"
import axiosClient from "../interceptor";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";

export default function PublishArticle() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const [content, setContent] = useState(null);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        data.body = content;
        await axiosClient.post('/posts', data)
            .then(() => {
                alert('Successful!');
                navigate('/')
            }).catch(() => alert('Something went wrong!'))
    }

    const toolbarOptions = [
        [{ 'header': [3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'], // text formatting options
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ];

    return (
        <div className="container">
            <section className="mt-5 p-2">
                <h1 className="fs-4 mb-4">Publish Article</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-3">
                        <div className="col">
                            <input type="text" className={errors.name ? "form-control py-3 rounded-1 fw-semibold border border-danger" : "form-control py-3 rounded-1 fw-semibold"} placeholder="Attorney's Name" aria-label="Attorney's Name"
                                {...register('name', { required: true })}
                            />
                        </div>
                        <div className="col">
                            <input type="text" className={errors.address ? "form-control py-3 rounded-1 fw-semibold border border-danger" : "form-control py-3 rounded-1 fw-semibold"} placeholder="Attorney's Address" aria-label="Attorney's Address"
                                {...register('address', { required: true })}
                            />
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold text-secondary">Article Body</label>
                        <ReactQuill theme="snow" value={content} onChange={setContent} modules={{ toolbar: toolbarOptions }}
                            style={{ width: "100%", background: "white" }}
                        />

                        {/* <ReactQuill */}
                    </div>

                    <button className="btn btn-secondary rounded-1 w-100 py-3 shadow-sm"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "PUBLISHING . . . " : "PUBLISH"}
                    </button>
                </form>
            </section>
        </div>
    )
}
