# EnvFunction

Since `NODE_ENV` is a fairly common way to toggle behavior, Babel also includes an API function meant specifically for that. This API is used as a quick way to check the `"envName"` that Babel was loaded with, which takes `NODE_ENV` into account if no other overriding environment is set.
