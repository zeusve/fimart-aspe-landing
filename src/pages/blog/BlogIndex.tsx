import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import GridBackground from "@/components/ui/GridBackground";
import { blogPosts } from "./blogData";

const BlogIndex = () => {
  return (
    <>
      <SEO
        title="Blog de Fisioterapia | Clínica FIMART Aspe"
        description="Artículos de fisioterapia escritos por profesionales: patologías, tratamientos, ejercicios y consejos para tu recuperación. Blog de Clínica FIMART en Aspe."
        path="/blog"
        keywords="blog fisioterapia, artículos fisioterapia, consejos rehabilitación, fisioterapia Aspe"
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
                    <span className="text-foreground font-medium" aria-current="page">Blog</span>
                  </li>
                </ol>
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Blog de{" "}
                <span className="text-primary">Fisioterapia</span>
              </h1>
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                Artículos escritos por nuestro equipo de fisioterapeutas sobre patologías,
                tratamientos y consejos para tu salud musculoesquelética.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <span className="inline-block text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-medium mb-4">
                      {post.category}
                    </span>

                    <h2 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString("es-ES", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogIndex;
