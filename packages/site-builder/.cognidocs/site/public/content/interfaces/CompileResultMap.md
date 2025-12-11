# CompileResultMap

Interface of known results from compilers. Normally, compilers result in text ({@linkcode Value} of `vfile`). When you compile to something else, such as a React node (as in, `rehype-react`), you can augment this interface to include that type. ```ts import type {ReactNode} from 'somewhere' declare module 'unified' { interface CompileResultMap { // Register a new result (value is used, key should match it). ReactNode: ReactNode } } export {} // You may not need this, but it makes sure the file is a module. ``` Use {@linkcode CompileResults} to access the values.

## Properties
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `Uint8Array` | `Uint8Array` | No | - |
| `string` | `string` | No | - |