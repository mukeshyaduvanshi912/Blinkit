import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    details: "",
    price: "",
    image: "",
    category: "",
    stock: "",
    rating: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus(null);


    try {

      const response = await fetch("/api/products", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },


        body: JSON.stringify({

          name: form.name,

          description: form.description,

          details: form.details,

          price: Number(form.price) || 0,


          // IMPORTANT
          image: form.image,


          category: form.category,

          stock: Number(form.stock) || 0,

          rating: Number(form.rating) || 0,

        }),

      });



      const data = await response.json();


      if (!response.ok || !data.success) {

        throw new Error(data.message || "Could not add product");

      }



      setStatus({
        type: "success",
        message: "Product added successfully.",
      });



      setForm({

        name: "",
        description: "",
        details: "",
        price: "",
        image: "",
        category: "",
        stock: "",
        rating: "",

      });



      setTimeout(() => navigate("/"), 1200);



    } catch (error) {


      setStatus({
        type: "error",
        message: error.message,
      });


    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="page-section" style={{maxWidth:"700px"}}>


      <h1 style={{fontSize:"2rem",marginBottom:"20px"}}>
        Add Product
      </h1>



      <form onSubmit={handleSubmit} className="responsive-form">


        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>



        <label>
          Description

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />

        </label>




        <label>
          Details

          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
          />

        </label>



        <label>
          Price

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
          />

        </label>




        <label>
          Image URL

          <input

            type="url"

            name="image"

            value={form.image}

            onChange={handleChange}

            placeholder="https://images.unsplash.com/..."

          />

        </label>




        <label>
          Category

          <input

            type="text"

            name="category"

            value={form.category}

            onChange={handleChange}

          />

        </label>




        <label>
          Stock

          <input

            type="number"

            name="stock"

            value={form.stock}

            onChange={handleChange}

          />

        </label>




        <label>
          Rating

          <input

            type="number"

            name="rating"

            value={form.rating}

            onChange={handleChange}

            step="0.1"

            max="5"

          />

        </label>




        <button
          type="submit"
          disabled={loading}
        >

          {loading ? "Saving..." : "Save Product"}

        </button>



      </form>




      {status && (

        <div>

          {status.message}

        </div>

      )}


    </div>

  );

}