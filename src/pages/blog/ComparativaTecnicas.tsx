import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import GridBackground from "@/components/ui/GridBackground";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

const ComparativaTecnicas = () => {
  return (
    <>
      <SEO
        title="EPI vs Punción Seca vs Ondas de Choque: ¿Cuál Necesitas? | FIMART"
        description="Comparativa completa entre EPI, punción seca y ondas de choque. Descubre las diferencias, indicaciones y cuál es la técnica de fisioterapia avanzada más adecuada para tu lesión."
        path="/blog/diferencias-epi-puncion-seca-ondas-choque"
        keywords="EPI vs punción seca, ondas de choque vs EPI, fisioterapia invasiva, comparativa técnicas fisioterapia, tratamiento tendinopatía Aspe"
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <GridBackground variant="lines" size={60} />
          <div className="container mx-auto relative z-10">
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
                    <span className="text-foreground font-medium" aria-current="page">EPI vs Punción Seca vs Ondas de Choque</span>
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
                Tratamientos
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 tracking-tight leading-tight">
                EPI vs Punción Seca vs Ondas de Choque:{" "}
                <span className="text-primary glow-text">¿Cuál Necesitas?</span>
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" />
                  20 febrero 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  6 min de lectura
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-14 lg:py-24">
          <div className="container mx-auto">
            <article className="max-w-4xl mx-auto">

              {/* Sección 1 - Introducción */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  ¿Por qué se confunden estas técnicas?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Si te han diagnosticado una tendinopatía, una contractura persistente o una fascitis plantar, es muy probable que tu fisioterapeuta te haya mencionado alguna de estas tres técnicas: EPI, punción seca u ondas de choque. Y es muy probable también que te hayas preguntado en qué se diferencian, cuál duele más, cuál es más efectiva o si realmente las necesitas.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La confusión es comprensible. Las tres son técnicas de fisioterapia avanzada que se utilizan para tratar problemas musculoesqueléticos, dos de ellas usan agujas y las tres han ganado mucha popularidad en los últimos años. Sin embargo, sus mecanismos de acción, sus indicaciones y sus resultados son significativamente diferentes. Entender estas diferencias es clave para que, junto con tu fisioterapeuta, puedas tomar la mejor decisión terapéutica.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  En este artículo vamos a explicar cada técnica de forma clara y accesible, comparar sus características principales y ayudarte a entender cuándo está indicada cada una. Ten en cuenta que esta información es orientativa: la elección del tratamiento siempre debe realizarla un profesional tras una valoración individualizada.
                </p>
              </motion.div>

              {/* Sección 2 - EPI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  ¿Qué es la EPI (Electrólisis Percutánea Intratisular)?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La{" "}
                  <Link to="/epi-electrolisis-percutanea-aspe" className="text-primary hover:underline font-medium">
                    EPI
                  </Link>{" "}
                  es una técnica de fisioterapia invasiva que consiste en aplicar una corriente eléctrica galvánica a través de una aguja de acupuntura que se introduce directamente en el tejido blando dañado (tendón, ligamento, músculo o fascia). La aplicación se realiza siempre bajo control ecográfico, lo que permite dirigir la aguja con precisión milimétrica al punto exacto de la lesión.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  El mecanismo de acción de la EPI se basa en la electrólisis: la corriente galvánica que pasa a través de la aguja produce una reacción electroquímica en el tejido que genera hidróxido de sodio (una sustancia alcalina). Esta reacción destruye de forma controlada y selectiva el tejido degenerado (necrótico) sin afectar al tejido sano circundante. Al eliminar el tejido patológico, se desencadena una respuesta inflamatoria aguda local que activa los mecanismos naturales de reparación del organismo: migración de células madre, proliferación de fibroblastos, síntesis de colágeno de tipo I y neovascularización.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La EPI es especialmente efectiva para el tratamiento de <strong>tendinopatías crónicas degenerativas</strong> que no han respondido a otros tratamientos conservadores. Sus principales indicaciones incluyen: tendinopatía del supraespinoso, epicondilitis lateral (codo de tenista), tendinopatía rotuliana, tendinopatía del tendón de Aquiles, fascitis plantar crónica y roturas musculares de difícil cicatrización. Generalmente se realizan entre 3 y 5 sesiones, con un intervalo de 1 a 2 semanas entre cada sesión.
                </p>
              </motion.div>

              {/* Sección 3 - Punción seca */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  ¿Qué es la punción seca?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La punción seca es una técnica invasiva que consiste en introducir una aguja de acupuntura (sin inyectar ninguna sustancia, de ahí el nombre de "seca") directamente en un punto gatillo miofascial. Los puntos gatillo son nódulos hiperirritables localizados en bandas tensas del músculo esquelético que generan dolor local, dolor referido a distancia y disfunción motora.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  El mecanismo de acción de la punción seca se basa en la estimulación mecánica del punto gatillo. Al introducir la aguja y realizar movimientos rápidos de inserción-retirada parcial (técnica de "fast-in, fast-out" de Hong), se produce una respuesta de espasmo local (REL): una contracción involuntaria y visible de la banda tensa que indica que se ha alcanzado el punto gatillo. Esta respuesta de espasmo local desencadena una cascada de efectos terapéuticos: ruptura mecánica de los nódulos de contracción, aumento del flujo sanguíneo local, liberación de sustancias vasoactivas, reducción de la concentración de sustancias algogénicas (como la sustancia P y el CGRP) y normalización de la actividad eléctrica del punto gatillo.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  A diferencia de la EPI, la punción seca <strong>no utiliza corriente eléctrica y no requiere obligatoriamente guía ecográfica</strong>, aunque esta puede utilizarse en puntos profundos o de difícil acceso. La punción seca está indicada principalmente para: síndrome de dolor miofascial, contracturas musculares persistentes, cefaleas tensionales, dolor cervical y lumbar de origen muscular, y como complemento en el tratamiento de tendinopatías cuando existe un componente muscular asociado. El número de sesiones varía según el caso, pero generalmente se observan resultados significativos en 2 a 4 sesiones.
                </p>
              </motion.div>

              {/* Sección 4 - Ondas de choque */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  ¿Qué es la terapia por ondas de choque?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Las{" "}
                  <Link to="/ondas-de-choque-aspe" className="text-primary hover:underline font-medium">
                    ondas de choque extracorpóreas
                  </Link>{" "}
                  son ondas acústicas de alta energía que se generan fuera del cuerpo y se transmiten a los tejidos a través de un aplicador y gel conductor. A diferencia de la EPI y la punción seca, las ondas de choque son una técnica completamente <strong>no invasiva</strong>: no se introduce ninguna aguja ni se perfora la piel.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  El mecanismo de acción de las ondas de choque se basa en el fenómeno de mecanotransducción. Las ondas acústicas penetran en el tejido y generan una serie de efectos biológicos a nivel celular: estimulación de la neovascularización (formación de nuevos vasos sanguíneos), liberación de factores de crecimiento como el VEGF y el TGF-beta1, activación de las células madre mesenquimales, aumento de la síntesis de colágeno, efecto analgésico por hiperestimulación de las terminaciones nerviosas y fragmentación de depósitos de calcio.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Las ondas de choque son especialmente eficaces en el tratamiento de patologías crónicas que implican degeneración del tendón o la presencia de calcificaciones. Sus indicaciones principales incluyen: fascitis plantar crónica y espolón calcáneo, tendinitis calcificante del hombro, epicondilitis y epitrocleítis crónicas, tendinopatía rotuliana, tendinopatía del tendón de Aquiles, síndrome trocantérico y pseudoartrosis (fracturas que no consolidan). Los protocolos habituales comprenden entre 3 y 5 sesiones semanales, con una aplicación de 2000 a 3000 impulsos por sesión.
                </p>
              </motion.div>

              {/* Sección 5 - Tabla comparativa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  Tabla comparativa: EPI vs Punción Seca vs Ondas de Choque
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  A continuación resumimos las diferencias clave entre las tres técnicas para que puedas compararlas de un vistazo:
                </p>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 gap-6 mb-8">
                  {/* Header Row */}
                  <div className="grid grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-muted/50 font-display font-bold text-foreground text-sm">
                      Característica
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10 text-primary font-display font-bold text-sm text-center">
                      EPI
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10 text-primary font-display font-bold text-sm text-center">
                      Punción Seca
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10 text-primary font-display font-bold text-sm text-center">
                      Ondas de Choque
                    </div>
                  </div>

                  {/* Tipo de técnica */}
                  <div className="grid grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-muted/30 font-body font-medium text-foreground text-sm">
                      Tipo de técnica
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      Invasiva (aguja + corriente)
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      Invasiva (aguja sin corriente)
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      No invasiva (ondas acústicas)
                    </div>
                  </div>

                  {/* Dolor durante tratamiento */}
                  <div className="grid grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-muted/30 font-body font-medium text-foreground text-sm">
                      Dolor durante el tratamiento
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      Moderado (pinchazo + corriente)
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      Moderado-alto (espasmo local)
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      Leve-moderado (golpeteo)
                    </div>
                  </div>

                  {/* Número de sesiones */}
                  <div className="grid grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-muted/30 font-body font-medium text-foreground text-sm">
                      Sesiones habituales
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      3-5 sesiones (cada 1-2 semanas)
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      2-4 sesiones (semanal)
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      3-5 sesiones (semanal)
                    </div>
                  </div>

                  {/* Patologías principales */}
                  <div className="grid grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-muted/30 font-body font-medium text-foreground text-sm">
                      Patologías principales
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      Tendinopatías crónicas, fascitis plantar, roturas fibrilares
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      Puntos gatillo, contracturas, dolor miofascial, cefaleas
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      Calcificaciones, tendinopatías crónicas, fascitis plantar, pseudoartrosis
                    </div>
                  </div>

                  {/* Usa ecografía */}
                  <div className="grid grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-muted/30 font-body font-medium text-foreground text-sm">
                      Requiere ecografía
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      Sí, siempre (ecoguiada)
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      No obligatorio (opcional en puntos profundos)
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border font-body text-muted-foreground text-sm text-center">
                      No (se puede usar para localización)
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Sección 6 - Combinación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  ¿Se pueden combinar estas técnicas?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La respuesta es sí, y de hecho <strong>el abordaje multimodal es el que mejores resultados ofrece</strong> en la práctica clínica. La combinación de técnicas no solo es posible, sino que en muchos casos es la estrategia más eficaz para tratar lesiones complejas o crónicas que no responden a un único tratamiento.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  En la Clínica FIMART de Aspe utilizamos con frecuencia protocolos combinados, siempre basados en la evidencia científica y adaptados a las necesidades específicas de cada paciente. Algunos ejemplos de combinaciones que aplicamos habitualmente:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Ondas de choque + EPI en tendinopatías crónicas:</strong> Las ondas de choque preparan el tejido estimulando la neovascularización y la llegada de factores de crecimiento, mientras que la EPI elimina selectivamente el tejido degenerado y activa la respuesta reparadora. Aplicadas en sesiones alternas, potencian mutuamente sus efectos regenerativos. Esta combinación es especialmente efectiva en fascitis plantares crónicas y tendinopatías calcificantes del hombro.
                  </li>
                  <li>
                    <strong>Punción seca + EPI en síndrome miofascial con tendinopatía asociada:</strong> Cuando un paciente presenta puntos gatillo miofasciales que generan dolor referido en la zona de un tendón lesionado, tratamos primero los puntos gatillo con punción seca para restaurar la longitud y la función muscular normal, y después aplicamos EPI sobre el tendón degenerado. Esta secuencia aborda tanto el componente muscular como el tendinoso de la patología.
                  </li>
                  <li>
                    <strong>Ondas de choque + punción seca en dolor miofascial crónico:</strong> Las ondas de choque radiales son muy eficaces para desactivar puntos gatillo extensos o múltiples, y se pueden complementar con punción seca en los puntos más resistentes o profundos. Esta combinación es útil en contracturas cervicales crónicas, síndromes de dolor de espalda y fibromialgia.
                  </li>
                  <li>
                    <strong>Cualquier técnica + ejercicio terapéutico:</strong> Ninguna técnica pasiva es suficiente por sí sola. Sea cual sea la combinación de técnicas que utilicemos, el ejercicio terapéutico es siempre un componente imprescindible del tratamiento. El ejercicio de carga progresiva estimula la remodelación del colágeno, mejora la capacidad del tendón para soportar cargas funcionales y reduce el riesgo de recaída.
                  </li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Es importante destacar que la combinación de técnicas debe estar justificada por la valoración clínica y los hallazgos ecográficos. No se trata de "cuantas más técnicas, mejor", sino de seleccionar la combinación óptima para cada caso concreto. Un abordaje multimodal bien planificado permite atacar la lesión desde diferentes ángulos biológicos, acortando los tiempos de recuperación y mejorando los resultados a largo plazo.
                </p>
              </motion.div>

              {/* Sección 7 - Cómo elegir */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  ¿Cómo elegir el tratamiento adecuado?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La elección del tratamiento no es algo que deba hacerse en base a la información de un artículo de internet ni a la recomendación de un conocido. Cada lesión tiene unas características propias que determinan cuál es la técnica o combinación de técnicas más adecuada. La decisión debe basarse en una <strong>valoración profesional individualizada</strong> que tenga en cuenta:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>El diagnóstico preciso de la lesión:</strong> No es lo mismo una tendinopatía degenerativa (donde la EPI y las ondas de choque son las técnicas de elección) que un síndrome de dolor miofascial por puntos gatillo (donde la punción seca es la opción principal). Un diagnóstico incorrecto conlleva inevitablemente un tratamiento inadecuado.
                  </li>
                  <li>
                    <strong>La fase de la lesión:</strong> Una tendinopatía reactiva en fase aguda requiere un abordaje diferente a una tendinopatía degenerativa crónica de meses de evolución. Las técnicas más agresivas como la EPI están indicadas en fases degenerativas, mientras que en fases reactivas pueden ser contraproducentes.
                  </li>
                  <li>
                    <strong>Los hallazgos ecográficos:</strong> La ecografía musculoesquelética nos proporciona información objetiva sobre el estado del tejido: grado de degeneración, presencia de calcificaciones, neovascularización, roturas parciales. Estos hallazgos condicionan directamente la elección del tratamiento.
                  </li>
                  <li>
                    <strong>La respuesta previa a otros tratamientos:</strong> Conocer qué tratamientos ha recibido el paciente anteriormente y cómo ha respondido a ellos nos ayuda a ajustar la estrategia terapéutica.
                  </li>
                  <li>
                    <strong>Las características individuales del paciente:</strong> La edad, el nivel de actividad física, las expectativas funcionales, las posibles contraindicaciones (anticoagulantes, alergia a metales, embarazo) y la tolerancia al dolor son factores que influyen en la selección del tratamiento.
                  </li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  En la Clínica FIMART de Aspe, el proceso siempre comienza con una valoración exhaustiva que incluye anamnesis detallada, exploración física completa y estudio ecográfico de la zona afectada. Solo después de tener toda esta información diseñamos un plan de tratamiento personalizado, explicando al paciente qué técnicas vamos a utilizar, por qué las hemos elegido, qué puede esperar de cada sesión y cuáles son los plazos de recuperación estimados.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Si tienes una lesión musculoesquelética que no mejora con el reposo o los tratamientos convencionales, no te quedes con la duda. Consulta con un fisioterapeuta especializado que pueda valorar tu caso de forma integral y recomendarte el tratamiento más adecuado para tu situación específica.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-16 p-8 bg-card border border-border rounded-2xl text-center"
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  ¿No sabes qué tratamiento necesitas?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6 max-w-xl mx-auto">
                  En la Clínica FIMART de Aspe realizamos una valoración completa con ecografía musculoesquelética para diagnosticar tu lesión y recomendarte el tratamiento más adecuado. Contamos con EPI, ondas de choque, láser y diatermia para ofrecerte el mejor abordaje multimodal.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Pedir Cita por WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/servicios">
                      Ver Todos los Servicios <ArrowRight className="w-4 h-4 ml-2" />
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

export default ComparativaTecnicas;
