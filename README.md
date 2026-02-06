# FIMART - Clínica de Fisioterapia Aspe

Landing page para la Clínica de Fisioterapia FIMART ubicada en Aspe, Alicante.

## Stack Tecnológico

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Estilos utilitarios
- **shadcn/ui** - Componentes UI basados en Radix
- **Framer Motion** - Animaciones
- **Vitest** - Testing

## Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes UI reutilizables
│   │   ├── CTAButton.tsx      # Botón CTA con variantes
│   │   ├── SectionBadge.tsx   # Badge de sección
│   │   ├── GridBackground.tsx # Fondo con patrón
│   │   └── ...                # Componentes shadcn/ui
│   ├── Hero.tsx         # Sección hero
│   ├── Services.tsx     # Servicios y tecnología
│   ├── Specialist.tsx   # Perfil del especialista
│   ├── Footer.tsx       # Pie de página
│   └── ...
├── lib/                 # Utilidades y constantes
│   ├── constants.ts     # Constantes globales
│   └── utils.ts         # Funciones de utilidad
├── pages/               # Páginas de la aplicación
├── test/                # Tests unitarios
└── assets/              # Imágenes y recursos
```

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/zeusve/fimart-aspe-landing.git
cd fimart-aspe-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm test         # Ejecutar tests
npm run lint     # Linting con ESLint
```

## Componentes Reutilizables

### CTAButton
Botón de llamada a la acción con soporte para WhatsApp y teléfono.
```tsx
<CTAButton variant="whatsapp" ariaLabel="Solicitar cita">
  Solicitar Cita
</CTAButton>
```

### SectionBadge
Badge para encabezados de sección.
```tsx
<SectionBadge variant="primary">Tecnología Avanzada</SectionBadge>
```

### GridBackground
Fondo con patrón de líneas o puntos.
```tsx
<GridBackground variant="lines" size={60} />
```

## Optimizaciones Implementadas

- **Performance**: Partículas reducidas, React.memo en componentes puros
- **Accesibilidad**: Skip links, aria-labels, prefers-reduced-motion
- **SEO**: Sitemap.xml, robots.txt, JSON-LD estructurado
- **Seguridad**: Sandbox en iframes, headers de seguridad

## Testing

```bash
# Ejecutar todos los tests
npm test

# Tests en modo watch
npm run test:watch
```

## Licencia

Todos los derechos reservados - Clínica FIMART Aspe
