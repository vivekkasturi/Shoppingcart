import { module, test } from 'qunit';
import { setupTest } from 'shopping-cart/tests/helpers';

module('Unit | Controller | products', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:products');
    assert.ok(controller);
  });
});
