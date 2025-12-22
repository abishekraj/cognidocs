// src/PreviewRenderer.tsx
import { useState, useCallback } from "react";

// src/ErrorBoundary.tsx
import { Component } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var ErrorBoundary = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: {
        message: error.message,
        stack: error.stack
      }
    };
  }
  componentDidCatch(error, errorInfo) {
    const previewError = {
      message: error.message,
      stack: error.stack
    };
    console.error("Preview Error:", error, errorInfo);
    if (this.props.onError) {
      this.props.onError(previewError);
    }
  }
  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error);
      }
      return /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            padding: "20px",
            backgroundColor: "#fee",
            border: "1px solid #fcc",
            borderRadius: "4px",
            color: "#c00"
          },
          children: [
            /* @__PURE__ */ jsx("h3", { style: { margin: "0 0 10px 0", fontSize: "16px", fontWeight: 600 }, children: "Preview Error" }),
            /* @__PURE__ */ jsx("p", { style: { margin: "0 0 10px 0", fontSize: "14px" }, children: this.state.error.message }),
            this.state.error.stack && /* @__PURE__ */ jsxs("details", { style: { fontSize: "12px", marginTop: "10px" }, children: [
              /* @__PURE__ */ jsx("summary", { style: { cursor: "pointer", fontWeight: 500 }, children: "Stack Trace" }),
              /* @__PURE__ */ jsx(
                "pre",
                {
                  style: {
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    overflow: "auto",
                    fontSize: "11px"
                  },
                  children: this.state.error.stack
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => this.setState({ hasError: false, error: null }),
                style: {
                  marginTop: "15px",
                  padding: "8px 16px",
                  backgroundColor: "#c00",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px"
                },
                children: "Reset Preview"
              }
            )
          ]
        }
      );
    }
    return this.props.children;
  }
};

// src/PreviewRenderer.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var PreviewRenderer = ({
  metadata,
  initialProps = {},
  // onPropsChange, // TODO: Will be used in Phase 6.2 with props editor
  onError,
  width = "100%",
  height = "400px"
}) => {
  const [state, setState] = useState({
    props: initialProps,
    error: null,
    loading: false
  });
  const handleError = useCallback(
    (error) => {
      setState((prev) => ({ ...prev, error, loading: false }));
      if (onError) {
        onError(error);
      }
    },
    [onError]
  );
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      style: {
        width,
        height,
        display: "flex",
        flexDirection: "column",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ jsxs2(
          "div",
          {
            style: {
              padding: "12px 16px",
              backgroundColor: "#f9fafb",
              borderBottom: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
                /* @__PURE__ */ jsx2("span", { style: { fontSize: "14px", fontWeight: 600, color: "#111827" }, children: metadata.componentName }),
                /* @__PURE__ */ jsx2(
                  "span",
                  {
                    style: {
                      fontSize: "12px",
                      padding: "2px 8px",
                      backgroundColor: "#dbeafe",
                      color: "#1e40af",
                      borderRadius: "4px"
                    },
                    children: metadata.framework
                  }
                )
              ] }),
              state.loading && /* @__PURE__ */ jsx2("span", { style: { fontSize: "12px", color: "#6b7280" }, children: "Loading..." })
            ]
          }
        ),
        /* @__PURE__ */ jsx2(
          "div",
          {
            style: {
              flex: 1,
              padding: "20px",
              backgroundColor: "#fff",
              overflow: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ jsx2(ErrorBoundary, { onError: handleError, children: /* @__PURE__ */ jsxs2(
              "div",
              {
                style: {
                  padding: "40px",
                  backgroundColor: "#f9fafb",
                  border: "2px dashed #d1d5db",
                  borderRadius: "8px",
                  textAlign: "center",
                  color: "#6b7280"
                },
                children: [
                  /* @__PURE__ */ jsx2("p", { style: { margin: 0, fontSize: "14px", fontWeight: 500 }, children: "Preview Placeholder" }),
                  /* @__PURE__ */ jsx2("p", { style: { margin: "8px 0 0 0", fontSize: "12px" }, children: "Component sandbox will be implemented in Phase 6.3" }),
                  /* @__PURE__ */ jsxs2("div", { style: { marginTop: "16px", fontSize: "12px", textAlign: "left" }, children: [
                    /* @__PURE__ */ jsx2("strong", { children: "Current Props:" }),
                    /* @__PURE__ */ jsx2(
                      "pre",
                      {
                        style: {
                          marginTop: "8px",
                          padding: "8px",
                          backgroundColor: "#fff",
                          border: "1px solid #e5e7eb",
                          borderRadius: "4px",
                          fontSize: "11px"
                        },
                        children: JSON.stringify(state.props, null, 2)
                      }
                    )
                  ] })
                ]
              }
            ) })
          }
        )
      ]
    }
  );
};

// src/hooks/usePreviewState.ts
import { useState as useState2, useCallback as useCallback2 } from "react";

