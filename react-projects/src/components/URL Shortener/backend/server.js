const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost/urlshortener', { useNewUrlParser: true, useUnifiedTopology: true })

const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl: { type: String, unique: true },
    clicks: { type: Number, default: 0 }
})

const Url = mongoose.model('Url', urlSchema)

app.post('/api/shorten', async (req, res) => {
    const { originalUrl, customShortUrl: inputCustomShortUrl } = req.body

    let customShortUrl = inputCustomShortUrl

    if (customShortUrl) {
        const existingUrl = await Url.findOne({ shortUrl: customShortUrl })
        if (existingUrl) {
            return res.status(400).json({ error: 'Custom short URL already exists' });
        }
    } else {
        customShortUrl = generateShortUrl()
    }

    const newUrl = new Url({ originalUrl, shortUrl: customShortUrl })
    await newUrl.save()
    res.json(newUrl)
})

app.get('/api/urls', async (req, res) => {
    const urls = await Url.find()
    res.json(urls)
})

app.delete('/api/urls/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedUrl = await Url.findByIdAndDelete(id)
        if (!deletedUrl) {
            return res.status(404).json({ error: 'URL not found' })
        }
        res.json({ message: 'URL deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

function generateShortUrl() {
    return Math.random().toString(36).substring(2, 8)
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))