import axios from 'axios';

export const fetchNotes = async () => {
    const response = await axios.get('/api/notes');
    return response.data;
};

export const saveNote = async (note) => {
    const response = await axios.post('/api/notes', note);
    return response.data;
};