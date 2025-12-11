# CheckerT

Typed checker interface. Adds type guard functionality to a normal `Checker`. To use, cast a `Checker` to a `CheckerT<>` using the appropriate type. eg. import { MyInterface } from './my-interface'; import MyInterfaceTi from './my-interface-ti'; const checkers = createCheckers(MyInterfaceTi) as { MyInterface: CheckerT<MyInterface> }; TODO: - Enable `check()` and `strictCheck()` type assertion definitions once the functionality is correctly working in TypeScript. (https://github.com/microsoft/TypeScript/issues/36931)
