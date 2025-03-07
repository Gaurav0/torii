/* eslint-disable qunit/literal-compare-order */
import PopupIdSerializer from 'torii/lib/popup-id-serializer';

import { module, test } from 'qunit';

module('Unit | Lib | PopupIdSerializer', function (/*hooks*/) {
  test('.serialize prepends a prefix before the popup id', function (assert) {
    const popupId = 'abc12345';
    assert.strictEqual(
      'torii-popup:' + popupId,
      PopupIdSerializer.serialize(popupId)
    );
  });

  test('.deserialize extracts the popup id from the serialized string', function (assert) {
    const serializedPopupId = 'torii-popup:gfedc123';
    assert.strictEqual(
      'gfedc123',
      PopupIdSerializer.deserialize(serializedPopupId)
    );
  });

  test('.deserialize returns null if not a properly serialized torii popup', function (assert) {
    const serializedPopupId = '';
    assert.strictEqual(null, PopupIdSerializer.deserialize(serializedPopupId));
  });

  test('.serialize returns null if passed undefined', function (assert) {
    assert.strictEqual(null, PopupIdSerializer.deserialize(undefined));
  });
});
