import { coverageLine, services } from "@/lib/site.config";

export type Faq = { question: string; answer: string };

export type Landing = {
  id: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  strip: string;
  waText: string;
  serviceName: string;
  failuresTitle: string;
  failuresIntro: string;
  failures: string[];
  sections: { heading: string; paragraphs: string[] }[];
  process: { title: string; text: string }[];
  brandsTitle: string;
  brands: string[];
  faqs: Faq[];
  offer?: {
    title: string;
    points: string[];
    note: string;
  };
};

const zones = coverageLine();

export const landings: Landing[] = [
  {
    id: "cctv",
    path: "/reparacion-camaras-seguridad-concepcion",
    title: "Reparación de cámaras CCTV en Concepción | PROTEF",
    description:
      "¿Cámaras sin imagen o DVR sin grabar en Concepción? PROTEF repara CCTV en terreno, de lunes a viernes. Llame al +56 9 8210 9253. Agende hoy.",
    h1: "Reparación de cámaras de seguridad y CCTV en Concepción",
    eyebrow: "Urgencia en días hábiles",
    lead: "Si las cámaras dejaron de grabar, la pantalla quedó en negro o el sistema no se ve en el celular, el edificio queda sin registro justo cuando más lo necesita. PROTEF diagnostica y repara cámaras IP, analógicas, DVR, NVR y cableado en terreno.",
    strip: "¿Cámaras sin imagen? Llame y agendamos la visita en un día hábil.",
    waText: "Hola, necesito reparación urgente de cámaras CCTV en Concepción.",
    serviceName: "Reparación urgente de cámaras de seguridad y CCTV en Concepción",
    failuresTitle: "Fallas de CCTV que resolvemos",
    failuresIntro:
      "Atendemos edificios, condominios, bodegas y empresas cuando el circuito cerrado deja de cumplir su función.",
    failures: [
      "Cámaras sin imagen, pantalla negra o señal intermitente",
      "DVR o NVR que no graba, o disco lleno",
      "Imagen que no llega al celular o aplicación desconectada",
      "Cámaras fuera de línea por cable, switch o fuente dañada",
      "Reemplazo de cámaras y ampliación del circuito",
    ],
    sections: [
      {
        heading: "Qué revisamos en la visita",
        paragraphs: [
          `La falla rara vez es “la cámara” a simple vista. En ${zones} vemos equipos que perdieron la grabación por un disco agotado, una fuente que calienta de más o un enlace de red que se cae por tramos. El técnico parte por el síntoma que reporta conserjería: sin imagen, sin historial o sin acceso remoto.`,
          "En terreno se comprueba alimentación, conectores, switch, grabador y el estado del disco. Si el equipo aún sirve, se recupera la configuración y se prueba una grabación real. Si hay que cambiar una cámara o un grabador, se cotiza el repuesto antes de instalarlo. Se trabaja el equipo que el recinto ya tiene, incluidas las lectoras de patentes cuando existen.",
        ],
      },
      {
        heading: "Para que la vigilancia no dependa de la suerte",
        paragraphs: [
          "Un CCTV bien instalado entrega registro continuo del perímetro y de los accesos. Eso no reemplaza la mantención: lentes sucios, discos al límite y contraseñas olvidadas dejan un sistema que está, pero no sirve el día del incidente. Si la falla es de hoy, parta por la reparación; la frecuencia de visitas está en la página de mantención.",
        ],
      },
    ],
    process: [
      { title: "Nos llama o escribe", text: "Indica si no hay imagen, no graba o no se ve en el celular, y la comuna del recinto." },
      { title: "Agendamos la visita", text: "Un técnico va en un día hábil con lo necesario para medir y abrir el gabinete." },
      { title: "Diagnóstico en terreno", text: "Se aísla si el problema es cámara, cable, red, fuente o grabador." },
      { title: "Reparación o cotización", text: "Se corrige en la visita o se deja por escrito el repuesto que falta." },
      { title: "Prueba con la conserjería", text: "Se comprueba imagen en vivo, grabación y, si aplica, la app del celular." },
    ],
    brandsTitle: "Equipos con los que trabajamos",
    brands: [
      "Cámaras y grabadores ya instalados",
      "DVR y NVR de circuitos ya instalados",
      "Cámaras lectoras de patentes",
      "Enlaces de red, switches y fuentes del rack de seguridad",
    ],
    faqs: [
      {
        question: "¿Atienden si el DVR no graba pero las cámaras se ven en vivo?",
        answer:
          "Sí. Es una de las fallas más frecuentes: hay imagen en el momento y no hay historial. Revisamos disco, programación de grabación y el estado del grabador antes de proponer un cambio de equipo.",
      },
      {
        question: "¿Pueden recuperar las grabaciones de días anteriores?",
        answer:
          "Solo si el disco aún las conserva. Cuando el disco está dañado o se sobrescribió, no se inventa archivo. En la visita se informa qué periodo sigue disponible y qué hay que cambiar para que no vuelva a pasar.",
      },
      {
        question: "¿La reparación incluye ver las cámaras en el celular?",
        answer:
          "Si el sistema ya tenía acceso remoto, se restablece la conexión y se prueba con la cuenta de la administración. Si nunca estuvo configurado, se cotiza aparte para no mezclarlo con la urgencia de la imagen local.",
      },
      {
        question: "¿Trabajan una sola marca de cámaras?",
        answer:
          "No. Se diagnostica el circuito que ya está en el edificio, sea de la marca que sea, siempre que el equipo permita servicio técnico. El repuesto, si hace falta, se cotiza sin amarrar el recinto a un fabricante.",
      },
      {
        question: "¿El servicio es 24 horas?",
        answer:
          "No. La atención de urgencia es de lunes a viernes. El sistema de cámaras puede registrar de forma continua; la visita del técnico se agenda en día hábil.",
      },
      {
        question: "¿En qué comunas llegan?",
        answer: `La visita de reparación de CCTV cubre ${zones}. No abrimos una página distinta por comuna: el mismo equipo atiende los tres sectores.`,
      },
    ],
  },
  {
    id: "cercos",
    path: "/reparacion-cercos-electricos-concepcion",
    title: "Reparación de cerco eléctrico en Concepción | PROTEF",
    description:
      "¿Cerco eléctrico caído o sirena permanente en Concepción? PROTEF repara energizador y perímetro conforme a SEC. Llame al +56 9 8210 9253. Hoy.",
    h1: "Reparación de cerco eléctrico en Concepción",
    eyebrow: "Cercos conforme a normativa SEC",
    lead: "Si el cerco dejó de energizar, la sirena no para o el perímetro ya no disuade, el cierre del condominio queda abierto en la práctica. Reparamos energizadores, baterías, sirenas y líneas dañadas en terreno, con el criterio de la normativa SEC.",
    strip: "¿Cerco eléctrico caído? Llame en un día hábil y vemos el perímetro.",
    waText: "Hola, necesito reparación urgente de cerco eléctrico en Concepción.",
    serviceName: "Reparación urgente de cercos eléctricos SEC en Concepción",
    failuresTitle: "Emergencias de cerco eléctrico que resolvemos",
    failuresIntro:
      "Atendemos condominios, empresas y casas cuando la seguridad perimetral falla de un momento a otro.",
    failures: [
      "Cerco sin tensión o con voltaje bajo en el perímetro",
      "Alarma o sirena activada de forma permanente",
      "Energizador quemado o batería agotada",
      "Corte por ramas, vandalismo o cable dañado",
      "Mantención y verificación conforme a normativa SEC",
    ],
    sections: [
      {
        heading: "Por qué un cerco “prendido” puede no estar protegiendo",
        paragraphs: [
          "Un letrero de alto voltaje no basta. Si hay vegetación sobre los hilos, una aislación rota o una puesta a tierra deficiente, el energizador trabaja forzado y la alarma se vuelve cotidiana. En ese punto la comunidad la ignora. La visita mide el perímetro, no solo mira el piloto del equipo.",
          `En ${zones} el clima y el crecimiento de plantas tumban la aislación con más frecuencia de la que muestra el gabinete. También vemos baterías que ya no sostienen el sistema ante un corte de luz, y sirenas que quedaron enclavadas después de un golpe o un puente mal hecho.`,
          "PROTEF instala, repara y mantiene cercos eléctricos conforme a normativa SEC. Eso incluye el energizador, la línea, la señalética de peligro y la prueba de que el perímetro vuelve a disuadir. No publicamos un número de licencia en este sitio: el alcance que sí está documentado es el trabajo de cerco bajo esa normativa.",
        ],
      },
      {
        heading: "Después de la urgencia, la mantención",
        paragraphs: [
          "La reparación devuelve tensión. La mantención mide voltaje, batería, tierra y vegetación para que la sirena no se vuelva cotidiana. Si el cerco comparte poste con cámaras o citofonía, el informe lo dice para no cortar un sistema al arreglar el otro.",
        ],
      },
    ],
    process: [
      { title: "Cuéntenos el síntoma", text: "Sin shock, sirena continua, piloto apagado o un corte visible en la línea." },
      { title: "Visita en día hábil", text: "El técnico recorre el perímetro y el gabinete del energizador." },
      { title: "Medición", text: "Se comprueba tensión, tierra, batería y puntos de fuga por plantas o aisladores." },
      { title: "Reparación", text: "Se cambia lo quemado o se rehace el tramo dañado, con cotización si el repuesto no está en el móvil." },
      { title: "Prueba y aviso", text: "Se energiza, se prueba la sirena y se deja claro qué debe vigilar la conserjería." },
    ],
    brandsTitle: "Qué comprende el servicio de cerco",
    brands: [
      "Energizador, batería y sirena",
      "Línea perimetral, aisladores y tensores",
      "Letreros de peligro de cerco eléctrico",
      "Verificación conforme a normativa SEC",
    ],
    faqs: [
      {
        question: "¿El cerco queda certificado ante la SEC en la misma visita?",
        answer:
          "La reparación deja el sistema operando conforme a la normativa que ya aplica al cerco. Si la administración necesita un trámite o un documento específico de certificación, se acuerda aparte: no lo damos por hecho en la urgencia.",
      },
      {
        question: "¿Pueden callar una sirena que no para?",
        answer:
          "Sí, y no se trata solo de silenciarla. Se busca el corto, la vegetación o la falla del energizador para que la alarma vuelva a sonar cuando corresponda y no todo el día.",
      },
      {
        question: "¿Atienden si el cerco está mezclado con la reja del portón?",
        answer:
          "Sí. Es habitual que el hilo llegue hasta el acceso vehicular. Se revisa que la reparación del cerco no deje sin aislación el tramo del portón ni estorbe las fotoceldas.",
      },
      {
        question: "¿Hay atención de noche o el fin de semana?",
        answer:
          "La urgencia publicada es de lunes a viernes. Si el perímetro quedó abierto un viernes en la tarde, conviene llamar igual para dejar la visita en el primer día hábil.",
      },
      {
        question: "¿La vegetación la corta PROTEF?",
        answer:
          "En la mantención se despeja lo que está apoyado en la línea y baja la aislación. Un desmalezado mayor del jardín del condominio no forma parte de la reparación eléctrica y se dice en la visita.",
      },
      {
        question: "¿Llegan a Talcahuano y San Pedro de la Paz?",
        answer: `Sí. La reparación de cerco eléctrico cubre ${zones}, con la misma forma de agendar.`,
      },
    ],
  },
  {
    id: "portones",
    path: "/reparacion-portones-automaticos-concepcion",
    title: "Reparación de portón automático en Concepción | PROTEF",
    description:
      "¿Portón trabado o motor que no responde en Concepción? PROTEF repara correderas, batientes y fotoceldas. Llame al +56 9 8210 9253. Hoy mismo.",
    h1: "Reparación de portón automático en Concepción",
    eyebrow: "Acceso vehicular en días hábiles",
    lead: "Si el portón no abre, quedó a medias o el motor dejó de responder, el condominio se queda sin entrada o sin cierre. Reparamos portones correderos, batientes y barreras: motor, cremallera, fotoceldas y central. Los controles remotos se venden nuevos y se programan en terreno.",
    strip: "¿Portón trabado? Llame y coordinamos la visita de lunes a viernes.",
    waText: "Hola, necesito reparación urgente de portón automático en Concepción.",
    serviceName: "Reparación urgente de portones automáticos en Concepción",
    failuresTitle: "Emergencias de portón que resolvemos",
    failuresIntro:
      "Atendemos condominios, empresas y casas cuando el acceso vehicular o peatonal queda bloqueado.",
    failures: [
      "Portón trabado, abierto o cerrado",
      "Motor quemado, sin fuerza o con ruido anormal",
      "No responde al control remoto ni al citófono",
      "Fotoceldas o sensores de seguridad que fallan",
      "Calibración, mantención y reemplazo de piezas",
    ],
    sections: [
      {
        heading: "Un portón detenido es un problema de acceso y de seguridad",
        paragraphs: [
          "Quedarse con la hoja a medio abrir impide entrar a residentes y, a la vez, impide cerrar el perímetro. En edificios de Concepción el síntoma suele mezclar mecánica y electrónica: cremallera sucia, final de carrera corrido, fotocelda tapada o un control que ya no está pareado con la central.",
          `PROTEF repara ese conjunto en ${zones}. No atribuimos la falla a una marca de motor que el sitio no documenta: se trabaja sobre el equipo que ya está instalado, se mide y se cambia la pieza que corresponde. Si el portón se abre desde el citófono, se prueba ese enlace para no dejar el video portero “llamando” a un motor que no obedece.`,
          "La comodidad del automático solo existe si la hoja se detiene ante un auto o una persona. Por eso la visita no termina cuando el portón se mueve: se prueban fotoceldas y el recorrido. Una barrera vehicular de estacionamiento se atiende con el mismo criterio.",
        ],
      },
      {
        heading: "Mantención para que el portón no se detenga",
        paragraphs: [
          "Si hoy el acceso está bloqueado, la prioridad es la reparación. La mantención —calibración, fotoceldas y, si el equipo es hidráulico, el nivel de líquido— evita la repetición. Los valores en UF son referenciales y no son la tarifa de la urgencia.",
        ],
      },
    ],
    process: [
      { title: "Describa cómo quedó", text: "Abierto, cerrado, a medias, con ruido o sin respuesta del control." },
      { title: "Visita en día hábil", text: "Se revisa motor, cremallera o brazo, centrales y alimentación." },
      { title: "Seguridad del recorrido", text: "Se prueban fotoceldas y finales de carrera antes de entregar el acceso." },
      { title: "Controles y citófono", text: "Se comprueba el remoto y, si existe, la apertura desde el videoportero." },
      { title: "Queda andando o cotizado", text: "Lo que se repara en el momento se prueba con la conserjería. Lo que falta se deja por escrito." },
    ],
    brandsTitle: "Partes que intervienen",
    brands: [
      "Motores de portón corredero y batiente ya instalados",
      "Cremallera, brazos y centrales de mando",
      "Fotoceldas y sensores de seguridad",
      "Controles remotos y enlace con citofonía",
    ],
    offer: {
      title: "Un control nuevo, pareado en la visita",
      points: [
        "Si se perdió el control o hay que sumar uno más, se lleva un equipo nuevo a la casa, el condominio o la comunidad.",
        "En terreno se deja programado en la central o el motor del portón que ya está instalado, sea corredera, batiente o barrera.",
      ],
      note: "Solo se venden controles nuevos. El control usado no se repara.",
    },
    faqs: [
      {
        question: "¿Pueden abrir un portón que quedó cerrado con gente afuera?",
        answer:
          "La visita busca devolver el movimiento. Si hay un desbloqueo manual previsto por el fabricante, el técnico lo usa con la conserjería. No forzamos la hoja a golpes: se diagnostica motor y mando.",
      },
      {
        question: "¿Reparan el control remoto suelto?",
        answer:
          "No. La venta es solo de controles nuevos, con entrega y programación en terreno en la central o el motor. No reparamos controles usados. Si ningún control responde, se revisa primero el receptor y la alimentación del portón.",
      },
      {
        question: "¿El portón se abre desde el citófono y eso también lo ven?",
        answer:
          "Sí. Es una falla cruzada habitual en condominios. Se prueba el contacto entre el videoportero y la central del portón para saber de qué lado está el corte.",
      },
      {
        question: "¿Incluye barreras de estacionamiento?",
        answer:
          "Sí. Barreras vehiculares entran en el mismo servicio de automatización de accesos, con prueba de la bajada y del sensor.",
      },
      {
        question: "¿Hay técnicos el sábado?",
        answer:
          "La urgencia informada en el sitio es de lunes a viernes. La mantención programada también se agenda en ese tramo.",
      },
      {
        question: "¿Cubren San Pedro de la Paz y Talcahuano?",
        answer: `Sí. Portones automáticos en ${zones}, con agenda de día hábil.`,
      },
    ],
  },
  {
    id: "citofonos",
    path: "/reparacion-citofonos-concepcion",
    title: "Reparación de citófonos en Concepción | PROTEF",
    description:
      "¿Citófono o videoportero sin audio en su edificio de Concepción? PROTEF repara porteros y videoporteros. Llame al +56 9 8210 9253. Este día hábil.",
    h1: "Reparación de citófonos y videoporteros en Concepción",
    eyebrow: "Citofonía para edificios y condominios",
    lead: "Si el departamento no escucha la calle, la pantalla del acceso no muestra a la visita o la chapa no abre, el edificio pierde el control de quién entra. Reparamos porteros eléctricos, videoporteros y la comunicación con las unidades.",
    strip: "¿El citófono no llama al departamento? Escríbanos o llame en día hábil.",
    waText: "Hola, necesito reparación de citófonos o videoportero en Concepción.",
    serviceName: "Reparación de citófonos y videoporteros en Concepción",
    failuresTitle: "Fallas de citofonía que resolvemos",
    failuresIntro:
      "El frente del edificio y el monitor del departamento forman un solo sistema. La falla puede estar en cualquiera de los dos extremos.",
    failures: [
      "Sin audio, audio cortado o timbre que no suena en el departamento",
      "Videoportero sin imagen o con pantalla apagada",
      "La visita no puede abrir la puerta desde el departamento",
      "Placa de calle dañada, teclado o botonera en mal estado",
      "Fuentes, cableado y equipos que dejan de comunicar",
    ],
    sections: [
      {
        heading: "Citofonía digital para el edificio, no solo para un departamento",
        paragraphs: [
          "Un sistema moderno entrega audio claro, video de la visita, apertura remota y un registro simple de quién llamó. En la práctica, muchos condominios siguen con un equipo que fue bueno y hoy tiene fuentes cansadas, un par de monitores mudos y una placa de calle al sol. PROTEF repara ese parque, sin depender de una marca.",
          `La visita en ${zones} distingue si el problema es de un solo departamento o de todo el acceso. No se cambia el edificio completo por un monitor. Se prueba llamada, imagen y chapa, y se deja a conserjería una explicación corta de cómo abrir.`,
        ],
      },
      {
        heading: "Comunicación que ordena las visitas",
        paragraphs: [
          "El citófono es la primera barrera amable del edificio. Si no llama, la gente empuja la puerta o espera a que alguien salga. Repararlo devuelve ese filtro. En edificios con varios accesos se revisa cada placa, porque es común que la calle funcione y el estacionamiento no.",
          "Si además el videoportero debe disparar el portón, lo coordinamos con el servicio de portones automáticos. Son oficios distintos que en un condominio se tocan. Puede pedir ambos en el mismo contacto y se agenda según el diagnóstico.",
        ],
      },
    ],
    process: [
      { title: "Dónde falla", text: "Placa de calle, un departamento, la chapa o todos los monitores." },
      { title: "Visita al acceso", text: "Se llama a una unidad de prueba y se observa audio, video y apertura." },
      { title: "Fuente y cable", text: "Se mide alimentación y se revisan empalmes antes de condenar el monitor." },
      { title: "Reparación del equipo instalado", text: "Se interviene el portero o videoportero que ya está, sin cambiar el sistema completo por la marca." },
      { title: "Prueba con conserjería", text: "Queda demostrado cómo recibir una visita y cómo abrir." },
    ],
    brandsTitle: "Equipos de comunicación",
    brands: [
      "Videoporteros y porteros ya instalados",
      "Placas de calle y monitores de departamento",
      "Chapas y aperturas asociadas al llamado",
      "Sistemas digitales y análogos ya instalados en el edificio",
    ],
    faqs: [
      {
        question: "¿Reparan un solo departamento o hay que cambiar todo el sistema?",
        answer:
          "Se parte por el síntoma. Si un monitor no timbra y el resto sí, se revisa esa unidad y su línea. El cambio completo se propone solo cuando la placa o la fuente ya no dan para el edificio.",
      },
      {
        question: "¿Trabajan videoporteros antiguos?",
        answer:
          "Sí, es parte del servicio habitual, sea cual sea la marca instalada. Si el repuesto de ese modelo ya no existe, se informa con claridad y se cotiza una alternativa compatible, sin dar por hecho un recambio total.",
      },
      {
        question: "¿La imagen del videoportero es lo mismo que el CCTV?",
        answer:
          "No. El videoportero muestra a quien llama. El CCTV graba los accesos. Se pueden integrar cuando el equipo lo permite; si no, son dos servicios y así se cotizan.",
      },
      {
        question: "¿Pueden dejar códigos de acceso para visitas?",
        answer:
          "Cuando la placa ya tiene esa función, se verifica y se explica a la administración. No se promete reconocimiento facial en un portero que no lo trae de fábrica.",
      },
      {
        question: "¿El horario de urgencia incluye domingo?",
        answer:
          "No. La atención de terreno es de lunes a viernes, igual que el resto de los rubros.",
      },
      {
        question: "¿Llegan a condominios de San Pedro de la Paz?",
        answer: `Sí. Citófonos y videoporteros en ${zones}.`,
      },
    ],
  },
  {
    id: "biometrico",
    path: "/control-acceso-biometrico-concepcion",
    title: "Acceso biométrico en Concepción | PROTEF",
    description:
      "¿Lector facial o de huella fuera de servicio en Concepción? PROTEF repara control de acceso en edificios y empresas. Llame al +56 9 8210 9253.",
    h1: "Control de acceso biométrico y facial en Concepción",
    eyebrow: "Ingresos ordenados para edificios y empresas",
    lead: "Si el lector facial no reconoce, la huella no abre o nadie puede entrar sin la tarjeta del conserje, el control de acceso dejó de ser control. Instalamos y reparamos biometría, tarjetas y reconocimiento facial.",
    strip: "¿El lector del hall no abre? Llame de lunes a viernes.",
    waText: "Hola, necesito reparación de control de acceso biométrico en Concepción.",
    serviceName: "Control de acceso biométrico y facial en Concepción",
    failuresTitle: "Fallas de acceso que resolvemos",
    failuresIntro:
      "El lector, la cerradura y la lista de personas autorizadas tienen que coincidir. Cuando uno de los tres falla, el hall se abre a cualquiera o no se abre para nadie.",
    failures: [
      "Lector facial o de huella que rechaza a residentes habituales",
      "Tarjetas que dejaron de abrir",
      "Puerta que queda tomada o, al revés, sin chapa",
      "Usuarios y permisos que nadie sabe respaldar",
      "Equipo sin comunicación con el resto del acceso",
    ],
    sections: [
      {
        heading: "Biometría útil para la administración, no solo para la foto del catálogo",
        paragraphs: [
          "Un acceso bien resuelto identifica a la persona, abre la puerta que corresponde y deja registro. PROTEF instala y mantiene lectores faciales, de huella y de tarjetas en edificios, condominios, oficinas e industria. El criterio es el mismo en cualquier marca: identificación precisa, control de ingresos y reportes.",
          `En la reparación, en ${zones}, no partimos por vender otro lector. Se prueba el que está en el muro: lente, red, alimentación y la base de usuarios. Si no hay respaldo de la nómina, se dice antes de prometer que están todos cargados.`,
        ],
      },
      {
        heading: "Mantener usuarios y permisos es parte del sistema",
        paragraphs: [
          "Un lector calibrado con una nómina vieja abre de más o de menos. La mantención de accesos incluye prueba de tarjetas, respaldo de permisos y actualización de firmware cuando el fabricante aún la publica para ese modelo. Esos ítems están en la página de mantención.",
          "Si la urgencia es que nadie entra a la oficina un lunes, se agenda la visita de día hábil y se deja una forma de acceso provisoria solo si el herraje lo permite con seguridad. No se anula la chapa “para salir del paso” sin que la administración lo asuma.",
        ],
      },
    ],
    process: [
      { title: "Qué puerta y qué lector", text: "Facial, huella o tarjeta, y si la falla es de todos o de algunas personas." },
      { title: "Prueba en el acceso", text: "Se lee un usuario conocido y se observa la chapa." },
      { title: "Red y respaldo", text: "Se revisa comunicación del equipo y si existe copia de la nómina." },
      { title: "Ajuste o repuesto", text: "Limpieza, calibración o cotización del módulo que no responde." },
      { title: "Entrega a quien administra", text: "Queda claro cómo dar de alta y de baja, sin depender de una sola persona." },
    ],
    brandsTitle: "Tecnología de acceso",
    brands: [
      "Lectores faciales ya instalados",
      "Lectores de huella y teclados ya instalados",
      "Tarjetas de proximidad y códigos",
      "Chapas asociadas al lector",
    ],
    faqs: [
      {
        question: "¿Pueden cargar de nuevo a los residentes si se borró el lector?",
        answer:
          "Sí, si existe un respaldo exportable o un listado confiable de la administración. Sin esa base no se reconstruye la nómina de memoria. La visita deja el equipo listo para cargar y explica el procedimiento.",
      },
      {
        question: "¿El reconocimiento facial queda amarrado a una marca?",
        answer:
          "No. Se diagnostica el lector que ya está en la puerta. El reemplazo, si hace falta, se cotiza sin obligar al edificio a un fabricante.",
      },
      {
        question: "¿Sirve para una empresa y también para un condominio?",
        answer:
          "Sí. Cambia el flujo: en la empresa importa la jornada y el control de ingreso; en el condominio, residentes y visitas. El servicio técnico es el mismo oficio.",
      },
      {
        question: "¿Actualizan el firmware siempre?",
        answer:
          "Solo cuando el fabricante lo ofrece para ese modelo y la actualización no borra usuarios sin respaldo. Si el riesgo es alto, se informa y se decide con la administración.",
      },
      {
        question: "¿Hay soporte fuera del horario de oficina?",
        answer:
          "La visita de terreno se agenda de lunes a viernes. Una asesoría telefónica de urgencia forma parte del plan Premium, no de una reparación suelta.",
      },
      {
        question: "¿Qué comunas cubre el acceso biométrico?",
        answer: `${coverageLine()}. El texto de esta página vale para toda esa zona; no hay fichas duplicadas por comuna.`,
      },
    ],
  },
  {
    id: "alarmas",
    path: "/alarmas-incendio-concepcion",
    title: "Alarmas de incendio en Concepción | PROTEF",
    description:
      "¿Alarma de incendio en falla en su edificio de Concepción? PROTEF revisa detectores, central y sirenas. Llame al +56 9 8210 9253. Agende ya.",
    h1: "Alarmas de incendio para edificios en Concepción",
    eyebrow: "Detección temprana en días hábiles",
    lead: "Una alarma de incendio que nadie cree, o que no suena, deja al edificio sin aviso temprano. PROTEF instala, repara y mantiene detectores, centrales, sirenas y señalización para que el sistema esté en condiciones de avisar.",
    strip: "¿La central de incendio está en falla? Llame de lunes a viernes.",
    waText: "Hola, necesito revisión de alarma de incendio en un edificio de Concepción.",
    serviceName: "Alarmas de incendio para edificios en Concepción",
    failuresTitle: "Fallas de detección que resolvemos",
    failuresIntro:
      "Atendemos la alarma contra incendio del edificio. Si el mismo sistema incluye zonas de intrusión, se revisan en la mantención cuando forman parte de la central instalada.",
    failures: [
      "Central en falla o con zonas aisladas",
      "Detectores sucios que disparan falsas alarmas",
      "Sirena o palanca manual que no responde",
      "Baterías agotadas que no sostienen un corte de luz",
      "Falta de prueba reciente y de un registro para la administración",
    ],
    sections: [
      {
        heading: "Mantener la alarma es proteger a las personas, no solo al equipo",
        paragraphs: [
          "El material de PROTEF lo dice en una frase: sistemas operativos, personas protegidas. La mantención preventiva y correctiva revisa que los detectores, la central y el aviso sonoro hagan su trabajo. Un edificio que convive con falsas alarmas termina desconectando lo único que debía avisar a tiempo.",
          `En ${zones} la visita recorre la central y los sensores, y la prueba de sirena se coordina con la administración. Se anota qué zona falló. Ese registro le sirve al comité y, si corresponde, a la aseguradora. Un formato especial de informe se acuerda al cotizar.`,
        ],
      },
      {
        heading: "Detección temprana y menos falsas alarmas",
        paragraphs: [
          "Un detector con polvo se parece a un incendio para la central. La limpieza y la prueba periódica bajan esos eventos y suben la confianza de quien vive en el piso. La señalización y la palanca manual se revisan en el mismo recorrido, porque un aviso que no se puede activar a mano tampoco sirve en un pasillo con humo.",
          "La mantención de alarmas puede convivir con CCTV y citofonía en un solo plan de visitas. Los precios referenciales están en UF y dependen del tamaño del edificio. La urgencia de una central en falla se atiende de lunes a viernes, aparte del calendario preventivo.",
        ],
      },
    ],
    process: [
      { title: "Qué indica la central", text: "Falla general, una zona, sirena continua o detector suelto." },
      { title: "Visita coordinada", text: "Se acuerda el momento de la prueba para no alarmar al edificio sin aviso." },
      { title: "Sensores y baterías", text: "Limpieza, prueba funcional y estado de la respaldo de energía." },
      { title: "Registro", text: "Queda anotado qué se probó y qué hay que cambiar." },
      { title: "Siguiente visita", text: "Se propone periodicidad según el plan que elija la comunidad." },
    ],
    brandsTitle: "Alcance del sistema de incendio",
    brands: [
      "Centrales de alarma contra incendio ya instaladas",
      "Detectores, sirenas y palancas manuales",
      "Baterías y fuentes de la central",
      "Zonas de intrusión cuando comparten la misma central",
    ],
    faqs: [
      {
        question: "¿Hacen la prueba de sirena con el edificio habitado?",
        answer:
          "Sí, coordinada con la administración para avisar a conserjería y residentes. No se ensaya la sirena al pasar, sin ese aviso.",
      },
      {
        question: "¿Entregan un certificado de bomberos o de un organismo?",
        answer:
          "La visita deja un registro técnico de lo probado. Un certificado de un tercero o un trámite ante un organismo no está incluido si no se cotizó. No lo damos por hecho.",
      },
      {
        question: "¿Revisan alarmas de robo además de incendio?",
        answer:
          "El foco de esta página es la detección de incendio. Si la central del edificio también tiene zonas de intrusión, se pueden incluir en la misma mantención. Se confirma en la visita, no se asume.",
      },
      {
        question: "¿Cada cuánto conviene mantenerla?",
        answer:
          "El sitio ofrece planes anual, semestral, trimestral y mensual. En incendio, mientras más espaciada la visita, más tiempo pasa un detector sucio sin que nadie lo note. La frecuencia la elige la comunidad según el plan.",
      },
      {
        question: "¿La urgencia es inmediata a toda hora?",
        answer:
          "No. Es de lunes a viernes. Una central en falla debe reportarse en ese horario para agendar la revisión.",
      },
      {
        question: "¿Atienden edificios en Talcahuano?",
        answer: `Sí. Alarmas de incendio en ${zones}, para edificios, condominios y empresas.`,
      },
    ],
  },
];

export function getLanding(id: string): Landing {
  const landing = landings.find((item) => item.id === id);
  if (!landing) throw new Error(`Landing no encontrada: ${id}`);
  return landing;
}

export function landingPlainText(landing: Landing): string {
  return [
    landing.h1,
    landing.lead,
    landing.failuresTitle,
    landing.failuresIntro,
    ...landing.failures,
    ...landing.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ...landing.process.flatMap((step) => [step.title, step.text]),
    landing.brandsTitle,
    ...landing.brands,
    ...landing.faqs.flatMap((faq) => [faq.question, faq.answer]),
    `Atendemos en ${zones}.`,
  ].join(" ");
}

export function relatedServices(id: string) {
  return services.filter((service) => service.id !== id);
}