// src/utils/propTypeParser.ts
function parseTypeString(typeString) {
  if (!typeString) {
    return "string";
  }
  const normalized = typeString.trim();
  if (normalized.includes("React.ReactNode") || normalized.includes("ReactNode") || normalized.includes("JSX.Element")) {
    return "react-node";
  }
  if (normalized.includes("=>") || normalized.startsWith("(") || normalized.includes("Function")) {
    return "function";
  }
  if (normalized.endsWith("[]") || normalized.startsWith("Array<")) {
    return "array";
  }
  if (normalized.includes("|")) {
    return "enum";
  }
  if (normalized.startsWith("{") || normalized.startsWith("interface")) {
    return "object";
  }
  if (normalized === "string") return "string";
  if (normalized === "number") return "number";
  if (normalized === "boolean") return "boolean";
  return "string";
}
function extractEnumValues(typeString) {
  if (!typeString.includes("|")) {
    return [];
  }
  return typeString.split("|").map((value) => value.trim()).map((value) => {
    if (value.startsWith("'") && value.endsWith("'") || value.startsWith('"') && value.endsWith('"')) {
      return value.slice(1, -1);
    }
    return value;
  }).filter(Boolean);
}
function propertyToPropEditorConfig(prop) {
  const editorType = parseTypeString(prop.type);
  const enumValues = editorType === "enum" && prop.type ? extractEnumValues(prop.type) : void 0;
  return {
    name: prop.name,
    type: editorType,
    defaultValue: prop.defaultValue,
    enumValues,
    required: prop.required ?? !prop.optional,
    description: prop.description
  };
}
function parseDefaultValue(defaultValue, editorType) {
  if (!defaultValue) {
    return getDefaultForType(editorType);
  }
  try {
    switch (editorType) {
      case "boolean":
        return defaultValue === "true";
      case "number":
        return Number(defaultValue);
      case "array":
      case "object":
        return JSON.parse(defaultValue);
      case "function":
        return void 0;
      case "react-node":
        return defaultValue.replace(/['"]/g, "");
      case "string":
      case "enum":
      default:
        return defaultValue.replace(/^['"]|['"]$/g, "");
    }
  } catch {
    return getDefaultForType(editorType);
  }
}
function getDefaultForType(editorType) {
  switch (editorType) {
    case "string":
      return "";
    case "number":
      return 0;
    case "boolean":
      return false;
    case "enum":
      return "";
    case "array":
      return [];
    case "object":
      return {};
    case "function":
      return void 0;
    case "react-node":
      return "";
    default:
      return "";
  }
}
function validatePropValue(value, config) {
  if (config.required && (value === void 0 || value === null || value === "")) {
    return { valid: false, error: `${config.name} is required` };
  }
  switch (config.type) {
    case "number":
      if (typeof value === "string" && value !== "") {
        const num = Number(value);
        if (isNaN(num)) {
          return { valid: false, error: "Must be a valid number" };
        }
      }
      break;
    case "enum":
      if (config.enumValues && value && !config.enumValues.includes(String(value))) {
        return {
          valid: false,
          error: `Must be one of: ${config.enumValues.join(", ")}`
        };
      }
      break;
    case "array":
      if (typeof value === "string") {
        try {
          const parsed = JSON.parse(value);
          if (!Array.isArray(parsed)) {
            return { valid: false, error: "Must be a valid JSON array" };
          }
        } catch {
          return { valid: false, error: "Must be valid JSON" };
        }
      }
      break;
    case "object":
      if (typeof value === "string") {
        try {
          JSON.parse(value);
        } catch {
          return { valid: false, error: "Must be valid JSON" };
        }
      }
      break;
  }
  return { valid: true };
}

// src/hooks/usePreviewState.ts
function usePreviewState(props, initialValues) {
  const getInitialState = useCallback2(() => {
    const state = {};
    props.forEach((prop) => {
      const config = propertyToPropEditorConfig(prop);
      const initialValue = initialValues?.[prop.name];
      const defaultValue = parseDefaultValue(prop.defaultValue, config.type);
      state[prop.name] = {
        value: initialValue ?? defaultValue,
        error: void 0
      };
    });
    return state;
  }, [props, initialValues]);
  const [propValues, setPropValues] = useState2(getInitialState);
  const updateProp = useCallback2((name, value) => {
    setPropValues((prev) => ({
      ...prev,
      [name]: {
        value,
        error: void 0
        // Clear error on update
      }
    }));
  }, []);
  const updateProps = useCallback2((newProps) => {
    setPropValues((prev) => {
      const updated = { ...prev };
      Object.entries(newProps).forEach(([name, value]) => {
        updated[name] = {
          value,
          error: void 0
        };
      });
      return updated;
    });
  }, []);
  const resetProps = useCallback2(() => {
    setPropValues(getInitialState());
  }, [getInitialState]);
  const getValues = useCallback2(() => {
    const values = {};
    Object.entries(propValues).forEach(([name, propValue]) => {
      values[name] = propValue.value;
    });
    return values;
  }, [propValues]);
  const hasErrors = useCallback2(() => {
    return Object.values(propValues).some((propValue) => !!propValue.error);
  }, [propValues]);
  return {
    propValues,
    updateProp,
    updateProps,
    resetProps,
    getValues,
    hasErrors
  };
}

// src/editors/StringEditor.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var StringEditor = ({
  config,
  value,
  onChange,
  error
}) => {
  const handleChange = (e) => {
    const target = e.target;
    onChange(target.value);
  };
  return /* @__PURE__ */ jsxs3("div", { style: { marginBottom: "16px" }, children: [
    /* @__PURE__ */ jsxs3(
      "label",
      {
        htmlFor: `prop-${config.name}`,
        style: {
          display: "block",
          marginBottom: "6px",
          fontSize: "13px",
          fontWeight: 500,
          color: "#374151"
        },
        children: [
          config.name,
          config.required && /* @__PURE__ */ jsx3("span", { style: { color: "#ef4444", marginLeft: "4px" }, children: "*" })
        ]
      }
    ),
    config.description && /* @__PURE__ */ jsx3("p", { style: { margin: "0 0 8px 0", fontSize: "12px", color: "#6b7280" }, children: config.description }),
    /* @__PURE__ */ jsx3(
      "input",
      {
        id: `prop-${config.name}`,
        type: "text",
        value: value || "",
        onChange: handleChange,
        placeholder: config.required ? "Required" : "Optional",
        style: {
          width: "100%",
          padding: "8px 12px",
          fontSize: "14px",
          border: error ? "1px solid #ef4444" : "1px solid #d1d5db",
          borderRadius: "6px",
          outline: "none",
          transition: "border-color 0.2s"
        }
      }
    ),
    error && /* @__PURE__ */ jsx3("p", { style: { margin: "6px 0 0 0", fontSize: "12px", color: "#ef4444" }, children: error })
  ] });
};

// src/editors/NumberEditor.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var NumberEditor = ({
  config,
  value,
  onChange,
  error
}) => {
  const handleChange = (e) => {
    const target = e.target;
    const val = target.value;
    if (val === "") {
      onChange(0);
    } else {
      const num = Number(val);
      if (!isNaN(num)) {
        onChange(num);
      }
    }
  };
  return /* @__PURE__ */ jsxs4("div", { style: { marginBottom: "16px" }, children: [
    /* @__PURE__ */ jsxs4(
      "label",
      {
        htmlFor: `prop-${config.name}`,
        style: {
          display: "block",
          marginBottom: "6px",
          fontSize: "13px",
          fontWeight: 500,
          color: "#374151"
        },
        children: [
          config.name,
          config.required && /* @__PURE__ */ jsx4("span", { style: { color: "#ef4444", marginLeft: "4px" }, children: "*" })
        ]
      }
    ),
    config.description && /* @__PURE__ */ jsx4("p", { style: { margin: "0 0 8px 0", fontSize: "12px", color: "#6b7280" }, children: config.description }),
    /* @__PURE__ */ jsx4(
      "input",
      {
        id: `prop-${config.name}`,
        type: "number",
        value,
        onChange: handleChange,
        placeholder: config.required ? "Required" : "0",
        style: {
          width: "100%",
          padding: "8px 12px",
          fontSize: "14px",
          border: error ? "1px solid #ef4444" : "1px solid #d1d5db",
          borderRadius: "6px",
          outline: "none",
          transition: "border-color 0.2s"
        }
      }
    ),
    error && /* @__PURE__ */ jsx4("p", { style: { margin: "6px 0 0 0", fontSize: "12px", color: "#ef4444" }, children: error })
  ] });
};

