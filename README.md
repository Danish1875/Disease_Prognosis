# Disease Prognosis

## Introduction
Welcome to the Disease Prognosis Web App! This web application is designed to help users predict the most likely disease based on input symptoms. It utilizes machine learning algorithms and offers a user-friendly dashboard for a seamless experience.

## Project Overview
This project is built using JavaScript for the web app and Python for the machine learning part. The web app features a user login system powered by Firebase Authentication, which allows users to create profiles and store personal information like gender, age, weight, height, smoking, and alcohol habits.

### The project is divided into two main parts:

- Machine Learning: This part enables users to input five symptoms, and based on this input, the most likely disease is detected and displayed on the React website. The Naive Bayes algorithm is primarily used for this purpose, as it provides the best accuracy for the project. Other algorithms like k-nearest, random forest, and linear regression are also available as alternatives.

- Dashboard: The React JS-based dashboard includes a landing page, login page, and user dashboard. Users can input symptoms to get the disease prognosis. Additionally, it provides information on the nearest hospitals and clinics in the vicinity, utilizing the Google Maps API. Each disease in the results is linked to a doctor card with contact details.

## Machine Learning
The machine learning component is built using Python and leverages the Flask framework to create an API. The Naive Bayes algorithm is used for disease prediction due to its superior accuracy. The algorithm uses a predefined list of symptoms and diseases to make predictions. Users can input their symptoms, and the model will return the most likely disease based on the provided data.

## Dashboard
The user-friendly dashboard is built with React JS and features a clean and intuitive design. It allows users to input symptoms for disease prognosis. The dashboard dynamically presents the results and displays information about the nearest hospitals and clinics using the Google Maps API.

## Getting Started
To use the Disease Prognosis Web App, follow these simple steps:

1. Sign Up/Log In: If you are a new user, sign up with your credentials to create an account. If you are an existing user, log in to your dashboard.

2. Provide Symptoms: On the dashboard, you can input five symptoms that you are experiencing. The web app will process your symptoms and predict the most likely disease based on the machine learning model.

3. View Results: After submitting your symptoms, the web app will display the predicted disease. You can access additional information about the disease and its potential treatments.

4. Find Nearby Medical Facilities: The dashboard also provides information about the nearest hospitals and clinics using the Google Maps API. This feature can be helpful in finding medical assistance quickly.

## Contact Our Doctors
It is understandable that getting personalized advice is crucial when dealing with medical concerns. That's why we offer the option to contact our expert doctors directly. Choose your area of expertise from the list, and you'll be connected with a specialist who can address your concerns.

### Disclaimer
Please note that the Disease Prognosis Web App is intended for informational purposes only and is not a substitute for professional medical advice. Always consult a healthcare professional for accurate and personalized medical guidance. The machine learning predictions are based on statistical models and may not be 100% accurate. Use the app responsibly and at your own risk.
