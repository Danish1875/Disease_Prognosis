import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase.js";
import { getDatabase, ref, onValue } from "firebase/database";
import { motion, AnimatePresence } from "framer-motion"
import GoogleMap from './GoogleMap';

import axios from 'axios';


const doctors = [
  {
    name: 'Dr. John Smith',
    age: 45,
    experience: '15 years',
    expertise: 'Cardiology',
    contact: {
      phone: '8012345679',
      email: 'john.smith@diagnosio.com'
    },
    image: 'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg'
  },
  {
    name: 'Dr. Maria Garcia',
    age: 30,
    experience: '10 years',
    expertise: 'Gastroenterology',
    contact: {
      phone: '8901234567',
      email: 'maria.garcia@diagnosio.com'
    },
    image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg'
  },
  {
    name: 'Dr. William Lee',
    age: 40,
    experience: '16 years',
    expertise: 'Neurology',
    contact: {
      phone: '9123456780',
      email: 'william.lee@diagnosio.com'
    },
    image: 'https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-blue-background_662251-343.jpg'
  },
  {
    name: 'Dr. Elizabeth Brown',
    age: 42,
    experience: '12 years',
    expertise: 'Dermatology',
    contact: {
      phone: '9654321876',
      email: 'elizabeth.brown@diagnosio.com'
    },
    image: 'https://media.istockphoto.com/id/1323303738/photo/medical-doctor-indoors-portraits.jpg?s=170667a&w=0&k=20&c=LoWDLLMsblLcIAzwvUCJEE07am20JkRqAvstUrXLUgw='
  },
  {
    name: 'Dr. David Martinez',
    age: 55,
    experience: '25 years',
    expertise: 'Orthopedics',
    contact: {
      phone: '8765432109',
      email: 'david.martinez@diagnosio.com'
    },
    image: 'https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg'
  },
  {
    name: 'Dr. Sarah Johnson',
    age: 38,
    experience: '14 years',
    expertise: 'Family Medicine',
    contact: {
      phone: '9876543210',
      email: 'sarah.johnson@diagnosio.com'
    },
    image: 'https://st2.depositphotos.com/5906386/8938/i/950/depositphotos_89385466-stock-photo-beautiful-girl-doctor-in-a.jpg'
  },
  {
    name: 'Dr. Michael Thompson',
    age: 28,
    experience: '6 years',
    expertise: 'Internal Medicine',
    contact: {
      phone: '7890123456',
      email: 'michael.thompson@diagnosio.com'
    },
    image: 'https://st4.depositphotos.com/1325771/39154/i/600/depositphotos_391545206-stock-photo-happy-male-medical-doctor-portrait.jpg'
  },
  {
    name: 'Dr. Jessica Wilson',
    age: 41,
    experience: '13 years',
    expertise: 'Pediatrics',
    contact: {
      phone: '7012345678',
      email: 'jessica.wilson@diagnosio.com'
    },
    image: 'https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg'
  },
  {
    name: 'Dr. Christopher Davis',
    age: 47,
    experience: '19 years',
    expertise: 'Ophthalmology',
    contact: {
      phone: '6789012345',
      email: 'christopher.davis@diagnosio.com'
    },
    image: 'https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?b=1&s=170667a&w=0&k=20&c=vUq0J-LgD4FPEV1Ua_0NeQBcJ2xb8EjGe5fdcR1K2x0='
  },
  {
    name: 'Dr. Emily Anderson',
    age: 39,
    experience: '16 years',
    expertise: 'Psychiatry',
    contact: {
      phone: '5678901234',
      email: 'emily.anderson@diagnosio.com'
    },
    image: 'https://t4.ftcdn.net/jpg/03/17/85/49/360_F_317854905_2idSdvi2ds3yejmk8mhvxYr1OpdVTrSM.jpg'
  }
];