// src/editors/BooleanEditor.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var BooleanEditor = ({
  config,
  value,
  onChange
}) => {
  return /* @__PURE__ */ jsxs5("div", { style: { marginBottom: "16px" }, children: [
    /* @__PURE__ */ jsxs5(
      "label",
      {
        htmlFor: `prop-${config.name}`,
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: 500,
          color: "#374151"
        },
        children: [
          /* @__PURE__ */ jsx5(
            "input",
            {
              id: `prop-${config.name}`,
              type: "checkbox",
              checked: !!value,
              onChange: (e) => onChange(e.target.checked),
              style: {
                width: "16px",
                height: "16px",
                cursor: "pointer",
                accentColor: "#3b82f6"
              }
            }
          ),
          /* @__PURE__ */ jsx5("span", { children: config.name }),
          config.required && /* @__PURE__ */ jsx5("span", { style: { color: "#ef4444", marginLeft: "-4px" }, children: "*" })
        ]
      }
    ),
    config.description && /* @__PURE__ */ jsx5("p", { style: { margin: "6px 0 0 24px", fontSize: "12px", color: "#6b7280" }, children: config.description })
  ] });
};

// src/editors/EnumEditor.tsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var EnumEditor = ({
  config,
  value,
  onChange,
  error
}) => {
  const options = config.enumValues || [];
  return /* @__PURE__ */ jsxs6("div", { style: { marginBottom: "16px" }, children: [
    /* @__PURE__ */ jsxs6(
      "label",
      {
        htmlFor: `prop-${config.name}`,
        style: {
          display: "block",
          marginBottom: "6px",
          fontSize: "13px",
          fontWeight: 500,
          color: "#374151"
        },
        children: [
          config.name,
          config.required && /* @__PURE__ */ jsx6("span", { style: { color: "#ef4444", marginLeft: "4px" }, children: "*" })
        ]
      }
    ),
    config.description && /* @__PURE__ */ jsx6("p", { style: { margin: "0 0 8px 0", fontSize: "12px", color: "#6b7280" }, children: config.description }),
    /* @__PURE__ */ jsxs6(
      "select",
      {
        id: `prop-${config.name}`,
        value: value || "",
        onChange: (e) => onChange(e.target.value),
        style: {
          width: "100%",
          padding: "8px 12px",
          fontSize: "14px",
          border: error ? "1px solid #ef4444" : "1px solid #d1d5db",
          borderRadius: "6px",
          outline: "none",
          backgroundColor: "#fff",
          cursor: "pointer",
          transition: "border-color 0.2s"
        },
        children: [
          !config.required && /* @__PURE__ */ jsx6("option", { value: "", children: "-- Select --" }),
          options.map((option) => /* @__PURE__ */ jsx6("option", { value: option, children: option }, option))
        ]
      }
    ),
    error && /* @__PURE__ */ jsx6("p", { style: { margin: "6px 0 0 0", fontSize: "12px", color: "#ef4444" }, children: error }),
    options.length === 0 && /* @__PURE__ */ jsx6("p", { style: { margin: "6px 0 0 0", fontSize: "12px", color: "#f59e0b" }, children: "No options available" })
  ] });
};

