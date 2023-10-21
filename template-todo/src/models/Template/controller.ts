import TemplateModel from "./model";

class TemplateController {
    static createTemplate(name: string, description: string, tasks: string[], isEnabled: boolean): TemplateModel {
      return new TemplateModel(name, description, tasks, isEnabled);
    }
}

export default TemplateController;