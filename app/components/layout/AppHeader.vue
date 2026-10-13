<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const localPath = useLocalePath();
const links = [
    [
        'areas',
        'nav.areas'
    ],
    [
        'about',
        'nav.about'
    ],
    [
        'process',
        'nav.process'
    ],
    [
        'plans',
        'nav.plans'
    ]
] as const
</script>

<template>
    <header class="sticky top-0 z-10 border-b border-ink/15 bg-cream/95">
        <div class="wrap flex h-16 items-center justify-between">
            <NuxtLink :to="localPath('/')" class="font-serif text-2xl font-semibold">
                Carol Rivero
            </NuxtLink>
            <nav class="flex items-center gap-4 text-sm md:gap-7" :aria-label="t('nav.label')">
                <a
                    v-for="[id, key] in links"
                    :key="id"
                    :href="`#${id}`"
                    class="hidden text-muted transition-colors duration-300 hover:text-ink md:block"
                >
                    {{ t(key) }}
                </a>
                <LayoutLangSwitch />
                <a href="#contact" class="rounded-full bg-ink px-4 py-2 font-semibold text-cream transition-colors duration-300 hover:bg-rose-deep">
                    {{ t('nav.book') }}
                </a>
            </nav>
        </div>
    </header>
</template>