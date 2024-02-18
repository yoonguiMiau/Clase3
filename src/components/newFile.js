import { ref } from 'vue';

export default (await import('vue')).defineComponent({
setup() {
const counter = ref(0);
return { counter };
},

methods: {
incremento() {
this.counter++;
},

reset() {
this.counter = 0;
}
}
});
