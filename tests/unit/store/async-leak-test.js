import { module, test } from 'qunit';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import JSONAPISerializer from 'ember-data/serializers/json-api';
import { setupTest } from 'ember-qunit';
import Store from 'ember-data/store';
import Model from 'ember-data/model';
import { resolve, reject, Promise } from 'rsvp';
import { attr } from '@ember-decorators/data';

class Person extends Model {
  @attr name;
}

module('unit/store async-waiter and leak detection', function(hooks) {
  let store;
  setupTest(hooks);

  hooks.beforeEach(function() {
    let { owner } = this;
    owner.register('service:store', Store);
    owner.register('model:person', Person);
    store = owner.lookup('service:store');
  });

  test('await properly waits for pending requests', async function(assert) {

  });

  test('await works even when the adapter rejects', async function(assert) {

  });

  test('await works even when the adapter throws', async function(assert) {

  });

  test('when the store is torn down too early, the waiter throws', async function(assert) {

  });

  test('when configured, pending requests have useful stack traces', async function(assert) {

  });
});
