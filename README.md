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

## 🤖 Versión para Android (Instalador APK): **v1.0.15**

[![Descargar APK](https://img.shields.io/badge/Descargar%20APK-v1.0.15-00a8a3?style=for-the-badge&logo=android&logoColor=white)](https://github.com/GuestRei/Ona-Releases/releases/download/v1.0.15/app-release.apk)
[![Releases de GitHub](https://img.shields.io/github/v/release/GuestRei/Ona-Releases?color=00a8a3&label=Versi%C3%B3n%20Oficial&style=for-the-badge)](https://github.com/GuestRei/Ona-Releases/releases/latest)

- **Archivo instalador:** `app-release.apk`
- **Versión:** 1.0.15 (código 15)
- **Tamaño:** ~28.3 MB (optimizado desde 29.8 MB)
- **Requisitos:** Android 8.0 o superior (`arm64-v8a`)

---

## 🌟 Novedades v1.0.15:
- **Persistencia de Ejercicios Completados en Pestaña Entreno:**
  - Al regresar a la pestaña de entrenamiento tras finalizar la sesión de hoy, la pantalla mantiene visibles todos los ejercicios completados con sus marcas en verde (✓), series realizadas y barra de progreso al 100%.
- **Soporte Oficial para Sesión Extra:**
  - Se añade la opción destacada «➕ Realizar una sesión extra» tanto en la tarjeta de felicitación superior como al pie de la rutina, permitiendo iniciar y registrar entrenamientos adicionales en el mismo día.
- **Navegación Fluida en Subpestañas:**
  - Las pestañas internas **Hoy**, **Progreso**, **Mi plan** e **Historial** permanecen completamente interactivas y accesibles sin ningún tipo de bloqueo visual o modal residual.
- **Protección de Registro:**
  - Se evita el desmarcado o sobreescritura accidental de los ejercicios de una sesión ya concluida.

### Versión anterior (v1.0.14):
- **Evolución con IA en Registro de Síntomas:**
  - En *Ciclo › Registro*, nuevo botón «Evolución con IA» que redacta un informe objetivo semana a semana a partir de las anotaciones acumuladas.
  - Filtro clínico estricto (`REG_IA_PROHIBIDAS`): descarta cualquier diagnóstico, tratamiento o consejo médico, limitándose a describir patrones.
  - Minimización de datos RGPD: solo viajan recuentos agregados de categorías neutras. No se envían notas personales, vida sexual, peso ni medicación.
  - Consentimiento específico persistido en `ST.consentRegistroIA`.
- **Mi Plan: Quitar Ejercicio Sin Sustitución Forzada:**
  - Al quitar un ejercicio en «Mi plan», el hueco permanece vacío (`ST.planPersonal.vacios`) en vez de forzar un candidato sustituto.
  - Salvaguarda clínica: el día no puede quedarse sin ejercicios.
- **Detección Robusta del Plugin Nativo OnaNube:**
  - Verificación mediante `Capacitor.isPluginAvailable('OnaNube')`, eliminando falsos positivos en entornos sin el plugin registrado.
- **Reducción de Peso y Rendimiento Web (1.54 MB vs 2.95 MB):**
  - Eliminación de imágenes data-URI redundantes en Base64 en el CSS de fondo de `#s-dashboard`.
  - Depuración y borrado de `hero_bg.png` (522 KB) y de 25 funciones huérfanas en desuso.
- **Pulido Visual y de Interfaz:**
  - Botón de socias de «Centro ONA físico» desactivado con modal informativo y soporte para la futura URL de fundadoras (`ONA_WEB_URL`).
  - Tarjeta de compartir en redes con columnas dinámicas: **RÉCORD**, **TRABAJADO** y **RACHA**.
  - Tarjetas de «Etapa vital» y «Entorno» unificadas en un único bloque con fondo teal suave.
  - Explicaciones de energía y copias transformadas en botones discretos desplegables `ⓘ`.
  - Corrección de `padding-bottom` en el modal «Ya has entrenado hoy» para respetar el área segura en Android.
- **Privacidad y RGPD en Reportes:**
  - Casilla de diagnóstico técnico desmarcada por defecto para garantizar consentimiento explícito y voluntario.

---

## 📲 Cómo Instalar en Android

1. **Descarga el APK:** Pulsa en el botón verde superior o entra en la [sección de Releases](https://github.com/GuestRei/Ona-Releases/releases/latest).
2. **Abre el archivo:** Cuando termine la descarga, abre `app-release.apk`. Si ya tienes una versión instalada, Android te preguntará si deseas actualizarla conservando tus datos.
3. **¡Listo!** Abre **ONA Digital** y continúa con tu entrenamiento.

---
*© 2026 ONA Digital. Todos los derechos reservados.*
