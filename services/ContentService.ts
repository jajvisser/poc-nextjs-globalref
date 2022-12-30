export class ContentService {
    private routes: string[]
    private readonly locale: string

    constructor(locale: string) {
        this.locale = locale;
        this.routes = [];
    }

    fillRoutes() {
        this.routes = ["route1", "route2", "route3"];
    }

    getRoutes() {
        return this.routes;
    }
}