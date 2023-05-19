import React, { useState } from 'react';
import './App.css'

const initialFormData = { make: '', model: '', year: '', mileage: '', condition: '', features: [], transmission: '', priceRange: '', contactNumber: '' };

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
//'formData' state contains properties for each form field
//'use' state hook is used to create and update this state

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedFeatures = checked ? [...formData.features, value] : formData.features.filter((feature) => feature !== value);

      setFormData((prevFormData) => ({
        ...prevFormData, features: updatedFeatures }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

// Perform form validation
if (formData.make.trim() === '' || formData.model.trim() === '' || formData.contactNumber.trim() === '') {
  // Display an error message or take appropriate action
  alert('Please fill in all required fields.');
  return;
}
    console.log(formData);
    // Perform further actions like submitting the data to a server
  };

  return (
    <div className="App">
      <h1>Car Sell App</h1>
      <h3>Enter the information about the car you want to sell</h3>
      <form onSubmit={handleSubmit}>
        <label>Car Make:
          <input type="text" name="make" value={formData.make} onChange={handleChange} />
        </label>

        <label>Car Model:
          <input type="text" name="model" value={formData.model} onChange={handleChange} />
        </label>

        <label>Year:
          <input type="date" name="year" value={formData.year} onChange={handleChange} />
        </label>

        <label>
          Mileage:
          <input type="number" name="mileage" value={formData.mileage} onChange={handleChange} />
        </label>

        <label>Condition:
           
          <label>
            <input type="radio" name="condition" value="Excellent" checked={formData.condition === 'Excellent'} onChange={handleChange} />
            Excellent
          </label>

          <label>
            <input type="radio" name="condition" value="Good"  checked={formData.condition === 'Good'}onChange={handleChange} />
             Good
          </label>

          <label>
            <input type="radio" name="condition" value="Fair" checked={formData.condition === 'Fair'} onChange={handleChange} /> 
            Fair
          </label>

          <label>
            <input type="radio" name="condition" value="Poor" checked={formData.condition === 'Poor'} onChange={handleChange} />
            Poor
          </label>
        </label>

        <label>Features:
          <label>
            <input type="checkbox" name="features" value="Air Conditioning" checked={formData.features.includes('Air Conditioning')} onChange={handleChange} />
            Air Conditioning
          </label>

          <label>
            <input type="checkbox" name="features" value="Power Steering" checked={formData.features.includes('Power Steering')} onChange={handleChange} /> 
            Power Steering
          </label>

          <label>
            <input type="checkbox" name="features" value="Power Windows" checked={formData.features.includes('Power Windows')}onChange={handleChange} />
              Power Windows
          </label>

          <label>
            <input type="checkbox" name="features" value="ABS" checked={formData.features.includes('ABS')} onChange={handleChange} />
             ABS
          </label>

          <label>
            <input type="checkbox" name="features" value="Navigation System" checked={formData.features.includes('Navigation System')} onChange={handleChange} />
            Navigation System
          </label>
        </label>


        <label>Transmission:
          <select name="transmission"value={formData.transmission}onChange={handleChange}>
            <option value="">-- Select Transmission --</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </label>

        <label>Price Range:
          <input type="range" name="priceRange" min="0" max="100000" step="1000" value={formData.priceRange}onChange={handleChange} />
          <span>{formData.priceRange}</span>
        </label>

        <label>Contact Number:
          <input type="text"name="contactNumber"value={formData.contactNumber}onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
