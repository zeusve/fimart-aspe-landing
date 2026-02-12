import LegalLayout from "@/components/LegalLayout";
import SEO from "@/components/SEO";

const PoliticaCookies = () => {
  return (
    <>
      <SEO
        title="Política de Cookies | Clínica FIMART"
        description="Política de cookies de Fisioterapia Avanzada FIMART. Información sobre las cookies utilizadas en nuestro sitio web."
        path="/politica-cookies"
        noindex
      />
      <LegalLayout title="Política de Cookies" lastUpdated="Febrero 2026">
      <section>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador
          cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen de
          manera más eficiente, así como para proporcionar información a los propietarios del sitio.
        </p>
      </section>

      <section>
        <h2>2. ¿Qué tipos de cookies utilizamos?</h2>

        <h3>2.1. Cookies técnicas (necesarias)</h3>
        <p>
          Son aquellas que permiten al usuario la navegación a través del sitio web y la
          utilización de las diferentes opciones o servicios que en ella existen. Estas cookies
          son estrictamente necesarias y no requieren consentimiento.
        </p>

        <h3>2.2. Cookies de preferencias</h3>
        <p>
          Permiten recordar información para que el usuario acceda al servicio con determinadas
          características que pueden diferenciar su experiencia de la de otros usuarios, como el
          idioma o el tema visual (modo claro/oscuro).
        </p>

        <h3>2.3. Cookies analíticas</h3>
        <p>
          Son aquellas que permiten cuantificar el número de usuarios y realizar la medición y
          análisis estadístico de la utilización que hacen los usuarios del servicio. Para ello
          se analiza su navegación con el fin de mejorar la oferta de servicios que le ofrecemos.
        </p>

        <table className="w-full border-collapse border border-border mt-4 mb-6">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border p-3 text-left">Cookie</th>
              <th className="border border-border p-3 text-left">Tipo</th>
              <th className="border border-border p-3 text-left">Duración</th>
              <th className="border border-border p-3 text-left">Finalidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3">theme</td>
              <td className="border border-border p-3">Preferencias</td>
              <td className="border border-border p-3">1 año</td>
              <td className="border border-border p-3">Guardar preferencia de tema claro/oscuro</td>
            </tr>
            <tr>
              <td className="border border-border p-3">cookie_consent</td>
              <td className="border border-border p-3">Técnica</td>
              <td className="border border-border p-3">1 año</td>
              <td className="border border-border p-3">Recordar el consentimiento de cookies</td>
            </tr>
            <tr>
              <td className="border border-border p-3">_ga</td>
              <td className="border border-border p-3">Analítica</td>
              <td className="border border-border p-3">2 años</td>
              <td className="border border-border p-3">Google Analytics - Distinguir usuarios</td>
            </tr>
            <tr>
              <td className="border border-border p-3">_gid</td>
              <td className="border border-border p-3">Analítica</td>
              <td className="border border-border p-3">24 horas</td>
              <td className="border border-border p-3">Google Analytics - Distinguir usuarios</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>3. ¿Cómo gestionar las cookies?</h2>
        <p>
          Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la
          configuración de las opciones del navegador instalado en su ordenador. A continuación
          le ofrecemos enlaces donde encontrará información sobre cómo puede activar sus
          preferencias en los principales navegadores:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
              Microsoft Edge
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Cookies de terceros</h2>
        <p>
          Este sitio web puede utilizar servicios de terceros que recopilen información con fines
          estadísticos y de uso del sitio por parte del usuario. Principalmente utilizamos:
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> Para analizar el tráfico del sitio web. Puede
            obtener más información sobre las cookies de Google Analytics en su{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              política de privacidad
            </a>.
          </li>
          <li>
            <strong>Google Maps:</strong> Para mostrar la ubicación de nuestra clínica. Puede
            consultar su política de privacidad{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              aquí
            </a>.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Actualizaciones de esta política</h2>
        <p>
          Fisioterapia Avanzada FIMART puede modificar esta Política de Cookies en función de
          exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política
          a las instrucciones dictadas por la Agencia Española de Protección de Datos.
        </p>
        <p>
          Por ello, se aconseja a los usuarios que la visiten periódicamente. Cuando se produzcan
          cambios significativos en esta Política de Cookies, se comunicará a los usuarios
          mediante un aviso en el sitio web.
        </p>
      </section>

      <section>
        <h2>6. Contacto</h2>
        <p>
          Si tiene cualquier duda sobre esta Política de Cookies, puede contactar con nosotros
          a través de info@fisioterapiafimart.com.
        </p>
      </section>
    </LegalLayout>
    </>
  );
};

export default PoliticaCookies;
