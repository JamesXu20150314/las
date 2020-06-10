const assert = require('assert');
import { decodeUTF8 } from '../../../src/utils/decode-utf8';

let data = new Uint8Array([228, 184, 173, 230, 150, 135, 239, 188, 154, 240, 172, 128, 169, 233, 190, 160, 239, 188, 155, 230, 149, 176, 229, 173, 151, 239, 188, 154, 49, 50, 51, 239, 188, 155, 232, 139, 177, 230, 150, 135, 239, 188, 154, 97, 115, 100, 239, 188, 155, 230, 160, 135, 231, 130, 185, 239, 188, 154, 33, 64, 35, 37, 94, 38, 42, 40, 41, 95, 43, 58, 34, 39, 46, 44]);
describe('decode-utf8 test', () => {
    it('base', () => {
        const result = decodeUTF8(data);
        assert.equal(result, `中文：𬀩龠；数字：123；英文：asd；标点：!@#%^&*()_+:"'.,${''}`, result);
    });
});