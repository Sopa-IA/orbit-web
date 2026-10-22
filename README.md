# Orbit Terminal · web

Web estática del **Orbit Terminal**, el ciberdeck de Miguel Rodríguez Saiz: una consola en cuña impresa en PLA+ que une un PC HP con Windows y una Raspberry Pi 4 con Orbit OS, con una pantalla MSI PRO MP161 E2U de 15,6".

- Proyecto (hardware, CAD y software): https://github.com/Sopa-IA/Control-deck
- La web es HTML + CSS + JS sin dependencias externas. Incluye una animación de montaje por scroll (variantes realista y toon) renderizada con Blender a partir del CAD del proyecto.
- Las medidas y el diseño son provisionales: el CAD está en desarrollo.

## Créditos

**Geometría de la animación**
- Base, carcasa, bisel, pletinas, soporte del disco, bandeja de placas, placa de conectores, botón, tapa de la Pi, guías de luz, anillos y pomos: CAD OpenSCAD de [Sopa-IA/Control-deck](https://github.com/Sopa-IA/Control-deck) (rama `cursor/bandeja-v2-modular-6d15`, commit `ff97bb5`). Apache-2.0. Diseño provisional.
- Monitor MSI PRO MP161 E2U: envolvente del CAD del repo con las cotas publicadas por MSI (sin logo, botones ni puertos).
- Raspberry Pi 4 Model B: [Innerscene 3D Parts Library](https://www.innerscene.com/tools/library/3d-parts/raspberry-pi-4-model-b-layout-821bd96d). CC0 1.0.
- Imagen en pantalla: captura de Orbit OS del repo Control-deck.

Se han dejado fuera las piezas comerciales sin modelo 3D fiel: placa del HP, disco, Arduino Nano, ESP8266, step-down, OLED, HAT VHF, pulsadores, tira LED, ventilador, patas y cables.

**Imágenes**
- `assets/img/01_msi_frontal_3-4.webp`: render del diseño CAD de Control-deck (Apache-2.0).
- `assets/img/os_*.webp`: recortes de capturas de Orbit OS de Control-deck (Apache-2.0).
- `assets/montaje/`: renders propios con Blender a partir de la geometría anterior.

**Herramientas**: OpenSCAD, Blender (Cycles, Freestyle), gmsh, Pillow.

## Licencia

Apache-2.0 © 2026 Miguel Rodríguez Saiz. Ver [LICENSE](LICENSE) y [NOTICE](NOTICE).
