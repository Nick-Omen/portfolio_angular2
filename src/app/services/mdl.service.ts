import {Injectable} from "@angular/core";

declare var componentHandler: any;

const getComponentHandler = (): any => {
    if (typeof(componentHandler) == 'undefined') {
        return null;
    }
    return componentHandler;
};

@Injectable()
export class MdlService {
    updateDom() {
        const componentHandler = getComponentHandler();

        if (componentHandler) {
            componentHandler.upgradeDom();
        }
    }
}