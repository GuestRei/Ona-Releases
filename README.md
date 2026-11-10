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

## 🤖 Versión para Android (Instalador APK): **v1.0.17**

[![Descargar APK](https://img.shields.io/badge/Descargar%20APK-v1.0.17-00a8a3?style=for-the-badge&logo=android&logoColor=white)](https://github.com/GuestRei/Ona-Releases/releases/download/v1.0.17/app-release.apk)
[![Releases de GitHub](https://img.shields.io/github/v/release/GuestRei/Ona-Releases?color=00a8a3&label=Versi%C3%B3n%20Oficial&style=for-the-badge)](https://github.com/GuestRei/Ona-Releases/releases/latest)

- **Archivo instalador:** `app-release.apk`
- **Versión:** 1.0.17 (código 17)
- **Tamaño:** ~29.7 MB
- **Requisitos:** Android 8.0 o superior (`arm64-v8a`)

---

## 🌟 Novedades v1.0.17:
- **Pulsación Prolongada con Aceleración en Botones de Pesos y Repeticiones:**
  - Mantener pulsado los botones «-» y «+» en el selector de pesos y repeticiones acelera progresivamente los incrementos (desde 320ms hasta 70ms tras 3 segundos con vibración táctil suave).
  - Disponible tanto en el flujo principal de entrenamiento como en Código Verde (`_ajustarPesoVerde`).
  - Cancelación instantánea y segura al levantar el dedo, salir del área táctil o abrir menús contextuales.
- **Ajustes de Safe Area Inset en Android:**
  - Integración de la variable CSS `--sab` en todas las hojas y modales emergentes (`.overlay`, `.modal-overlay`, `.m-sheet`, `#modal-bienvenida-tour` y `.chat-panel`).
  - Previene que la barra de navegación del sistema operativo tape botones o campos de texto.
- **Homogeneización Visual al Sistema de Diseño ONA:**
  - Panel informativo de entrenamiento completado y botones de acción inferior adaptados a la estética sobria y limpia de ONA (fondo `#ECF8F8`, borde fino `1px solid #CAECEA`, esquinas de `2px`, botones estándar `.btn-s`, sin degradados pesados ni sombras artificiales).
- **Limpieza de Burbujas de Chat:**
  - Etiquetas distintivas (`.bbl-tag`) con estilo sobrio y separación natural de párrafos por doble salto de línea.
- **Sesiones Extra:**
  - Corrección de la activación de sesiones extra (`ST.sesionExtraActiva = true`) asegurando que los ejercicios se puedan registrar sin interferencias.
- **Copia de Seguridad en Google Drive:**
  - Mantenimiento íntegro de la arquitectura OAuth 2.0 y Google Sign-In configurada en v1.0.16.

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