// src/editors/ObjectEditor.tsx
import { useState as useState3 } from "react";
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
var ObjectEditor = ({
  config,
  value,
  onChange,
  error
}) => {
  const [jsonString, setJsonString] = useState3(
    () => typeof value === "string" ? value : JSON.stringify(value, null, 2)
  );
  const [parseError, setParseError] = useState3();
  const handleChange = (e) => {
    const newValue = e.target.value;
    setJsonString(newValue);
    try {
      const parsed = JSON.parse(newValue);
      setParseError(void 0);
      onChange(parsed);
    } catch (err) {
      setParseError("Invalid JSON");
    }
  };
  const handleFormat = () => {
    try {
      const parsed = JSON.parse(jsonString);
      const formatted = JSON.stringify(parsed, null, 2);
      setJsonString(formatted);
      setParseError(void 0);
      onChange(parsed);
    } catch {
      setParseError("Cannot format invalid JSON");
    }
  };
  const displayError = error || parseError;
  return /* @__PURE__ */ jsxs7("div", { style: { marginBottom: "16px" }, children: [
    /* @__PURE__ */ jsxs7("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }, children: [
      /* @__PURE__ */ jsxs7(
        "label",
        {
          htmlFor: `prop-${config.name}`,
          style: {
            fontSize: "13px",
            fontWeight: 500,
            color: "#374151"
          },
          children: [
            config.name,
            config.required && /* @__PURE__ */ jsx7("span", { style: { color: "#ef4444", marginLeft: "4px" }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx7(
        "button",
        {
          type: "button",
          onClick: handleFormat,
          style: {
            padding: "4px 8px",
            fontSize: "11px",
            backgroundColor: "#f3f4f6",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            cursor: "pointer",
            color: "#374151"
          },
          children: "Format JSON"
        }
      )
    ] }),
    config.description && /* @__PURE__ */ jsx7("p", { style: { margin: "0 0 8px 0", fontSize: "12px", color: "#6b7280" }, children: config.description }),
    /* @__PURE__ */ jsx7(
      "textarea",
      {
        id: `prop-${config.name}`,
        value: jsonString,
        onChange: handleChange,
        placeholder: '{ "key": "value" }',
        rows: 6,
        style: {
          width: "100%",
          padding: "8px 12px",
          fontSize: "13px",
          fontFamily: "monospace",
          border: displayError ? "1px solid #ef4444" : "1px solid #d1d5db",
          borderRadius: "6px",
          outline: "none",
          resize: "vertical",
          transition: "border-color 0.2s"
        }
      }
    ),
    displayError && /* @__PURE__ */ jsx7("p", { style: { margin: "6px 0 0 0", fontSize: "12px", color: "#ef4444" }, children: displayError })
  ] });
};

// src/editors/ArrayEditor.tsx
import { useState as useState4 } from "react";
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
var ArrayEditor = ({
  config,
  value,
  onChange,
  error
}) => {
  const [jsonString, setJsonString] = useState4(
    () => typeof value === "string" ? value : JSON.stringify(value, null, 2)
  );
  const [parseError, setParseError] = useState4();
  const handleChange = (e) => {
    const newValue = e.target.value;
    setJsonString(newValue);
    try {
      const parsed = JSON.parse(newValue);
      if (!Array.isArray(parsed)) {
        setParseError("Must be an array");
        return;
      }
      setParseError(void 0);
      onChange(parsed);
    } catch (err) {
      setParseError("Invalid JSON");
    }
  };
  const handleFormat = () => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!Array.isArray(parsed)) {
        setParseError("Must be an array");
        return;
      }
      const formatted = JSON.stringify(parsed, null, 2);
      setJsonString(formatted);
      setParseError(void 0);
      onChange(parsed);
    } catch {
      setParseError("Cannot format invalid JSON");
    }
  };
  const displayError = error || parseError;
  return /* @__PURE__ */ jsxs8("div", { style: { marginBottom: "16px" }, children: [
    /* @__PURE__ */ jsxs8("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }, children: [
      /* @__PURE__ */ jsxs8(
        "label",
        {
          htmlFor: `prop-${config.name}`,
          style: {
            fontSize: "13px",
            fontWeight: 500,
            color: "#374151"
          },
          children: [
            config.name,
            config.required && /* @__PURE__ */ jsx8("span", { style: { color: "#ef4444", marginLeft: "4px" }, children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx8(
        "button",
        {
          type: "button",
          onClick: handleFormat,
          style: {
            padding: "4px 8px",
            fontSize: "11px",
            backgroundColor: "#f3f4f6",
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            cursor: "pointer",
            color: "#374151"
          },
          children: "Format JSON"
        }
      )
    ] }),
    config.description && /* @__PURE__ */ jsx8("p", { style: { margin: "0 0 8px 0", fontSize: "12px", color: "#6b7280" }, children: config.description }),
    /* @__PURE__ */ jsx8(
      "textarea",
      {
        id: `prop-${config.name}`,
        value: jsonString,
        onChange: handleChange,
        placeholder: '["item1", "item2"]',
        rows: 5,
        style: {
          width: "100%",
          padding: "8px 12px",
          fontSize: "13px",
          fontFamily: "monospace",
          border: displayError ? "1px solid #ef4444" : "1px solid #d1d5db",
          borderRadius: "6px",
          outline: "none",
          resize: "vertical",
          transition: "border-color 0.2s"
        }
      }
    ),
    displayError && /* @__PURE__ */ jsx8("p", { style: { margin: "6px 0 0 0", fontSize: "12px", color: "#ef4444" }, children: displayError })
  ] });
};

// src/PropsEditor.tsx
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
var PropsEditor = ({
  props,
  initialValues,
  onChange,
  onReset
}) => {
  const { propValues, updateProp, resetProps, getValues, hasErrors } = usePreviewState(
    props,
    initialValues
  );
  const handlePropChange = (name, value) => {
    updateProp(name, value);
    if (onChange) {
      const allValues = getValues();
      allValues[name] = value;
      onChange(allValues);
    }
  };
  const handleReset = () => {
    resetProps();
    if (onReset) {
      onReset();
    }
    if (onChange) {
      onChange(getValues());
    }
  };
  const renderEditor = (prop) => {
    const config = propertyToPropEditorConfig(prop);
    const propValue = propValues[prop.name];
    const value = propValue?.value;
    const validation = validatePropValue(value, config);
    const error = validation.valid ? void 0 : validation.error;
    const commonProps = {
      config,
      error,
      onChange: (newValue) => handlePropChange(prop.name, newValue)
    };
    switch (config.type) {
      case "string":
        return /* @__PURE__ */ jsx9(StringEditor, { ...commonProps, value: String(value || "") });
      case "number":
        return /* @__PURE__ */ jsx9(NumberEditor, { ...commonProps, value: Number(value || 0) });
      case "boolean":
        return /* @__PURE__ */ jsx9(BooleanEditor, { ...commonProps, value: Boolean(value) });
      case "enum":
        return /* @__PURE__ */ jsx9(EnumEditor, { ...commonProps, value: String(value || "") });
      case "object":
        return /* @__PURE__ */ jsx9(
          ObjectEditor,
          {
            ...commonProps,
            value: value || {}
          }
        );
      case "array":
        return /* @__PURE__ */ jsx9(
          ArrayEditor,
          {
            ...commonProps,
            value: value || []
          }
        );
      case "function":
        return /* @__PURE__ */ jsxs9("div", { style: { marginBottom: "16px" }, children: [
          /* @__PURE__ */ jsxs9("label", { style: { fontSize: "13px", fontWeight: 500, color: "#6b7280" }, children: [
            config.name,
            " (function)"
          ] }),
          /* @__PURE__ */ jsx9("p", { style: { margin: "6px 0 0 0", fontSize: "12px", color: "#6b7280" }, children: "Function props are not editable" })
        ] });
      case "react-node":
        return /* @__PURE__ */ jsx9(StringEditor, { ...commonProps, value: String(value || "") });
      default:
        return /* @__PURE__ */ jsx9(StringEditor, { ...commonProps, value: String(value || "") });
    }
  };
  if (props.length === 0) {
    return /* @__PURE__ */ jsx9("div", { style: { padding: "20px", textAlign: "center", color: "#6b7280" }, children: /* @__PURE__ */ jsx9("p", { style: { margin: 0, fontSize: "14px" }, children: "No props to configure" }) });
  }
  return /* @__PURE__ */ jsxs9(
    "div",
    {
      style: {
        padding: "16px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        border: "1px solid #e5e7eb",
        maxHeight: "600px",
        overflowY: "auto"
      },
      children: [
        /* @__PURE__ */ jsxs9("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }, children: [
          /* @__PURE__ */ jsx9("h3", { style: { margin: 0, fontSize: "16px", fontWeight: 600, color: "#111827" }, children: "Props" }),
          /* @__PURE__ */ jsx9(
            "button",
            {
              type: "button",
              onClick: handleReset,
              style: {
                padding: "6px 12px",
                fontSize: "13px",
                backgroundColor: "#f3f4f6",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                cursor: "pointer",
                color: "#374151",
                fontWeight: 500
              },
              children: "Reset"
            }
          )
        ] }),
        /* @__PURE__ */ jsx9("div", { children: props.map((prop) => /* @__PURE__ */ jsx9("div", { children: renderEditor(prop) }, prop.name)) }),
        hasErrors() && /* @__PURE__ */ jsx9(
          "div",
          {
            style: {
              marginTop: "16px",
              padding: "12px",
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "6px"
            },
            children: /* @__PURE__ */ jsx9("p", { style: { margin: 0, fontSize: "13px", color: "#991b1b", fontWeight: 500 }, children: "Please fix validation errors above" })
          }
        )
      ]
    }
  );
};

// src/sandbox/PreviewSandbox.tsx
import { useEffect, useRef, useState as useState5, useCallback as useCallback3 } from "react";

// src/sandbox/securityPolicies.ts
var CSP_POLICY = [
  "default-src 'none'",
  "script-src 'unsafe-inline' 'unsafe-eval' https://unpkg.com",
  // Allow inline scripts and CDN for React
  "style-src 'unsafe-inline'",
  // Allow inline styles for component styling
  "img-src data: https:",
  // Allow data URLs and HTTPS images
  "font-src data: https:",
  // Allow fonts
  "connect-src 'none'"
  // No external connections
].join("; ");
var SANDBOX_ATTRIBUTES = [
  "allow-scripts",
  // Required for executing component code
  "allow-same-origin"
  // Required for React DOM rendering
].join(" ");
var EXECUTION_TIMEOUT = 5e3;
function generateSandboxHTML(code) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="${CSP_POLICY}">
  <title>Component Preview</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 16px;
      background: #ffffff;
    }
    #root {
      width: 100%;
      height: 100%;
    }
    .error-container {
      padding: 16px;
      background: #fee;
      border: 1px solid #fcc;
      border-radius: 4px;
      color: #c00;
      font-family: monospace;
      font-size: 13px;
    }
    .error-title {
      font-weight: bold;
      margin-bottom: 8px;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script>
    // Sandbox runtime code
    ${code}
  </script>
</body>
</html>`;
}
function validateMessageOrigin(origin, allowedOrigins) {
  if (origin.startsWith("http://localhost") || origin.startsWith("http://127.0.0.1")) {
    return true;
  }
  return allowedOrigins.some((allowed) => origin === allowed || origin.endsWith(allowed));
}
function sanitizeErrorMessage(message) {
  return message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;");
}

// src/sandbox/sandboxRuntime.ts
function generateRuntimeCode(componentCode, componentName, props) {
  return `
(function() {
  'use strict';

  // Global error handler
  window.addEventListener('error', function(event) {
    sendError({
      message: event.message,
      stack: event.error?.stack,
      line: event.lineno,
      column: event.colno,
    });
    event.preventDefault();
  });

  window.addEventListener('unhandledrejection', function(event) {
    sendError({
      message: 'Unhandled Promise Rejection: ' + event.reason,
      stack: event.reason?.stack,
    });
    event.preventDefault();
  });

  // Communication with parent window
  function sendMessage(message) {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage(message, '*');
    }
  }

  function sendError(error) {
    sendMessage({
      type: 'PREVIEW_ERROR',
      payload: error,
    });
  }

  function sendReady() {
    sendMessage({
      type: 'PREVIEW_READY',
      payload: null,
    });
  }

  function sendRenderComplete() {
    sendMessage({
      type: 'PREVIEW_RENDER',
      payload: null,
    });
  }

  // Listen for prop updates from parent
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'UPDATE_PROPS') {
      try {
        renderComponent(event.data.payload);
      } catch (error) {
        sendError({
          message: error.message,
          stack: error.stack,
        });
      }
    }
  });

  // Component code
  try {
    ${componentCode}

    // Get React and ReactDOM from global scope (loaded via CDN)
    const React = window.React;
    const ReactDOM = window.ReactDOM;

    if (!React || !ReactDOM) {
      throw new Error('React libraries not loaded');
    }

    // Get the component from global scope
    const Component = window['${componentName}'];

    if (!Component) {
      throw new Error('Component "${componentName}" not found. Make sure it is exported.');
    }

    // Render function
    function renderComponent(props) {
      const root = document.getElementById('root');
      if (!root) {
        throw new Error('Root element not found');
      }

      try {
        // Clear previous render
        ReactDOM.unmountComponentAtNode(root);

        // Create element and render
        const element = React.createElement(Component, props);
        ReactDOM.render(element, root);

        sendRenderComplete();
      } catch (error) {
        // Show error in the preview
        root.innerHTML = \`
          <div class="error-container">
            <div class="error-title">Render Error:</div>
            <div>\${error.message}</div>
          </div>
        \`;
        throw error;
      }
    }

    // Initial render with props
    const initialProps = ${JSON.stringify(props)};
    renderComponent(initialProps);
    sendReady();

  } catch (error) {
    sendError({
      message: error.message,
      stack: error.stack,
    });

    // Show error in preview
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = \`
        <div class="error-container">
          <div class="error-title">Component Error:</div>
          <div>\${error.message}</div>
        </div>
      \`;
    }
  }
})();
  `.trim();
}
function parsePreviewError(payload) {
  if (typeof payload === "object" && payload !== null) {
    const error = payload;
    return {
      message: error.message || "Unknown error",
      stack: error.stack,
      line: error.line,
      column: error.column
    };
  }
  return {
    message: String(payload)
  };
}
function isSandboxMessage(data) {
  if (typeof data !== "object" || data === null) {
    return false;
  }
  const msg = data;
  const validTypes = ["UPDATE_PROPS", "PREVIEW_ERROR", "PREVIEW_READY", "PREVIEW_RENDER"];
  return typeof msg.type === "string" && validTypes.includes(msg.type);
}
function createExecutionTimeout(timeoutMs) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Preview execution timed out after ${timeoutMs}ms`));
    }, timeoutMs);
  });
}

// src/sandbox/PreviewSandbox.tsx
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
var PreviewSandbox = ({
  componentCode,
  componentName,
  props,
  onReady,
  onRender,
  onError,
  height = "400px",
  allowedOrigins = []
}) => {
  const iframeRef = useRef(null);
  const [isReady, setIsReady] = useState5(false);
  const [hasError, setHasError] = useState5(false);
  const timeoutRef = useRef(null);
  const handleMessage = useCallback3(
    (event) => {
      if (!validateMessageOrigin(event.origin, allowedOrigins)) {
        console.warn("Rejected message from untrusted origin:", event.origin);
        return;
      }
      if (!isSandboxMessage(event.data)) {
        return;
      }
      const message = event.data;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      switch (message.type) {
        case "PREVIEW_READY":
          setIsReady(true);
          setHasError(false);
          onReady?.();
          break;
        case "PREVIEW_RENDER":
          onRender?.();
          break;
        case "PREVIEW_ERROR": {
          const error = parsePreviewError(message.payload);
          setHasError(true);
          onError?.(error);
          break;
        }
      }
    },
    [allowedOrigins, onReady, onRender, onError]
  );
  const updateProps = useCallback3((newProps) => {
    if (!iframeRef.current?.contentWindow) {
      return;
    }
    const message = {
      type: "UPDATE_PROPS",
      payload: newProps
    };
    iframeRef.current.contentWindow.postMessage(message, "*");
  }, []);
  useEffect(() => {
    window.addEventListener("message", handleMessage);
    timeoutRef.current = setTimeout(() => {
      const error = {
        message: `Component failed to render within ${EXECUTION_TIMEOUT}ms`
      };
      setHasError(true);
      onError?.(error);
    }, EXECUTION_TIMEOUT);
    return () => {
      window.removeEventListener("message", handleMessage);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleMessage, onError]);
  useEffect(() => {
    if (isReady && !hasError) {
      updateProps(props);
    }
  }, [props, isReady, hasError, updateProps]);
  const sandboxContent = useCallback3(() => {
    const runtimeCode = generateRuntimeCode(componentCode, componentName, props);
    return generateSandboxHTML(runtimeCode);
  }, [componentCode, componentName, props]);
  const iframeSrc = useCallback3(() => {
    const html = sandboxContent();
    const blob = new Blob([html], { type: "text/html" });
    return URL.createObjectURL(blob);
  }, [sandboxContent]);
  useEffect(() => {
    const src = iframeSrc();
    return () => {
      URL.revokeObjectURL(src);
    };
  }, [iframeSrc]);
  return /* @__PURE__ */ jsxs10(
    "div",
    {
      style: {
        width: "100%",
        height,
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#fff"
      },
      children: [
        !isReady && !hasError && /* @__PURE__ */ jsx10(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f9fafb",
              color: "#6b7280",
              fontSize: "14px",
              fontFamily: "sans-serif"
            },
            children: "Loading preview..."
          }
        ),
        /* @__PURE__ */ jsx10(
          "iframe",
          {
            ref: iframeRef,
            src: iframeSrc(),
            sandbox: SANDBOX_ATTRIBUTES,
            title: "Component Preview Sandbox",
            style: {
              width: "100%",
              height: "100%",
              border: "none",
              display: isReady || hasError ? "block" : "none"
            }
          }
        )
      ]
    }
  );
};

// src/utils/codeGenerator.ts
function propValueToCode(value) {
  if (value === null) return "null";
  if (value === void 0) return "undefined";
  if (typeof value === "string") {
    const escaped = value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
    return `"${escaped}"`;
  }
  if (typeof value === "number") {
    return String(value);
  }
  if (typeof value === "boolean") {
    return String(value);
  }
  if (typeof value === "function") {
    return value.toString();
  }
  if (Array.isArray(value)) {
    const items = value.map((item) => propValueToCode(item)).join(", ");
    return `[${items}]`;
  }
  if (typeof value === "object") {
    const entries = Object.entries(value).map(([key, val]) => {
      const validKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key);
      const keyStr = validKey ? key : `"${key}"`;
      return `${keyStr}: ${propValueToCode(val)}`;
    }).join(", ");
    return `{ ${entries} }`;
  }
  return "undefined";
}
function generatePropsObject(props) {
  if (Object.keys(props).length === 0) {
    return "{}";
  }
  const entries = Object.entries(props).map(([key, value]) => {
    const validKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key);
    const keyStr = validKey ? key : `"${key}"`;
    const valueStr = propValueToCode(value);
    return `  ${keyStr}: ${valueStr}`;
  }).join(",\n");
  return `{
${entries}
}`;
}
function generateComponentCode(componentName, componentSource) {
  return `
// Component source code
${componentSource}

// Export component to global scope for sandbox
window['${componentName}'] = ${componentName};

// Log for debugging
console.log('Component loaded:', '${componentName}');
`.trim();
}
function generateExecutableCode(componentName, componentSource, dependencies) {
  let code = generateComponentCode(componentName, componentSource);
  if (dependencies && dependencies.length > 0) {
    const imports = dependencies.map((dep) => `// Dependency: ${dep}`).join("\n");
    code = `${imports}

${code}`;
  }
  return code;
}
function validateComponentSource(source, componentName) {
  const errors = [];
  if (!source || source.trim().length === 0) {
    errors.push("Component source code is empty");
  }
  const hasComponentDeclaration = source.includes(`function ${componentName}`) || source.includes(`const ${componentName}`) || source.includes(`let ${componentName}`) || source.includes(`class ${componentName}`);
  if (!hasComponentDeclaration) {
    errors.push(`Component "${componentName}" not found in source code`);
  }
  const hasExport = source.includes(`export default ${componentName}`) || source.includes(`export { ${componentName}`) || source.includes(`export const ${componentName}`) || source.includes(`export function ${componentName}`) || source.includes(`export class ${componentName}`);
  if (!hasExport) {
    errors.push(`Component "${componentName}" is not exported`);
  }
  return {
    valid: errors.length === 0,
    errors
  };
}
function extractComponentName(source) {
  const defaultExportMatch = source.match(/export\s+default\s+(\w+)/);
  if (defaultExportMatch) {
    return defaultExportMatch[1];
  }
  const namedFunctionMatch = source.match(/export\s+function\s+(\w+)/);
  if (namedFunctionMatch) {
    return namedFunctionMatch[1];
  }
  const namedConstMatch = source.match(/export\s+const\s+(\w+)/);
  if (namedConstMatch) {
    return namedConstMatch[1];
  }
  const namedClassMatch = source.match(/export\s+class\s+(\w+)/);
  if (namedClassMatch) {
    return namedClassMatch[1];
  }
  return null;
}
function stripTypeScript(source) {
  let code = source;
  code = code.replace(/(\w+)\s*:\s*[\w<>[\]|&\s,{}]+(?=\s*[,)])/g, "$1");
  code = code.replace(/\)\s*:\s*[\w<>[\]|&\s,{}]+\s*{/g, ") {");
  code = code.replace(/\)\s*:\s*[\w<>[\]|&\s,{}]+\s*=>/g, ") =>");
  code = code.replace(/interface\s+\w+\s*{[^}]*}/g, "");
  code = code.replace(/type\s+\w+\s*=\s*[^;]+;/g, "");
  code = code.replace(/<[\w<>[\]|&\s,{}]+>/g, "");
  code = code.replace(/\s+as\s+[\w<>[\]|&\s,{}]+/g, "");
  code = code.replace(/import\s+type\s+{[^}]*}\s+from\s+['"][^'"]+['"]/g, "");
  return code;
}
function generateMockPropValue(prop) {
  const type = prop.type?.toLowerCase() || "string";
  if (type.includes("string")) {
    return prop.defaultValue || "Sample text";
  }
  if (type.includes("number")) {
    return prop.defaultValue !== void 0 ? Number(prop.defaultValue) : 42;
  }
  if (type.includes("boolean") || type.includes("bool")) {
    return prop.defaultValue !== void 0 ? Boolean(prop.defaultValue) : true;
  }
  if (type.includes("[]") || type.includes("array")) {
    return [];
  }
  if (type.includes("object") || type === "any") {
    return {};
  }
  if (type.includes("function") || type.includes("=>")) {
    return () => console.log("Mock function called");
  }
  if (type.includes("reactnode") || type.includes("react.reactnode")) {
    return null;
  }
  return void 0;
}
function generateDefaultProps(props) {
  const result = {};
  for (const prop of props) {
    result[prop.name] = generateMockPropValue(prop);
  }
  return result;
}

