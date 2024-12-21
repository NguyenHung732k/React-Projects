export const searchSongs = async (mood) => {
    const token = "SPOTIFY_API_TOKEN"
    const moodKeywords = {
        Happy: "cheerful upbeat",
        Relaxed: "calm chill",
        Focused: "study concentration",
    }

    const response = await fetch(
        `https://api.spotify.com/v1/search?q=${moodKeywords[mood]}&type=track&limit=10`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )

    const data = await response.json()
    return data.tracks.items.map((track) => ({
        title: track.name,
        artist: track.artists[0].name,
        albumCover: track.album.images[0].url,
        uri: track.uri,
    }))
}