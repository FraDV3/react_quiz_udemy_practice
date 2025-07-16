// Import logo image for the header
import logoImg from '../assets/quiz-logo.png';

// Header component with logo and title
export default function Header() {
  return (
    <header>
      {/* Logo image */}
      <img
        src={logoImg}
        alt="Logo showing a clipboard with quiz sheet and writing tools"
      />
      {/* App title */}
      <h1>ReactQuiz</h1>
    </header>
  );
}
