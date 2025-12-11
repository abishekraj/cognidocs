# ScaleQuantize

Quantize scales are similar to linear scales, except they use a discrete rather than continuous range. The continuous input domain is divided into uniform segments based on the number of values in (i.e., the cardinality of) the output range. Each range value y can be expressed as a quantized linear function of the domain value x: y = m round(x) + b. The first generic corresponds to the data type of the range elements. The second generic corresponds to the data type of the unknown value.
