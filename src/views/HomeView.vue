<script setup>
import { ref, computed } from "vue";

const grade1 = ref(0);
const grade2 = ref(0);
const grade3 = ref(0);
const grade4 = ref(0);
const grade5 = ref(0);
const grade6 = ref(0);

const average = computed(() => {
  const totalWeight = 0.2 * 4 + 0.1 * 2;
  const weightedSum =
    grade1.value * 0.2 +
    grade2.value * 0.2 +
    grade3.value * 0.2 +
    grade4.value * 0.2 +
    grade5.value * 0.1 +
    grade6.value * 0.1;
  return weightedSum / totalWeight;
});
</script>

<template>
  <main class="bg-gray-100 min-h-screen flex justify-center items-center">
    <div
      class="p-6 w-full max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4"
    >
      <h1 class="text-2xl font-bold text-center">Grade Calculator</h1>
      <div class="space-y-2">
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Grade 1:</label
          >
          <input
            type="number"
            v-model="grade1"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Grade 2:</label
          >
          <input
            type="number"
            v-model="grade2"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Grade 3:</label
          >
          <input
            type="number"
            v-model="grade3"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Grade 4:</label
          >
          <input
            type="number"
            v-model="grade4"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Grade 5:</label
          >
          <input
            type="number"
            v-model="grade5"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >Grade 6:</label
          >
          <input
            type="number"
            v-model="grade6"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div class="text-center">
        <h2 class="text-xl font-semibold">Average: {{ average.toFixed(2) }}</h2>
      </div>
    </div>
  </main>
</template>
