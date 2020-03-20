import Route from '@ember/routing/route';

let initialPayload, updatePayload;

export default Route.extend({
  model() {
    performance.mark('start-data-generation');

    initialPayload = createPayload(19600);
    updatePayload = createPayload(20000);

    performance.mark('end-data-generation');
    performance.measure('data-generation', 'start-data-generation', 'end-data-generation');

    performance.mark('start-push-initial-payload');
    this.store.push(initialPayload);
    performance.mark('end-push-initial-payload');
    performance.measure('push-initial-payload', 'start-push-initial-payload', 'end-push-initial-payload');

    performance.mark('start-push-update-payload');
    this.store.push(updatePayload);
    performance.mark('end-push-update-payload');
    performance.measure('push-update-payload', 'start-push-update-payload', 'end-push-update-payload');
  },
});

/** Creates a parent with the number of children equal to `size` */
function createPayload(size) {
  const payload = {
    data: [
      {
        id: '1',
        type: 'parent',
        attributes: { parentName: 'parent name' },
        relationships: {
          children: {
            data: [],
          },
        },
      },
    ],
    included: [],
  };
  const relationships = payload.data[0].relationships.children.data;
  const included = payload.included;

  for (let i = 0; i < size; i++) {
    relationships.push({ id: i.toString(), type: 'child' });
    included.push({ id: i.toString(), type: 'child', attributes: { childName: 'child' + i } });
  }

  return payload;
}
