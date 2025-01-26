import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Supun Devendra</h3>
            <p className="mb-4">
              Full-Stack Developer passionate about creating efficient and scalable web applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/supundevendra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com/in/supundevendra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Linkedin />
              </a>
              <a
                href="https://twitter.com/supundevendra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Twitter />
              </a>
              <a href="mailto:supun.devendra@example.com" className="hover:text-gray-400">
                <Mail />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-gray-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-gray-400">
                  Experience
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Me</h4>
            <p className="mb-2">Feel free to reach out for collaborations or just a friendly hello</p>
            <p className="mb-2">Email: supun.devendra@example.com</p>
            <p>Location: Colombo, Sri Lanka</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>© 2023 Supun Devendra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

