<script setup>
    import { reactive, ref } from 'vue';
    import Alerta from './Alert.vue';

    const busqueda = reactive({
        ciudad: '',
        pais: ''
    })

    const error = ref('')

    const emit = defineEmits(['obtener-clima'])

    const paises = [
        { codigo: 'AF', nombre: 'Afganistán' },
        { codigo: 'AL', nombre: 'Albania' },
        { codigo: 'DE', nombre: 'Alemania' },
        { codigo: 'AD', nombre: 'Andorra' },
        { codigo: 'AO', nombre: 'Angola' },
        { codigo: 'AI', nombre: 'Anguila' },
        { codigo: 'AQ', nombre: 'Antártida' },
        { codigo: 'AG', nombre: 'Antigua y Barbuda' },
        { codigo: 'SA', nombre: 'Arabia Saudita' },
        { codigo: 'DZ', nombre: 'Argelia' },
        { codigo: 'AR', nombre: 'Argentina' },
        { codigo: 'AM', nombre: 'Armenia' },
        { codigo: 'AW', nombre: 'Aruba' },
        { codigo: 'AU', nombre: 'Australia' },
        { codigo: 'AT', nombre: 'Austria' },
        { codigo: 'AZ', nombre: 'Azerbaiyán' },
        { codigo: 'BS', nombre: 'Bahamas' },
        { codigo: 'BH', nombre: 'Bahréin' },
        { codigo: 'BD', nombre: 'Bangladés' },
        { codigo: 'BB', nombre: 'Barbados' },
        { codigo: 'BE', nombre: 'Bélgica' },
        { codigo: 'BZ', nombre: 'Belice' },
        { codigo: 'BJ', nombre: 'Benín' },
        { codigo: 'BM', nombre: 'Bermudas' },
        { codigo: 'BY', nombre: 'Bielorrusia' },
        { codigo: 'MM', nombre: 'Birmania' },
        { codigo: 'BO', nombre: 'Bolivia' },
        { codigo: 'BA', nombre: 'Bosnia y Herzegovina' },
        { codigo: 'BW', nombre: 'Botsuana' },
        { codigo: 'BR', nombre: 'Brasil' },
        { codigo: 'BN', nombre: 'Brunéi' },
        { codigo: 'BG', nombre: 'Bulgaria' },
        { codigo: 'BF', nombre: 'Burkina Faso' },
        { codigo: 'BI', nombre: 'Burundi' },
        { codigo: 'BT', nombre: 'Bután' },
        { codigo: 'CV', nombre: 'Cabo Verde' },
        { codigo: 'KH', nombre: 'Camboya' },
        { codigo: 'CM', nombre: 'Camerún' },
        { codigo: 'CA', nombre: 'Canadá' },
        { codigo: 'TD', nombre: 'Chad' },
        { codigo: 'CL', nombre: 'Chile' },
        { codigo: 'CN', nombre: 'China' },
        { codigo: 'CY', nombre: 'Chipre' },
        { codigo: 'VA', nombre: 'Ciudad del Vaticano' },
        { codigo: 'CO', nombre: 'Colombia' },
        { codigo: 'KM', nombre: 'Comoras' },
        { codigo: 'CG', nombre: 'Congo' },
        { codigo: 'CD', nombre: 'Congo (Rep. Dem.)' },
        { codigo: 'KP', nombre: 'Corea del Norte' },
        { codigo: 'KR', nombre: 'Corea del Sur' },
        { codigo: 'CI', nombre: 'Costa de Marfil' },
        { codigo: 'CR', nombre: 'Costa Rica' },
        { codigo: 'HR', nombre: 'Croacia' },
        { codigo: 'CU', nombre: 'Cuba' },
        { codigo: 'CW', nombre: 'Curazao' },
        { codigo: 'DK', nombre: 'Dinamarca' },
        { codigo: 'DM', nombre: 'Dominica' },
        { codigo: 'EC', nombre: 'Ecuador' },
        { codigo: 'EG', nombre: 'Egipto' },
        { codigo: 'SV', nombre: 'El Salvador' },
        { codigo: 'AE', nombre: 'Emiratos Árabes Unidos' },
        { codigo: 'ER', nombre: 'Eritrea' },
        { codigo: 'SK', nombre: 'Eslovaquia' },
        { codigo: 'SI', nombre: 'Eslovenia' },
        { codigo: 'ES', nombre: 'España' },
        { codigo: 'US', nombre: 'Estados Unidos' },
        { codigo: 'EE', nombre: 'Estonia' },
        { codigo: 'ET', nombre: 'Etiopía' },
        { codigo: 'PH', nombre: 'Filipinas' },
        { codigo: 'FI', nombre: 'Finlandia' },
        { codigo: 'FJ', nombre: 'Fiyi' },
        { codigo: 'FR', nombre: 'Francia' },
        { codigo: 'GA', nombre: 'Gabón' },
        { codigo: 'GM', nombre: 'Gambia' },
        { codigo: 'GE', nombre: 'Georgia' },
        { codigo: 'GH', nombre: 'Ghana' },
        { codigo: 'GI', nombre: 'Gibraltar' },
        { codigo: 'GD', nombre: 'Granada' },
        { codigo: 'GR', nombre: 'Grecia' },
        { codigo: 'GL', nombre: 'Groenlandia' },
        { codigo: 'GP', nombre: 'Guadalupe' },
        { codigo: 'GU', nombre: 'Guam' },
        { codigo: 'GT', nombre: 'Guatemala' },
        { codigo: 'GY', nombre: 'Guayana' },
        { codigo: 'GF', nombre: 'Guayana Francesa' },
        { codigo: 'GN', nombre: 'Guinea' },
        { codigo: 'GQ', nombre: 'Guinea Ecuatorial' },
        { codigo: 'GW', nombre: 'Guinea-Bisáu' },
        { codigo: 'HT', nombre: 'Haití' },
        { codigo: 'HN', nombre: 'Honduras' },
        { codigo: 'HU', nombre: 'Hungría' },
        { codigo: 'IN', nombre: 'India' },
        { codigo: 'ID', nombre: 'Indonesia' },
        { codigo: 'IR', nombre: 'Irán' },
        { codigo: 'IQ', nombre: 'Irak' },
        { codigo: 'IE', nombre: 'Irlanda' },
        { codigo: 'IS', nombre: 'Islandia' },
        { codigo: 'IL', nombre: 'Israel' },
        { codigo: 'IT', nombre: 'Italia' },
        { codigo: 'JM', nombre: 'Jamaica' },
        { codigo: 'JP', nombre: 'Japón' },
        { codigo: 'JO', nombre: 'Jordania' },
        { codigo: 'KZ', nombre: 'Kazajistán' },
        { codigo: 'KE', nombre: 'Kenia' },
        { codigo: 'KG', nombre: 'Kirguistán' },
        { codigo: 'KI', nombre: 'Kiribati' },
        { codigo: 'KW', nombre: 'Kuwait' },
        { codigo: 'LA', nombre: 'Laos' },
        { codigo: 'LS', nombre: 'Lesoto' },
        { codigo: 'LV', nombre: 'Letonia' },
        { codigo: 'LB', nombre: 'Líbano' },
        { codigo: 'LR', nombre: 'Liberia' },
        { codigo: 'LY', nombre: 'Libia' },
        { codigo: 'LI', nombre: 'Liechtenstein' },
        { codigo: 'LT', nombre: 'Lituania' },
        { codigo: 'LU', nombre: 'Luxemburgo' },
        { codigo: 'MK', nombre: 'Macedonia del Norte' },
        { codigo: 'MG', nombre: 'Madagascar' },
        { codigo: 'MY', nombre: 'Malasia' },
        { codigo: 'MW', nombre: 'Malaui' },
        { codigo: 'MV', nombre: 'Maldivas' },
        { codigo: 'ML', nombre: 'Malí' },
        { codigo: 'MT', nombre: 'Malta' },
        { codigo: 'MA', nombre: 'Marruecos' },
        { codigo: 'MH', nombre: 'Islas Marshall' },
        { codigo: 'MQ', nombre: 'Martinica' },
        { codigo: 'MU', nombre: 'Mauricio' },
        { codigo: 'MR', nombre: 'Mauritania' },
        { codigo: 'YT', nombre: 'Mayotte' },
        { codigo: 'MX', nombre: 'México' },
        { codigo: 'FM', nombre: 'Micronesia' },
        { codigo: 'MD', nombre: 'Moldavia' },
        { codigo: 'MC', nombre: 'Mónaco' },
        { codigo: 'MN', nombre: 'Mongolia' },
        { codigo: 'ME', nombre: 'Montenegro' },
        { codigo: 'MS', nombre: 'Montserrat' },
        { codigo: 'MZ', nombre: 'Mozambique' },
        { codigo: 'NA', nombre: 'Namibia' },
        { codigo: 'NR', nombre: 'Nauru' },
        { codigo: 'NP', nombre: 'Nepal' },
        { codigo: 'NI', nombre: 'Nicaragua' },
        { codigo: 'NE', nombre: 'Níger' },
        { codigo: 'NG', nombre: 'Nigeria' },
        { codigo: 'NU', nombre: 'Niue' },
        { codigo: 'NO', nombre: 'Noruega' },
        { codigo: 'NC', nombre: 'Nueva Caledonia' },
        { codigo: 'NZ', nombre: 'Nueva Zelanda' },
        { codigo: 'OM', nombre: 'Omán' },
        { codigo: 'NL', nombre: 'Países Bajos' },
        { codigo: 'PK', nombre: 'Pakistán' },
        { codigo: 'PW', nombre: 'Palaos' },
        { codigo: 'PA', nombre: 'Panamá' },
        { codigo: 'PG', nombre: 'Papúa Nueva Guinea' },
        { codigo: 'PY', nombre: 'Paraguay' },
        { codigo: 'PE', nombre: 'Perú' },
        { codigo: 'PF', nombre: 'Polinesia Francesa' },
        { codigo: 'PL', nombre: 'Polonia' },
        { codigo: 'PT', nombre: 'Portugal' },
        { codigo: 'PR', nombre: 'Puerto Rico' },
        { codigo: 'QA', nombre: 'Catar' },
        { codigo: 'GB', nombre: 'Reino Unido' },
        { codigo: 'CF', nombre: 'República Centroafricana' },
        { codigo: 'CZ', nombre: 'República Checa' },
        { codigo: 'DO', nombre: 'República Dominicana' },
        { codigo: 'RE', nombre: 'Reunión' },
        { codigo: 'RW', nombre: 'Ruanda' },
        { codigo: 'RO', nombre: 'Rumania' },
        { codigo: 'RU', nombre: 'Rusia' },
        { codigo: 'WS', nombre: 'Samoa' },
        { codigo: 'AS', nombre: 'Samoa Americana' },
        { codigo: 'BL', nombre: 'San Bartolomé' },
        { codigo: 'KN', nombre: 'San Cristóbal y Nieves' },
        { codigo: 'SM', nombre: 'San Marino' },
        { codigo: 'MF', nombre: 'San Martín (Francia)' },
        { codigo: 'PM', nombre: 'San Pedro y Miquelón' },
        { codigo: 'VC', nombre: 'San Vicente y las Granadinas' },
        { codigo: 'SH', nombre: 'Santa Elena' },
        { codigo: 'LC', nombre: 'Santa Lucía' },
        { codigo: 'ST', nombre: 'Santo Tomé y Príncipe' },
        { codigo: 'SN', nombre: 'Senegal' },
        { codigo: 'RS', nombre: 'Serbia' },
        { codigo: 'SC', nombre: 'Seychelles' },
        { codigo: 'SL', nombre: 'Sierra Leona' },
        { codigo: 'SG', nombre: 'Singapur' },
        { codigo: 'SX', nombre: 'Sint Maarten' },
        { codigo: 'SY', nombre: 'Siria' },
        { codigo: 'SO', nombre: 'Somalia' },
        { codigo: 'LK', nombre: 'Sri Lanka' },
        { codigo: 'SZ', nombre: 'Suazilandia' },
        { codigo: 'ZA', nombre: 'Sudáfrica' },
        { codigo: 'SD', nombre: 'Sudán' },
        { codigo: 'SS', nombre: 'Sudán del Sur' },
        { codigo: 'SE', nombre: 'Suecia' },
        { codigo: 'CH', nombre: 'Suiza' },
        { codigo: 'SR', nombre: 'Surinam' },
        { codigo: 'TH', nombre: 'Tailandia' },
        { codigo: 'TW', nombre: 'Taiwán' },
        { codigo: 'TZ', nombre: 'Tanzania' },
        { codigo: 'TJ', nombre: 'Tayikistán' },
        { codigo: 'IO', nombre: 'Territorio Británico del Océano Índico' },
        { codigo: 'TF', nombre: 'Territorios Australes Franceses' },
        { codigo: 'TL', nombre: 'Timor-Leste' },
        { codigo: 'TG', nombre: 'Togo' },
        { codigo: 'TK', nombre: 'Tokelau' },
        { codigo: 'TO', nombre: 'Tonga' },
        { codigo: 'TT', nombre: 'Trinidad y Tobago' },
        { codigo: 'TN', nombre: 'Túnez' },
        { codigo: 'TM', nombre: 'Turkmenistán' },
        { codigo: 'TR', nombre: 'Turquía' },
        { codigo: 'TV', nombre: 'Tuvalu' },
        { codigo: 'UA', nombre: 'Ucrania' },
        { codigo: 'UG', nombre: 'Uganda' },
        { codigo: 'UY', nombre: 'Uruguay' },
        { codigo: 'UZ', nombre: 'Uzbekistán' },
        { codigo: 'VU', nombre: 'Vanuatu' },
        { codigo: 'VE', nombre: 'Venezuela' },
        { codigo: 'VN', nombre: 'Vietnam' },
        { codigo: 'YE', nombre: 'Yemen' },
        { codigo: 'DJ', nombre: 'Yibuti' },
        { codigo: 'ZM', nombre: 'Zambia' },
        { codigo: 'ZW', nombre: 'Zimbabue' }
    ];


    const consultarClima = () => {
        if(Object.values(busqueda).includes('')) {
            error.value = 'Todos los campos son obligatorios'
            return
        }

        error.value = ''
        emit('obtener-clima', busqueda)
    }
</script>

<template>
    <form 
        class="formulario"
        @submit.prevent="consultarClima"
    >
        <Alerta v-if="error">{{ error }}</Alerta>
        <div class="campo">
            <label for="ciudad">Ciudad:</label>
            <input 
                id="ciudad"
                type="text"
                placeholder="Ciudad"
                v-model="busqueda.ciudad"
            >
        </div>

        <div class="campo">
            <label for="pais">País:</label>
            <select
                id="pais"
                v-model="busqueda.pais"
            >
                <option value="">-- seleccione un pais --</option>
                <option v-for="pais in paises" :value="pais.codigo"> {{ pais.nombre }}</option>
            </select>
        </div>
        <input type="submit" value="Consultar Clima" />
    </form>

</template>