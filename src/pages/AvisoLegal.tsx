import LegalLayout from "@/components/LegalLayout";
import { CLINIC_INFO, PHONE_DISPLAY } from "@/lib/constants";

const AvisoLegal = () => {
  return (
    <LegalLayout title="Aviso Legal" lastUpdated="Febrero 2026">
      <section>
        <h2>1. Datos identificativos</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y Comercio Electrónico, se informa de los siguientes datos:
        </p>
        <ul>
          <li><strong>Denominación social:</strong> Fisioterapia Avanzada FIMART</li>
          <li><strong>Nombre comercial:</strong> {CLINIC_INFO.name}</li>
          <li><strong>Domicilio:</strong> {CLINIC_INFO.fullAddress}</li>
          <li><strong>Teléfono:</strong> {PHONE_DISPLAY}</li>
          <li><strong>Email:</strong> info@fisioterapiafimart.com</li>
          <li><strong>Actividad:</strong> Servicios de fisioterapia y rehabilitación</li>
        </ul>
      </section>

      <section>
        <h2>2. Objeto</h2>
        <p>
          El presente Aviso Legal regula el uso del sitio web fisioterapiafimart.com (en adelante,
          el "Sitio Web"), del que es titular Fisioterapia Avanzada FIMART.
        </p>
        <p>
          La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la
          aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en
          este Aviso Legal.
        </p>
      </section>

      <section>
        <h2>3. Condiciones de acceso y uso</h2>
        <p>
          El acceso al Sitio Web es gratuito salvo en lo relativo al coste de la conexión a través
          de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por
          los usuarios.
        </p>
        <p>El usuario se compromete a:</p>
        <ul>
          <li>Hacer un uso adecuado de los contenidos y servicios que se ofrecen.</li>
          <li>No realizar actividades ilícitas o contrarias a la buena fe y al orden público.</li>
          <li>No difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico,
              de apología del terrorismo o que atente contra los derechos humanos.</li>
          <li>No provocar daños en los sistemas físicos y lógicos del Sitio Web.</li>
        </ul>
      </section>

      <section>
        <h2>4. Propiedad intelectual e industrial</h2>
        <p>
          Todos los contenidos del Sitio Web, incluyendo, sin carácter limitativo, textos,
          fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos
          audiovisuales, así como su diseño gráfico y códigos fuente, son propiedad intelectual de
          Fisioterapia Avanzada FIMART o de terceros, sin que puedan entenderse cedidos al usuario
          ninguno de los derechos de explotación reconocidos por la normativa vigente.
        </p>
        <p>
          Las marcas, nombres comerciales o signos distintivos son titularidad de Fisioterapia
          Avanzada FIMART, sin que pueda entenderse que el acceso al Sitio Web atribuya ningún
          derecho sobre los mismos.
        </p>
      </section>

      <section>
        <h2>5. Exclusión de responsabilidad</h2>
        <p>Fisioterapia Avanzada FIMART no se hace responsable de:</p>
        <ul>
          <li>Los daños y perjuicios de cualquier naturaleza que pudieran derivarse de la falta de
              disponibilidad o continuidad del funcionamiento del Sitio Web.</li>
          <li>Los contenidos y servicios de terceros a los que se pueda acceder a través de
              enlaces desde el Sitio Web.</li>
          <li>Los virus o programas maliciosos en los contenidos que puedan producir alteraciones
              en los sistemas informáticos de los usuarios.</li>
          <li>El uso ilícito, negligente, fraudulento o contrario al presente Aviso Legal.</li>
        </ul>
      </section>

      <section>
        <h2>6. Enlaces a terceros</h2>
        <p>
          El Sitio Web puede contener enlaces a sitios de terceros. Las páginas enlazadas son
          responsabilidad de sus respectivos titulares. Fisioterapia Avanzada FIMART no asume
          responsabilidad alguna por los contenidos de dichos enlaces.
        </p>
      </section>

      <section>
        <h2>7. Modificaciones</h2>
        <p>
          Fisioterapia Avanzada FIMART se reserva el derecho de efectuar sin previo aviso las
          modificaciones que considere oportunas en el Sitio Web, pudiendo cambiar, suprimir o
          añadir tanto los contenidos y servicios que se presten a través de la misma como la
          forma en la que éstos aparezcan presentados o localizados.
        </p>
      </section>

      <section>
        <h2>8. Legislación aplicable y jurisdicción</h2>
        <p>
          La relación entre Fisioterapia Avanzada FIMART y el usuario se regirá por la normativa
          española vigente. Para la resolución de cualquier controversia, las partes se someterán
          a los Juzgados y Tribunales del domicilio del usuario, siempre que éste tenga la
          condición de consumidor.
        </p>
      </section>
    </LegalLayout>
  );
};

export default AvisoLegal;