const Dashboard = () => {
  const [selectedExpertise, setSelectedExpertise] = useState(null);

  const [selectedOptions, setSelectedOptions] = useState({});
  const [responseData, setResponseData] = useState(null);

  const options = [
    'itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain',
      'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue',
      'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat',
      'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion',
      'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation',
      'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload',
      'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation',
      'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate',
      'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps',
      'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails',
      'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain',
      'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side',
      'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)',
      'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches',
      'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances',
      'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption',
      'fluid_overload', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling',
      'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze'
  ];

  const handleChange = event => {
    const { name, value } = event.target;
    setSelectedOptions(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create the payload object with the selected options
    const payload = selectedOptions;
    console.log(payload);

    const headers = {
      'Content-Type': 'multipart/form-data',
      // Add other headers if required
    };

    // Send the Axios request
    axios.post('http://127.0.0.1:5000/predict', payload,  { headers })
      .then(response => {
        // Process the response data
        console.log(response.data);
        setResponseData(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  const handleExpertiseClick = (expertise) => {
    setSelectedExpertise(expertise);
  };


  const [user] = useAuthState(auth);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const database = getDatabase();
    if (user) {
      const userId = user.uid;
      const userRef = ref(database, `users/${userId}`);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        setUserDetails(data);
      });
    }
  }, [user]);

  return (
    <div className='dashboard'>
      <div className='patient-info-container'>
        <div className='profile-photo'>
          <img src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' alt='Patient Profile' />
        </div>
        <div className='patient-information'>
          <p><strong>Name:</strong> {userDetails?.firstName} {userDetails?.lastName}</p>
          <p><strong>Age:</strong> {userDetails?.age}</p>
          <p><strong>Weight:</strong> {userDetails?.weight} kg</p>
          <p><strong>Gender:</strong> {userDetails?.gender}</p>
        </div>
      </div>

      <div className='symptoms-form-container'>
        <form className='symptoms-form' onSubmit={handleSubmit} >
          <label htmlFor='symptom1'>Symptom 1:</label>
          <select id='s1' name='s1' value={selectedOptions.s1 || ''} onChange={handleChange}>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <label htmlFor='symptom2'>Symptom 2:</label>
          <select id='s2' name='s2' value={selectedOptions.s2 || ''} onChange={handleChange}>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <label htmlFor='symptom3'>Symptom 3:</label>
          <select id='s3' name='s3' value={selectedOptions.s3 || ''} onChange={handleChange}>
          {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <label htmlFor='symptom4'>Symptom 4:</label>
          <select id='s4' name='s4' value={selectedOptions.s4 || ''} onChange={handleChange}>
          {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>

          <label htmlFor='symptom5'>Symptom 5:</label>
          <select id='s5' name='s5' value={selectedOptions.s5 || ''} onChange={handleChange}>
          {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <motion.button type='submit' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>Predict</motion.button>
        </form>
      </div>


      <div className='map-container-dashboard'>
        <div className="result">
          <motion.div
            className="wrapper"
            animate={{
              scale: [0, 1],
              borderRadius: ["50%", "0%"]
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <div className="result-wrapper">
              <h2>RESULTS</h2>
              <div className="results-content">
                {/* You have a disease !! */}
                {responseData && (
                  <div>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="maps">
          <GoogleMap />
        </div>
      </div>

      <motion.div
        className="doctor-container-wrapper"
        animate={{
          scale: [0, 1],
          borderRadius: ["50%", "0%"]
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <h2>Get In Touch With Our Doctors ~</h2>
        <div className="expertise-container">
          {doctors.map((doctor, index) => (
            <button
              key={index}
              className={`expertise-button ${selectedExpertise === doctor.expertise ? 'active' : ''}`}
              onClick={() => handleExpertiseClick(doctor.expertise)}
            >
              {doctor.expertise}
            </button>
          ))}
        </div>
        
        {selectedExpertise && (
          <AnimatePresence>
            <motion.div
              key={selectedExpertise}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9 }}
              className='doctor-container'
            >

              {doctors
                .filter((doctor) => doctor.expertise === selectedExpertise)
                .map((doctor, index) => (
                  <div key={index} className='doctor-info'>
                    <div className='doctor-info-left'>
                      <img src={doctor.image} alt='Doctor' />
                      <p>{doctor.name}</p>
                      <p>{doctor.age} years old</p>
                      <p>{doctor.experience} experience</p>
                    </div>
                    <div className='doctor-info-right'>
                      <p>Area of Expertise: {doctor.expertise}</p>
                      <ul>
                        <p>Contact:</p>
                        <li>Phone: {doctor.contact.phone}</li>
                        <li>Email: {doctor.contact.email}</li>
                      </ul>
                    </div>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
      

    </div>
  );
};
export default Dashboard