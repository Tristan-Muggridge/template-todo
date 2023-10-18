import {expect, test} from 'vitest'
import {TaskTemplate as Template} from '.';

test('should create a valid template with only a title', () => {
    const template = new Template('title');
    expect(template.title).to.equal('title');
    expect(template.description).to.equal('');
    expect(template.taskList.tasks).to.deep.equal([]);
});