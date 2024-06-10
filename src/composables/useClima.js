import axios from "axios";
import { computed, ref } from "vue";

export default function useClima () {
    const clima = ref({})
    const cargando = ref(false)
    const error = ref('')

    const obtenerClima = async ({ciudad, pais}) => {
        const key = import.meta.env.VITE_API_KEY;  
        cargando.value = true
        clima.value = {}
        error.value = ''
        try {
            const { data } = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`);
            const { lat, lon } = data[0];
            const {data: resp } = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
            clima.value = resp
        } catch {
            error.value = 'Ciudad no encontrada'
        } finally {
            cargando.value = false
        }

    }

    const mostraClima = computed(() => {
        return Object.values(clima.value).length > 0
    })

    const formatearTemperaura = temperatura => parseInt(temperatura - 273.15)

    return {
        obtenerClima,
        clima,
        mostraClima,
        formatearTemperaura,
        cargando,
        error
    }
}