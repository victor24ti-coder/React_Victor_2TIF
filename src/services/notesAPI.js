import axios from 'axios'

const API_URL = "https://zhcxfgskmkfoukqamxyc.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoY3hmZ3NrbWtmb3VrcWFteHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NTc1MTksImV4cCI6MjA5NjQzMzUxOX0.Js5XWKWOq3S8rw7OLPGM1sjpF1GqN9D-JTt8eeAkllo"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}