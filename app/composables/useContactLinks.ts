export function useContactLinks() {
    const { t } = useI18n();
    const {
        whatsapp,
        instagram
    } = useRuntimeConfig().public;
    const wa = computed(() => {
        return `https://wa.me/${whatsapp}?text=${encodeURIComponent(t('contact.waMessage'))}`;
    });

    return {
        wa,
        ig: `https://instagram.com/${instagram}`,
        igHandle: `@${instagram}`
    }
}