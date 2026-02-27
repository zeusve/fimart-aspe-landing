import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import GridBackground from "@/components/ui/GridBackground";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

const TendinitisHombro = () => {
  return (
    <>
      <SEO
        title="Tendinitis del Manguito Rotador: Diagnóstico y Rehabilitación | FIMART"
        description="Todo sobre la tendinitis del manguito rotador: causas, diagnóstico por ecografía MSK, tratamiento con EPI, ondas de choque, láser y ejercicios de rehabilitación para una recuperación completa."
        path="/blog/tendinitis-hombro-manguito-rotador"
        keywords="tendinitis hombro, manguito rotador, dolor hombro fisioterapia, tendinitis supraespinoso, rehabilitación hombro Aspe"
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
                    <span className="text-foreground font-medium" aria-current="page">Tendinitis del Manguito Rotador</span>
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
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-8 tracking-tight leading-tight">
                Tendinitis del Manguito Rotador: Diagnóstico y{" "}
                <span className="text-primary glow-text">Rehabilitación</span>
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-4 h-4" />
                  5 febrero 2025
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  7 min de lectura
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-14 lg:py-24">
          <div className="container mx-auto">
            <article className="max-w-4xl mx-auto">

              {/* Introducción */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-muted-foreground font-body leading-relaxed mb-6 text-lg">
                  El dolor de hombro es el tercer motivo de consulta musculoesquelética más frecuente, y la tendinitis del manguito rotador es la causa principal en la mayoría de los casos. Esta patología puede limitar seriamente las actividades de la vida diaria, desde peinarse hasta conducir o dormir. En la Clínica FIMART de Aspe, combinamos el diagnóstico ecográfico con las técnicas de fisioterapia avanzada más eficaces para lograr una recuperación completa y evitar la cirugía en la gran mayoría de los pacientes.
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
                  ¿Qué es el manguito rotador?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  El manguito rotador es un grupo de cuatro músculos y sus respectivos tendones que rodean la articulación del hombro como una "capa" o "manguito". Estos cuatro músculos trabajan de forma coordinada para proporcionar estabilidad dinámica a la articulación glenohumeral y permitir los movimientos de rotación y elevación del brazo:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Supraespinoso:</strong> Es el músculo del manguito rotador que se lesiona con mayor frecuencia. Se origina en la fosa supraespinosa de la escápula y se inserta en la faceta superior del troquíter del húmero. Su función principal es iniciar la abducción del brazo (separar el brazo del cuerpo) y estabilizar la cabeza humeral en la cavidad glenoidea durante los movimientos por encima de la cabeza.
                  </li>
                  <li>
                    <strong>Infraespinoso:</strong> Se sitúa en la parte posterior de la escápula y se inserta en la faceta media del troquíter. Es el principal rotador externo del hombro, un movimiento esencial para actividades como lanzar, peinarse o colocar la mano detrás de la cabeza.
                  </li>
                  <li>
                    <strong>Redondo menor:</strong> Acompaña al infraespinoso en la parte posterior del hombro. Colabora en la rotación externa y ayuda a estabilizar la articulación, evitando el desplazamiento superior de la cabeza del húmero durante la elevación del brazo.
                  </li>
                  <li>
                    <strong>Subescapular:</strong> Es el único músculo del manguito rotador situado en la parte anterior del hombro. Se inserta en el troquín del húmero y es el principal rotador interno del hombro. Tiene un papel fundamental en la estabilidad anterior de la articulación y es esencial para movimientos como llevar la mano a la espalda o abrocharse el sujetador.
                  </li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La función conjunta de estos cuatro músculos es mantener la cabeza del húmero centrada en la cavidad glenoidea de la escápula durante todos los movimientos del brazo. Cuando alguno de estos tendones se inflama o degenera, se altera este equilibrio de fuerzas y aparecen el dolor y la disfunción.
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
                  ¿Por qué se lesiona el manguito rotador?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La tendinopatía del manguito rotador es el resultado de una interacción entre factores intrínsecos (propios del tendón) y extrínsecos (externos al tendón). Comprender estas causas es clave para diseñar un tratamiento efectivo y prevenir recaídas:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Sobreuso y movimientos repetitivos:</strong> Las actividades que implican movimientos repetidos del brazo por encima de la cabeza son la causa más frecuente en personas jóvenes y deportistas. Deportes como la natación, el tenis, el pádel, el voleibol y la halterofilia someten al manguito rotador a una carga cíclica que puede superar la capacidad de adaptación del tendón. También afecta a trabajadores que realizan movimientos repetitivos con los brazos elevados (pintores, electricistas, almaceneros).
                  </li>
                  <li>
                    <strong>Degeneración asociada a la edad:</strong> A partir de los 40 años, los tendones del manguito rotador experimentan una disminución progresiva de la vascularización, la celularidad y la calidad del colágeno. El supraespinoso es especialmente vulnerable porque tiene una zona de hipovascularización conocida como "zona crítica", situada a 1-2 centímetros de su inserción en el troquíter, donde el aporte sanguíneo es deficiente y la capacidad de reparación está comprometida.
                  </li>
                  <li>
                    <strong>Alteraciones posturales:</strong> La postura cifótica (hombros redondeados hacia delante), muy frecuente en personas que trabajan muchas horas frente al ordenador, modifica la posición de la escápula y reduce el espacio subacromial. Esto favorece la compresión del tendón del supraespinoso contra el acromion durante los movimientos de elevación del brazo, un mecanismo conocido como pinzamiento o impingement.
                  </li>
                  <li>
                    <strong>Debilidad y desequilibrios musculares:</strong> La debilidad de los rotadores externos, la insuficiencia de los estabilizadores escapulares (serrato anterior, trapecio inferior) y el acortamiento del pectoral menor y la cápsula posterior del hombro generan un patrón biomecánico disfuncional que sobrecarga selectivamente los tendones del manguito.
                  </li>
                  <li>
                    <strong>Traumatismos:</strong> Una caída sobre la mano o el hombro, un tirón brusco o un movimiento forzado pueden provocar una lesión aguda del manguito rotador, desde una tendinitis reactiva hasta una rotura parcial o completa del tendón.
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
                  Síntomas de la tendinitis del manguito rotador
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La sintomatología de la tendinitis del manguito rotador es variable y depende del tendón afectado, la gravedad de la lesión y el tiempo de evolución. Sin embargo, existen patrones comunes que permiten orientar el diagnóstico:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Dolor lateral del hombro:</strong> Es el síntoma más frecuente. El dolor se localiza típicamente en la cara lateral del deltoides, en la región conocida como "zona de la charretera militar". Suele ser un dolor profundo, difícil de localizar con precisión con un solo dedo. Se intensifica al elevar el brazo lateralmente entre los 60 y 120 grados (arco doloroso), al llevar la mano a la espalda o al realizar movimientos por encima de la cabeza.
                  </li>
                  <li>
                    <strong>Dolor nocturno:</strong> Uno de los síntomas que más preocupa y afecta a la calidad de vida de los pacientes. El dolor se intensifica por la noche, especialmente al acostarse sobre el hombro afectado. Esto se debe a la compresión directa del tendón inflamado contra el acromion y a la disminución del flujo sanguíneo en la posición de decúbito lateral. Muchos pacientes refieren despertarse varias veces durante la noche y tener que cambiar de posición.
                  </li>
                  <li>
                    <strong>Debilidad y pérdida de fuerza:</strong> La tendinitis genera una inhibición muscular refleja que provoca una sensación de debilidad al intentar levantar objetos, alcanzar estantes altos o realizar gestos deportivos. En las roturas parciales y completas, la pérdida de fuerza es más marcada y objetivable en la exploración clínica.
                  </li>
                  <li>
                    <strong>Crepitación y sensación de enganche:</strong> Algunos pacientes refieren una sensación de chasquido, crujido o enganche al mover el hombro, que puede indicar una bursitis subacromial asociada o una irregularidad en la superficie del tendón.
                  </li>
                  <li>
                    <strong>Rigidez progresiva:</strong> Si la tendinitis no se trata adecuadamente, puede evolucionar hacia una capsulitis adhesiva (hombro congelado), con una restricción progresiva de la movilidad del hombro en todas las direcciones.
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
                  Diagnóstico con ecografía musculoesquelética (MSK)
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La{" "}
                  <Link to="/ecografia-musculoesqueletica-aspe" className="text-primary hover:underline font-medium">
                    ecografía musculoesquelética
                  </Link>{" "}
                  es la herramienta diagnóstica de elección para valorar las lesiones del manguito rotador. En la Clínica FIMART la utilizamos como primera prueba de imagen en todos los pacientes con dolor de hombro, ya que ofrece ventajas significativas frente a otras técnicas:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Visualización en tiempo real:</strong> La ecografía permite observar los tendones del manguito rotador en movimiento, lo que facilita la detección de atrapamientos, subluxaciones dinámicas y conflictos de espacio que no son visibles en una imagen estática.
                  </li>
                  <li>
                    <strong>Alta sensibilidad y especificidad:</strong> Estudios comparativos demuestran que la ecografía realizada por un profesional experimentado tiene una sensibilidad y especificidad superiores al 90 % para detectar roturas del manguito rotador, equiparable a la resonancia magnética en muchos escenarios clínicos.
                  </li>
                  <li>
                    <strong>Evaluación bilateral comparativa:</strong> Podemos comparar el hombro afectado con el sano en la misma exploración, lo que resulta especialmente útil para detectar cambios sutiles en el grosor, la ecogenicidad y la estructura del tendón.
                  </li>
                  <li>
                    <strong>Guía para tratamientos invasivos:</strong> La ecografía nos permite realizar infiltraciones, EPI y otras técnicas percutáneas con precisión milimétrica, dirigiendo la aguja exactamente al punto de la lesión y evitando dañar estructuras sanas adyacentes.
                  </li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Los hallazgos ecográficos que buscamos incluyen: engrosamiento o adelgazamiento del tendón, pérdida del patrón fibrilar normal, áreas hipoecoicas (oscuras) que indican degeneración, presencia de calcificaciones intratendinosas, roturas parciales o completas, líquido en la bursa subacromial-subdeltoidea y signos de neovascularización en el estudio Doppler. Toda esta información nos permite establecer un diagnóstico preciso y diseñar un plan de tratamiento individualizado.
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
                  Tratamiento de fisioterapia del manguito rotador
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  En la Clínica FIMART aplicamos un protocolo de tratamiento progresivo y basado en la evidencia que se adapta a la fase de la lesión. Este enfoque por fases garantiza que cada intervención se realice en el momento óptimo para maximizar los resultados:
                </p>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
                  Fase aguda: control del dolor y la inflamación
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  En las primeras semanas, el objetivo prioritario es reducir el dolor y la inflamación para permitir el inicio precoz de la movilización. Las técnicas que utilizamos en esta fase incluyen:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Láser terapéutico de alta potencia:</strong> El{" "}
                    <Link to="/laser-terapeutico-aspe" className="text-primary hover:underline font-medium">
                      láser de clase IV
                    </Link>{" "}
                    proporciona un efecto analgésico y antiinflamatorio potente al estimular la producción de endorfinas y reducir la liberación de mediadores proinflamatorios. Aplicamos entre 6 y 10 julios por centímetro cuadrado sobre el tendón afectado y la bursa subacromial, lo que permite al paciente iniciar los ejercicios de movilidad con menos dolor.
                  </li>
                  <li>
                    <strong>Diatermia capacitiva y resistiva (TECAR):</strong> La{" "}
                    <Link to="/diatermia-tecar-aspe" className="text-primary hover:underline font-medium">
                      diatermia TECAR
                    </Link>{" "}
                    genera un calentamiento profundo de los tejidos que mejora la vascularización local, reduce el espasmo muscular y facilita el drenaje del edema. En la fase aguda utilizamos preferentemente el modo capacitivo, que actúa sobre los tejidos blandos más superficiales (bursa, cápsula articular).
                  </li>
                  <li>
                    <strong>Terapia manual suave:</strong> Movilizaciones pasivas y asistidas del hombro dentro del rango no doloroso, descompresión de la articulación glenohumeral y técnicas de tejido blando sobre la musculatura periarticular para restaurar el equilibrio muscular.
                  </li>
                </ul>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
                  Fase subaguda: regeneración tisular
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Una vez controlada la fase inflamatoria inicial, el objetivo se centra en estimular la regeneración del tendón dañado. Aquí es donde las técnicas de fisioterapia invasiva muestran su máximo potencial:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>EPI (Electrólisis Percutánea Intratisular):</strong> La{" "}
                    <Link to="/epi-electrolisis-percutanea-aspe" className="text-primary hover:underline font-medium">
                      EPI ecoguiada
                    </Link>{" "}
                    es especialmente eficaz en las tendinopatías del manguito rotador. Bajo control ecográfico, dirigimos la aguja al punto exacto de degeneración del tendón y aplicamos una corriente galvánica que induce una reacción electrolítica controlada. Esto destruye selectivamente el tejido patológico y activa los mecanismos biológicos de reparación, incluyendo la proliferación de fibroblastos y la síntesis de colágeno de tipo I (el que forma los tendones sanos).
                  </li>
                  <li>
                    <strong>Ondas de choque focalizadas:</strong> Las{" "}
                    <Link to="/ondas-de-choque-aspe" className="text-primary hover:underline font-medium">
                      ondas de choque
                    </Link>{" "}
                    son especialmente indicadas cuando existe una calcificación intratendinosa. Las ondas acústicas de alta energía fragmentan los depósitos de calcio y estimulan su reabsorción, al tiempo que promueven la neovascularización y la regeneración del tendón. En tendinopatías calcificantes del supraespinoso, las tasas de éxito superan el 85 %.
                  </li>
                </ul>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 mt-8">
                  Fase de readaptación: ejercicio terapéutico progresivo
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  El ejercicio terapéutico es la piedra angular de la rehabilitación del manguito rotador. Sin un programa de fortalecimiento progresivo y bien estructurado, el riesgo de recaída es muy elevado. Nuestro protocolo incluye una progresión desde ejercicios isométricos hasta ejercicios con carga excéntrica y funcional, adaptada a la tolerancia del paciente y los hallazgos ecográficos de control.
                </p>
              </motion.div>

              {/* Sección 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  Ejercicios de rehabilitación del hombro
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Estos son los cuatro ejercicios fundamentales que prescribimos en la Clínica FIMART para la rehabilitación del manguito rotador. Deben realizarse siempre bajo supervisión profesional inicial y con la progresión adecuada:
                </p>
                <ul className="list-disc list-inside space-y-4 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Isométricos de rotación externa contra la pared:</strong> De pie, con el codo flexionado a 90 grados y pegado al costado, coloca el dorso de la mano contra una pared o el marco de una puerta. Empuja suavemente contra la pared como si quisieras rotar el brazo hacia fuera, sin que haya movimiento real (contracción isométrica). Mantén la presión durante 10 segundos con un esfuerzo submáximo (al 50-70 % de tu fuerza máxima). Realiza 5 repeticiones, 3 veces al día. Este ejercicio activa el infraespinoso y el redondo menor sin someter al tendón a estrés mecánico excesivo, por lo que es seguro desde las fases iniciales.
                  </li>
                  <li>
                    <strong>Rotación externa con banda elástica:</strong> Cuando los isométricos son bien tolerados (normalmente tras 2-3 semanas), progresamos a ejercicios isotónicos con resistencia. Con el codo pegado al costado y flexionado a 90 grados, sujeta una banda elástica con ambas manos. Rota el antebrazo hacia fuera estirando la banda, manteniendo el codo pegado al cuerpo en todo momento. Controla el movimiento de vuelta durante 3 segundos (fase excéntrica). Realiza 3 series de 15 repeticiones. La resistencia de la banda se va incrementando según la tolerancia del paciente.
                  </li>
                  <li>
                    <strong>Elevación escapular en decúbito lateral (side-lying external rotation):</strong> Tumbado sobre el lado sano, con el codo del brazo afectado apoyado sobre una toalla enrollada en la cintura y flexionado a 90 grados. Con una mancuerna ligera (0,5-1 kg inicialmente), rota el antebrazo hacia el techo sin despegar el codo del costado. Baja lentamente durante 3-4 segundos. Realiza 3 series de 10 repeticiones. Este ejercicio trabaja los rotadores externos en una posición de máxima ventaja mecánica y mínima compresión subacromial.
                  </li>
                  <li>
                    <strong>Retracción escapular con banda ("Y-T-W"):</strong> De pie, con una banda elástica anclada a la altura del pecho, realiza tres movimientos de retracción escapular formando las letras Y (brazos extendidos en diagonal hacia arriba), T (brazos extendidos lateralmente) y W (codos flexionados con retracción máxima). Cada posición se mantiene 5 segundos en la posición final. Realiza 2 series de 8 repeticiones de cada letra. Este ejercicio fortalece los estabilizadores escapulares (trapecio medio e inferior, romboides, serrato anterior), fundamentales para restaurar la cinemática normal del hombro.
                  </li>
                </ul>
              </motion.div>

              {/* Sección 7 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-12">
                  ¿Cuándo es necesaria la cirugía?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  La buena noticia es que la gran mayoría de las tendinopatías del manguito rotador responden favorablemente al tratamiento conservador con fisioterapia. Los estudios científicos demuestran que entre el 75 % y el 90 % de los pacientes con tendinitis e incluso con roturas parciales del manguito rotador consiguen una recuperación funcional satisfactoria sin necesidad de pasar por el quirófano.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  Sin embargo, existen situaciones en las que la cirugía puede ser necesaria. Los criterios que sugieren una indicación quirúrgica incluyen:
                </p>
                <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground font-body leading-relaxed">
                  <li>
                    <strong>Roturas completas del tendón en pacientes jóvenes y activos:</strong> Una rotura completa del supraespinoso en un deportista o trabajador manual joven que necesita una función plena del hombro suele requerir reparación quirúrgica artroscópica para evitar la progresión de la rotura y la atrofia muscular irreversible.
                  </li>
                  <li>
                    <strong>Fracaso del tratamiento conservador tras 6-12 meses:</strong> Si un paciente ha seguido un programa completo de fisioterapia durante al menos 6 meses sin mejoría significativa, se debe valorar la opción quirúrgica. Es importante que el tratamiento conservador haya sido realmente adecuado e intensivo antes de considerarlo un fracaso.
                  </li>
                  <li>
                    <strong>Pérdida de fuerza funcional importante:</strong> Cuando la debilidad del hombro impide al paciente realizar las actividades esenciales de su vida diaria o laboral, y no mejora con el fortalecimiento progresivo, puede ser necesaria una intervención quirúrgica.
                  </li>
                  <li>
                    <strong>Roturas traumáticas agudas:</strong> Una rotura del manguito rotador producida por un traumatismo agudo (caída, tirón violento) en un paciente previamente sano tiene mejor pronóstico quirúrgico cuando se repara de forma precoz (en las primeras 3-6 semanas tras la lesión).
                  </li>
                </ul>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  En cualquier caso, incluso cuando la cirugía es necesaria, la fisioterapia preoperatoria mejora significativamente los resultados postquirúrgicos. Y tras la intervención, la rehabilitación con fisioterapia es absolutamente imprescindible para recuperar la movilidad, la fuerza y la funcionalidad del hombro. En la Clínica FIMART acompañamos al paciente en todo el proceso, desde el diagnóstico inicial hasta la vuelta completa a su actividad.
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
                  ¿Tienes dolor de hombro?
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-6 max-w-xl mx-auto">
                  En la Clínica FIMART de Aspe diagnosticamos tu lesión de hombro con ecografía musculoesquelética y aplicamos las técnicas de fisioterapia avanzada más eficaces: EPI ecoguiada, ondas de choque, láser y ejercicio terapéutico personalizado.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/25">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Pedir Cita por WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/epi-electrolisis-percutanea-aspe">
                      Conoce la EPI <ArrowRight className="w-4 h-4 ml-2" />
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

export default TendinitisHombro;
