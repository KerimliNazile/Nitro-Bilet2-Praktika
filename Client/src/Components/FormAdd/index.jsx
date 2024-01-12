import React from 'react';
import { useFormik } from 'formik';
import  axios from "axios"
const FormAdd = () => {

    async function addProd(values) {
        const res=await axios.post("http://localhost:5000/trees",values)
    
    }

    const formik = useFormik({
        initialValues: {
          image: '',
          title: '',
          category: '',
        },
        onSubmit: values => {
          addProd(values)
        },
      });
  return (
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="image">Image</label>
    <input
      id="image"
      name="image"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.image}
    />

    <label htmlFor="title">Title</label>
    <input
      id="title"
      name="title"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.title}
    />

    <label htmlFor="">Category</label>
    <input
      id="category"
      name="category"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.category}
    />

    <button type="submit">Add</button>
  </form>
  )
}

export default FormAdd
