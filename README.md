# Orbit Terminal · web

Web estática del **Orbit Terminal**, el ciberdeck de Miguel Rodríguez Saiz: una consola en cuña impresa en PLA+ que une un PC HP con Windows y una Raspberry Pi 4 con Orbit OS, con una pantalla MSI PRO MP161 E2U de 15,6".

- Proyecto (hardware, CAD y software): https://github.com/Sopa-IA/Control-deck
- La web es HTML + CSS + JS sin dependencias externas. Incluye la sección «La evolución del Orbit» (línea de tiempo con fotos reales del prototipo en construcción; para añadir etapas, copia un bloque `<li class="etapa">` en `index.html`) y una animación de montaje por scroll (variantes realista y toon) renderizada con Blender a partir del CAD del proyecto.
- Las medidas y el diseño son provisionales: el CAD está en desarrollo.
- La web lleva la etiqueta **PROTOTIPO EN DESARROLLO**. Las insignias de estado son siempre tres: «Terminado», «En pruebas» y «Pendiente» (con las variantes «Pendiente de confirmar» y «Pendiente de medir»). El bloque «Estado del proyecto» sale solo del README, `docs/ESTADO-Y-TRASPASO.md` y `docs/instalacion-pi.md` de Control-deck (PR #9) y de las fotos reales. En la «Ficha del proyecto», los datos sin medir no llevan cifra; para rellenarlos, cambia la insignia de su `<dd>` en `index.html`. El hueco «Demo de Orbit OS» acepta un `<video>` (hay una plantilla en un comentario).

## Créditos

**Geometría de la animación**
- Base, carcasa, bisel, pletinas, soporte del disco, bandeja de placas, placa de conectores, botón, tapa de la Pi, guías de luz, anillos y pomos: CAD OpenSCAD de [Sopa-IA/Control-deck](https://github.com/Sopa-IA/Control-deck) (rama `cursor/bandeja-v2-modular-6d15`, commit `ff97bb5`). Apache-2.0. Diseño provisional.
- Monitor MSI PRO MP161 E2U: envolvente del CAD del repo con las cotas publicadas por MSI (sin logo, botones ni puertos).
- Raspberry Pi 4 Model B: [Innerscene 3D Parts Library](https://www.innerscene.com/tools/library/3d-parts/raspberry-pi-4-model-b-layout-821bd96d). CC0 1.0.
- Arduino Nano ×2: disposición de la placa oficial Arduino Nano V3.3 (`NanoV3.3.brd`, [archivos CAD A000005](https://docs.arduino.cc/hardware/nano/)), © Arduino, CC BY-SA 4.0. Componentes con los modelos 3D de [KiCad packages3D](https://gitlab.com/kicad/libraries/kicad-packages3D), CC-BY-SA 4.0 con la excepción de KiCad.
- Disco duro de 3,5": envolvente, taladros y posición del conector según las especificaciones SFF-8301 y SFF-8323 (SNIA). Tapa (relieve, etiqueta, tornillos) medida de una foto del prototipo, que no se publica; etiqueta sin texto legible.
- Placa base del HP: PCB mini-ITX de 170 × 170 mm con sus taladros estándar (posiciones del CAD). RAM (2 × Kingston HyperX blu, 133,35 × 30 mm), disipador con ventilador de 50 mm, puertos traseros y conectores blancos medidos de una foto cenital del prototipo (que no se publica); algunas alturas son estimadas. VGA y HDMI con los modelos de KiCad packages3D. Se omiten los componentes pequeños, el logo y los cables.
- Imagen en pantalla: captura de Orbit OS del repo Control-deck.

Se han dejado fuera las piezas comerciales sin modelo 3D fiel: ESP8266, step-down, OLED, HAT VHF, pulsadores, tira LED, patas y cables.

**Imágenes**
- `assets/img/01_msi_frontal_3-4.webp`: render del diseño CAD de Control-deck (Apache-2.0).
- `assets/img/os_*.webp`: recortes de capturas de Orbit OS de Control-deck (Apache-2.0).
- `assets/fotos/`: fotos reales del prototipo en construcción, © 2026 Miguel Rodríguez Saiz. Todos los derechos reservados; no están cubiertas por la licencia Apache-2.0 ni por CC BY-SA.
- `assets/montaje/`: renders propios con Blender a partir de la geometría anterior. Como muestran la placa Arduino Nano (CC BY-SA 4.0), estos renders se ofrecen también bajo CC BY-SA 4.0.

**Herramientas**: OpenSCAD, Blender (Cycles, Freestyle), gmsh, Pillow.

## Licencia

Apache-2.0 © 2026 Miguel Rodríguez Saiz. Ver [LICENSE](LICENSE) y [NOTICE](NOTICE).
