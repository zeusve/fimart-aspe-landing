import LegalLayout from "@/components/LegalLayout";
import { CLINIC_INFO, PHONE_DISPLAY } from "@/lib/constants";

const PoliticaPrivacidad = () => {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="Febrero 2026">
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          En cumplimiento del Reglamento (UE) 2016/679 General de Protección de Datos (RGPD) y la
          Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos
          digitales (LOPDGDD), le informamos de que los datos personales que nos facilite serán
          tratados por:
        </p>
        <ul>
          <li><strong>Responsable:</strong> Fisioterapia Avanzada FIMART</li>
          <li><strong>Dirección:</strong> {CLINIC_INFO.fullAddress}</li>
          <li><strong>Teléfono:</strong> {PHONE_DISPLAY}</li>
          <li><strong>Email:</strong> info@fisioterapiafimart.com</li>
        </ul>
      </section>

      <section>
        <h2>2. Finalidad del tratamiento</h2>
        <p>Los datos personales que nos proporcione serán tratados con las siguientes finalidades:</p>
        <ul>
          <li><strong>Gestión de citas:</strong> Tramitar y gestionar las solicitudes de cita que
              realice a través de los diferentes canales habilitados (teléfono, WhatsApp, formulario web).</li>
          <li><strong>Prestación del servicio sanitario:</strong> Elaboración de historias clínicas
              y seguimiento de tratamientos de fisioterapia.</li>
          <li><strong>Comunicaciones:</strong> Envío de recordatorios de citas, información sobre
              el tratamiento y comunicaciones relacionadas con el servicio contratado.</li>
          <li><strong>Facturación:</strong> Gestión administrativa y contable de los servicios prestados.</li>
        </ul>
      </section>

      <section>
        <h2>3. Legitimación del tratamiento</h2>
        <p>La base legal para el tratamiento de sus datos es:</p>
        <ul>
          <li><strong>Ejecución de un contrato:</strong> El tratamiento es necesario para la
              prestación del servicio de fisioterapia solicitado.</li>
          <li><strong>Obligación legal:</strong> Cumplimiento de la normativa sanitaria que obliga
              a la conservación de historias clínicas (Ley 41/2002).</li>
          <li><strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales, si las
              hubiere.</li>
          <li><strong>Interés legítimo:</strong> Para la defensa de posibles reclamaciones.</li>
        </ul>
      </section>

      <section>
        <h2>4. Categorías de datos tratados</h2>
        <ul>
          <li><strong>Datos identificativos:</strong> Nombre, apellidos, DNI/NIE, dirección, teléfono, email.</li>
          <li><strong>Datos de salud:</strong> Historia clínica, diagnósticos, tratamientos,
              evolución, informes médicos que nos proporcione.</li>
          <li><strong>Datos económicos:</strong> Datos de facturación y, en su caso, datos bancarios.</li>
        </ul>
      </section>

      <section>
        <h2>5. Conservación de datos</h2>
        <p>
          Los datos personales se conservarán durante el tiempo necesario para cumplir con la
          finalidad para la que se recabaron y para determinar las posibles responsabilidades que
          se pudieran derivar de dicha finalidad.
        </p>
        <ul>
          <li><strong>Historia clínica:</strong> Mínimo 5 años desde la última asistencia, conforme
              a la Ley 41/2002 de Autonomía del Paciente.</li>
          <li><strong>Datos de facturación:</strong> 6 años según el Código de Comercio.</li>
          <li><strong>Datos de contacto:</strong> Mientras dure la relación comercial y hasta que
              no solicite su supresión.</li>
        </ul>
      </section>

      <section>
        <h2>6. Destinatarios de los datos</h2>
        <p>
          Sus datos personales no serán cedidos a terceros salvo obligación legal. No obstante,
          podrán tener acceso a sus datos:
        </p>
        <ul>
          <li>Administraciones Públicas con competencia en la materia (Conselleria de Sanitat).</li>
          <li>Entidades aseguradoras, si acude a través de un seguro de salud.</li>
          <li>Proveedores de servicios necesarios para la prestación del servicio (gestorías,
              servicios informáticos) con los correspondientes contratos de encargo de tratamiento.</li>
        </ul>
      </section>

      <section>
        <h2>7. Derechos del interesado</h2>
        <p>Usted tiene derecho a:</p>
        <ul>
          <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted.</li>
          <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
          <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean
              necesarios para los fines recabados.</li>
          <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
          <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento en determinados casos.</li>
          <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado y de uso común.</li>
        </ul>
        <p>
          Para ejercer estos derechos, puede dirigirse a nosotros por email a
          info@fisioterapiafimart.com o por correo postal a {CLINIC_INFO.fullAddress},
          adjuntando copia de su DNI.
        </p>
        <p>
          Asimismo, le informamos de su derecho a presentar una reclamación ante la Agencia
          Española de Protección de Datos (www.aepd.es) si considera que sus derechos no han sido
          atendidos correctamente.
        </p>
      </section>

      <section>
        <h2>8. Medidas de seguridad</h2>
        <p>
          Fisioterapia Avanzada FIMART ha adoptado las medidas técnicas y organizativas necesarias
          para garantizar la seguridad e integridad de los datos de carácter personal que trate,
          evitando su alteración, pérdida, tratamiento o acceso no autorizado.
        </p>
      </section>

      <section>
        <h2>9. Modificaciones</h2>
        <p>
          Fisioterapia Avanzada FIMART se reserva el derecho a modificar la presente Política de
          Privacidad para adaptarla a novedades legislativas o jurisprudenciales. En dichos
          supuestos, anunciará en esta página los cambios introducidos con razonable antelación a
          su puesta en práctica.
        </p>
      </section>
    </LegalLayout>
  );
};

export default PoliticaPrivacidad;
