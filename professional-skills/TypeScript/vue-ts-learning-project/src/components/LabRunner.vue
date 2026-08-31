<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { activeLab } from '../labs/active'
import type { LabCheck } from '../labs/types'

const checks = ref<LabCheck[]>([])
const ranAt = ref<string>('')

const passed = computed(() => checks.value.filter((c) => c.pass).length)
const total = computed(() => checks.value.length)

function runLab() {
  checks.value = activeLab.run()
  ranAt.value = new Date().toLocaleTimeString()
}

onMounted(runLab)
</script>

<template>
  <div class="lab-runner">
    <header class="lab-runner__header">
      <p class="lab-runner__eyebrow">TypeScript lab</p>
      <h1>{{ activeLab.id }} — {{ activeLab.title }}</h1>
      <p class="lab-runner__meta">Book item {{ activeLab.item }} · last run {{ ranAt || '—' }}</p>
      <button type="button" class="lab-runner__btn" @click="runLab">Re-run checks</button>
    </header>

    <section class="lab-runner__summary" :data-all-pass="passed === total && total > 0">
      {{ passed }} / {{ total }} checks passed
    </section>

    <ul class="lab-runner__list">
      <li
        v-for="check in checks"
        :key="check.id"
        class="lab-runner__item"
        :data-pass="check.pass"
      >
        <span class="lab-runner__badge">{{ check.pass ? 'PASS' : 'FAIL' }}</span>
        <div>
          <strong>{{ check.id }}.</strong> {{ check.description }}
          <p v-if="check.detail" class="lab-runner__detail">{{ check.detail }}</p>
        </div>
      </li>
    </ul>

    <footer class="lab-runner__footer">
      Edit <code>src/labs/{{ activeLab.id }}-…/exercises.ts</code> ·
      <code>npm run build</code> for typecheck
    </footer>
  </div>
</template>

<style scoped>
.lab-runner {
  max-width: 42rem;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
  text-align: left;
}

.lab-runner__eyebrow {
  margin: 0 0 0.25rem;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted, #888);
}

.lab-runner h1 {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  line-height: 1.25;
}

.lab-runner__meta {
  margin: 0 0 1rem;
  color: var(--muted, #888);
  font-size: 0.9rem;
}

.lab-runner__btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border, #444);
  border-radius: 6px;
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.lab-runner__btn:hover {
  border-color: var(--accent, #646cff);
}

.lab-runner__summary {
  margin: 1.5rem 0 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: color-mix(in srgb, #f44336 12%, transparent);
  font-weight: 600;
}

.lab-runner__summary[data-all-pass='true'] {
  background: color-mix(in srgb, #4caf50 15%, transparent);
}

.lab-runner__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.lab-runner__item {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--border, #333);
}

.lab-runner__item[data-pass='true'] {
  border-color: color-mix(in srgb, #4caf50 40%, var(--border, #333));
}

.lab-runner__badge {
  flex-shrink: 0;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  background: color-mix(in srgb, #f44336 20%, transparent);
  align-self: flex-start;
}

.lab-runner__item[data-pass='true'] .lab-runner__badge {
  background: color-mix(in srgb, #4caf50 25%, transparent);
}

.lab-runner__detail {
  margin: 0.35rem 0 0;
  font-size: 0.85rem;
  color: var(--muted, #888);
}

.lab-runner__footer {
  margin-top: 2rem;
  font-size: 0.85rem;
  color: var(--muted, #888);
}

.lab-runner code {
  font-size: 0.8em;
}
</style>
