export default defineNuxtPlugin((nuxtApp) => {
    let io: IntersectionObserver | undefined

    nuxtApp.vueApp.directive('reveal', {
        getSSRProps: () => ({ class: 'rv' }),
        mounted(el: HTMLElement) {
            el.classList.add('rv')
            io ??= new IntersectionObserver(
                (entries) => entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('in');
                        io!.unobserve(e.target);
                    }
                }),
                {
                    threshold: 0.12
                }
            )
            io.observe(el);
        }
    });
})