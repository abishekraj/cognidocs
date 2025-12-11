# createAutomaticRuntime

Create an automatic runtime.


**Return Type:** `{
    Fragment: null;
    jsxDEV: {
        /**
         * @overload
         * @param {null} type
         * @param {{children?: Child}} properties
         * @param {string | null | undefined} [key]
         * @returns {Root}
         *
         * @overload
         * @param {string} type
         * @param {JSXProps} properties
         * @param {string | null | undefined} [key]
         * @returns {Element}
         *
         * @param {string | null} type
         *   Element name or `null` to get a root.
         * @param {Properties & {children?: Child}} properties
         *   Properties.
         * @returns {Result}
         *   Result.
         */
        (type: null, properties: {
            children?: Child;
        }, key?: string | null | undefined): Root;
        /**
         * @overload
         * @param {null} type
         * @param {{children?: Child}} properties
         * @param {string | null | undefined} [key]
         * @returns {Root}
         *
         * @overload
         * @param {string} type
         * @param {JSXProps} properties
         * @param {string | null | undefined} [key]
         * @returns {Element}
         *
         * @param {string | null} type
         *   Element name or `null` to get a root.
         * @param {Properties & {children?: Child}} properties
         *   Properties.
         * @returns {Result}
         *   Result.
         */
        (type: string, properties: JSXProps, key?: string | null | undefined): Element;
    };
    jsxs: {
        /**
         * @overload
         * @param {null} type
         * @param {{children?: Child}} properties
         * @param {string | null | undefined} [key]
         * @returns {Root}
         *
         * @overload
         * @param {string} type
         * @param {JSXProps} properties
         * @param {string | null | undefined} [key]
         * @returns {Element}
         *
         * @param {string | null} type
         *   Element name or `null` to get a root.
         * @param {Properties & {children?: Child}} properties
         *   Properties.
         * @returns {Result}
         *   Result.
         */
        /**
         * @overload
         * @param {null} type
         * @param {{children?: Child}} properties
         * @param {string | null | undefined} [key]
         * @returns {Root}
         *
         * @overload
         * @param {string} type
         * @param {JSXProps} properties
         * @param {string | null | undefined} [key]
         * @returns {Element}
         *
         * @param {string | null} type
         *   Element name or `null` to get a root.
         * @param {Properties & {children?: Child}} properties
         *   Properties.
         * @returns {Result}
         *   Result.
         */
        (type: null, properties: {
            children?: Child;
        }, key?: string | null | undefined): Root;
        /**
         * @overload
         * @param {null} type
         * @param {{children?: Child}} properties
         * @param {string | null | undefined} [key]
         * @returns {Root}
         *
         * @overload
         * @param {string} type
         * @param {JSXProps} properties
         * @param {string | null | undefined} [key]
         * @returns {Element}
         *
         * @param {string | null} type
         *   Element name or `null` to get a root.
         * @param {Properties & {children?: Child}} properties
         *   Properties.
         * @returns {Result}
         *   Result.
         */
        /**
         * @overload
         * @param {null} type
         * @param {{children?: Child}} properties
         * @param {string | null | undefined} [key]
         * @returns {Root}
         *
         * @overload
         * @param {string} type
         * @param {JSXProps} properties
         * @param {string | null | undefined} [key]
         * @returns {Element}
         *
         * @param {string | null} type
         *   Element name or `null` to get a root.
         * @param {Properties & {children?: Child}} properties
         *   Properties.
         * @returns {Result}
         *   Result.
         */
        (type: string, properties: JSXProps, key?: string | null | undefined): Element;
    };
    jsx: {
        /**
         * @overload
         * @param {null} type
         * @param {{children?: Child}} properties
         * @param {string | null | undefined} [key]
         * @returns {Root}
         *
         * @overload
         * @param {string} type
         * @param {JSXProps} properties
         * @param {string | null | undefined} [key]
         * @returns {Element}
         *
         * @param {string | null} type
         *   Element name or `null` to get a root.
         * @param {Properties & {children?: Child}} properties
         *   Properties.
         * @returns {Result}
         *   Result.
         */
        /**
         * @overload
         * @param {null} type
         * @param {{children?: Child}} properties
         * @param {string | null | undefined} [key]
         * @returns {Root}
         *
         * @overload
         * @param {string} type
         * @param {JSXProps} properties
         * @param {string | null | undefined} [key]
         * @returns {Element}
         *
         * @param {string | null} type
         *   Element name or `null` to get a root.
         * @param {Properties & {children?: Child}} properties
         *   Properties.
         * @returns {Result}
         *   Result.
         */
        (type: null, properties: {
            children?: Child;
        }, key?: string | null | undefined): Root;
        /**
         * @overload
         * @param {null} type
         * @param {{children?: Child}} properties
         * @param {string | null | undefined} [key]
         * @returns {Root}
         *
         * @overload
         * @param {string} type
         * @param {JSXProps} properties
         * @param {string | null | undefined} [key]
         * @returns {Element}
         *
         * @param {string | null} type
         *   Element name or `null` to get a root.
         * @param {Properties & {children?: Child}} properties
         *   Properties.
         * @returns {Result}
         *   Result.
         */
        /**
         * @overload
         * @param {null} type
         * @param {{children?: Child}} properties
         * @param {string | null | undefined} [key]
         * @returns {Root}
         *
         * @overload
         * @param {string} type
         * @param {JSXProps} properties
         * @param {string | null | undefined} [key]
         * @returns {Element}
         *
         * @param {string | null} type
         *   Element name or `null` to get a root.
         * @param {Properties & {children?: Child}} properties
         *   Properties.
         * @returns {Result}
         *   Result.
         */
        (type: string, properties: JSXProps, key?: string | null | undefined): Element;
    };
}`

## Parameters
| Name | Type | Optional | Description |
| :--- | :--- | :------- | :---------- |
| `f` | `ReturnType<typeof CreateH>` | No | `h` function. |