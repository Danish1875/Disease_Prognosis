import flask
from flask import Flask, request, jsonify
import pickle
import numpy as np
import pandas as pd

from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

with open("nb_model.pkl", "rb") as f:
    model = pickle.load(f)

l1 = ['itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain',
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
      'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze']

disease = ['Fungal infection', 'Allergy', 'GERD', 'Chronic cholestasis', 'Drug Reaction',
           'Peptic ulcer diseae', 'AIDS', 'Diabetes', 'Gastroenteritis', 'Bronchial Asthma', 'Hypertension',
           ' Migraine', 'Cervical spondylosis',
           'Paralysis (brain hemorrhage)', 'Jaundice', 'Malaria', 'Chicken pox', 'Dengue', 'Typhoid', 'hepatitis A',
           'Hepatitis B', 'Hepatitis C', 'Hepatitis D', 'Hepatitis E', 'Alcoholic hepatitis', 'Tuberculosis',
           'Common Cold', 'Pneumonia', 'Dimorphic hemmorhoids(piles)',
           'Heartattack', 'Varicoseveins', 'Hypothyroidism', 'Hyperthyroidism', 'Hypoglycemia', 'Osteoarthristis',
           'Arthritis', '(vertigo) Paroymsal  Positional Vertigo', 'Acne', 'Urinary tract infection', 'Psoriasis',
           'Impetigo']


@app.route('/predict', methods=['POST'])
def predict():
    s1 = request.form.get('s1')
    s2 = request.form.get('s2')
    s3 = request.form.get('s3')
    s4 = request.form.get('s4')
    s5 = request.form.get('s5')

    symptoms = []

    symptoms.append(s1)
    symptoms.append(s2)
    symptoms.append(s3)
    symptoms.append(s4)
    symptoms.append(s5)
    # symptoms = np.array(symptoms)
    

    #psymptoms = ['muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements']
    psymptoms = [s1, s2, s3, s4, s5]
    #print(type(symptoms))
    print(psymptoms)

    # Initialize l2 inside the function to avoid cross-request contamination
    l2 = [0] * len(l1)
    for k in range(0, len(l1)):
        for z in psymptoms:
            if z == l1[k]:
                l2[k] = 1

    inputTest = [l2]
    predict = model.predict(inputTest)
    predicted = predict[0]

    diseasePred = disease[predicted] if predicted < len(disease) else "Unknown Disease"
    print("output", diseasePred)

    # Return as JSON object for frontend compatibility
    return jsonify({'disease': diseasePred})


@app.route('/', methods=['GET'])
def index() :
    return 'Disease Prognosis'

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')

# The above code is a Flask application that serves as a disease prognosis system.
# It uses a pre-trained Naive Bayes model to predict diseases based on user-input symptoms.
# The application listens for POST requests at the '/predict' endpoint, processes the symptoms, and returns the predicted disease as a JSON response.