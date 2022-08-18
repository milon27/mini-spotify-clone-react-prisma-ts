import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const doSeed = async () => {
    // create some artists
    await prisma.artists.createMany({
        data: [
            { id: 1, name: "Michael Jackson" },
            { id: 2, name: "Justin Bieber" },
            { id: 3, name: "Selina Gomez" },
        ]
    })

    // create albums for artists
    await prisma.albums.createMany({
        data: [
            { id: 1, name: "Thriller 40", artistsId: 1 },
            { id: 2, name: "Live In Yokohama", artistsId: 1 },
            { id: 3, name: "Bad 25", artistsId: 1 },
            { id: 4, name: "Justice", artistsId: 2 },
            { id: 5, name: "Believe", artistsId: 2 }
        ]
    })

    // create tracks for albums
    const MUSIC_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    await prisma.tracks.createMany({
        data: [
            { id: 1, title: "Thriller 40 Music", audioUrl: MUSIC_URL, albumsId: 1 },
            { id: 2, title: "Live In Yokohama Music", audioUrl: MUSIC_URL, albumsId: 2 },
            { id: 3, title: "Bad 25 Music", audioUrl: MUSIC_URL, albumsId: 3 },
            { id: 4, title: "Justice Music", audioUrl: MUSIC_URL, albumsId: 4 },
            { id: 5, title: "Believe Music", audioUrl: MUSIC_URL, albumsId: 5 }
        ]
    })
}

doSeed().then(() => {
    console.log("seed done")
}).catch(e => {
    console.log("some error in seeding.", e)
})