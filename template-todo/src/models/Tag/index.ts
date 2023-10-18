// creating a tag store that users can use to add tags to their tasks
// users can also create new tags at their leisure

import Record from "../Record";

export class TagManager {
  private tags: Map<string, Tag>;

    constructor( tags: Map<string, Tag> = new Map<string, Tag>()) {
        this.tags = tags;
    }

    public addTag(tag: Tag): void {
        this.tags.set(tag.name, tag);
    }

    public removeTag(tagName: string): void {
        this.tags.delete(tagName);
    }

    public getTag(tagName: string): Tag|undefined {
        return this.tags.get(tagName);
    }

    public getTags(): Tag[] {
        return Array.from(this.tags.values());
    }
}

class Tag extends Record {
    private _name: string;
    private _color: string;

    constructor(name: string, color: string) {
        super();
        this._name = name;
        this._color = color;
    }

    public get name(): string {
        return this._name;
    }

    public get color(): string {
        return this._color;
    }
}