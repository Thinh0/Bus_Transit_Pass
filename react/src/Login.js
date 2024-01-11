import React from 'react';
import { Container } from 'react-bootstrap';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=03ef4624c1054b4e866fc93a8f337376' +
  '&response_type=code&redirect_uri=http://localhost:3000' +
  '&scope=streaming user-read user-modify-playback-state user-read-email user-read-playback-state user-read-email user-read-private user-read-library user-library-modify user-library-read user-library-modify user-read-playback-state user-modify-playback-state';

export default function Login() {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{minHeight:"100vh"}}>
            <a className='btn btn-success btn-lg' href={AUTH_URL}>Login with Spotify</a>
        </Container>
    )
}