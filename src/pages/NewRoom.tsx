import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms'); 

    const firebaseRoom = await roomRef.push({
      title: newRoom, 
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration symbolizing questions and answers" />
        <strong>Every question has an answer</strong>
        <p>Ask your audience questions in real time</p>
        <p>Learn and share knowledge with others</p>
      </aside>
      <main>
        <div className="main-container">
          <img src={logoImg} alt="Logo Let me Ask" />
          <h2>Create a new room</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Room name"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Create room
            </Button>
          </form>
          <p>
            Want to join an existing room? <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  )
}