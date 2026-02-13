import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import GridBackground from "@/components/ui/GridBackground";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

const FascitisPlantar = () => {
  return (
    <>
      <SEO
        title="Fascitis Plantar: Causas, Síntomas y Tratamiento con Fisioterapia | FIMART"
        description="Guía completa sobre la fascitis plantar: por qué aparece, cómo se diagnostica con ecografía y cuáles son los tratamientos de fisioterapia más efectivos como ondas de choque, EPI y láser terapéutico."
        path="/blog/fascitis-plantar-tratamiento-fisioterapia"
        keywords="fascitis plantar tratamiento, fascitis plantar fisioterapia, dolor talón Aspe, ondas de choque fascitis plantar, EPI fascitis plantar"
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
          <GridBackground variant="lines" size={60} />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-muted-foreground" role="list">
                  <li>
                    <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
                  </li>
                  <li aria-hidden="true" className="text-border">/</li>
                  <li>
                    <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                  </li>
                  <li aria-hidden="true" className="text-border">/</li>
                  <li>
                    <span className="text-foreground font-medium" aria-current="page">Fascitis Plantar</span>
                  </li>
                </ol>
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium mb-4">
                Patologías
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
                Fascitis Plantar: Causas, Síntomas y Tratamiento con{" "}
                <span className="text-primary">Fisioterapia</span>
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" />
                  15 enero 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  8 min de lectura
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article className="max-w-3xl mx-auto">

              {/* Introducción */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-muted-foreground font-body leading-relaxed mb-6 text-lg">
                  La fascitis plantar es una de las causas más frecuentes de dolor en el talón y la planta del pie. Se estima que afecta a cerca del 10 % de la población en algún momento de su vida, siendo especialmente prevalente en personas de entre 40 y 60 años, corredores y trabajadores que permanecen muchas horas de pie. En la Clínica FIMART de Aspe contamos con tecnología avanzada y un enfoque multidisciplinar para tratar esta patología de forma eficaz y sin cirugía.
                </p>
              </motion.div>

              {/* Sección 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  ¿Qué es la fascitis plantar?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La fascia plantar es una banda gruesa de tejido conjuntivo fibroso que se extiende desde la tuberosidad medial del calcáneo (hueso del talón) hasta las cabezas de los metatarsianos, formando el arco longitudinal del pie. Su función principal es mantener la estructura del arco plantar, absorber impactos durante la marcha y transmitir las fuerzas de propulsión durante el despegue del pie en cada paso.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Cuando la fascia plantar se somete a una carga mecánica excesiva o repetitiva, sus fibras de colágeno sufren microrroturas que desencadenan un proceso inflamatorio inicial. Si esta sobrecarga persiste, el tejido entra en un proceso degenerativo conocido como <strong>fasciosis plantar</strong>, donde predomina la degeneración del colágeno sobre la inflamación. Por eso, muchos expertos prefieren el término "fasciopatía plantar" para describir esta condición de forma más precisa, ya que no siempre cursa con inflamación activa.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Es importante señalar que el denominado "espolón calcáneo", una calcificación ósea visible en la radiografía en la inserción de la fascia, no es la causa del dolor. De hecho, muchas personas presentan espolones sin sintomatología alguna. El dolor se origina en la propia fascia degenerada, no en la prominencia ósea.
                </p>
              </motion.div>

              {/* Sección 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  Causas y factores de riesgo
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La fascitis plantar rara vez tiene una causa única. En la mayoría de los casos, se trata de una combinación de factores mecánicos, anatómicos y relacionados con el estilo de vida que sobrecargan progresivamente la fascia. A continuación, detallamos los principales factores de riesgo:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Sobrecarga mecánica y sobreuso:</strong> El aumento repentino de la actividad física, como empezar a correr sin una progresión adecuada o incrementar la distancia de carrera demasiado rápido, es una de las causas más habituales. También afecta a personas que pasan muchas horas de pie en su trabajo (dependientes, camareros, operarios de fábrica).
                  </li>
                  <li>
                    <strong>Calzado inadecuado:</strong> Zapatos sin soporte para el arco, suelas excesivamente planas o rígidas, y el uso prolongado de tacones altos modifican la biomecánica del pie y aumentan la tensión sobre la fascia plantar. Un calzado con amortiguación insuficiente es un factor de riesgo modificable muy importante.
                  </li>
                  <li>
                    <strong>Alteraciones biomecánicas:</strong> Tanto el pie plano (pronación excesiva) como el pie cavo (arco muy pronunciado) generan una distribución anormal de las fuerzas sobre la fascia. También influyen las dismetrías de miembros inferiores, la rigidez del tobillo y la debilidad de la musculatura intrínseca del pie.
                  </li>
                  <li>
                    <strong>Sobrepeso y obesidad:</strong> El exceso de peso corporal incrementa significativamente la carga que soporta la fascia plantar con cada paso. Estudios epidemiológicos demuestran que un índice de masa corporal superior a 30 multiplica por tres el riesgo de desarrollar fascitis plantar.
                  </li>
                  <li>
                    <strong>Edad:</strong> A partir de los 40 años, la fascia plantar pierde elasticidad y capacidad de regeneración. La almohadilla grasa del talón también se adelgaza con la edad, reduciendo la amortiguación natural del pie.
                  </li>
                  <li>
                    <strong>Acortamiento del tríceps sural:</strong> La rigidez del gastrocnemio y el sóleo (músculos de la pantorrilla) limita la dorsiflexión del tobillo y transmite mayor tensión a la fascia plantar durante la fase de apoyo de la marcha.
                  </li>
                </ul>
              </motion.div>

              {/* Sección 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  Síntomas principales
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  El síntoma más característico de la fascitis plantar es el <strong>dolor agudo en la parte inferior del talón</strong>, especialmente en la zona medial de la tuberosidad calcánea. Este dolor presenta un patrón muy reconocible que permite al fisioterapeuta orientar el diagnóstico incluso antes de realizar pruebas complementarias:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Dolor al dar los primeros pasos por la mañana:</strong> Es el síntoma más típico. Tras las horas de reposo nocturno, la fascia se encuentra acortada y rígida. Al apoyar el pie al levantarse, se produce un estiramiento brusco que genera un dolor intenso, como si se clavara una aguja en el talón. Este dolor suele disminuir tras unos minutos de marcha, cuando la fascia se va calentando y estirando.
                  </li>
                  <li>
                    <strong>Dolor después de periodos prolongados de sedestación:</strong> El mismo mecanismo ocurre tras estar sentado mucho tiempo. Al levantarse de la silla, los primeros pasos son muy dolorosos, pero el dolor se alivia progresivamente.
                  </li>
                  <li>
                    <strong>Dolor que empeora con la actividad prolongada:</strong> Aunque el dolor mejora tras los primeros minutos de actividad, si la carga se mantiene mucho tiempo (caminar durante horas, estar de pie toda la jornada laboral), el dolor reaparece con mayor intensidad al final del día.
                  </li>
                  <li>
                    <strong>Rigidez y sensación de tirantez en la planta del pie:</strong> Muchos pacientes describen una sensación de tensión o como si la planta del pie estuviera "tirante", especialmente al estirar los dedos hacia arriba.
                  </li>
                  <li>
                    <strong>Dificultad para subir escaleras o caminar descalzo:</strong> La dorsiflexión del pie al subir escaleras y el contacto directo del talón con superficies duras al caminar sin calzado intensifican notablemente los síntomas.
                  </li>
                </ul>
              </motion.div>

              {/* Sección 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  Diagnóstico: la importancia de la ecografía
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Aunque el diagnóstico de la fascitis plantar es fundamentalmente clínico, basado en la historia del paciente y la exploración física, la <strong>ecografía musculoesquelética</strong> se ha convertido en la herramienta de imagen de referencia para confirmar el diagnóstico y evaluar la gravedad de la lesión.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  En nuestra clínica en Aspe, la ecografía nos permite visualizar en tiempo real el estado de la fascia plantar. Los hallazgos ecográficos más relevantes incluyen:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Engrosamiento de la fascia:</strong> Una fascia plantar normal tiene un grosor de entre 3 y 4 milímetros. Cuando supera los 4,5 mm en su inserción calcánea, se considera patológica. Valores por encima de 6 mm indican una fasciopatía severa.
                  </li>
                  <li>
                    <strong>Hipoecogenicidad:</strong> La fascia sana se visualiza como una estructura ecogénica (brillante) con un patrón fibrilar bien definido. En la fasciopatía, la fascia pierde su ecogenicidad normal y aparece oscura (hipoecoica), lo que indica degeneración del colágeno.
                  </li>
                  <li>
                    <strong>Neovascularización:</strong> Mediante el estudio Doppler color, podemos detectar la presencia de nuevos vasos sanguíneos dentro de la fascia degenerada, un hallazgo que se asocia con dolor activo y que nos ayuda a seleccionar el tratamiento más adecuado.
                  </li>
                  <li>
                    <strong>Roturas parciales:</strong> En casos avanzados, la ecografía puede revelar discontinuidades en las fibras de la fascia, lo que condiciona el abordaje terapéutico.
                  </li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La ecografía es también fundamental para guiar tratamientos invasivos como la EPI (Electrólisis Percutánea Intratisular), asegurando que la aguja se dirige exactamente a la zona dañada. En la Clínica FIMART utilizamos la{" "}
                  <Link to="/ecografia-musculoesqueletica-aspe" className="text-primary hover:underline font-medium">
                    ecografía musculoesquelética
                  </Link>{" "}
                  como herramienta diagnóstica y de seguimiento en todas las fasciopatías que tratamos.
                </p>
              </motion.div>

              {/* Sección 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  Tratamientos de fisioterapia más efectivos
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  En la Clínica FIMART abordamos la fascitis plantar con un protocolo multimodal que combina diferentes técnicas de fisioterapia avanzada. La elección del tratamiento depende de la fase de la lesión, la gravedad del cuadro y la respuesta individual del paciente. Estos son los tratamientos que más evidencia científica acumulan:
                </p>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
                  Ondas de choque extracorpóreas
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Las{" "}
                  <Link to="/ondas-de-choque-aspe" className="text-primary hover:underline font-medium">
                    ondas de choque
                  </Link>{" "}
                  son actualmente el tratamiento con mayor nivel de evidencia científica para la fascitis plantar crónica (aquella que persiste más de 3 meses). Se trata de ondas acústicas de alta energía que, al penetrar en el tejido, generan un efecto de mecanotransducción que estimula la neovascularización, la liberación de factores de crecimiento y la síntesis de nuevo colágeno. Los protocolos habituales incluyen entre 3 y 5 sesiones semanales, con una aplicación de 2000 a 3000 impulsos por sesión. Los estudios muestran tasas de éxito superiores al 80 % en fascitis plantares que no han respondido a otros tratamientos conservadores.
                </p>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
                  EPI (Electrólisis Percutánea Intratisular)
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La{" "}
                  <Link to="/epi-electrolisis-percutanea-aspe" className="text-primary hover:underline font-medium">
                    EPI
                  </Link>{" "}
                  es una técnica invasiva ecoguiada que consiste en aplicar una corriente galvánica a través de una aguja de acupuntura directamente sobre el tejido degenerado de la fascia plantar. Esta corriente produce una reacción electroquímica controlada (lisis) que destruye el tejido patológico y desencadena una respuesta inflamatoria aguda local, activando los mecanismos naturales de regeneración del organismo. La guía ecográfica permite una precisión milimétrica, dirigiendo la aguja exactamente a la zona lesionada. Generalmente se necesitan entre 3 y 5 sesiones, espaciadas una o dos semanas entre sí.
                </p>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
                  Láser terapéutico de alta potencia
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  El{" "}
                  <Link to="/laser-terapeutico-aspe" className="text-primary hover:underline font-medium">
                    láser terapéutico
                  </Link>{" "}
                  de clase IV emite fotones que son absorbidos por los cromóforos celulares, estimulando la cadena respiratoria mitocondrial y aumentando la producción de ATP (la molécula de energía celular). Esto se traduce en un efecto analgésico potente, una reducción significativa de la inflamación y una aceleración de los procesos de reparación tisular. El láser es especialmente útil en las fases agudas e inflamatorias de la fascitis plantar, y se puede combinar con las demás técnicas sin interferencias.
                </p>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
                  Ejercicios de estiramiento y fortalecimiento
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  El ejercicio terapéutico es un pilar fundamental del tratamiento de la fascitis plantar. La evidencia científica demuestra que los estiramientos específicos y los ejercicios de carga progresiva son imprescindibles para una recuperación completa y duradera. Estos son los tres ejercicios clave que prescribimos a nuestros pacientes:
                </p>
                <ul className="list-disc list-inside space-y-4 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Estiramiento de la fascia plantar con toalla:</strong> Sentado en la cama antes de levantarse por la mañana, coloca una toalla enrollada o una banda elástica alrededor de la parte anterior del pie y tira suavemente hacia ti, manteniendo la rodilla estirada. Mantén la posición durante 30 segundos y repite 3 veces con cada pie. Este ejercicio prepara la fascia antes del primer apoyo del día y reduce significativamente el dolor matutino.
                  </li>
                  <li>
                    <strong>Estiramiento del tríceps sural en escalón:</strong> Colócate en el borde de un escalón con los talones colgando. Deja caer los talones lentamente por debajo del nivel del escalón hasta sentir un estiramiento confortable en la pantorrilla. Mantén 30 segundos y repite 3 veces. Realiza este ejercicio primero con las rodillas estiradas (para estirar el gastrocnemio) y después con las rodillas ligeramente flexionadas (para estirar el sóleo). La flexibilidad del complejo gastrocnemio-sóleo es fundamental para reducir la tensión sobre la fascia.
                  </li>
                  <li>
                    <strong>Carga excéntrica en escalón (protocolo de Rathleff):</strong> Este es el ejercicio con mayor evidencia para la fascitis plantar crónica. De pie en un escalón, coloca una toalla enrollada bajo los dedos del pie afectado. Elévate sobre las puntas de los pies con ambos pies, transfiere todo el peso al pie afectado y desciende lentamente durante 3 segundos hasta que el talón quede por debajo del nivel del escalón. Realiza 3 series de 12 repeticiones, dos veces al día. Es normal sentir algo de molestia durante el ejercicio, pero el dolor no debe superar un 5 sobre 10.
                  </li>
                </ul>
              </motion.div>

              {/* Sección 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  ¿Cuánto tarda en curarse la fascitis plantar?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La duración de la recuperación varía considerablemente según la gravedad de la lesión, el tiempo de evolución y los factores de riesgo asociados. Como referencia general, estos son los plazos que manejamos en la clínica:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Fascitis plantar aguda (menos de 6 semanas):</strong> Con un tratamiento adecuado, la mejoría es notable en 2-4 semanas. En esta fase, el láser terapéutico y los ejercicios de estiramiento suelen ser suficientes.
                  </li>
                  <li>
                    <strong>Fascitis plantar subaguda (6 semanas a 3 meses):</strong> Requiere un abordaje más intensivo. La combinación de ondas de choque, EPI y ejercicio terapéutico permite alcanzar una mejoría significativa en 4-8 semanas.
                  </li>
                  <li>
                    <strong>Fascitis plantar crónica (más de 3 meses):</strong> Es la más resistente al tratamiento. El protocolo multimodal completo (ondas de choque + EPI + ejercicios + corrección de factores de riesgo) suele necesitar entre 8 y 12 semanas para lograr una recuperación completa.
                  </li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Es fundamental que el paciente mantenga la adherencia al programa de ejercicios domiciliarios y siga las pautas de modificación de la actividad que le indicamos en consulta. La participación activa del paciente es la variable que más influye en la velocidad de recuperación.
                </p>
              </motion.div>

              {/* Sección 7 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  Prevención de la fascitis plantar
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La prevención es siempre el mejor tratamiento. Si ya has sufrido fascitis plantar o si tienes factores de riesgo, estas recomendaciones pueden ayudarte a evitar la aparición o la recurrencia de la lesión:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Usa calzado adecuado:</strong> Elige zapatos con buena amortiguación, soporte para el arco y una ligera elevación del talón. Evita las suelas completamente planas para estar de pie durante periodos prolongados. Si practicas deporte, renueva tus zapatillas cada 600-800 kilómetros de uso.
                  </li>
                  <li>
                    <strong>Estira a diario:</strong> Dedica 5 minutos cada día a estirar la pantorrilla y la planta del pie, especialmente antes y después de la actividad física. Los estiramientos matutinos antes de apoyar el pie son especialmente protectores.
                  </li>
                  <li>
                    <strong>Fortalece la musculatura intrínseca del pie:</strong> Ejercicios como recoger una toalla con los dedos del pie, hacer "short foot" (acortar el arco del pie sin flexionar los dedos) y caminar descalzo por superficies irregulares de forma controlada ayudan a mejorar la estabilidad y la absorción de impactos del pie.
                  </li>
                  <li>
                    <strong>Controla tu peso corporal:</strong> Mantener un peso saludable es una de las medidas más efectivas para reducir la carga mecánica sobre la fascia plantar.
                  </li>
                  <li>
                    <strong>Progresa gradualmente en la actividad física:</strong> Aplica la regla del 10 %: no incrementes el volumen o la intensidad de tu entrenamiento más de un 10 % por semana.
                  </li>
                  <li>
                    <strong>Consulta ante los primeros síntomas:</strong> No ignores un dolor en el talón que persiste más de una o dos semanas. Un tratamiento precoz evita la cronificación de la fascitis plantar y acorta significativamente los tiempos de recuperación.
                  </li>
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-16 p-8 bg-card border border-border rounded-2xl text-center"
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  ¿Sufres dolor en el talón?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6 max-w-xl mx-auto">
                  En la Clínica FIMART de Aspe somos especialistas en el tratamiento de la fascitis plantar con ondas de choque, EPI y láser terapéutico. Diagnosticamos con ecografía y diseñamos un plan de tratamiento personalizado para tu caso.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Pedir Cita por WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/ondas-de-choque-aspe">
                      Conoce las Ondas de Choque <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

            </article>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FascitisPlantar;
