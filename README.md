# 🥩 TODO ASADO LOS 3 OSOS - Menú Digital Interactivo & Eventos

Menú digital interactivo optimizado para dispositivos móviles, listo para publicarse en **GitHub Pages** y enlazarse mediante código QR en mesas, volantes y redes sociales.

---

## 📋 Estructura del Proyecto

```
Pagina Los 3 osos MENUS/
│
├── index.html              # Archivo principal del menú digital interactivo
├── README.md               # Guía de uso y despliegue a GitHub Pages
│
├── css/
│   └── style.css           # Estilos personalizados (Colores: #c25900, oscuros, blanco y azul claro)
│
├── js/
│   └── app.js              # Lógica interactiva: pestañas, buscador, cotizador y generador QR
│
└── assets/
    └── img/
        ├── Imagen Perfil.jpg      # Logo oficial Los 3 Osos
        ├── menu venta.png         # Carta original impresa de venta directa
        ├── Cartel eve.jpg         # Banner para sección de eventos
        ├── cartel eventos.png     # Gráficos de eventos
        ├── Post Publicitario.jpg  # Material publicitario
        └── Posts Publicitario.png # Gráficos adicionales
```

---

## ✨ Características Principales

1. **2 Secciones Principales**:
   - **Menú de Venta (Directa)**:
     - Paquetes Asados completos y fraccionados (1/4, 1/2 y 3/4): *Arrachera de Res ($480), Costilla BBQ ($430), Discada Norteña ($400), Paquete 3 Osos ($480), Chamorro de Oso ($220)*.
     - Antojos & Platillos: *Alitas 10pz ($100), Hamburguesa Casera 250g ($100), Tortas de Discada o Arrachera ($60), Tacos al Carbón ($20)*.
     - Complementos: *Orden de Papa Asada ($40), Papa con Carne ($60)*.
     - Visor en modal de la carta impresa original para consultas rápidas.
   - **Menú de Eventos (11 Paquetes Completos)**:
     1. Hamburguesas Parrilleras ($110, $160, $230)
     2. Hamburguesas Chicas ($70, $110, $160)
     3. Banquete Premium Picaña Rellena & Lechón a la Estaca ($580/persona)
     4. Presupuesto Texano Ahumado 12 hrs: Brisket, Pulled Pork, Costilla ($530/persona)
     5. Bufet de Hamburguesas, Tortas & Alitas ($190/persona)
     6. Parrillada Mexicana Tradicional: Arrachera, Aguja, T-Bone ($390/persona)
     7. Cotización Rib Eye Steakhouse ($380/persona)
     8. Espadas Brasileñas Rodizio de 9 especialidades ($410/persona)
     9. Barra de Mariscos Botaneros ($240/persona)
     10. Taquiza Tradicional 5 variedades ($120/persona)
     11. Taquiza con Quesadillas al comal ($140/persona)

2. **Cotizador & Calculadora de Eventos Automática**:
   - Permite seleccionar el menú deseado y la cantidad de invitados.
   - Calcula el presupuesto total en tiempo real.
   - Botón directo para enviar la cotización desglosada por WhatsApp a las 2 líneas de atención.

3. **Generador de Código QR Integrado**:
   - Genera el código QR en tiempo real para colocar en mesas, mostradores y redes sociales.
   - Botón para **Descargar la imagen del QR en formato PNG** de alta resolución listo para imprimir en acrílicos o stickers.
   - Permite personalizar la URL con tu propio dominio o enlace de GitHub Pages.

4. **Integración con Redes y WhatsApp**:
   - Teléfonos: **444 142 5054** y **444 234 3129**
   - Facebook: `Todo_asado Lostresosos`
   - Instagram: `@todoasado_los3osos`

---

## 🚀 Cómo Subir este Menú a GitHub Pages (Paso a Paso)

### Paso 1: Crear un nuevo repositorio en GitHub
1. Inicia sesión en [GitHub](https://github.com).
2. Haz clic en el botón **"+"** (arriba a la derecha) y selecciona **"New repository"**.
3. Nómbralo por ejemplo: `menu-los-3-osos` (o el nombre que prefieras).
4. Déjalo en modo **Public** (Público) y haz clic en **"Create repository"**.

### Paso 2: Subir los archivos desde tu computadora
Abre una terminal (PowerShell o Git Bash) en la carpeta de este proyecto:
```bash
cd "C:\Users\luisg\Desktop\Los 3 osos\imagenes referencia\Pagina Los 3 osos MENUS"
git init
git add .
git commit -m "Primer lanzamiento Menú Digital Todo Asado Los 3 Osos"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/menu-los-3-osos.git
git push -u origin main
```
*(Reemplaza `TU-USUARIO` por tu nombre de usuario en GitHub)*.

> **Alternativa sin comandos**: Puedes arrastrar todos los archivos y carpetas directamente desde el navegador en la opción **"uploading an existing file"** de tu repositorio en GitHub.

### Paso 3: Activar GitHub Pages
1. En tu repositorio de GitHub, entra a **Settings** (Configuración).
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En la sección **Build and deployment** > **Source**:
   - Selecciona **Deploy from a branch**.
   - En **Branch**, elige `main` y la carpeta `/ (root)`.
   - Haz clic en **Save** (Guardar).
4. Espera 1 o 2 minutos y actualiza la página. Te aparecerá un recuadro verde con tu enlace público:
   `https://TU-USUARIO.github.io/menu-los-3-osos/`

### Paso 4: Generar y Descargar tu Código QR
1. Abre tu nuevo enlace en el navegador.
2. Haz clic en el botón **"Ver Código QR / Compartir"** o en la pestaña **"Código QR & Mesas"**.
3. Verás el código QR ya generado con tu enlace. Haz clic en **"Descargar Imagen QR (PNG)"**.
4. ¡Listo! Puedes imprimir ese archivo PNG para colocarlo en portamenús acrílicos en cada mesa o publicarlo en tus redes sociales.