// src/utils/dependencyResolver.ts
var DEFAULT_CDN_CONFIGS = [
  {
    package: "react",
    url: "https://unpkg.com/react@18/umd/react.development.js",
    global: "React"
  },
  {
    package: "react-dom",
    url: "https://unpkg.com/react-dom@18/umd/react-dom.development.js",
    global: "ReactDOM"
  },
  {
    package: "prop-types",
    url: "https://unpkg.com/prop-types@15/prop-types.js",
    global: "PropTypes"
  }
];
function extractImports(source) {
  const dependencies = [];
  const importRegex = /import\s+(?:(?:(\w+)|{([^}]+)}|\*\s+as\s+(\w+))\s+from\s+)?['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(source)) !== null) {
    const [raw, defaultImport, namedImports, namespaceImport, packageName] = match;
    const specifiers = namedImports ? namedImports.split(",").map((s) => s.trim().split(/\s+as\s+/)[0]) : [];
    dependencies.push({
      name: packageName,
      specifiers,
      defaultImport,
      namespaceImport,
      isRelative: packageName.startsWith(".") || packageName.startsWith("/"),
      raw
    });
  }
  return dependencies;
}
function resolveToCDN(packageName, cdnConfigs = DEFAULT_CDN_CONFIGS) {
  return cdnConfigs.find((config) => config.package === packageName) || null;
}
function generateCDNScriptTags(dependencies) {
  const scripts = [];
  for (const dep of dependencies) {
    const cdn = resolveToCDN(dep);
    if (cdn) {
      scripts.push(`<script crossorigin src="${cdn.url}"></script>`);
    }
  }
  return scripts.join("\n");
}
function replaceImportsWithGlobals(source, cdnConfigs = DEFAULT_CDN_CONFIGS) {
  let code = source;
  const imports = extractImports(source);
  for (const imp of imports) {
    if (imp.isRelative) {
      continue;
    }
    const cdn = resolveToCDN(imp.name, cdnConfigs);
    if (!cdn) {
      code = code.replace(imp.raw, `// Unresolved dependency: ${imp.name}`);
      continue;
    }
    const replacements = [];
    if (imp.defaultImport) {
      replacements.push(`const ${imp.defaultImport} = window.${cdn.global};`);
    }
    if (imp.namespaceImport) {
      replacements.push(`const ${imp.namespaceImport} = window.${cdn.global};`);
    }
    if (imp.specifiers.length > 0) {
      const destructure = imp.specifiers.join(", ");
      replacements.push(`const { ${destructure} } = window.${cdn.global};`);
    }
    code = code.replace(imp.raw, replacements.join("\n"));
  }
  return code;
}
function checkDependencies(dependencies) {
  const available = [];
  const missing = [];
  for (const dep of dependencies) {
    const cdn = resolveToCDN(dep);
    if (cdn) {
      available.push(dep);
    } else {
      missing.push(dep);
    }
  }
  return { available, missing };
}
function generateFallbackCode(missingDeps) {
  return `
// Missing dependencies: ${missingDeps.join(", ")}
console.warn('The following dependencies are not available:', ${JSON.stringify(missingDeps)});

// Create placeholder objects for missing dependencies
${missingDeps.map(
    (dep) => `
const ${dep.replace(/[^a-zA-Z0-9]/g, "_")} = {
  __placeholder__: true,
  __name__: '${dep}',
};
`
  ).join("\n")}
`.trim();
}
function processComponentSource(source, cdnConfigs) {
  const dependencies = extractImports(source);
  const externalDeps = dependencies.filter((d) => !d.isRelative).map((d) => d.name);
  const { missing } = checkDependencies(externalDeps);
  let processedSource = replaceImportsWithGlobals(source, cdnConfigs);
  if (missing.length > 0) {
    processedSource = `${generateFallbackCode(missing)}

${processedSource}`;
  }
  return {
    processedSource,
    dependencies,
    missing
  };
}
function bundleComponents(components) {
  const processed = components.map((comp) => {
    const { processedSource } = processComponentSource(comp.source);
    return `
// Component: ${comp.name}
${processedSource}

// Export to global scope
window['${comp.name}'] = ${comp.name};
    `.trim();
  });
  return processed.join("\n\n");
}
function resolveRelativeImports(source, componentMap) {
  const imports = extractImports(source);
  const resolved = /* @__PURE__ */ new Map();
  for (const imp of imports) {
    if (imp.isRelative) {
      const componentName = componentMap.get(imp.name);
      if (componentName) {
        resolved.set(imp.name, componentName);
      }
    }
  }
  return resolved;
}
function getRequiredCDNScripts(source) {
  const imports = extractImports(source);
  const externalDeps = imports.filter((d) => !d.isRelative).map((d) => d.name);
  return externalDeps.map((dep) => resolveToCDN(dep)).filter((cdn) => cdn !== null);
}

