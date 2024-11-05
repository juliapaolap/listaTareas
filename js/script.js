const inst = {
    data() 
    {
        return {
            nuevaTarea: '',
            tareas: [],
            progreso: 0,
        };
    },

    computed: 
    {
        colorProgreso() 
        {
            if (this.progreso <= 50) return 'colorVerde';
            else if (this.progreso <= 80) return 'colorAmarillo';
            else return 'colorRojo';
        }
    },

    methods: 
    {
        agregarTarea() 
        {
            if (this.nuevaTarea.trim() !== '') 
            {
                this.tareas.push({ texto: this.nuevaTarea, completada: false });
                this.nuevaTarea = '';
            }
        },

        /* La función trim() elimina los espacios en blanco al inicio y al final del texto.
        Si el campo no está vacío, entonces se procede a la siguiente línea; de lo contrario, no se hace nada. */

        alternarTarea(index) 
        {
            this.tareas[index].completada = !this.tareas[index].completada;
        },
        aumentarProgreso() 
        {
            if (this.progreso < 100) 
            {
                this.progreso += 10;
            }
        },
        disminuirProgreso() 
        {
            if (this.progreso > 0) 
            {
                this.progreso -= 10;
            }
        },

        limpiarLista() 
        {
            this.tareas = []; // Limpia todas las tareas
        },
    },
};

const app = Vue.createApp(inst).mount('#seccion');