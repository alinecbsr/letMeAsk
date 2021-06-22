//import { useAuth } from '../hooks/useAuth';

import { Link } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
  //const { user } = userAuth();

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
          <form>
            <input
              type="text"
              placeholder="Room name"
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