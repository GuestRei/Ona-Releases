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

## 🤖 Versión para Android (Instalador APK): **v1.0.18**

[![Descargar APK](https://img.shields.io/badge/Descargar%20APK-v1.0.18-00a8a3?style=for-the-badge&logo=android&logoColor=white)](https://github.com/GuestRei/Ona-Releases/releases/download/v1.0.18/app-release.apk)
[![Releases de GitHub](https://img.shields.io/github/v/release/GuestRei/Ona-Releases?color=00a8a3&label=Versi%C3%B3n%20Oficial&style=for-the-badge)](https://github.com/GuestRei/Ona-Releases/releases/latest)

- **Archivo instalador:** `app-release.apk`
- **Versión:** 1.0.18 (código 18)
- **Tamaño:** ~29.7 MB
- **Requisitos:** Android 8.0 o superior (`arm64-v8a`)

---

## 🌟 Novedades v1.0.18:
- **Corrección de la Pulsación Prolongada en Pesos y Repeticiones:**
  - Se eliminó la interrupción del evento táctil en Android provocada por el menú contextual o la selección de texto nativa del WebView (`touch-action: none`, `ev.preventDefault()`, `ev.stopPropagation()` y `setPointerCapture`).
  - Ahora mantener pulsado suma o resta valores de peso y repeticiones de manera continua con aceleración progresiva automática tanto en la aplicación Android como en la versión Web/PWA.
- **Unificación Total del Flujo de Entrenamiento entre Inicio y la Pestaña Entreno:**
  - Si el entrenamiento del día ya ha sido completado, el botón del Dashboard muestra «Ver entrenamiento de hoy ✓» (ocultando el botón rápido de 20 min) y redirige directamente a la pestaña de entreno sin modales innecesarios.
  - Se eliminó el modal redundante que ofrecía «Continuar la sesión de hoy» y que reiniciaba o duplicaba ejercicios completados en la rutina.
  - En la pestaña de entrenamiento se visualizan claramente los ejercicios ya realizados con sus marcas completadas, junto con los accesos directos para «Iniciar sesión extra» y «Ver resumen de hoy».
- **Sincronización de la Versión Web en GitHub Pages:**
  - Actualización de todos los activos en `docs/` para que la versión web de ONA cuente exactamente con la misma lógica unificada y controles de ajuste rápido de pesos.

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
