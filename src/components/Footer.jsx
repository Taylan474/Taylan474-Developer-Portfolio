import { Github, Linkedin} from "lucide-react";

function Footer() {
  return (
    <footer
      id="contact"
      className="py-6 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center bg-black text-gray-500"
    >
      {/* Left content */}
      <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
        © 2025 · Made by Taylan
      </p>

      {/* Social icons on the right */}
      <div className="flex gap-6 text-gray-300">
        <a
          href="https://github.com/Taylan474"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Github size={22} strokeWidth={1.8} />
        </a>
        <a
          href="https://www.linkedin.com/in/taylan-%C3%B6zdabak-592931334/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <Linkedin size={22} strokeWidth={1.8} />
        </a>
      </div>

    </footer>
  );
}

export default Footer;
