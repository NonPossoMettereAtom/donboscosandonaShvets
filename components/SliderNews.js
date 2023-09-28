import { Container, Typography } from '@mui/material'
import { NewsCard } from '/components'


export default function News({data, title, limit}) {
    if(!data) return <div>Caricamento...</div>
    if(!data && data.staus =="404") return <div>Errore: il canale specificato per le news è inesistente
    </div>

    data = data.filter((post) => !post.in_evidenza)
    data.splice(limit) //prendo solo i primi 2
    console.log (data)

    return (
        <Container maxWidth="lg" sx={{marginTop: '5rem', marginBottom: '6rem' }}>
            <Typography
                style={{textAlign: 'left', paddingBottom: '2rem'}}
                component='h2'
                variant='h4'
                color='inherit'
                gutterBottom
            >
                {title}
            </Typography>
            {
                data.map((post) => (
                    <NewsCard post={post} />
                ))
            }
        </Container>
    )
}