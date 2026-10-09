import React, { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [formStatus, setFormStatus] = useState('');

  // Sincroniza la clase 'dark' con el documento para el modo claro/oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const skills = [
    { name: 'React.js', level: 'Avanzado' },
    { name: 'JavaScript (ES6+)', level: 'Avanzado' },
    { name: 'HTML5 & CSS3', level: 'Experto' },
    { name: 'Tailwind CSS', level: 'Avanzado' },
    { name: 'Node.js', level: 'Intermedio' },
    { name: 'Express', level: 'Intermedio' },
    { name: 'Git & GitHub', level: 'Avanzado' },
    { name: 'Metodología Scrum', level: 'Avanzado' },
    { name: 'Redes (TCP/UDP)', level: 'Intermedio' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Plataforma E-Commerce',
      description: 'Aplicación web interactiva de comercio electrónico con carrito de compras y diseño adaptativo.',
      tags: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 2,
      title: 'Gestor de Proyectos Scrum',
      description: 'Herramienta de organización de tareas orientada a metodologías ágiles y tableros Kanban.',
      tags: ['React', 'Node.js', 'Express'],
      category: 'web',
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      id: 3,
      title: 'Dashboard de Monitoreo de Red',
      description: 'Interfaz gráfica para visualizar tráfico de paquetes y análisis de protocolos TCP/UDP.',
      tags: ['React', 'Tailwind CSS', 'Sockets'],
      category: 'tools',
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('¡Mensaje enviado con éxito! Te responderé muy pronto.');
    e.target.reset();
    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* BARRA DE NAVEGACIÓN */}
      <nav className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl tracking-tight">Portafolio<span className="text-indigo-500">.dev</span></span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-indigo-500 transition-colors font-medium">Sobre Mí</a>
              <a href="#skills" className="hover:text-indigo-500 transition-colors font-medium">Habilidades</a>
              <a href="#projects" className="hover:text-indigo-500 transition-colors font-medium">Proyectos</a>
              <a href="#contact" className="hover:text-indigo-500 transition-colors font-medium">Contacto</a>
              
              <button
                onClick={toggleDarkMode}
                className={`px-3 py-1.5 rounded-lg font-medium text-sm transition-colors flex items-center gap-1.5 ${
                  darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
                aria-label="Cambiar tema"
              >
                {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg text-sm ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-200 text-slate-700'}`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden border-b px-4 pt-2 pb-4 space-y-2 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-indigo-500 hover:text-white transition-colors">Sobre Mí</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-indigo-500 hover:text-white transition-colors">Habilidades</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-indigo-500 hover:text-white transition-colors">Proyectos</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-indigo-500 hover:text-white transition-colors">Contacto</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION CON FOTO DE PERFIL */}
      <header className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
            &gt;_ Desarrollador Frontend & Software
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">jheyfrank campo</span>
          </h1>
          <p className={`text-lg max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Especializado en crear aplicaciones web modernas, accesibles y componentes eficientes con React.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-lg shadow-indigo-500/25"
            >
              Ver Proyectos
            </a>
            <a 
              href="#contact" 
              className={`px-6 py-3 rounded-lg font-medium border transition-all ${
                darkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-300 hover:bg-slate-100'
              }`}
            >
              Contactar
            </a>
          </div>
        </div>

        {/* CONTENEDOR DE LA FOTO DE PERFIL */}
        <div className="relative group w-64 h-64 sm:w-80 sm:h-80 mx-auto">
          {/* Fondo con brillo en degradado */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
          
          {/* Marco de la Foto */}
          <div className={`relative w-full h-full rounded-full p-1.5 overflow-hidden shadow-2xl ${
            darkMode ? 'bg-slate-900' : 'bg-white'
          }`}>
            <img 
              src="/perfil.jpeg" 
              alt="Foto de perfil" 
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Muestra un marcador de posición elegante si no encuentra la imagen
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300?text=Tu+Foto";
              }}
            />
          </div>
        </div>
      </header>

      {/* SECCIÓN SOBRE MÍ */}
      <section id="about" className={`py-20 border-t ${darkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Sobre Mí</h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className="text-xl font-bold mb-2">Desarrollo Web</h3>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Creación de interfaces estructuradas en HTML5, modernas y con componentes reutilizables en React.
              </p>
            </div>

            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className="text-xl font-bold mb-2">Metodologías Ágiles</h3>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Flujo de trabajo Scrum, gestión de artefactos de desarrollo y entregas iterativas continuas.
              </p>
            </div>

            <div className={`p-6 rounded-xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className="text-xl font-bold mb-2">Redes & Sistemas</h3>
              <p className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                Fundamentos de redes de computadores, modelo OSI, protocolos TCP/UDP y servicios de correo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN HABILIDADES */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Habilidades Técnicas</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-lg border flex items-center justify-between transition-all hover:-translate-y-1 ${
                darkMode ? 'bg-slate-800/80 border-slate-700 hover:border-indigo-500' : 'bg-white border-slate-200 hover:border-indigo-500 shadow-sm'
              }`}
            >
              <span className="font-semibold">{skill.name}</span>
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
              }`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN PROYECTOS */}
      <section id="projects" className={`py-20 border-t ${darkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="flex justify-center space-x-2 mb-10">
            {['all', 'web', 'tools'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white'
                    : darkMode ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab === 'all' ? 'Todos' : tab === 'web' ? 'Desarrollo Web' : 'Herramientas'}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className={`rounded-xl overflow-hidden border flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                  darkMode ? 'bg-slate-800 border-slate-700 hover:border-slate-600' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`px-6 py-4 border-t flex justify-between items-center ${
                  darkMode ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-slate-100/50'
                }`}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-indigo-500 transition-colors">
                    Código ↗
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-indigo-500 transition-colors">
                    Demo ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Contacto</h2>
          <p className={`mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            ¿Tienes un proyecto en mente o deseas colaborar? ¡Escríbeme!
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {formStatus && (
          <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-center text-sm font-medium">
            {formStatus}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input 
                type="text" 
                required 
                placeholder="Tu nombre"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-800'
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
              <input 
                type="email" 
                required 
                placeholder="tu@email.com"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-800'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mensaje</label>
            <textarea 
              rows="4" 
              required 
              placeholder="Escribe tu mensaje aquí..."
              className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-800'
              }`}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full py-3.5 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-lg shadow-indigo-500/25"
          >
            Enviar Mensaje
          </button>
        </form>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className={`py-8 border-t text-center text-sm ${
        darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-600'
      }`}>
        <p>© {new Date().getFullYear()} Portafolio Personal. Desarrollado con React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}