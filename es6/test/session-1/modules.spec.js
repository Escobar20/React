import { Session1 } from '../../public/src/index';
import { Modules } from '../../public/src/session-1/';
import { foo } from '../../public/src/session-1/modules';
import { foo as otherFoo } from '../../public/src/session-1/modules';
import * as Yolo from '../../public/src/session-1';

describe('Modules', function () {
    it('Single import', function () {
        expect(Session1.Modules.foo).toEqual(
            foo
        );
        expect(Session1.Modules.foo).toEqual(
            Modules.foo
        );
    })
    it('Alias import and wildcard import', function () {
        expect(Yolo.Modules.foo).toEqual(Session1.Modules.foo);
        expect(Yolo.Modules.foo).toEqual(Modules.foo);
        expect(Yolo.Modules.foo).toEqual(otherFoo);
    })
})