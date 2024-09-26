"use client";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";

export default function Handler() {
  const handleFileChange = (event) => {
    console.log(event.currentTarget.files[0].type);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result;
      formik.setFieldValue("image", base64);
    };
    reader.readAsDataURL(event.currentTarget.files[0]);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      image: "",
      tage: "",
      author: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
      const server = await fetch("/api/articals", {
        method: "POST",

        body: JSON.stringify({ ...values }),
      });
      const res = await server.json();
      console.log(res);
    },
  });
  return (
    <>
      <div className="">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-3 p-5 w-full h-full"
        >
          <input
            className="border-2  rounded-md w-full text-3xl p-5"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            placeholder="title"
          />
          <input
            className="border-2 rounded-md w-full text-3xl p-5"
            name="tage"
            value={formik.values.tage}
            onChange={formik.handleChange}
            placeholder="tage"
          />
          <input
            className="border-2 rounded-md w-full text-3xl p-5"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
            placeholder="author"
          />
          <input
            className="border-2 rounded-lg w-full "
            name="image"
            type="file"
            onChange={handleFileChange} // Handle file change
            onBlur={formik.handleBlur} // Handle blur event
          />
          <JoditEditor
            value={formik.values.content}
            onChange={(e) => {
              formik.setFieldValue("content", e);
            }}
          />

          <button className="bg-blue-600  w-fit px-72 py-6 text-2xl text-white">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
