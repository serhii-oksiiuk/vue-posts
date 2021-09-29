<template>
    <select v-model="modelValue" @change="changeOption">
        <option disabled value="">Select from list</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
        >{{ option.name }}</option>

    </select>
</template>

<script>
    export default {
        name: 'my-select', 
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOption(event){
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>
 
<style>
select{
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    border: 1px solid teal;
    color:teal;
    margin: 15px 0;
}
</style>