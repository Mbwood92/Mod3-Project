import React, { useState } from 'react';

function ContactPage() {
  // State to manage user input for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    productName: '',
    comment: '',
  });

  // State to manage reviews
  const [reviews, setReviews] = useState([]);

  // State to track the index of the review being edited
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle form submission (add or edit a review)
  const handleFormSubmit = () => {
    // Check if the form data is valid (you may want to add more validation)
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.productName || !formData.comment) {
      alert('Please fill in all fields.');
      return;
    }

    if (editIndex !== null) {
      // Edit existing review
      const updatedReviews = [...reviews];
      updatedReviews[editIndex] = { ...formData };
      setReviews(updatedReviews);
      setEditIndex(null);
    } else {
      // Add the new review to the reviews array
      setReviews((prevReviews) => [...prevReviews, formData]);
    }

    // Clear the form data
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      productName: '',
      comment: '',
    });
  };

  // Function to handle editing a review
  const handleEditReview = (index) => {
    setFormData({ ...reviews[index] });
    setEditIndex(index);
  };

  // Function to handle deleting a review
  const handleDeleteReview = (index) => {
    setReviews((prevReviews) => prevReviews.filter((_, i) => i !== index));
    setEditIndex(null);
  };

  return (
    <div>
      <h2>Give us a review!</h2>
      {/* Display reviews */}
      {reviews.map((review, index) => (
        <div key={index}>
          <p>
            <strong>Name:</strong> {review.name}
          </p>
          <p>
            <strong>Email:</strong> {review.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {review.phoneNumber}
          </p>
          <p>
            <strong>Product Name:</strong> {review.productName}
          </p>
          <p>
            <strong>Comment:</strong> {review.comment}
          </p>
          {/* Edit and delete buttons */}
          <button onClick={() => handleEditReview(index)}>Edit</button>
          <button onClick={() => handleDeleteReview(index)}>Delete</button>
        </div>
      ))}
      {/* Review form */}
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Product Name:
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea name="comment" value={formData.comment} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleFormSubmit}>
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default ContactPage;



