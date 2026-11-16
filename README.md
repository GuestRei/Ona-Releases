# 🌸 ONA Digital - Repositorio Oficial y Versión Web

Bienvenida al canal oficial y público de **ONA Digital**, la aplicación móvil de entrenamiento de fuerza adaptada a la salud, biomecánica y fisiología femenina.

---

## 🌐 Versión Web Oficial (iOS / iPhone / iPad / Navegadores)

¡Ya puedes probar y usar **ONA Digital** directamente desde tu iPhone, iPad o navegador web sin necesidad de instalar archivos!

[![Abrir Versión Web](https://img.shields.io/badge/Abrir%20Web%20App-iOS%20%2F%20Safari-00a8a3?style=for-the-badge&logo=safari&logoColor=white)](https://guestrei.github.io/Ona-Releases/)
[![GitHub Pages](https://img.shields.io/badge/Alojado%20en-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://guestrei.github.io/Ona-Releases/)

> 📲 **Instalar en iPhone como App Nativa (PWA):**
> 1. Abre el enlace [https://guestrei.github.io/Ona-Releases/](https://guestrei.github.io/Ona-Releases/) en **Safari**.
> 2. Pulsa el botón **Compartir** (icono cuadrado con flecha hacia arriba ⎋).
> 3. Selecciona **«Añadir a pantalla de inicio»** (icono +).
> 4. ¡Listo! Se creará el icono de ONA en tu pantalla de inicio y se abrirá a pantalla completa.

---

## 🤖 Versión para Android (Instalador APK): **v1.0.19**

[![Descargar APK](https://img.shields.io/badge/Descargar%20APK-v1.0.19-00a8a3?style=for-the-badge&logo=android&logoColor=white)](https://github.com/GuestRei/Ona-Releases/releases/download/v1.0.19/app-release.apk)
[![Releases de GitHub](https://img.shields.io/github/v/release/GuestRei/Ona-Releases?color=00a8a3&label=Versi%C3%B3n%20Oficial&style=for-the-badge)](https://github.com/GuestRei/Ona-Releases/releases/latest)

- **Archivo instalador:** `app-release.apk`
- **Versión:** 1.0.19 (código 19)
- **Tamaño:** ~29.7 MB
- **Requisitos:** Android 8.0 o superior (`arm64-v8a`)

---

## 🌟 Novedades v1.0.19:
- **Refinamiento UI y Correcciones de Estabilidad (Actualización v1.0.19+):**
  - **Normalización Diaria de Marcas (
ormalizarMarcasDelDia):** Se evita que los ejercicios completados en días anteriores amanezcan marcados al día siguiente, manteniendo el estado intacto en la misma fecha.
  - **Aviso de Fin de Descanso en Segundo Plano:** Notificación local programada cuando la app pasa a segundo plano durante el descanso entre series.
  - **Caché Biomecánica del Plan (
esolverSlot):** Comprobación rigurosa de grupo muscular, patrón motor y entorno en ST.mesociclo al cambiar de esquema de entrenamiento.
  - **Flujo de Pesos Limpio y Sin Cargas Artificiales:** Ningún ejercicio arrastra peso por defecto, se incorpora la opción «Sin peso» y se elimina definitivamente cualquier etiqueta de «0.0 kg».
  - **Diseño Plano Unificado:** Rediseño completo de botones globales (.btn-t, .btn-n, .btn-o, .btn-r), aviso de cambio de fase centrado y tarjeta de entreno con radio de 2 px, borde de 1 px #1E5753 y sin sombras.
  - **Próximo Entreno con Plan del Entrenador:** «Ver próximo entreno» despliega el siguiente día prescrito por el preparador en lugar de la rutina genérica.
- **15 Ejercicios Nuevos de Casa y Adaptación en Tres Niveles (`lb01` a `lb15`):**
  - Incorporación a la biblioteca clínica de 15 ejercicios sin aparatos basados en el libro «Anatomía y musculación sin aparatos» y literatura para mayores/osteoporosis (flexiones con alza, aperturas con toallas, press militar con garrafas, elevaciones laterales, plancha lateral, puente de glúteo, sentadilla con garrafa, peso muerto con garrafas y sentarse/levantarse de la silla).
  - En la ficha de técnica se incluye ahora un bloque interactivo con tres niveles de dificultad: **«Más fácil»**, **«Como está»** y **«Más difícil»**, permitiendo ajustar la exigencia sin salir de la rutina.
  - Corrección clínica en fondos en silla (`ht02`): postura especificada como «apoyo en silla (manos detrás)» y advertencia para osteoporosis en «Adaptar».
- **Orden Inteligente por Sinergias Musculares en la Sesión (`ordenarEjerciciosSesion`):**
  - Cada grupo muscular se entrena de forma continua, evitando saltar de un músculo a otro y regresar al primero.
  - Los músculos pequeños sinergistas se ubican tras el grupo grande (tríceps y hombro tras pecho; bíceps tras espalda) para evitar fatiga previa.
  - Ejercicios compuestos primero y aislamiento después.
  - Nota de calentamiento previa en el bloque principal recomendando 1-2 series ligeras. El orden manual del plan personal de la usuaria sigue teniendo prioridad absoluta si decide personalizarlo.
- **Creación Directa y Conteo Muscular de Ejercicios Propios:**
  - Botón de acceso directo en la pestaña Hoy: «+ Crear mi propio ejercicio» (se oculta al finalizar la sesión).
  - Formulario ampliado con selección de entorno («Gimnasio o casa», «Solo gimnasio», «Solo casa») y selección de «Otros músculos que trabaja (opcional)».
  - Conteo muscular preciso en el resumen de la sesión y el volumen semanal: 1.0 serie para el músculo principal y 0.5 series para cada músculo secundario seleccionado.
- **Seguridad Clínica y Consejos de Progresión:**
  - Sección desplegable «Cuándo parar y consultar» visible en la tarjeta previa al entrenamiento con señales de alarma claras (dolor agudo, mareo, opresión en pecho o pérdida de control; diferenciación entre agujetas normales de 24-72h y dolor lesivo).
  - Consejos de progresión en el asistente adaptados: progresión de una sola variable a la vez (peso, reps o series), terminando con 1-2 RIR en cargas ligeras (bandas/garrafas).

### Versión anterior (v1.0.16):
- **Copia de Seguridad Automática en Google Drive Operativa:**
  - Integración de credenciales oficiales de cliente OAuth 2.0 (Android y Web) en la configuración nativa `google-services.json`.
  - Vinculación verificada con la huella digital SHA-1 de la aplicación.
  - Autorización directa y privada mediante Google Sign-In con alcance `https://www.googleapis.com/auth/drive.appdata`.
- **Diagnóstico y Transparencia de Conexión:**
  - Los mensajes devueltos por Google Play Services y la interfaz de usuario muestran el detalle técnico exacto ante cualquier eventualidad.

### Versión anterior (v1.0.15):
- **Persistencia de Ejercicios Completados en Pestaña Entreno:**
  - Al regresar a la pestaña de entrenamiento tras finalizar la sesión de hoy, la pantalla mantiene visibles todos los ejercicios completados con sus marcas en verde (✓), series realizadas y barra de progreso al 100%.
- **Soporte Oficial para Sesión Extra:**
  - Se añade la opción destacada «➕ Realizar una sesión extra» tanto en la tarjeta de felicitación superior como al pie de la rutina, permitiendo iniciar y registrar entrenamientos adicionales en el mismo día.
- **Navegación Fluida en Subpestañas:**
  - Las pestañas internas **Hoy**, **Progreso**, **Mi plan** e **Historial** permanecen completamente interactivas y accesibles sin ningún tipo de bloqueo visual o modal residual.

### Versión anterior (v1.0.14):
- **Evolución con IA en Registro de Síntomas:**
  - En *Ciclo › Registro*, nuevo botón «Evolución con IA» que redacta un informe objetivo semana a semana a partir de las anotaciones acumuladas.
  - Filtro clínico estricto (`REG_IA_PROHIBIDAS`): descarta cualquier diagnóstico, tratamiento o consejo médico, limitándose a describir patrones.
- **Mi Plan: Quitar Ejercicio Sin Sustitución Forzada:**
  - Al quitar un ejercicio en «Mi plan», el hueco permanece vacío (`ST.planPersonal.vacios`) en vez de forzar un candidato sustituto.
- **Reducción de Peso y Rendimiento Web (1.54 MB vs 2.95 MB):**
  - Depuración de imágenes data-URI redundantes y funciones huérfanas en desuso.

---

## 📲 Cómo Instalar en Android

1. **Descarga el APK:** Pulsa en el botón verde superior o entra en la [sección de Releases](https://github.com/GuestRei/Ona-Releases/releases/latest).
2. **Abre el archivo:** Cuando termine la descarga, abre `app-release.apk`. Si ya tienes una versión instalada, Android te preguntará si deseas actualizarla conservando tus datos.
3. **¡Listo!** Abre **ONA Digital** y continúa con tu entrenamiento.

---
*© 2026 ONA Digital. Todos los derechos reservados.*
