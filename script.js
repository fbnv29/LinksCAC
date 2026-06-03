// Configuración de elementos
// type: 'link' (botón clickeable) o 'info' (tarjeta informativa)
const items = [
    {
        type: 'link',
        title: "Certificado de Estudios / Títulos",
        subtitle: "Mineduc",
        url: "https://certificados.mineduc.cl/mvc/home/index",
        iconClass: "fa-solid fa-graduation-cap"
    },
    {
        type: 'link',
        title: "Certificado de Antecedentes",
        subtitle: "Registro Civil",
        url: "https://www.registrocivil.cl/principal/servicios-en-linea/",
        iconClass: "fa-solid fa-id-card"
    },
    {
        type: 'link',
        title: "Trabajar con Menores",
        subtitle: "Certificado de Inhabilidades",
        url: "https://inhabilidades.srcei.cl/ConsInhab/consultaInhabilidad.do",
        iconClass: "fa-solid fa-user-slash"
    },
    {
        type: 'link',
        title: "Maltrato Relevante",
        subtitle: "Certificado de Inhabilidad",
        url: "https://inhabilidades.srcei.cl/InhabilidadesRelevante/#/inicio",
        iconClass: "fa-solid fa-hand"
    },
    {
        type: 'link',
        title: "Situación Militar",
        subtitle: "Certificado DGMN (varones)",
        url: "https://dgmn.cerofilas.gob.cl/login/claveunica?redirect=https://dgmn.cerofilas.gob.cl/tramites/iniciar/2959",
        iconClass: "fa-solid fa-person-military-rifle"
    },
    {
        type: 'info',
        title: "Otros",
        subtitle: "",
        iconClass: "fa-solid fa-folder",
        lines: [
            { text: "Curriculum Vitae — Enviar a centroartistico@concepcion.cl", icon: "fa-solid fa-file-lines" },
            { text: "Fotocopia de Carnet — Enviar a centroartistico@concepcion.cl", icon: "fa-solid fa-id-badge" },
            { text: "Declaración Jurada — Firma presencial", icon: "fa-solid fa-file-signature" }
        ]
    }
];

const container = document.getElementById('links-container');

function createElements() {
    container.innerHTML = '';

    items.forEach(item => {
        let element;

        if (item.type === 'link') {
            // Crear enlace (Link activo)
            element = document.createElement('a');
            element.className = 'link-button';
            element.href = item.url;
            element.target = "_blank";
            element.rel = "noopener noreferrer";
            element.setAttribute('aria-label', `Ir a ${item.title}`);
        } else {
            element = document.createElement('div');
            element.className = 'info-card';
            element.setAttribute('aria-label', `Información: ${item.title}`);
        }

        if (item.lines) {
            element.style.width = "280px";
            element.style.padding = "15px";
            element.style.gap = "8px";
            const header = document.createElement('div');
            header.style.display = "flex";
            header.style.alignItems = "center";
            header.style.gap = "8px";
            header.style.marginBottom = "6px";

            const iconI = document.createElement('i');
            iconI.className = `link-icon ${item.iconClass}`;
            iconI.style.fontSize = "1.3rem";
            iconI.style.margin = "0";

            const titleSpan = document.createElement('span');
            titleSpan.className = 'link-title';
            titleSpan.textContent = item.title;
            titleSpan.style.fontSize = "1rem";

            header.appendChild(iconI);
            header.appendChild(titleSpan);
            element.appendChild(header);

            const list = document.createElement('ul');
            list.style.listStyle = "none";
            list.style.padding = "0";
            list.style.margin = "0";
            list.style.fontSize = "0.85rem";
            list.style.textAlign = "left";
            list.style.width = "100%";

            item.lines.forEach(line => {
                const li = document.createElement('li');
                li.style.display = "flex";
                li.style.alignItems = "center";
                li.style.gap = "6px";
                li.style.padding = "3px 0";
                const liIcon = document.createElement('i');
                liIcon.className = line.icon;
                liIcon.style.fontSize = "0.9rem";
                liIcon.style.width = "16px";
                liIcon.style.textAlign = "center";
                li.appendChild(liIcon);
                li.appendChild(document.createTextNode(line.text));
                list.appendChild(li);
            });

            element.appendChild(list);
        } else {
            const iconI = document.createElement('i');
            iconI.className = `link-icon ${item.iconClass}`;

            const titleSpan = document.createElement('span');
            titleSpan.className = 'link-title';
            titleSpan.textContent = item.title;

            element.appendChild(iconI);
            element.appendChild(titleSpan);

            if (item.subtitle) {
                const subtitleSpan = document.createElement('span');
                subtitleSpan.className = 'subtitle';
                if (item.type === 'link') {
                    subtitleSpan.style.fontSize = "0.9rem";
                    subtitleSpan.style.marginTop = "5px";
                    subtitleSpan.style.fontWeight = "normal";
                }
                subtitleSpan.textContent = item.subtitle;
                element.appendChild(subtitleSpan);
            }
        }

        container.appendChild(element);
    });
}

document.addEventListener('DOMContentLoaded', createElements);
