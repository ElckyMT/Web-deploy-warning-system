'use server';

import axios from "axios";

const dataPandas = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/api/v1/predict/pandas');
        return response.data
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const dataNumpy = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/api/v1/predict/numpy');
        return response.data
    } catch (err) {
        console.error(err);
        throw err;
    }
}


// Example using getServerSideProps
export async function getServerSideProps(context) {
    const res = await fetch(`https://api.example.com/data`);
    const data = await res.json();
    return { props: { data } };
  }
export {dataNumpy, dataPandas}


/*
import formidable from 'formidable';
import xlsx from 'xlsx';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm();
  
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to parse file' });
    }

    try {
      const workbook = xlsx.readFile(files.file.filepath);
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

      const headers = data[0];
      const rows = data.slice(1);

      res.status(200).json({ headers, rows });
    } catch (error) {
      res.status(500).json({ error: 'Failed to parse Excel file' });
    }
  });
}*/