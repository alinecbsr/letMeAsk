import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
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
          <button className="create-room">
            <img src={googleIconImg} alt="Icon Google Logo" />
            Create your room with Google
          </button>
          <div className="separator">or enter a room</div>
          <form>
            <input 
              type="text" 
              placeholder="Enter room code"
            />
            <Button type="submit">
              Enter the room
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}