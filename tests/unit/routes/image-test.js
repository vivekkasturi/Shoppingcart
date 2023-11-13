import { module, test } from 'qunit';
import { setupTest } from 'shopping-cart/tests/helpers';

module('Unit | Route | image', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:image');
    assert.ok(route);
  });
});
