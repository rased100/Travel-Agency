import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const AddBlog = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = (data) => {
        fetch("https://nameless-gorge-19964.herokuapp.comblogs", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        console.log(data);
        reset()
    };

    return (
        <div >
            <h1 className=" m-4">Add New Blog</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="input-field w-50  mb-1"
                        name="img"
                        placeholder="image url"
                        {...register("img", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field w-50  mb-1"
                        name="title"
                        placeholder="title"
                        {...register("title", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field w-50  mb-1"
                        name="info"
                        placeholder="info"
                        {...register("info", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field w-50  mb-1"
                        name="description"
                        placeholder="description"
                        {...register("description", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field w-50  mb-1"
                        name="category"
                        placeholder="category"
                        {...register("category", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field w-50  mb-1"
                        name="cost"
                        placeholder="cost"
                        {...register("cost", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field w-50  mb-1"
                        name="location"
                        placeholder="location"
                        {...register("location", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field w-50  mb-1"
                        name="date"
                        placeholder="date"
                        {...register("date", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field w-50  mb-1"
                        name="time"
                        placeholder="time"
                        {...register("time", { required: true })}
                    />
                    <br />
                    <input
                        className="input-field w-50  mb-1"
                        name="rating"
                        placeholder="rating"
                        {...register("rating", { required: true })}
                    />
                    <br />
                    <input
                        className="submit-btn button-hover px-3 py-1 mt-3"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddBlog;