export default {
    PAGES: {
        ASSIGNMENT_1: {
            ID: 'assignment-1',
            WRAPPER_ID: 'first-assignment-wrapper',
            SLUG: '/assigment-1',
            TITLE: 'Page 1',
            META_DESCRIPTION: 'Page 1',
        },
        ASSIGNMENT_2: {
            ID: 'page-2',
            WRAPPER_ID: 'second-assignment-wrapper',
            SLUG: '/assigment-2',
            TITLE: 'Page 2',
            META_DESCRIPTION: 'Page 2',
        }
    },
    get ALL_PAGES() {
        return Object.values(this.PAGES);
    }
}
