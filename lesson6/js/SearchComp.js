Vue.component('searchform', {   //searchform - название тега в ДОМ
    props: ['value'],
    template: `
        <input type="text" class="search-field" 
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)">
    `
})
