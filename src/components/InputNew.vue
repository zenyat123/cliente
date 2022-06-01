

<template>

	<input v-bind:value = "modelValue" v-on:input = "textNew" class = "w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none">

</template>

<script>

	export default {

		props: {

			modelValue: String

		},

		methods: {

			textNew(event) {

				this.$emit('update:modelValue', event.target.value);

			}

		}

	}

</script>

