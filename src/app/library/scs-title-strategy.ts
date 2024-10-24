import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { TitleStrategy, RouterStateSnapshot } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class ScsTitleStrategy extends TitleStrategy {
    constructor(private readonly title: Title) {
        super();
    }

    override updateTitle(routerState: RouterStateSnapshot): void {
        const title = this.buildTitle(routerState);
        if (title !== undefined && title.includes('South County')) {
            this.title.setTitle(title);
        } else if (title !== undefined && title !== null && title !== '') {
            this.title.setTitle(`South County Sound | ${title}`);
        } else {
            this.title.setTitle(`South County Sound`);
        }
    }
}
