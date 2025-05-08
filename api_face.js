
const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

// Tu API Key y Secret aquí
const apiKey = '0oO6VPXKnazq72E6mOoBMXG7hqDpcr4R';
const apiSecret = 'nkUgqGzy9ilIzd4fc_gryRJZTnC3azmI';
const imagePath = 'feid_face.jpg'; // imagen en tu carpeta

async function detectFace() {
  const form = new FormData();
  form.append('api_key', apiKey);
  form.append('api_secret', apiSecret);
  form.append('image_file', fs.createReadStream(imagePath));
  form.append('return_attributes', 'age,gender,emotion');

  try {
    const response = await axios.post(
      'https://api-us.faceplusplus.com/facepp/v3/detect',
      form,
      { headers: form.getHeaders() }
    );
    
    // Guardamos el resultado en un archivo JSON
    fs.writeFileSync('resultado.json', JSON.stringify(response.data, null, 2));

    console.log('Resultado guardado en resultado.json');
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
  }
}

detectFace();