// src/hooks/useComponentLoader.ts
import { useState as useState6, useEffect as useEffect2, useCallback as useCallback4 } from "react";
function useComponentLoader(options) {
  const {
    metadata,
    customSource,
    stripTypes = true,
    autoGenerateProps = true
  } = options;
  const [state, setState] = useState6({
    processedSource: null,
    componentName: null,
    defaultProps: {},
    dependencies: [],
    missingDependencies: [],
    loading: true,
    error: null,
    ready: false
  });
  const loadComponent = useCallback4(
    async (source) => {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      try {
        let componentName = metadata.componentName;
        if (!componentName) {
          const extracted = extractComponentName(source);
          if (!extracted) {
            throw new Error("Could not determine component name from source code");
          }
          componentName = extracted;
        }
        const validation = validateComponentSource(source, componentName);
        if (!validation.valid) {
          throw new Error(`Component validation failed:
${validation.errors.join("\n")}`);
        }
        let processedSource = stripTypes ? stripTypeScript(source) : source;
        const { processedSource: finalSource, dependencies, missing } = processComponentSource(
          processedSource
        );
        const defaultProps = autoGenerateProps ? generateDefaultProps(metadata.props) : {};
        setState({
          processedSource: finalSource,
          componentName,
          defaultProps,
          dependencies,
          missingDependencies: missing,
          loading: false,
          error: null,
          ready: true
        });
      } catch (err) {
        const error = {
          message: err instanceof Error ? err.message : String(err),
          stack: err instanceof Error ? err.stack : void 0
        };
        setState({
          processedSource: null,
          componentName: null,
          defaultProps: {},
          dependencies: [],
          missingDependencies: [],
          loading: false,
          error,
          ready: false
        });
      }
    },
    [metadata, stripTypes, autoGenerateProps]
  );
  const loadFromFile = useCallback4(async (filePath) => {
    try {
      throw new Error(
        `File loading not implemented. Please provide source code directly via customSource option. File: ${filePath}`
      );
    } catch (err) {
      const error = {
        message: err instanceof Error ? err.message : String(err)
      };
      setState({
        processedSource: null,
        componentName: null,
        defaultProps: {},
        dependencies: [],
        missingDependencies: [],
        loading: false,
        error,
        ready: false
      });
    }
  }, []);
  const reload = useCallback4(() => {
    if (customSource) {
      loadComponent(customSource);
    } else if (metadata.filePath) {
      loadFromFile(metadata.filePath);
    } else {
      setState((prev) => ({
        ...prev,
        error: {
          message: "No source code or file path provided"
        },
        loading: false
      }));
    }
  }, [customSource, metadata.filePath, loadComponent, loadFromFile]);
  const setSource = useCallback4(
    (source) => {
      loadComponent(source);
    },
    [loadComponent]
  );
  useEffect2(() => {
    reload();
  }, [reload]);
  return {
    ...state,
    reload,
    setSource
  };
}
function useSimpleComponentLoader(componentName, source, options = {}) {
  const { stripTypes = true, onError } = options;
  const [state, setState] = useState6({
    processedSource: null,
    dependencies: [],
    missing: [],
    loading: true,
    error: null
  });
  useEffect2(() => {
    try {
      const validation = validateComponentSource(source, componentName);
      if (!validation.valid) {
        throw new Error(validation.errors.join("\n"));
      }
      let processed = stripTypes ? stripTypeScript(source) : source;
      const result = processComponentSource(processed);
      const deps = result.dependencies.filter((d) => !d.isRelative).map((d) => d.name);
      setState({
        processedSource: result.processedSource,
        dependencies: deps,
        missing: result.missing,
        loading: false,
        error: null
      });
    } catch (err) {
      const error = {
        message: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : void 0
      };
      setState({
        processedSource: null,
        dependencies: [],
        missing: [],
        loading: false,
        error
      });
      if (onError) {
        onError(error);
      }
    }
  }, [source, componentName, stripTypes, onError]);
  return state;
}
function useDependencyCheck(dependencies) {
  const [state, setState] = useState6({
    available: [],
    missing: [],
    allAvailable: false
  });
  useEffect2(() => {
    const result = checkDependencies(dependencies);
    setState({
      ...result,
      allAvailable: result.missing.length === 0
    });
  }, [dependencies]);
  return state;
}
export {
  ArrayEditor,
  BooleanEditor,
  CSP_POLICY,
  DEFAULT_CDN_CONFIGS,
  EXECUTION_TIMEOUT,
  EnumEditor,
  ErrorBoundary,
  NumberEditor,
  ObjectEditor,
  PreviewRenderer,
  PreviewSandbox,
  PropsEditor,
  SANDBOX_ATTRIBUTES,
  StringEditor,
  bundleComponents,
  checkDependencies,
  createExecutionTimeout,
  extractComponentName,
  extractEnumValues,
  extractImports,
  generateCDNScriptTags,
  generateComponentCode,
  generateDefaultProps,
  generateExecutableCode,
  generateFallbackCode,
  generateMockPropValue,
  generatePropsObject,
  generateRuntimeCode,
  generateSandboxHTML,
  getDefaultForType,
  getRequiredCDNScripts,
  isSandboxMessage,
  parseDefaultValue,
  parsePreviewError,
  parseTypeString,
  processComponentSource,
  propValueToCode,
  propertyToPropEditorConfig,
  replaceImportsWithGlobals,
  resolveRelativeImports,
  resolveToCDN,
  sanitizeErrorMessage,
  stripTypeScript,
  useComponentLoader,
  useDependencyCheck,
  usePreviewState,
  useSimpleComponentLoader,
  validateComponentSource,
  validateMessageOrigin,
  validatePropValue
};
//# sourceMappingURL=index.mjs.map