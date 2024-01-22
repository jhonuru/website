
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import img1 from '../assets/img2.jpg'

export function Home() {
  return (
    <div className="container mb-5" id='perfil'>
      <section className='row align-items-center mb-4 mt-0 mt-lg-5'>
        <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-right">
          <img src={img1} alt="Foto perfil" className='d-flex m-auto mb-4 shadow' style={{ borderRadius: '60%', width: '270px' }} />
          <p className='text-center fs-3 txt-c1'><b>Jhon Jairo Urueta Alvarez</b></p>
        </div>
        <div className="col-lg-8" data-aos="fade-left" >
          <h1 className='mb-4'>Perfil profesional</h1>
          <p><b className='txt-c2'>Ingeniero de sistemas</b>, con amplia experiencia en el diseño profesional de páginas web, basadas en HTML5, CSS3, JavaScript, SASS, React.js, cumplimiento de objetivos y solución de problemas; Con habilidades para planear, coordinar y administrar las operaciones del sitio web, alta capacidad de liderazgo, sólida formación humanística, espíritu creativo y capacidad innovadora.</p>
          <br />
          <div className="row align-items-center">
            <div className="col-auto">
              <a href="https://www.facebook.com/jhonuru/" target='_blank' rel='noreferrer' className='bg-c2' ><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
            </div>
            <div className="col-auto">
              <a href="https://twitter.com/urueta_alvarez" target='_blank' rel='noreferrer' className='bg-c2' ><FontAwesomeIcon icon={faInstagram} size='2x' /></a>
            </div>
            <div className="col-auto">
              <a href="https://twitter.com/urueta_alvarez" target='_blank' rel='noreferrer' className='bg-c2' ><FontAwesomeIcon icon={faXTwitter} size='2x' /></a>
            </div>
            <div className="col-auto">
              <a href="https://www.linkedin.com/in/jhon-jairo-urueta-alvarez-245a6a1a2/" target='_blank' rel='noreferrer' className='bg-c2' ><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
            </div>
          </div>
        </div>
      </section>
      <hr className='hr' id='formacion' />
      <section className='row mb-4'>
        <div className="col-12 mb-4 pt-5" data-aos="flip-up">
          <h1>Formación Academica</h1>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-right">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4">
                <FontAwesomeIcon icon="fa-solid fa-graduation-cap" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Ingeniería de sistemas</h3>
                  <p className="card-text mb-0"><b>Universitaria de investigación y desarrollo (UDI)</b></p>
                  <p className="card-text mb-0">Bucaramanga - Santander</p>
                  <p className="card-text">2013</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-left">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-graduation-cap" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Tecnólogo en sistemas</h3>
                  <p className="card-text mb-0"><b>Universitaria de investigación y desarrollo (UDI)</b></p>
                  <p className="card-text mb-0">Bucaramanga - Santander</p>
                  <p className="card-text">2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-right">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-graduation-cap" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Bachiller académico</h3>
                  <p className="card-text mb-0"><b>Colegio niño Jesús de Praga</b></p>
                  <p className="card-text mb-0">Girón - Santander</p>
                  <p className="card-text">2002</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className='hr' id='cursos'/>
      <section className='row mb-4'>
        <div className="col-12 pt-5" data-aos="flip-up">
          <h1 className='mb-4'>Cursos</h1>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-right">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-book-atlas" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Diseño web profesional</h3>
                  <p className="card-text mb-0"><b>Udemy</b></p>
                  <p className="card-text mb-0">Bucaramanga - Santander</p>
                  <p className="card-text">2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-left">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-book-atlas" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Programación básica</h3>
                  <p className="card-text mb-0"><b>Platzi</b></p>
                  <p className="card-text mb-0">Bucaramanga - Santander</p>
                  <p className="card-text">2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-right">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-book-atlas" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Diseño Web con HTML, PHP y MYSQL</h3>
                  <p className="card-text mb-0"><b>Servicio Nacional de Aprendizaje (SENA)</b></p>
                  <p className="card-text mb-0">Bucaramanga - Santander</p>
                  <p className="card-text">2007</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-left">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-book-atlas" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Diseño Web con Macromedia Dreamweaver MX</h3>
                  <p className="card-text mb-0"><b>Servicio Nacional de Aprendizaje (SENA)</b></p>
                  <p className="card-text mb-0">Bucaramanga - Santander</p>
                  <p className="card-text">2006</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className='hr' id='experiencia'/>
      <section className='row mb-4'>
        <div className="col-12 pt-5" data-aos="flip-up">
          <h1 className='mb-4'>Experiencia laboral</h1>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-right">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-house-laptop" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">SENA (Servicio Nacional de Aprendizaje)</h3>
                  <p className="card-text"><b>Desarrollador Full-Stack</b></p>
                  <ul className='fa-ul'>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Prestar los servicios profesionales y de apoyo como desarrollador Full-Stack en el proceso de adecuación de programas en las diferentes modalidades de formación, junto con las actividades de desarrollo de aplicaciones web y móviles que sean requeridas en los programas de formación.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Proponer ideas creativas para el desarrollo del recurso didáctico multimedia enfocándose en la diversidad de culturas industriales.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Diseñar, programar y garantizar la articulación entre los componentes inspiradores y prácticos de la pedagogía y las tecnologías actuales en los recursos didácticos.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Generar código HTML5, CSS, Javascript.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Actualización de los contenidos del sitio Web.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Responder ante el gestor de contratos por la calidad del servicio prestado.</li>
                  </ul>
                  <p className="card-text mb-0"><b>Fecha retiro: </b>diciembre - 2023</p>
                  <p className="card-text mb-0"><b>Fecha inicio: </b>febrero - 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-left">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-house-laptop" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">SOFTEVENC</h3>
                  <p className="card-text"><b>Programador</b></p>
                  <ul className='fa-ul'>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Generar código HTML5, CSS, PHP y MySQL.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Crear tablas en la base de datos y actualizar campos de las ya existentes.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Diseñar la estructura básica del sitio web.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Actualización de los contenidos del sitio web.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Responder ante el cliente por la calidad del servicio prestado.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Generar informes de avance y cambios realizados en el sitio web.</li>
                  </ul>
                  <p className="card-text mb-0"><b>Fecha retiro: </b>octubre - 2018</p>
                  <p className="card-text mb-0"><b>Fecha inicio: </b>mayo - 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-right">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-house-laptop" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">INGENIOSOFT R&N</h3>
                  <p className="card-text"><b>Programador</b></p>
                  <ul className='fa-ul'>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Generar código HTML, PHP y MySQL.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Crear tablas en la base de datos y actualizar campos de las ya existentes.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Diseñar la estructura básica del sitio web.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Actualización de los contenidos del sitio web.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Responder ante el cliente por la calidad del servicio prestado.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Generar informes de avance y cambios realizados en el sitio web.</li>
                  </ul>
                  <p className="card-text mb-0"><b>Fecha retiro: </b>febrero - 2016</p>
                  <p className="card-text mb-0"><b>Fecha inicio: </b>junio - 2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-left">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-building-circle-check" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Corbeta (AKT Motos)</h3>
                  <p className="card-text"><b>Administrador CST II</b></p>
                  <ul className='fa-ul'>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Planear, coordinar y administrar la operación del taller.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Definir la asignación de trabajos para mantener el equilibrio de la proeficiencia.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Tramitar garantías ante la ensambladora.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Generar los informes de motos atendidas, para el análisis y plan estratégico.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Alcanzar las metas de facturación de servicio y repuestos mensualmente.</li>
                  </ul>
                  <p className="card-text mb-0"><b>Fecha retiro: </b>dicmebre - 2018</p>
                  <p className="card-text mb-0"><b>Fecha inicio: </b>noviembre - 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-right">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-building-circle-check" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Corbeta (AKT Motos)</h3>
                  <p className="card-text"><b>Asesor de repuestos</b></p>
                  <ul className='fa-ul'>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Comercializar Repuestos.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Ubicar los repuestos de manera ordenada según referencias.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Realizar inventarios selectivos.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Mantener actualizado los precios.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Elaborar pedidos según las necesidades.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Mantener limpia el área correspondiente al almacén de repuestos.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Buscar clientes para ventas al por mayor.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Enviar traslados entre agencias a nivel nacional.</li>
                  </ul>
                  <p className="card-text mb-0"><b>Fecha retiro: </b>noviembre - 2017</p>
                  <p className="card-text mb-0"><b>Fecha inicio: </b>octubre - 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-left">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-building-circle-check" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Multimotos Bucaramanga</h3>
                  <p className="card-text"><b>Administrador</b></p>
                  <ul className='fa-ul'>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Ejecutar las actividades programadas y planes de acción, para cumplir con los objetivos de ventas.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Capacitar y evaluar a los vendedores de repuestos de la concesión y de clientes terceros en manejo y control de inventarios, administración del área, conocimiento del producto y técnicas de ventas para lograr ventas rentables y cumplir los objetivos de ventas.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Identificar las necesidades del cliente y la competencia, que permita retroalimentar a los vendedores de motos, posventa y servicio, estableciendo planes con la alta gerencia que permitan alcanzar los objetivos de participación de mercado.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Buscar e identificar clientes, para sus canales de venta, con el fin de aumentar el ingreso clientes (mostrador, taller, terceros).</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Responder por la gestión comercial ante los clientes corporativos y el manejo de las situaciones difíciles ante reclamos, para tener acercamiento al cliente y buscar la satisfacción del mismo.</li>
                  </ul>
                  <p className="card-text mb-0"><b>Fecha retiro: </b>febrero - 2016</p>
                  <p className="card-text mb-0"><b>Fecha inicio: </b>marzo - 2013</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-right">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-building-circle-check" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Fabrica nacional de carrocerias (Fanalca)</h3>
                  <p className="card-text"><b>Asesor técnico de servicio - División motocicletas Honda</b></p>
                  <ul className='fa-ul'>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Brindar apoyo a toda la red de servicio Posventa Honda Motocicletas.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Asesoramiento en trámites de garantía con la ensambladora.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Realizar capacitaciones sobre la cultura de servicio Honda, método 5&apos;s, productos alianza.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Hacer un constante recorrido por la zona de influencia.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Impulsar el crecimiento profesional al interior de la red de concesionarios Honda.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Generar informes de productividad y cumplimiento de los presupuestos.</li>
                  </ul>
                  <p className="card-text mb-0"><b>Fecha retiro: </b>enero - 2013</p>
                  <p className="card-text mb-0"><b>Fecha inicio: </b>julio - 2012</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-left">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-building-circle-check" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Supermotos de Santander (Honda Motos)</h3>
                  <p className="card-text"><b>Jefe de taller</b></p>
                  <ul className='fa-ul'>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Planear, coordinar y administrar la operación del taller.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Programar reuniones sistemáticas con el equipo de trabajo para desarrollar planes de acción.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Definir la asignación de trabajos para mantener el equilibrio de la proeficiencia.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Tramitar garantías ante la ensambladora.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Retroalimentar al equipo de trabajo en ITH (Información Técnica Honda).</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Responder ante el cliente por la calidad del servicio prestado.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Responder por la facturación del servicio y repuestos.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Generar los informes de motos atendidas, para el análisis y plan estratégico.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Alcanzar las metas de facturación de servicio y repuestos mensualmente.</li>
                  </ul>
                  <p className="card-text mb-0"><b>Fecha retiro: </b>junio - 2012</p>
                  <p className="card-text mb-0"><b>Fecha inicio: </b>mayo - 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4" data-aos="fade-right">
          <div className="card bg-c1 shadow">
            <div className="row g-0">
              <div className="col-md-auto p-4 ">
                <FontAwesomeIcon icon="fa-solid fa-building-circle-check" size='4x' className='bg-c3' />
              </div>
              <div className="col-md">
                <div className="card-body">
                  <h3 className="card-title mb-0 txt-c2">Supermotos de Santander (Honda Motos)</h3>
                  <p className="card-text"><b>Asesor de ventas de repuestos</b></p>
                  <ul className='fa-ul'>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Alimentar la base de datos del inventario de repuestos.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Ingreso de documentos al software Aplinsa.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Consulta de inventario disponible por la ensambladora, por medio del SIM (Sistema de Inventario Motopartes).</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Comercializar Repuestos.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Registrar todos los movimientos.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Generar informes mensuales al jefe de taller por medio del software Aplinsa.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Elaborar pedidos según las necesidades.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Realizar inventarios selectivos.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Mantener actualizado los precios.</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Organizar el archivo de documentos (Facturas, Cotizaciones, etc.).</li>
                    <li><span className='fa-li'><FontAwesomeIcon className='bg-c4' icon="fa-solid fa-check" beat /></span>Ubicar los repuestos de manera ordenada según referencias.</li>
                  </ul>
                  <p className="card-text mb-0"><b>Fecha retiro: </b>mayo - 2010</p>
                  <p className="card-text mb-0"><b>Fecha inicio: </b>octubre - 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className='hr' id='contacto'/>
      <section className='row justify-content-center'>
        <div className="col-12 pt-5" data-aos="flip-up">
          <h1>Contacto</h1>
        </div>
          <form action="https://formspree.io/f/xwkavpyr" method='post' data-aos="fade-right">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <div className="inputBox mt-4">
                  <p className='mb-0'>Nombre completo</p>
                  <input type="text" className='form-control mb-2' name='Nombre completo' placeholder='Ingrese su nombre completo' minLength={6} maxLength={30} autoComplete='off' required />
                </div>
                <div className="inputBox mt-4">
                  <p className='mb-0'>Correo electronico</p>
                  <input type="email" className='form-control mb-2' name='Correo electronico' placeholder='name@example.com' autoComplete='off' required />
                </div>
                <div className="inputBox mt-4">
                  <p className='mb-0'>Número de contacto</p>
                  <input type="number" className='form-control mb-2' name='Número de contacto' placeholder='Ingrese su número de contacto' minLength={6} maxLength={10} autoComplete='off' required />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="inputBox mt-2 mt-lg-4">
                  <p className='mb-0'>Mensaje</p>
                  <textarea type="inputBox" className='form-control mb-2' name='Mensage' cols={30} rows={6} autoComplete='off' minLength={6} maxLength={200} required />
                </div>
                <div>
                  <button type='submit' className='btn btn-primary'>Enviar</button>
                </div>
              </div>
            </div>
          </form>
      </section>
    </div>
  );
}